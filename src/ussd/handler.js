const { MAIN_MENU, SEARCH_PROMPT, CHAPTER_MENU, RIGHTS_MENU } = require('./menus');
const { getSession, clearSession } = require('./sessions');
const { searchConstitution, getArticleByNumber, getArticlesByChapter } = require('../db/articles');
const { getRandomQuestions, getQuestionById } = require('../db/quiz');
const { ensureUser, updateUserCounters, getUser, setLanguagePreference } = require('../db/users');
const { sendArticleSms } = require('../sms/sender');
const { truncateForUssd, logWithTs } = require('../utils/helpers');
const { supabase } = require('../db/supabase');
const { answerConstitutionalQuery } = require('../ai/gemini');

const RIGHTS_MAP = {
  1: 43,
  2: 43,
  3: 43,
  4: 43,
  5: 38,
  6: 33,
  7: 37,
  8: 27,
  9: 53,
  10: 31
};

const CHAPTER_TITLE = {
  1: 'Sovereignty',
  2: 'The Republic',
  3: 'Citizenship',
  4: 'Bill of Rights',
  5: 'Land & Environment',
  6: 'Leadership & Integrity',
  7: 'Parliament',
  8: 'Executive',
  9: 'Devolution'
};

function menu() {
  return MAIN_MENU;
}

function articleDetailMenu(article) {
  const snippet = truncateForUssd(article.simplified_content || article.content, 105);
  return `CON ⚖️ Article ${article.article_number} - ${article.article_title}\n\n${snippet}\n\n1. 📱 Send full SMS\n2. 📞 Voice (soon)\n3. 🔍 Search again\n0. Main Menu`;
}

function endAndClear(sessionId, message) {
  clearSession(sessionId);
  return `END ${message}`;
}

async function logSearch(phoneNumber, term, resultsCount) {
  if (!supabase) return;
  try {
    await Promise.race([
      supabase.from('search_logs').insert({ phone_number: phoneNumber, search_term: term, results_count: resultsCount }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('logSearch timeout')), 5000))
    ]);
  } catch (error) {
    logWithTs('[WARN] logSearch failed:', error.message);
  }
}

function renderSearchResults(keyword, results) {
  if (!results.length) {
    return 'CON No articles found.\nTry another keyword.\n\n1. Search again\n0. Main Menu';
  }

  const lines = results.slice(0, 5).map((r, idx) => `${idx + 1}. Art.${r.article_number} - ${r.article_title} (${r.one_word_tag})`);
  return `CON 🔍 Results "${keyword}":\n\n${lines.join('\n')}\n\nEnter number, 0 Main`;
}

function renderChapterPage(chapter, articles, page = 0, pageSize = 7) {
  const start = page * pageSize;
  const pageItems = articles.slice(start, start + pageSize);
  if (!pageItems.length) return 'CON No more articles.\n0. Main Menu';

  const lines = pageItems.map((a, idx) => `${idx + 1}. Art.${a.article_number} - ${a.article_title}`);
  const hasNext = start + pageSize < articles.length;
  return `CON 📖 Chapter ${chapter} - ${CHAPTER_TITLE[chapter]}\n\n${lines.join('\n')}\n\n${hasNext ? 'Next: * | ' : ''}Enter number | 0 Menu`;
}

async function handleQuiz(sessionId, session, phoneNumber, parts) {
  if (!session.quizQuestions.length) {
    const q = await getRandomQuestions(5, []);
    session.quizQuestions = q.map((x) => x.id);
    session.quizCurrentIndex = 0;
    session.quizScore = 0;
    session.quizAwaitingNext = false;
  }

  const currentQuestionId = session.quizQuestions[session.quizCurrentIndex];
  const question = await getQuestionById(currentQuestionId);

  const last = (parts[parts.length - 1] || '').toUpperCase();

  if (parts.length === 1 || (session.quizAwaitingNext && last === '1')) {
    if (session.quizAwaitingNext && last === '1') {
      session.quizCurrentIndex += 1;
      session.quizAwaitingNext = false;
    }

    if (session.quizCurrentIndex >= 5) {
      await updateUserCounters(phoneNumber, {
        quizzesCompleted: 1,
        bestScore: session.quizScore
      });

      const passed = session.quizScore >= 4;
      return endAndClear(
        sessionId,
        passed
          ? `🏆 QUIZ COMPLETE!\nScore: ${session.quizScore}/5\nGreat job. Airtime payout is disabled in this USSD+SMS build.`
          : `🧠 QUIZ COMPLETE!\nScore: ${session.quizScore}/5\nKeep learning and try again.`
      );
    }

    const qid = session.quizQuestions[session.quizCurrentIndex];
    const qn = await getQuestionById(qid);
    return `CON 🧠 CIVIC QUIZ\nQ${session.quizCurrentIndex + 1}/5: ${qn.question}\nA) ${qn.option_a}\nB) ${qn.option_b}\nC) ${qn.option_c}\n\nEnter A, B, or C:`;
  }

  if (session.quizAwaitingNext && last === '0') return menu();

  if (!['A', 'B', 'C'].includes(last)) {
    return 'CON Invalid answer.\nEnter A, B, or C.';
  }

  const correct = String(question.correct_option || '').toUpperCase() === last;
  if (correct) session.quizScore += 1;
  session.quizAwaitingNext = true;

  return `CON ${correct ? '✅ CORRECT!' : `❌ Wrong. Correct is ${question.correct_option}.`}\n${truncateForUssd(question.explanation, 90)}\n\nScore: ${session.quizScore}/${session.quizCurrentIndex + 1}\n\n1. Next Question\n0. Main Menu`;
}

async function ussdHandler(req, res) {
  const { sessionId, serviceCode, phoneNumber, text = '' } = req.body;
  res.set('Content-Type', 'text/plain');

  logWithTs('USSD request', { sessionId, serviceCode, phoneNumber, text });

  try {
    await ensureUser(phoneNumber);
    const session = getSession(sessionId, phoneNumber);
    const parts = text === '' ? [] : text.split('*');

    if (!parts.length) return res.send(menu());

    if (parts[0] === '0') return res.send(menu());

    if (parts[0] === '1') {
      if (parts.length === 1) return res.send(SEARCH_PROMPT);

      if (parts.length === 2) {
        if (parts[1] === '0') return res.send(menu());
        const keyword = parts[1].trim();
        const results = await searchConstitution(keyword);
        session.searchKeyword = keyword;
        session.searchResults = results;
        await updateUserCounters(phoneNumber, { searches: 1 });
        await logSearch(phoneNumber, keyword, results.length);
        return res.send(renderSearchResults(keyword, results));
      }

      const selection = Number(parts[2]);
      if (!selection || selection < 0 || selection > 7) return res.send('CON Invalid choice.\nTry again.');
      if (selection === 0) return res.send(menu());

      const selected = (session.searchResults || [])[selection - 1];
      if (!selected) return res.send('CON Invalid selection.\nSearch again.');

      if (parts.length === 3) {
        await updateUserCounters(phoneNumber, { articlesRead: 1 });
        return res.send(articleDetailMenu(selected));
      }

      const action = parts[3];
      if (action === '1') {
        logWithTs('[DEBUG] Sending SMS for search result:', { title: selected?.article_title });
        try {
          await sendArticleSms(phoneNumber, selected);
          logWithTs('[DEBUG] SMS sent successfully from search');
        } catch (smsError) {
          logWithTs('[ERROR] SMS sending failed from search:', smsError.message);
          return res.send(endAndClear(sessionId, '❌ Failed to send SMS. Please try again.'));
        }
        return res.send(endAndClear(sessionId, '✅ Full article sent via SMS. Check your messages. 🇰🇪'));
      }
      if (action === '2') {
        return res.send(endAndClear(sessionId, '📞 Voice call is disabled in this USSD+SMS deployment.'));
      }
      if (action === '3') return res.send(SEARCH_PROMPT);
      if (action === '0') return res.send(menu());
      return res.send('CON Invalid choice.\nTry again.');
    }

    if (parts[0] === '2') {
      if (parts.length === 1) return res.send(CHAPTER_MENU);
      if (parts[1] === '0') return res.send(menu());

      const chapter = Number(parts[1]);
      if (!chapter || chapter < 1 || chapter > 9) return res.send('CON Invalid chapter.\nTry again.');

      const articles = await getArticlesByChapter(chapter);
      session.browseChapter = chapter;

      const tail = parts.slice(2);
      const emptyCount = tail.filter((x) => x === '').length;
      const numericTail = tail.filter((x) => x !== '');
      const currentPage = emptyCount;
      session.browsePage = currentPage;

      if (!numericTail.length) {
        return res.send(renderChapterPage(chapter, articles, currentPage));
      }

      const selection = Number(numericTail[numericTail.length - 1]);
      if (selection === 0) return res.send(menu());
      if (!selection || selection < 1 || selection > 7) return res.send('CON Invalid choice.');

      const index = currentPage * 7 + (selection - 1);
      const article = articles[index];
      if (!article) return res.send('CON Article not found on this page.');

      await updateUserCounters(phoneNumber, { articlesRead: 1 });
      return res.send(articleDetailMenu(article));
    }

    if (parts[0] === '3') {
      if (parts.length === 1) return res.send(RIGHTS_MENU);
      const choice = Number(parts[1]);
      if (choice === 0) return res.send(menu());
      const articleNo = RIGHTS_MAP[choice];
      if (!articleNo) return res.send('CON Invalid choice.\nTry again.');

      try {
        const article = await getArticleByNumber(articleNo);
        if (!article) return res.send('CON Article not found.\n0. Main Menu');

        await updateUserCounters(phoneNumber, { articlesRead: 1 });

        if (parts.length === 2) return res.send(articleDetailMenu(article));

        const action = parts[2];
        if (action === '1') {
          logWithTs('[DEBUG] Sending SMS for article:', { articleNo, articleTitle: article.article_title });
          try {
            await sendArticleSms(phoneNumber, article);
            logWithTs('[DEBUG] SMS sent successfully');
          } catch (smsError) {
            logWithTs('[ERROR] SMS sending failed:', smsError.message);
            return res.send(endAndClear(sessionId, '❌ Failed to send SMS. Please try again.'));
          }
          return res.send(endAndClear(sessionId, '✅ Full article sent via SMS.'));
        }
        if (action === '2') {
          return res.send(endAndClear(sessionId, '📞 Voice call is disabled in this USSD+SMS deployment.'));
        }
        if (action === '0') return res.send(menu());
        if (action === '3') return res.send(SEARCH_PROMPT);
        return res.send('CON Invalid choice.');
      } catch (error) {
        logWithTs('[ERROR] Rights menu error:', error.message);
        return res.send(endAndClear(sessionId, '❌ Error processing request. Please try again.'));
      }
    }

    if (parts[0] === '4') {
      const response = await handleQuiz(sessionId, session, phoneNumber, parts);
      return res.send(response.startsWith('END ') ? response : response);
    }

    if (parts[0] === '5') {
      if (parts.length === 1) {
        return res.send('CON 🤖 Ask AI a Constitutional Question\n\nEnter your question:\n\n(e.g., "Can my landlord evict me?")\n\n0. Main Menu');
      }

      const question = parts.slice(1).join(' ').trim();
      if (!question || question === '0') return res.send(menu());
      if (question.length < 3) {
        return res.send('CON Question too short.\nEnter at least 3 characters.\n0. Main Menu');
      }

      const aiResponse = await answerConstitutionalQuery(question);
      logWithTs('[DEBUG] AI Response received:', { error: aiResponse.error, fallback: aiResponse.fallback });

      if (aiResponse.fallback || aiResponse.error) {
        logWithTs('[DEBUG] AI had error, updating counters');
        await updateUserCounters(phoneNumber, { searches: 1 });
        await logSearch(phoneNumber, question, 0);
        return res.send(
          endAndClear(
            sessionId,
            `⚙️ ${aiResponse.error || 'AI unavailable. Try searching directly for keywords.'}`
          )
        );
      }

      logWithTs('[DEBUG] AI success, skipping counters for now');

      const answer = aiResponse.answer || 'No response';
      const refs = aiResponse.articleRefs || 'See Constitution';
      const responseText = `AI RESPONSE\n\n${answer}\n\nRelevant: ${refs}`;
      logWithTs('[DEBUG] Response text built');

      const endMsg = endAndClear(sessionId, responseText);
      logWithTs('[DEBUG] endAndClear returned');
      res.set('Content-Type', 'text/plain; charset=utf-8');
      res.write(endMsg);
      res.end();
      logWithTs('[DEBUG] Response sent');

      // Fire-and-forget: Update counters after response
      setImmediate(() => {
        updateUserCounters(phoneNumber, { searches: 1 }).catch(e => logWithTs('[WARN] updateUserCounters error:', e.message));
        logSearch(phoneNumber, question, 1).catch(e => logWithTs('[WARN] logSearch error:', e.message));
      });
      return;
    }

    return res.send('CON Invalid choice.\nTry again.\n0. Main Menu');
  } catch (error) {
    logWithTs('USSD error', { message: error.message, stack: error.stack });
    clearSession(sessionId);
    // Only send response if headers haven't been sent yet
    if (!res.headersSent) {
      return res.send('END Service temporarily unavailable. Please try again shortly.');
    }
  }
}

module.exports = { ussdHandler };
