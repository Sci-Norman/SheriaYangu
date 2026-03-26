require('dotenv').config();
const { answerConstitutionalQuery } = require('./src/ai/gemini');

async function test() {
  try {
    console.log('Testing full AI query...');
    const start = Date.now();
    const result = await answerConstitutionalQuery('What are my voting rights?');
    const duration = Date.now() - start;
    console.log('✅ Response received in', duration, 'ms');
    console.log('Answer:', result.answer);
    console.log('Article Refs:', result.articleRefs);
    console.log('Error:', result.error);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();
