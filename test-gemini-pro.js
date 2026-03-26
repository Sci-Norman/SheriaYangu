require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log('API Key exists:', !!apiKey);
  
  if (!apiKey) {
    console.error('❌ GOOGLE_API_KEY not set');
    process.exit(1);
  }

  try {
    console.log('\n🔄 Testing gemini-pro model...\n');
    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: 'gemini-pro' });
    
    console.log('Sending query...');
    const result = await model.generateContent('What is the Kenya Constitution 2010 in one sentence?');
    const response = result.response.text();
    
    console.log('\n✅ SUCCESS! Gemini API is working!\n');
    console.log('Response:', response);
    console.log('\nModel gemini-pro is working correctly.');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\n⚠️  Your GOOGLE_API_KEY may be invalid or expired.');
    console.error('Please get a fresh API key from: https://ai.google.dev/aistudio');
  }
}

test().then(() => process.exit(0));
