const swahiliMap = {
  afya: 'health',
  elimu: 'education',
  ardhi: 'land',
  maji: 'water',
  haki: 'rights',
  kura: 'vote',
  watoto: 'children',
  wanawake: 'women',
  kazi: 'labour',
  mali: 'property',
  usalama: 'security',
  uhuru: 'freedom',
  sheria: 'law',
  rais: 'president',
  bunge: 'parliament',
  mahakama: 'judiciary',
  kaunti: 'county',
  uchaguzi: 'election',
  rushwa: 'corruption',
  polisi: 'police',
  chakula: 'food',
  nyumba: 'housing',
  dini: 'religion',
  vijana: 'youth',
  wazee: 'elderly',
  ulemavu: 'disability',
  mazingira: 'environment',
  kodi: 'tax',
  habari: 'information',
  faragha: 'privacy'
};

function normalizeKeyword(input = '') {
  const trimmed = input.trim().toLowerCase();
  return swahiliMap[trimmed] || trimmed;
}

module.exports = { swahiliMap, normalizeKeyword };
