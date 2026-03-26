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

  for (const message of messages) {
    logWithTs(`Sending SMS to ${to}`);
    await getSms().send({
      to: [to],
      message,
      from: process.env.AT_SENDER_ID || 'SHERIA'
    });
  }

  return { sent: messages.length, to };
}

module.exports = { sendArticleSms };
