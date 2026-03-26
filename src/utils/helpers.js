function chunkText(text, maxLen = 150) {
  if (!text) return [];
  const words = String(text).replace(/\s+/g, ' ').trim().split(' ');
  const chunks = [];
  let current = '';

  for (const w of words) {
    const test = current ? `${current} ${w}` : w;
    if (test.length <= maxLen) {
      current = test;
    } else {
      if (current) chunks.push(current);
      current = w;
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

function truncateForUssd(text, maxLen = 120) {
  if (!text) return '';
  const clean = String(text).replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return `${clean.slice(0, maxLen - 3)}...`;
}

function logWithTs(message, payload) {
  const ts = new Date().toISOString();
  if (payload !== undefined) {
    console.log(`[${ts}] ${message}`, payload);
    return;
  }
  console.log(`[${ts}] ${message}`);
}

module.exports = { chunkText, truncateForUssd, logWithTs };
