const { supabase } = require('./supabase');

async function getRandomQuestions(limit = 5, excludeIds = []) {
  if (!supabase) return [];
  let q = supabase.from('quiz_questions').select('*');
  if (excludeIds.length) q = q.not('id', 'in', `(${excludeIds.join(',')})`);
  const { data, error } = await q;
  if (error) throw error;

  const arr = data || [];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, limit);
}

async function getQuestionById(id) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('quiz_questions')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

module.exports = { getRandomQuestions, getQuestionById };
