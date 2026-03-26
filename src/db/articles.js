const { supabase } = require('./supabase');
const { normalizeKeyword } = require('../utils/swahili-map');
const { logWithTs } = require('../utils/helpers');

function withTimeout(promise, ms = 8000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Database query timeout')), ms))
  ]);
}

async function searchConstitution(keyword) {
  if (!supabase) return [];
  const normalized = normalizeKeyword(keyword);

  const exact = await withTimeout(
    supabase
      .from('constitution_articles')
      .select('*')
      .contains('keywords', [normalized])
      .order('article_number', { ascending: true })
      .limit(7)
  );

  if (exact.error) throw exact.error;

  if ((exact.data || []).length >= 7) return exact.data;

  const fuzzy = await supabase
    .from('constitution_articles')
    .select('*')
    .or(
      `article_title.ilike.%${normalized}%,` +
      `content.ilike.%${normalized}%,` +
      `simplified_content.ilike.%${normalized}%,` +
      `category.ilike.%${normalized}%,` +
      `one_word_tag.ilike.%${normalized}%`
    )
    .order('article_number', { ascending: true })
    .limit(14);

  if (fuzzy.error) throw fuzzy.error;

  const dedup = new Map();
  [...(exact.data || []), ...(fuzzy.data || [])].forEach((a) => dedup.set(a.article_number, a));

  return Array.from(dedup.values())
    .sort((a, b) => a.article_number - b.article_number)
    .slice(0, 7);
}

async function getArticleByNumber(articleNumber) {
  if (!supabase) return null;
  logWithTs(`[DB] Fetching article #${articleNumber}`);
  try {
    const { data, error } = await withTimeout(
      supabase
        .from('constitution_articles')
        .select('*')
        .eq('article_number', Number(articleNumber))
        .single()
    );

    if (error) throw error;
    logWithTs(`[DB] ✅ Article #${articleNumber} fetched successfully`);
    return data;
  } catch (err) {
    logWithTs(`[DB] ❌ Error fetching article #${articleNumber}:`, err.message);
    throw err;
  }
}

async function getArticlesByChapter(chapterNumber) {
  if (!supabase) return [];
  logWithTs(`[DB] Fetching articles from chapter ${chapterNumber}`);
  try {
    const { data, error } = await withTimeout(
      supabase
        .from('constitution_articles')
        .select('*')
        .eq('chapter_number', Number(chapterNumber))
        .order('article_number', { ascending: true })
    );

    if (error) throw error;
    logWithTs(`[DB] ✅ Chapter ${chapterNumber}: ${(data || []).length} articles fetched`);
    return data || [];
  } catch (err) {
    logWithTs(`[DB] ❌ Error fetching chapter ${chapterNumber}:`, err.message);
    throw err;
  }
}

module.exports = { searchConstitution, getArticleByNumber, getArticlesByChapter };
