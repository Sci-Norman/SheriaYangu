const { answerConstitutionalQuery } = require('./src/ai/gemini');

async function test() {
  console.log('Starting AI test...');
  console.time('AI Query');

  try {
    const response = await answerConstitutionalQuery('Can I vote?');
    console.timeEnd('AI Query');
    console.log('Response:', response);
  } catch (error) {
    console.timeEnd('AI Query');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

test();
