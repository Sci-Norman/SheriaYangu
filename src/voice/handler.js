const { hotlineWelcome, menuResponse } = require('./ivr');
const { logWithTs } = require('../utils/helpers');

function voiceHandler(req, res) {
  logWithTs('Voice callback', req.body || {});
  res.type('text/xml');
  return res.send(hotlineWelcome());
}

function voiceMenuHandler(req, res) {
  logWithTs('Voice menu callback', req.body || {});
  res.type('text/xml');
  const digit = req.body.dtmfDigits || req.body.digits || '';
  return res.send(menuResponse(digit));
}

module.exports = { voiceHandler, voiceMenuHandler };
