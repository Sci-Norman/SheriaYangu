const { supabase } = require('./supabase');

async function ensureUser(phoneNumber) {
  if (!supabase) return { phone_number: phoneNumber };
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('users')
    .upsert({ phone_number: phoneNumber, last_active: now }, { onConflict: 'phone_number' })
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

async function updateUserCounters(phoneNumber, counters = {}) {
  if (!supabase) return {};

  try {
    const user = await Promise.race([
      ensureUser(phoneNumber),
      new Promise((_, reject) => setTimeout(() => reject(new Error('ensureUser timeout')), 3000))
    ]);

    const payload = {
      last_active: new Date().toISOString(),
      total_searches: (user.total_searches || 0) + (counters.searches || 0),
      total_articles_read: (user.total_articles_read || 0) + (counters.articlesRead || 0),
      quizzes_completed: (user.quizzes_completed || 0) + (counters.quizzesCompleted || 0),
      quiz_score: Math.max(user.quiz_score || 0, counters.bestScore || 0),
      airtime_rewarded: (user.airtime_rewarded || 0) + (counters.airtime || 0)
    };

    const { data, error } = await Promise.race([
      supabase
        .from('users')
        .update(payload)
        .eq('phone_number', phoneNumber)
        .select('*')
        .single(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('update timeout')), 3000))
    ]);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('[DB] updateUserCounters error:', error.message);
    return {};
  }
}

async function getUser(phoneNumber) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('phone_number', phoneNumber)
    .maybeSingle();

  if (error) throw error;
  return data;
}

async function setLanguagePreference(phoneNumber, language) {
  if (!supabase) return {};
  const { data, error } = await supabase
    .from('users')
    .update({ language_preference: language, last_active: new Date().toISOString() })
    .eq('phone_number', phoneNumber)
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

async function getPublicStats() {
  if (!supabase) return { totalUsers: 0, totalSearches: 0, topSearchTerms: [], quizCompletionRate: 0 };
  const [{ count: totalUsers, error: e1 }, { count: totalSearches, error: e2 }, logsRes, usersRes] =
    await Promise.all([
      supabase.from('users').select('*', { count: 'exact', head: true }),
      supabase.from('search_logs').select('*', { count: 'exact', head: true }),
      supabase.from('search_logs').select('search_term'),
      supabase.from('users').select('quizzes_completed')
    ]);

  if (e1 || e2 || logsRes.error || usersRes.error) throw e1 || e2 || logsRes.error || usersRes.error;

  const termCounts = (logsRes.data || []).reduce((acc, row) => {
    const k = String(row.search_term || '').toLowerCase();
    if (!k) return acc;
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});

  const topSearchTerms = Object.entries(termCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([term, count]) => ({ term, count }));

  const users = usersRes.data || [];
  const completedUsers = users.filter((u) => (u.quizzes_completed || 0) > 0).length;
  const quizCompletionRate = users.length ? Number(((completedUsers / users.length) * 100).toFixed(2)) : 0;

  return {
    totalUsers: totalUsers || 0,
    totalSearches: totalSearches || 0,
    topSearchTerms,
    quizCompletionRate
  };
}

module.exports = { ensureUser, updateUserCounters, getUser, getPublicStats, setLanguagePreference };
