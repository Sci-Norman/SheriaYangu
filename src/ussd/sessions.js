const sessions = new Map();

function getSession(sessionId, phoneNumber) {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      phoneNumber,
      quizQuestions: [],
      quizCurrentIndex: 0,
      quizScore: 0,
      searchResults: [],
      searchKeyword: '',
      browseChapter: null,
      browsePage: 0,
      language: 'en'
    });
  }

  const session = sessions.get(sessionId);
  session.phoneNumber = phoneNumber;
  return session;
}

function clearSession(sessionId) {
  sessions.delete(sessionId);
}

module.exports = { getSession, clearSession };
