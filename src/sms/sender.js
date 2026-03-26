const africastalking = require('africastalking');
const { chunkText, logWithTs } = require('../utils/helpers');

let sms = null;

function getSms() {
  if (!sms) {
    const apiKey = process.env.AT_API_KEY;
    if (!apiKey) throw new Error('AT_API_KEY is not set — SMS cannot be sent.');
    const at = africastalking({
      apiKey,
      username: process.env.AT_USERNAME || 'sandbox'
    });
    sms = at.SMS;
  }
  return sms;
}

function targetNumber(phoneNumber) {
  return process.env.AT_SMS_RECIPIENT_OVERRIDE || phoneNumber;
}

function splitLongSms(message, maxLen = 600) {
  const chunks = chunkText(message, maxLen);
  if (chunks.length <= 1) return chunks;
  const total = chunks.length;
  return chunks.map((c, idx) => `(${idx + 1}/${total}) ${c}`);
}

async function sendArticleSms(phoneNumber, article) {
  const text = `SHERIA YANGU 🇰🇪\nArticle ${article.article_number} - ${article.article_title}\n\nOFFICIAL TEXT:\n${article.content}\n\nSIMPLIFIED:\n${article.simplified_content}\n\nLearn more: Dial ${process.env.AT_SHORTCODE || '*384*700#'}`;

  const messages = splitLongSms(text);
  const to = targetNumber(phoneNumber);

  logWithTs(`[SMS] Attempting to send ${messages.length} SMS chunk(s) to ${to}`);
  logWithTs(`[SMS] Original number: ${phoneNumber}, Override: ${process.env.AT_SMS_RECIPIENT_OVERRIDE || 'None'}`);

  for (const message of messages) {
    try {
      logWithTs(`[SMS] Sending message chunk (length: ${message.length}) to ${to}`);

      // Build send request - omit 'from' in sandbox mode to avoid InvalidSenderId errors
      const sendRequest = {
        to: [to],
        message
      };

      // Only add 'from' if we're NOT in sandbox mode
      if (process.env.AT_USERNAME !== 'sandbox') {
        sendRequest.from = process.env.AT_SENDER_ID || 'SHERIA';
      }

      const response = await getSms().send(sendRequest);
      logWithTs(`[SMS] ✅ Message sent successfully:`, response);
    } catch (error) {
      logWithTs(`[SMS] ❌ Error sending message:`, { error: error.message, to, message: message.substring(0, 50) });
      throw error;
    }
  }

  logWithTs(`[SMS] ✅ All ${messages.length} SMS chunk(s) sent to ${to}`);
  return { sent: messages.length, to };
}

module.exports = { sendArticleSms };
