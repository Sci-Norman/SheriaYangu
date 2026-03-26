function xml(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<Response>${body}</Response>`;
}

function hotlineWelcome() {
  return xml(`
  <Say voice="en-US-Standard-A">Welcome to Sheria Yangu. Voice mode is currently disabled in this deployment. Please use USSD and SMS.</Say>
  <Hangup/>
  `);
}

function menuResponse(digit) {
  const messages = {
    '1': 'Article 43 protects your right to health care.',
    '2': 'Article 43 also protects your right to education.',
    '3': 'Article 38 protects your right to vote.',
    '4': 'Article 33 protects freedom of expression.'
  };
  const msg = messages[digit] || 'Invalid option. Thank you for calling Sheria Yangu.';
  return xml(`<Say voice="en-US-Standard-A">${msg}</Say><Hangup/>`);
}

module.exports = { hotlineWelcome, menuResponse };
