// Direct SMS test
require('dotenv').config();
const africastalking = require('africastalking');

async function testSMS() {
  const apiKey = process.env.AT_API_KEY;
  const username = process.env.AT_USERNAME || 'sandbox';

  console.log('Testing SMS sending...');
  console.log('API Key (first 20 chars):', apiKey ? apiKey.substring(0, 20) : 'NOT SET');
  console.log('Username:', username);
  console.log('Sender ID:', process.env.AT_SENDER_ID);
  console.log('Recipient Override:', process.env.AT_SMS_RECIPIENT_OVERRIDE);

  const at = africastalking({ apiKey, username });
  const sms = at.SMS;

  const phoneNumber = process.env.AT_SMS_RECIPIENT_OVERRIDE || '+254791935128';
  const senderID = process.env.AT_SENDER_ID || 'SHERIA';
  const message = 'TEST SMS - This is a test message from Sheria Yangu. If you see this in your simulator, SMS is working! ✅';

  try {
    console.log('\n📱 Sending test SMS...');
    console.log('To:', phoneNumber);
    console.log('From:', senderID);
    console.log('Message:', message);

    // In sandbox mode, don't include 'from' to avoid InvalidSenderId error
    const sendRequest = {
      to: [phoneNumber],
      message
    };

    if (username !== 'sandbox') {
      sendRequest.from = senderID;
    }

    const response = await sms.send(sendRequest);

    console.log('\n✅ SMS Sent Successfully!');
    console.log('Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('\n❌ SMS Error:');
    console.error('Error:', error.message);
    console.error('Details:', error);
  }
}

testSMS().then(() => process.exit(0)).catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
