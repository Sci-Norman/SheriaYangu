const seedQuiz = [
  {
    question: 'Which article guarantees political rights including the right to vote?',
    option_a: 'Article 27',
    option_b: 'Article 38',
    option_c: 'Article 43',
    correct_option: 'B',
    explanation: 'Article 38 protects political rights including voting and standing for office.',
    article_reference: 38,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects rights that cannot be limited?',
    option_a: 'Article 25',
    option_b: 'Article 46',
    option_c: 'Article 50',
    correct_option: 'A',
    explanation: 'Article 25 lists rights that cannot be limited under any circumstances.',
    article_reference: 25,
    difficulty: 'medium'
  },
  {
    question: 'Which article provides for economic and social rights like health and education?',
    option_a: 'Article 43',
    option_b: 'Article 31',
    option_c: 'Article 81',
    correct_option: 'A',
    explanation: 'Article 43 includes healthcare, housing, food, water, social security, and education.',
    article_reference: 43,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects freedom of expression?',
    option_a: 'Article 33',
    option_b: 'Article 47',
    option_c: 'Article 53',
    correct_option: 'A',
    explanation: 'Article 33 protects speech and expression subject to constitutional limits.',
    article_reference: 33,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects the right to privacy?',
    option_a: 'Article 39',
    option_b: 'Article 31',
    option_c: 'Article 34',
    correct_option: 'B',
    explanation: 'Article 31 protects privacy of person, home, information, and communications.',
    article_reference: 31,
    difficulty: 'easy'
  },
  {
    question: 'Which article sets principles of public finance?',
    option_a: 'Article 201',
    option_b: 'Article 210',
    option_c: 'Article 227',
    correct_option: 'A',
    explanation: 'Article 201 sets core principles such as accountability and prudent use of funds.',
    article_reference: 201,
    difficulty: 'medium'
  },
  {
    question: 'Which article establishes county governments?',
    option_a: 'Article 176',
    option_b: 'Article 185',
    option_c: 'Article 187',
    correct_option: 'A',
    explanation: 'Article 176 provides for county governments and their executive committees.',
    article_reference: 176,
    difficulty: 'easy'
  },
  {
    question: 'Which article covers rights of children?',
    option_a: 'Article 57',
    option_b: 'Article 53',
    option_c: 'Article 55',
    correct_option: 'B',
    explanation: 'Article 53 sets out constitutional rights of every child.',
    article_reference: 53,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects equality and freedom from discrimination?',
    option_a: 'Article 27',
    option_b: 'Article 32',
    option_c: 'Article 36',
    correct_option: 'A',
    explanation: 'Article 27 guarantees equal protection and equal benefit of the law.',
    article_reference: 27,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects freedom of assembly and demonstration?',
    option_a: 'Article 37',
    option_b: 'Article 35',
    option_c: 'Article 40',
    correct_option: 'A',
    explanation: 'Article 37 covers assembly, demonstration, picketing, and petition.',
    article_reference: 37,
    difficulty: 'easy'
  },
  {
    question: 'Which article defines objects of devolution?',
    option_a: 'Article 174',
    option_b: 'Article 175',
    option_c: 'Article 186',
    correct_option: 'A',
    explanation: 'Article 174 outlines goals such as accountability and local self-governance.',
    article_reference: 174,
    difficulty: 'medium'
  },
  {
    question: 'Which article deals with fair hearing?',
    option_a: 'Article 49',
    option_b: 'Article 50',
    option_c: 'Article 48',
    correct_option: 'B',
    explanation: 'Article 50 protects the right to a fair and public hearing.',
    article_reference: 50,
    difficulty: 'easy'
  },
  {
    question: 'Which article defines voting principles?',
    option_a: 'Article 86',
    option_b: 'Article 83',
    option_c: 'Article 89',
    correct_option: 'A',
    explanation: 'Article 86 sets principles for voting systems and election administration.',
    article_reference: 86,
    difficulty: 'medium'
  },
  {
    question: 'Which article states judicial authority is derived from the people?',
    option_a: 'Article 159',
    option_b: 'Article 161',
    option_c: 'Article 165',
    correct_option: 'A',
    explanation: 'Article 159 provides guiding principles for judicial authority.',
    article_reference: 159,
    difficulty: 'medium'
  },
  {
    question: 'Which article gives access to information?',
    option_a: 'Article 34',
    option_b: 'Article 35',
    option_c: 'Article 31',
    correct_option: 'B',
    explanation: 'Article 35 gives citizens the right to access information held by the State.',
    article_reference: 35,
    difficulty: 'easy'
  },
  {
    question: 'Which article protects consumer rights?',
    option_a: 'Article 46',
    option_b: 'Article 47',
    option_c: 'Article 48',
    correct_option: 'A',
    explanation: 'Article 46 protects consumers from unsafe goods and unfair trade practices.',
    article_reference: 46,
    difficulty: 'easy'
  },
  {
    question: 'Which article establishes the National Land Commission?',
    option_a: 'Article 66',
    option_b: 'Article 67',
    option_c: 'Article 68',
    correct_option: 'B',
    explanation: 'Article 67 establishes the National Land Commission.',
    article_reference: 67,
    difficulty: 'medium'
  },
  {
    question: 'Which article addresses authority of the President?',
    option_a: 'Article 131',
    option_b: 'Article 132',
    option_c: 'Article 129',
    correct_option: 'A',
    explanation: 'Article 131 defines presidential authority under the Constitution.',
    article_reference: 131,
    difficulty: 'medium'
  },
  {
    question: 'Which article governs imposition of tax?',
    option_a: 'Article 202',
    option_b: 'Article 210',
    option_c: 'Article 217',
    correct_option: 'B',
    explanation: 'Article 210 states no tax may be imposed except as provided by legislation.',
    article_reference: 210,
    difficulty: 'medium'
  },
  {
    question: 'Which article creates the Auditor-General office?',
    option_a: 'Article 228',
    option_b: 'Article 229',
    option_c: 'Article 226',
    correct_option: 'B',
    explanation: 'Article 229 provides for the Auditor-General and audit responsibilities.',
    article_reference: 229,
    difficulty: 'easy'
  }
];

module.exports = { seedQuiz };
