require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function debug() {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log('API Key:', apiKey.substring(0, 20) + '...');
  
  try {
    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent('test');
  } catch (e) {
    console.log('Full error:');
    console.log(e.message);
    console.log('\nError details:');
    console.log(JSON.stringify(e, null, 2).substring(0, 500));
  }
}

debug().then(() => process.exit(0));
