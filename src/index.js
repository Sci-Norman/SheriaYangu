require('dotenv').config();

const express = require('express');
const { ussdHandler } = require('./ussd/handler');
const { voiceHandler, voiceMenuHandler } = require('./voice/handler');
const { getPublicStats } = require('./db/users');
const { logWithTs } = require('./utils/helpers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Sheria Yangu', timestamp: new Date().toISOString() });
});

app.get('/stats', async (req, res) => {
  try {
    const stats = await getPublicStats();
    res.json({ status: 'ok', ...stats, timestamp: new Date().toISOString() });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Unable to fetch stats' });
  }
});

app.post('/ussd', ussdHandler);
app.post('/voice', voiceHandler);
app.post('/voice/menu', voiceMenuHandler);

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logWithTs(`Sheria Yangu server running on port ${port}`);
});
