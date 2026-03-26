require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  const apiKey = process.env.GOOGLE_API_KEY;
  try {
    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: 'gemini-pro' });
    console.log('🔄 Sending test query...');
    const result = await model.generateContent('What is Kenya?');
    console.log('✅ SUCCESS!');
    console.log('Response:', result.response.text().substring(0, 100));
  } catch (e) {
    console.error('❌ Error:', e.message.substring(0, 100));
  }
  process.exit(0);
}
test();
