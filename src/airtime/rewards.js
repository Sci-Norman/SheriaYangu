async function sendQuizReward() {
  return { skipped: true, reason: 'Airtime disabled for this deployment.' };
}

module.exports = { sendQuizReward };
