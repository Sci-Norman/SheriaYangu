// Mock AI response for testing without using quota
const mockResponse = {
  answer: 'Yes, you can vote if you are a Kenyan citizen, 18+ years old, and registered. Article 38 protects voting rights.',
  articleRefs: 'Art.38, Art.33',
  error: null
};

const { ussdHandler } = require('./src/ussd/handler');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/test-ussd', ussdHandler);

// Monkey-patch the AI module to use mock
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(id) {
  if (id === './src/ai/gemini' || id.endsWith('/ai/gemini')) {
    return { answerConstitutionalQuery: async (q) => mockResponse };
  }
  return originalRequire.apply(this, arguments);
};

const server = app.listen(3001, () => {
  console.log('Mock USSD server running on port 3001');
});

// Test after 1 second
setTimeout(() => {
  const http = require('http');
  const postData = JSON.stringify({
    phoneNumber: '+254700000001',
    sessionId: 'mock001',
    serviceCode: '000',
    text: '5*Can I vote?'
  });

  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/test-ussd',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('✅ RESPONSE RECEIVED:');
      console.log(data);
      server.close();
      process.exit(0);
    });
  });

  req.on('error', (e) => {
    console.error('❌ ERROR:', e.message);
    server.close();
    process.exit(1);
  });

  req.write(postData);
  req.end();
}, 1000);
