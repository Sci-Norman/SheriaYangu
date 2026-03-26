const { GoogleGenerativeAI } = require('@google/generative-ai');
const { searchConstitution } = require('../db/articles');

const apiKey = process.env.GOOGLE_API_KEY;
let client = null;

if (apiKey) {
  client = new GoogleGenerativeAI(apiKey);
}

async function answerConstitutionalQuery(question) {
  if (!client) {
    return {
      error: 'AI service not available. Try searching directly.',
      fallback: true
    };
  }

  try {
    // Search for relevant articles first
    const relatedArticles = await searchConstitution(question);

    // Build context from articles
    const context = relatedArticles
      .slice(0, 3)
      .map((a) => `Article ${a.article_number} (${a.article_title}): ${a.simplified_content}`)
      .join('\n\n');

    const systemPrompt = `You are a Kenyan constitutional law assistant. Answer questions about the Kenya Constitution 2010 concisely and accurately. 
Reference specific articles. Keep responses under 160 characters for SMS. 
Use simple Swahili/English mix. If unsure, say "Check with lawyer."

Context from Constitution:
${context}`;

    const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: question }] }],
      systemInstruction: systemPrompt
    });

    const response = result.response.text();

    // Extract article references
    const articleRefs = relatedArticles
      .slice(0, 2)
      .map((a) => `Art.${a.article_number}`)
      .join(', ');

    return {
      answer: response.substring(0, 150),
      articleRefs: articleRefs || 'See Constitution',
      error: null
    };
  } catch (error) {
    console.error('[AI Query Error]', error.message);
    return {
      error: 'Unable to process query. Try searching directly.',
      fallback: true
    };
  }
}

module.exports = { answerConstitutionalQuery };
