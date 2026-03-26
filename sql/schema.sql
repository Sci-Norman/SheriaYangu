CREATE TABLE IF NOT EXISTS constitution_articles (
    id SERIAL PRIMARY KEY,
    chapter_number INTEGER NOT NULL,
    chapter_title TEXT NOT NULL,
    article_number INTEGER NOT NULL UNIQUE,
    article_title TEXT NOT NULL,
    content TEXT NOT NULL,
    simplified_content TEXT NOT NULL,
    keywords TEXT[] NOT NULL,
    category TEXT NOT NULL,
    one_word_tag TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    phone_number TEXT UNIQUE NOT NULL,
    total_searches INTEGER DEFAULT 0,
    total_articles_read INTEGER DEFAULT 0,
    quizzes_completed INTEGER DEFAULT 0,
    quiz_score INTEGER DEFAULT 0,
    airtime_rewarded INTEGER DEFAULT 0,
    language_preference TEXT DEFAULT 'en',
    created_at TIMESTAMP DEFAULT NOW(),
    last_active TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS search_logs (
    id SERIAL PRIMARY KEY,
    phone_number TEXT NOT NULL,
    search_term TEXT NOT NULL,
    results_count INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quiz_questions (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    correct_option CHAR(1) NOT NULL,
    explanation TEXT NOT NULL,
    article_reference INTEGER REFERENCES constitution_articles(article_number),
    difficulty TEXT DEFAULT 'easy'
);

CREATE INDEX IF NOT EXISTS idx_constitution_articles_keywords ON constitution_articles USING GIN (keywords);
CREATE INDEX IF NOT EXISTS idx_constitution_articles_article_title ON constitution_articles (article_title);
CREATE INDEX IF NOT EXISTS idx_search_logs_term ON search_logs (search_term);
CREATE INDEX IF NOT EXISTS idx_users_phone ON users (phone_number);
