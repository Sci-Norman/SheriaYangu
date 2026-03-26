require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

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

    console.log('\n3. Sending test query to Gemini...');
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: 'What is the Kenya Constitution 2010?' }] }],
      systemInstruction: `You are a Kenyan constitutional law assistant. Answer questions concisely and accurately in under 100 characters.`
    });

    console.log('✅ Received response from Gemini');
    const response = result.response.text();
    console.log('\n📝 AI Response:');
    console.log(response);
    console.log(`\n(${response.length} characters)`);
    console.log('\n✅ Gemini API is working correctly!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'INVALID_ARGUMENT') {
      console.error('\nPossible causes:');
      console.error('1. API Key is invalid or has expired');
      console.error('2. Gemini API not enabled in your Google Cloud project');
      console.error('3. Rate limit exceeded');
    }
  }
}

testGemini().then(() => process.exit(0)).catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
