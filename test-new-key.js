require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testKey() {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log('Testing API Key...');
  console.log('Key exists:', !!apiKey);
  console.log('Key starts with AIza:', apiKey?.startsWith('AIza'));
  
  if (!apiKey) {
    console.error('❌ GOOGLE_API_KEY not found');
    process.exit(1);
  }

  try {
    console.log('\n🔄 Initializing Gemini client...');
    const client = new GoogleGenerativeAI(apiKey);
    
    console.log('🔄 Getting model...');
    const model = client.getGenerativeModel({ model: 'gemini-pro' });
    
    console.log('🔄 Sending test query to Gemini...');
    const result = await model.generateContent('What is Kenya Constitution 2010 in one sentence?');
    const response = result.response.text();
    
    console.log('\n✅ SUCCESS! Your API key works!\n');
    console.log('Response:', response);
    console.log('\n✅ Gemini API is now active and ready to use!');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

testKey();
