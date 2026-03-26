require('dotenv').config();

const { supabase } = require('../src/db/supabase');
const { seedArticles } = require('../src/data/seed-articles');
const { seedQuiz } = require('../src/data/seed-quiz');

async function run() {
  console.log(`[${new Date().toISOString()}] Seeding started...`);

  const delLogs = await supabase.from('search_logs').delete().gte('id', 0);
  if (delLogs.error) throw delLogs.error;

  const delQuiz = await supabase.from('quiz_questions').delete().gte('id', 0);
  if (delQuiz.error) throw delQuiz.error;

  const delUsers = await supabase.from('users').delete().gte('id', 0);
  if (delUsers.error) throw delUsers.error;

  const delArticles = await supabase.from('constitution_articles').delete().gte('id', 0);
  if (delArticles.error) throw delArticles.error;

  const chunkSize = 50;
  for (let i = 0; i < seedArticles.length; i += chunkSize) {
    const chunk = seedArticles.slice(i, i + chunkSize);
    const { error } = await supabase.from('constitution_articles').insert(chunk);
    if (error) throw error;
  }

  const { error: quizError } = await supabase.from('quiz_questions').insert(seedQuiz);
  if (quizError) throw quizError;

  console.log(`[${new Date().toISOString()}] Seeded articles: ${seedArticles.length}`);
  console.log(`[${new Date().toISOString()}] Seeded quiz questions: ${seedQuiz.length}`);
  console.log(`[${new Date().toISOString()}] Seeding completed.`);
}

run().catch((err) => {
  console.error(`[${new Date().toISOString()}] Seeding failed:`, err.message);
  process.exit(1);
});
