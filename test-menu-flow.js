const http = require('http');

function makeRequest(sessionId, text) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      phoneNumber: '0791935128',
      text,
      sessionId
    }).toString();

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/ussd',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(`✅ Response for: "${text || '(main menu)'}"`);
        console.log(data + '\n');
        resolve(data);
      });
    });

    req.on('error', (err) => {
      console.error(`❌ Request error for "${text}":`, err.message);
      reject(err);
    });
    req.write(postData);
    req.end();
  });
}

async function testMenuFlow() {
  const sessionId = 'test-' + Date.now();
  console.log('=== TESTING MENU FLOW FOR SMS SENDING ===\n');

  try {
    // Test 1: Main menu
    console.log('1️⃣ Starting at main menu...');
    await makeRequest(sessionId, '');
    await new Promise(r => setTimeout(r, 1000));

    // Test 2: Select Know Your Rights (option 3)
    console.log('2️⃣ Selecting Know Your Rights (3)...');
    await makeRequest(sessionId, '3');
    await new Promise(r => setTimeout(r, 1000));

    // Test 3: Select a right (option 5 - Right to vote)
    console.log('3️⃣ Selecting option 5 (Right to vote)...');
    await makeRequest(sessionId, '3*5');
    await new Promise(r => setTimeout(r, 1000));

    // Test 4: Select Send SMS (option 1)
    console.log('4️⃣ Selecting Send SMS (1)...');
    await makeRequest(sessionId, '3*5*1');
    await new Promise(r => setTimeout(r, 2000));

    console.log('\n=== TEST COMPLETE ===');
    console.log('Check the server logs above for [SMS] and [DB] debug messages');
    process.exit(0);
  } catch (error) {
    console.error('❌ Test error:', error.message);
    process.exit(1);
  }
}

testMenuFlow();
