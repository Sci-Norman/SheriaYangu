const { GoogleGenerativeAI } = require('@google/generative-ai');
const apiKey = process.env.GOOGLE_API_KEY;

async function test() {
  console.log('Testing Gemini API...');
  console.time('Gemini');

  try {
    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: 'Can I vote in Kenya?' }] }],
      systemInstruction: 'You are a constitutional law assistant. Answer briefly.'
    });

    console.timeEnd('Gemini');
    console.log('Response:', result.response.text());
  } catch (error) {
    console.timeEnd('Gemini');
    console.error('Error:', error.message);
  }
}

test();
