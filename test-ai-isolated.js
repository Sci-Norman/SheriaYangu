const { answerConstitutionalQuery } = require('./src/ai/gemini');

async function test() {
  console.log('Testing AI directly...');
  console.time('Total');

  try {
    const response = await answerConstitutionalQuery('Can I vote in Kenya?');
    console.timeEnd('Total');
    console.log('SUCCESS');
    console.log('Answer:', response.answer);
    console.log('Refs:', response.articleRefs);
    console.log('Error:', response.error);
  } catch (error) {
    console.timeEnd('Total');
    console.error('ERROR:', error.message);
  }
}

test().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});
