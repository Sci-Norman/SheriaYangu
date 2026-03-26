require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');
const { searchConstitution } = require('./src/db/articles');

async function testGemini() {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log('API Key set:', !!apiKey);
  console.log('API Key value:', apiKey ? apiKey.substring(0, 10) + '...' : 'NOT SET');

  if (!apiKey) {
    console.error('❌ GOOGLE_API_KEY not set in environment');
    return;
  }

  try {
    console.log('\n1. Initializing Gemini client...');
    const client = new GoogleGenerativeAI(apiKey);
    console.log('✅ Client initialized successfully');

    console.log('\n2. Getting model...');
    const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });
    console.log('✅ Model retrieved');

    console.log('\n3. Searching for articles...');
    const relatedArticles = await searchConstitution('landlord evict');
    console.log(`✅ Found ${relatedArticles.length} articles`);
    if (relatedArticles.length > 0) {
      console.log('   Sample:', relatedArticles[0].article_title);
    }

    console.log('\n4. Building context...');
    const context = relatedArticles
      .slice(0, 3)
      .map((a) => `Article ${a.article_number} (${a.article_title}): ${a.simplified_content}`)
      .join('\n\n');
    console.log(`✅ Context built (${context.length} chars)`);

    console.log('\n5. Sending query to Gemini...');
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: 'Can my landlord evict me without court?' }] }],
      systemInstruction: `You are a Kenyan constitutional law assistant. Answer questions about the Kenya Constitution 2010 concisely and accurately. Reference specific articles. Keep responses under 160 characters for SMS.

Context from Constitution:
${context}`
    });

    console.log('✅ Received response from Gemini');
    const response = result.response.text();
    console.log('\n📝 AI Response:');
    console.log(response);
    console.log(`\n(${response.length} characters)`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

testGemini();
