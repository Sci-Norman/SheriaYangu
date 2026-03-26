const { searchConstitution } = require('./src/db/articles');

async function test() {
  console.log('Testing search...');
  console.time('Search');

  try {
    const results = await searchConstitution('Can I vote?');
    console.timeEnd('Search');
    console.log(`Found ${results.length} results`);
    console.log('First result:', results[0]);
  } catch (error) {
    console.timeEnd('Search');
    console.error('Error:', error.message);
  }
}

test();
