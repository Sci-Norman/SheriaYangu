const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GOOGLE_API_KEY;
console.log('API Key starts with:', apiKey?.substring(0, 10));

const client = new GoogleGenerativeAI(apiKey);
const model = client.getGenerativeModel({ model: 'gemini-2.5-flash' });

async function test() {
  try {
    console.log('Sending test query...');
    const start = Date.now();
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: 'What is 2+2?' }] }]
    });
    const duration = Date.now() - start;
    console.log('Response received in', duration, 'ms');
    console.log('Response:', result.response.text());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
