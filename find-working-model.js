require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testModels() {
  const apiKey = process.env.GOOGLE_API_KEY;
  
  const modelsToTry = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
    'gemini-pro-vision',
    'gemini-1.5-flash-latest',
    'gemini-1.5-pro-latest'
  ];

  for (const modelName of modelsToTry) {
    try {
      const client = new GoogleGenerativeAI(apiKey);
      const model = client.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('What is Kenya?');
      console.log(`✅ ${modelName} works!`);
      return modelName;
    } catch (e) {
      console.log(`❌ ${modelName}: ${e.message.substring(0, 80)}`);
    }
  }

  console.log('\n❌ None of the models are working. API key may be invalid.');
}

testModels().then(() => process.exit(0));
