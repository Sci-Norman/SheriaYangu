require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log('API Key set:', !!apiKey);

  if (!apiKey) {
    console.error('❌ GOOGLE_API_KEY not set');
    return;
  }

  try {
    const client = new GoogleGenerativeAI(apiKey);
    console.log('\n📋 Attempting to list available models...\n');

    // Try alternative approaches
    try {
      const models = await client.listModels();
      console.log('Available models:');
      models.forEach(m => console.log('  -', m.name));
    } catch (e) {
      console.log('listModels() not available, trying direct API call...');
      // Try using gemini-pro which is more standard
      const model = client.getGenerativeModel({ model: 'gemini-pro' });
      console.log('✅ gemini-pro model is available');

      const result = await model.generateContent('Hello');
      console.log('✅ API call successful with gemini-pro');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

listModels().then(() => process.exit(0));
