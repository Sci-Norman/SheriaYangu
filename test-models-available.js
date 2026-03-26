require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function findWorkingModel() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const models = [
    'gemini-1.0-pro',
    'gemini-1.5-pro',
    'gemini-1.5-flash',
    'gemini-pro',
    'gemini-pro-vision',
  ];

  console.log('Testing available models...\n');
  
  for (const modelName of models) {
    try {
      const client = new GoogleGenerativeAI(apiKey);
      const model = client.getGenerativeModel({ model: modelName });
      console.log(`🔄 Testing ${modelName}...`);
      const result = await model.generateContent('Hi');
      console.log(`✅ ${modelName} WORKS!\n`);
      return modelName;
    } catch (e) {
      const msg = e.message.substring(0, 60);
      console.log(`❌ ${modelName}: ${msg}`);
    }
  }

  console.log('\n⚠️  No models are working. Your API key may still have issues.');
}

findWorkingModel().then(() => process.exit(0));
