const chapterMeta = {
  1: { title: 'Sovereignty of the People', category: 'Sovereignty' },
  4: { title: 'Bill of Rights', category: 'Bill of Rights' },
  5: { title: 'Land and Environment', category: 'Land' },
  6: { title: 'Leadership and Integrity', category: 'Leadership' },
  7: { title: 'Representation of the People', category: 'Elections' },
  8: { title: 'The Legislature', category: 'Legislature' },
  9: { title: 'The Executive', category: 'Executive' },
  10: { title: 'Judiciary', category: 'Judiciary' },
  11: { title: 'Devolved Government', category: 'Devolution' },
  12: { title: 'Public Finance', category: 'Public Finance' }
};

const articles = [
  // ─── CHAPTER 1 ───
  {
    chapter_number: 1, article_number: 1, article_title: 'Sovereignty of the people',
    content: '(1) All sovereign power belongs to the people of Kenya and shall be exercised only in accordance with this Constitution. (2) The people may exercise their sovereign power either directly or through their democratically elected representatives. (3) Sovereign power under this Constitution is delegated to Parliament and the legislative assemblies in the county governments; the national executive and the executive structures in the county governments; and the Judiciary and independent tribunals.',
    simplified_content: 'All power in Kenya belongs to the people. The people use this power through elected leaders in Parliament, the President, Governors, and courts.',
    keywords: ['sovereignty', 'power', 'people', 'democracy', 'government', 'constitution'],
    one_word_tag: 'Sovereignty'
  },
  {
    chapter_number: 1, article_number: 2, article_title: 'Supremacy of this Constitution',
    content: '(1) This Constitution is the supreme law of the Republic and binds all persons and all State organs at both levels of government. (2) No person may claim or exercise State authority except as authorised under this Constitution. (3) The validity or legality of this Constitution is not subject to challenge by or before any court or other State organ. (4) Any law, including customary law, that is inconsistent with this Constitution is void to the extent of the inconsistency.',
    simplified_content: 'The Constitution is the highest law in Kenya. Any law that contradicts it is automatically invalid. Everyone must follow it.',
    keywords: ['supremacy', 'constitution', 'law', 'supreme law', 'validity', 'binding'],
    one_word_tag: 'Supremacy'
  },
  {
    chapter_number: 1, article_number: 3, article_title: 'Defence of this Constitution',
    content: '(1) Every person has an obligation to respect, uphold and defend this Constitution. (2) Any attempt to establish a government otherwise than in compliance with this Constitution is unlawful.',
    simplified_content: 'Every Kenyan must respect and protect the Constitution. Any attempt to take power illegally is a crime.',
    keywords: ['defence', 'protect', 'constitution', 'obligation', 'unlawful', 'coup'],
    one_word_tag: 'Defence'
  },

  // ─── CHAPTER 4: Bill of Rights ───
  {
    chapter_number: 4, article_number: 19, article_title: 'Rights and fundamental freedoms',
    content: '(1) The Bill of Rights is an integral part of Kenya\'s democratic state and is the framework for social, economic and cultural policies. (2) The purpose of recognising and protecting human rights and fundamental freedoms is to preserve the dignity of individuals and communities and to promote social justice and the realisation of the potential of all human beings. (3) The rights and fundamental freedoms in the Bill of Rights belong to each individual and are not granted by the State.',
    simplified_content: 'The Bill of Rights belongs to every person — it is not a gift from the government. It protects your dignity and promotes fairness.',
    keywords: ['rights', 'freedoms', 'bill of rights', 'dignity', 'justice', 'human rights'],
    one_word_tag: 'Rights'
  },
  {
    chapter_number: 4, article_number: 20, article_title: 'Application of Bill of Rights',
    content: '(1) The Bill of Rights applies to all law and binds all State organs and all persons. (2) Every person shall enjoy the rights and fundamental freedoms to the greatest extent consistent with the nature of the right. (3) In applying a provision of the Bill of Rights, a court shall develop the law to the extent that it does not give effect to a right and adopt the interpretation that most favours enforcement of a right.',
    simplified_content: 'The Bill of Rights applies to everyone and to all laws. Courts must interpret laws in a way that best protects your rights.',
    keywords: ['application', 'bill of rights', 'courts', 'law', 'enforcement', 'scope'],
    one_word_tag: 'Application'
  },
  {
    chapter_number: 4, article_number: 21, article_title: 'Implementation of rights and fundamental freedoms',
    content: '(1) It is a fundamental duty of the State and every State organ to observe, respect, protect, promote and fulfil the rights and fundamental freedoms in the Bill of Rights. (2) The State shall take legislative, policy and other measures to achieve the progressive realisation of the rights guaranteed under Article 43. (3) All State organs and public officers have the duty to address the needs of vulnerable groups.',
    simplified_content: 'The government must protect and fulfil your rights. It must set standards and take steps to progressively deliver health, housing, education, and more.',
    keywords: ['implementation', 'state duty', 'progressive realisation', 'vulnerable', 'government', 'obligation'],
    one_word_tag: 'Implementation'
  },
  {
    chapter_number: 4, article_number: 22, article_title: 'Enforcement of Bill of Rights',
    content: '(1) Every person has the right to institute court proceedings claiming that a right in the Bill of Rights has been denied, violated or infringed, or is threatened. (2) Court proceedings may be instituted by a person acting in their own interest, on behalf of another person, as a member of a group, in the public interest, or by an association.',
    simplified_content: 'If your rights are violated, you can go to court. Someone else can also go to court on your behalf if you cannot do it yourself.',
    keywords: ['enforcement', 'court', 'sue', 'violated', 'rights', 'legal action', 'petition'],
    one_word_tag: 'Enforcement'
  },
  {
    chapter_number: 4, article_number: 23, article_title: 'Authority of courts to uphold Bill of Rights',
    content: '(1) The High Court has jurisdiction to hear and determine applications for redress of a denial, violation or infringement of a right. (3) In any proceedings brought under Article 22, a court may grant appropriate relief, including a declaration of rights, an injunction, a conservatory order, a declaration of invalidity of any law, an order for compensation, and an order of judicial review.',
    simplified_content: 'The High Court can hear cases about violated rights. It can give orders to stop violations, award compensation, and declare bad laws invalid.',
    keywords: ['courts', 'jurisdiction', 'high court', 'compensation', 'injunction', 'judicial review'],
    one_word_tag: 'Courts'
  },
  {
    chapter_number: 4, article_number: 24, article_title: 'Limitation of rights and fundamental freedoms',
    content: '(1) A right or fundamental freedom shall not be limited except by law, and then only to the extent that the limitation is reasonable and justifiable in an open and democratic society based on human dignity, equality and freedom, taking into account all relevant factors.',
    simplified_content: 'Your rights can only be limited by law, and only if the limitation is fair and reasonable in a free society.',
    keywords: ['limitation', 'rights', 'reasonable', 'justifiable', 'restrict', 'law'],
    one_word_tag: 'Limitation'
  },
  {
    chapter_number: 4, article_number: 25, article_title: 'Fundamental rights that may not be limited',
    content: 'Despite any other provision in this Constitution, the following rights shall not be limited: (a) freedom from torture and cruel, inhuman or degrading treatment or punishment; (b) freedom from slavery or servitude; (c) the right to a fair trial; and (d) the right to an order of habeas corpus.',
    simplified_content: 'Some rights can NEVER be taken away — freedom from torture, freedom from slavery, right to a fair trial, and right to habeas corpus. Even during emergencies.',
    keywords: ['absolute rights', 'torture', 'slavery', 'fair trial', 'habeas corpus', 'non-derogable', 'freedom'],
    one_word_tag: 'Absolute'
  },
  {
    chapter_number: 4, article_number: 26, article_title: 'Right to life',
    content: '(1) Every person has the right to life. (2) The life of a person begins at conception. (3) A person shall not be deprived of life intentionally, except as authorised by this Constitution or other written law. (4) Abortion is not permitted unless, in the opinion of a trained health professional, there is need for emergency treatment, or the life or health of the mother is in danger.',
    simplified_content: 'Every person has the right to life from conception. No one can kill you intentionally. Abortion is only allowed in emergencies or when the mother\'s life is at risk.',
    keywords: ['life', 'right to life', 'abortion', 'conception', 'death', 'kill'],
    one_word_tag: 'Life'
  },
  {
    chapter_number: 4, article_number: 27, article_title: 'Equality and freedom from discrimination',
    content: '(1) Every person is equal before the law and has the right to equal protection and equal benefit of the law. (3) Women and men have the right to equal treatment, including equal opportunities in political, economic, cultural and social spheres. (4) The State shall not discriminate against any person on any ground, including race, sex, pregnancy, marital status, health status, ethnic or social origin, colour, age, disability, religion, conscience, belief, culture, dress, language or birth. (5) A person shall not discriminate against another person on any of the grounds specified in clause (4).',
    simplified_content: 'Everyone is equal before the law. No one should be discriminated against because of gender, tribe, religion, disability, age, or any other reason. Men and women have equal rights.',
    keywords: ['equality', 'discrimination', 'women', 'gender', 'equal rights', 'race', 'disability', 'tribe', 'wanawake'],
    one_word_tag: 'Equality'
  },
  {
    chapter_number: 4, article_number: 28, article_title: 'Human dignity',
    content: 'Every person has inherent dignity and the right to have that dignity respected and protected.',
    simplified_content: 'Every person has dignity. No one should be treated in a way that takes away their dignity.',
    keywords: ['dignity', 'respect', 'human dignity', 'inherent', 'protection'],
    one_word_tag: 'Dignity'
  },
  {
    chapter_number: 4, article_number: 29, article_title: 'Freedom and security of the person',
    content: 'Every person has the right to freedom and security, which includes the right not to be: (a) deprived of freedom arbitrarily or without just cause; (b) detained without trial; (c) subjected to any form of violence from either public or private sources; (d) subjected to torture; (e) subjected to corporal punishment; or (f) treated in a cruel, inhuman or degrading manner.',
    simplified_content: 'You have the right to be free and safe. No one can arrest you without reason, torture you, or punish you in cruel ways.',
    keywords: ['freedom', 'security', 'arrest', 'detention', 'torture', 'violence', 'corporal punishment', 'police', 'polisi'],
    one_word_tag: 'Security'
  },
  {
    chapter_number: 4, article_number: 30, article_title: 'Slavery, servitude and forced labour',
    content: '(1) A person shall not be held in slavery or servitude. (2) A person shall not be required to perform forced labour.',
    simplified_content: 'Slavery is completely forbidden. No one can force you to work against your will.',
    keywords: ['slavery', 'servitude', 'forced labour', 'bondage', 'trafficking'],
    one_word_tag: 'Slavery'
  },
  {
    chapter_number: 4, article_number: 31, article_title: 'Privacy',
    content: 'Every person has the right to privacy, which includes the right not to have: (a) their person, home or property searched; (b) their possessions seized; (c) information relating to their family or private affairs unnecessarily required or revealed; or (d) the privacy of their communications infringed.',
    simplified_content: 'You have the right to privacy. Your home, property, communications, and personal information are protected from unreasonable interference.',
    keywords: ['privacy', 'search', 'personal information', 'communications', 'data', 'home', 'faragha'],
    one_word_tag: 'Privacy'
  },
  {
    chapter_number: 4, article_number: 32, article_title: 'Freedom of conscience, religion, belief and opinion',
    content: 'Every person has the right to freedom of conscience, religion, thought, belief and opinion. Every person has the right to manifest any religion or belief through worship, practice, teaching or observance. A person may not be denied access to any institution, employment or facility because of the person\'s belief or religion.',
    simplified_content: 'You can believe in any religion and practise it freely. No one can deny you a job or service because of your beliefs.',
    keywords: ['religion', 'conscience', 'belief', 'worship', 'faith', 'opinion', 'dini', 'church', 'mosque'],
    one_word_tag: 'Religion'
  },
  {
    chapter_number: 4, article_number: 33, article_title: 'Freedom of expression',
    content: '(1) Every person has the right to freedom of expression, which includes: (a) freedom to seek, receive or impart information or ideas; (b) freedom of artistic creativity; and (c) academic freedom and freedom of scientific research. (2) The right does not extend to: (a) propaganda for war; (b) incitement to violence; (c) hate speech; or (d) advocacy of hatred that constitutes ethnic incitement or vilification.',
    simplified_content: 'You can freely express yourself, share ideas, and create art. However, hate speech, incitement to violence, and war propaganda are not protected.',
    keywords: ['expression', 'speech', 'free speech', 'media', 'opinion', 'ideas', 'hate speech', 'press'],
    one_word_tag: 'Expression'
  },
  {
    chapter_number: 4, article_number: 34, article_title: 'Freedom of the media',
    content: '(1) Freedom and independence of electronic, print and all other types of media is guaranteed. (2) The State shall not exercise control over or interfere with any person engaged in broadcasting, the production or circulation of any publication or the dissemination of information, or penalise any person for any opinion or the content of any broadcast, publication or dissemination.',
    simplified_content: 'The media is free and independent. The government cannot control newspapers, TV, radio, or online media, or punish journalists.',
    keywords: ['media', 'press', 'broadcasting', 'newspaper', 'journalism', 'censorship', 'television', 'radio'],
    one_word_tag: 'Media'
  },
  {
    chapter_number: 4, article_number: 35, article_title: 'Access to information',
    content: '(1) Every citizen has the right of access to information held by the State and information held by another person required for the exercise of any right. (2) Every person has the right to the correction or deletion of untrue or misleading information. (3) The State shall publish and publicise any important information affecting the nation.',
    simplified_content: 'You can ask for information held by the government. You also have the right to correct false information about yourself.',
    keywords: ['information', 'access', 'data', 'government information', 'transparency', 'habari'],
    one_word_tag: 'Information'
  },
  {
    chapter_number: 4, article_number: 36, article_title: 'Freedom of association',
    content: '(1) Every person has the right to freedom of association, which includes the right to form, join or participate in the activities of an association of any kind. (2) A person shall not be compelled to join an association of any kind.',
    simplified_content: 'You can freely form or join any group, club, union, or association. No one can force you to join one.',
    keywords: ['association', 'join', 'group', 'union', 'club', 'organisation', 'NGO'],
    one_word_tag: 'Association'
  },
  {
    chapter_number: 4, article_number: 37, article_title: 'Assembly, demonstration, picketing and petition',
    content: 'Every person has the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.',
    simplified_content: 'You can peacefully gather, protest, and present petitions to the government, as long as you are unarmed.',
    keywords: ['assembly', 'demonstration', 'protest', 'picket', 'petition', 'rally', 'march', 'maandamano'],
    one_word_tag: 'Assembly'
  },
  {
    chapter_number: 4, article_number: 38, article_title: 'Political rights',
    content: '(1) Every citizen is free to make political choices, which includes the right to form or participate in a political party, to campaign, and to vote. (2) Every citizen has the right to free, fair and regular elections based on universal suffrage. (3) Every adult citizen has the right without unreasonable restrictions to be registered as a voter, to vote by secret ballot in any election or referendum, and to be a candidate for public office.',
    simplified_content: 'You have the right to vote, join political parties, and run for office. Elections must be free, fair, and regular. Voting is by secret ballot.',
    keywords: ['vote', 'voting', 'election', 'political rights', 'ballot', 'candidate', 'campaign', 'kura', 'uchaguzi'],
    one_word_tag: 'Voting'
  },
  {
    chapter_number: 4, article_number: 39, article_title: 'Freedom of movement and residence',
    content: '(1) Every person has the right to freedom of movement. (2) Every person has the right to leave Kenya. (3) Every citizen has the right to enter, remain in and reside anywhere in Kenya.',
    simplified_content: 'You can move freely around Kenya, live anywhere in the country, and travel abroad.',
    keywords: ['movement', 'residence', 'travel', 'freedom of movement', 'live', 'relocate'],
    one_word_tag: 'Movement'
  },
  {
    chapter_number: 4, article_number: 40, article_title: 'Protection of right to property',
    content: '(1) Every person has the right, individually or in association with others, to acquire and own property of any description, in any part of Kenya. (2) Parliament shall not enact a law that permits arbitrary deprivation of property. (3) The State shall not deprive a person of property unless for a public purpose with prompt payment in full of just compensation.',
    simplified_content: 'You have the right to own property. The government cannot take your property unless it is for public use and you receive fair compensation.',
    keywords: ['property', 'own', 'land', 'acquisition', 'compensation', 'mali', 'house', 'ownership'],
    one_word_tag: 'Property'
  },
  {
    chapter_number: 4, article_number: 41, article_title: 'Labour relations',
    content: '(1) Every person has the right to fair labour practices. (2) Every worker has the right to fair remuneration, reasonable working conditions, to form or join a trade union, and to go on strike. (5) Every trade union, employers organisation and employer has the right to engage in collective bargaining.',
    simplified_content: 'You have the right to fair pay, safe working conditions, to join a union, and to go on strike. Employers and workers can bargain collectively.',
    keywords: ['labour', 'work', 'union', 'strike', 'wages', 'employment', 'workers', 'kazi', 'trade union'],
    one_word_tag: 'Labour'
  },
  {
    chapter_number: 4, article_number: 42, article_title: 'Environment',
    content: 'Every person has the right to a clean and healthy environment, which includes the right to have the environment protected for present and future generations through legislative and other measures, and to have obligations relating to the environment fulfilled under Article 70.',
    simplified_content: 'You have the right to a clean and healthy environment. The government must protect the environment for you and for future generations.',
    keywords: ['environment', 'clean', 'pollution', 'climate', 'nature', 'mazingira', 'conservation'],
    one_word_tag: 'Environment'
  },
  {
    chapter_number: 4, article_number: 43, article_title: 'Economic and social rights',
    content: '(1) Every person has the right: (a) to the highest attainable standard of health, including reproductive health care; (b) to accessible and adequate housing, and reasonable standards of sanitation; (c) to be free from hunger, and to have adequate food of acceptable quality; (d) to clean and safe water in adequate quantities; (e) to social security; and (f) to education. (2) A person shall not be denied emergency medical treatment. (3) The State shall provide appropriate social security to persons who are unable to support themselves.',
    simplified_content: 'You have the right to healthcare, housing, food, clean water, social security, and education. No one can be denied emergency medical treatment.',
    keywords: ['health', 'healthcare', 'hospital', 'doctor', 'housing', 'house', 'food', 'water', 'education', 'school', 'social security', 'sanitation', 'afya'],
    one_word_tag: 'Welfare'
  },
  {
    chapter_number: 4, article_number: 44, article_title: 'Language and culture',
    content: '(1) Every person has the right to use the language, and to participate in the cultural life, of the person\'s choice. (2) A person belonging to a cultural or linguistic community has the right with other members to enjoy the person\'s culture and use the person\'s language. (3) A person shall not compel another person to perform, observe or undergo any cultural practice or rite.',
    simplified_content: 'You can use any language and participate in any culture. No one can force you to follow cultural practices you do not agree with.',
    keywords: ['language', 'culture', 'tradition', 'community', 'ethnic', 'mother tongue'],
    one_word_tag: 'Culture'
  },
  {
    chapter_number: 4, article_number: 45, article_title: 'Family',
    content: '(1) The family is the natural and fundamental unit of society. (2) Every adult has the right to marry a person of the opposite sex, based on free consent. (3) Parties to a marriage are entitled to equal rights at the time of the marriage, during the marriage and at the dissolution of the marriage.',
    simplified_content: 'The family is the basic unit of society. Adults can marry freely. Both spouses have equal rights in marriage and divorce.',
    keywords: ['family', 'marriage', 'spouse', 'divorce', 'children', 'partner'],
    one_word_tag: 'Family'
  },
  {
    chapter_number: 4, article_number: 46, article_title: 'Consumer rights',
    content: '(1) Consumers have the right to: (a) goods and services of reasonable quality; (b) the information necessary to gain full benefit from goods and services; (c) protection of their health, safety, and economic interests; and (d) compensation for loss or injury arising from defects in goods or services.',
    simplified_content: 'You have the right to quality goods, honest information, safety from harmful products, and compensation if something goes wrong.',
    keywords: ['consumer', 'goods', 'services', 'quality', 'compensation', 'protection', 'shopping'],
    one_word_tag: 'Consumer'
  },
  {
    chapter_number: 4, article_number: 47, article_title: 'Fair administrative action',
    content: '(1) Every person has the right to administrative action that is expeditious, efficient, lawful, reasonable and procedurally fair. (2) If a right has been or is likely to be adversely affected by administrative action, the person has the right to be given written reasons for the action.',
    simplified_content: 'Government offices must treat you fairly and give reasons for decisions that affect you. You can challenge unfair decisions in court.',
    keywords: ['administration', 'fair', 'government offices', 'bureaucracy', 'decisions', 'review'],
    one_word_tag: 'Administration'
  },
  {
    chapter_number: 4, article_number: 48, article_title: 'Access to justice',
    content: 'The State shall ensure access to justice for all persons and, if any fee is required, it shall be reasonable and shall not impede access to justice.',
    simplified_content: 'Everyone has the right to access the courts. Court fees must be affordable so that money does not stop you from getting justice.',
    keywords: ['justice', 'courts', 'access', 'legal aid', 'affordable', 'sue'],
    one_word_tag: 'Justice'
  },
  {
    chapter_number: 4, article_number: 49, article_title: 'Rights of arrested persons',
    content: '(1) An arrested person has the right: (a) to be informed promptly of the reason for arrest, the right to remain silent, and consequences of not remaining silent; (b) to remain silent; (c) to communicate with an advocate; (d) not to be compelled to make any confession; (e) to be held separately from sentenced persons; (f) to be brought before a court within 24 hours; (g) to be charged or released at first court appearance; and (h) to be released on bond or bail, on reasonable conditions.',
    simplified_content: 'If arrested, you must be told why, allowed to remain silent, given a lawyer, and brought to court within 24 hours. You have the right to bail.',
    keywords: ['arrest', 'arrested', 'police', 'bail', 'rights', 'detention', 'lawyer', 'polisi', 'remand'],
    one_word_tag: 'Arrest'
  },
  {
    chapter_number: 4, article_number: 50, article_title: 'Fair hearing',
    content: '(1) Every person has the right to have any dispute decided in a fair and public hearing. (2) Every accused person has the right to a fair trial, including: (a) to be presumed innocent until proven guilty; (b) to be informed of the charge; (c) to have adequate time to prepare a defence; (d) to a public trial; (e) to have the trial begin and conclude without unreasonable delay; (f) to be present when being tried; (g) to choose and be represented by an advocate.',
    simplified_content: 'You are innocent until proven guilty. You have the right to a fair trial, to know the charges, to have a lawyer, and to have your case heard publicly.',
    keywords: ['fair trial', 'hearing', 'innocent', 'court', 'lawyer', 'defence', 'accused', 'judge'],
    one_word_tag: 'Trial'
  },
  {
    chapter_number: 4, article_number: 51, article_title: 'Rights of detained persons',
    content: '(1) A person who is detained, held in custody or imprisoned retains all rights and freedoms in the Bill of Rights except to the extent incompatible with imprisonment. (2) A detained person is entitled to petition for an order of habeas corpus. (3) Parliament shall enact legislation that provides for humane treatment of detained persons.',
    simplified_content: 'Prisoners keep their rights. They must be treated humanely and can petition the court if detained illegally.',
    keywords: ['detention', 'prison', 'prisoner', 'custody', 'habeas corpus', 'humane', 'jail'],
    one_word_tag: 'Detention'
  },
  {
    chapter_number: 4, article_number: 52, article_title: 'Interpretation of Bill of Rights',
    content: 'This Part does not derogate from the rights and freedoms in this Chapter and shall be interpreted in a manner that does not diminish a right or fundamental freedom.',
    simplified_content: 'This section reinforces that the Bill of Rights must always be interpreted to protect — not reduce — your rights.',
    keywords: ['interpretation', 'bill of rights', 'rights', 'protect'],
    one_word_tag: 'Interpretation'
  },
  {
    chapter_number: 4, article_number: 53, article_title: 'Children',
    content: '(1) Every child has the right: (a) to a name and nationality from birth; (b) to free and compulsory basic education; (c) to basic nutrition, shelter and health care; (d) to be protected from abuse, neglect, harmful cultural practices, all forms of violence, inhuman treatment and punishment, and hazardous or exploitative labour; (e) to parental care and protection, including equal responsibility of both parents; and (f) not to be detained except as a measure of last resort.',
    simplified_content: 'Every child has the right to a name, free education, nutrition, health care, safety from abuse, and parental care. Children should not be detained unless absolutely necessary.',
    keywords: ['children', 'child', 'education', 'school', 'nutrition', 'abuse', 'parental', 'watoto', 'birth registration'],
    one_word_tag: 'Children'
  },
  {
    chapter_number: 4, article_number: 54, article_title: 'Persons with disabilities',
    content: '(1) A person with any disability is entitled to: (a) be treated with dignity and respect; (b) access educational institutions integrated into society; (c) reasonable access to all places, public transport and information; (d) use Sign language, Braille or other means of communication; and (e) access materials and devices to overcome constraints. (2) The State shall ensure at least five percent of members of elective and appointive bodies are persons with disabilities.',
    simplified_content: 'People with disabilities must be treated with dignity, have access to education, transport, and information, and be represented in government (at least 5%).',
    keywords: ['disability', 'disabled', 'access', 'sign language', 'braille', 'inclusion', 'ulemavu', 'wheelchair'],
    one_word_tag: 'Disability'
  },
  {
    chapter_number: 4, article_number: 55, article_title: 'Youth',
    content: 'The State shall take measures, including affirmative action programmes, to ensure that the youth access relevant education and training, have opportunities to participate in political, social, economic and other spheres, access employment, and are protected from harmful cultural practices and exploitation.',
    simplified_content: 'The government must help young people access education, jobs, and opportunities. Youth must be protected and included in national life.',
    keywords: ['youth', 'young people', 'employment', 'education', 'vijana', 'jobs', 'training'],
    one_word_tag: 'Youth'
  },
  {
    chapter_number: 4, article_number: 56, article_title: 'Minorities and marginalised groups',
    content: 'The State shall put in place affirmative action programmes to ensure that minorities and marginalised groups participate in governance, are provided special opportunities in educational and economic fields and employment, develop their cultural values and languages, and have reasonable access to water, health services and infrastructure.',
    simplified_content: 'The government must support minorities and marginalised groups with special programmes for education, jobs, services, and representation.',
    keywords: ['minorities', 'marginalised', 'affirmative action', 'community', 'access', 'special groups'],
    one_word_tag: 'Minorities'
  },
  {
    chapter_number: 4, article_number: 57, article_title: 'Older members of society',
    content: 'The State shall take measures to ensure the rights of older persons to fully participate in the affairs of society, pursue their personal development, live in dignity and respect and be free from abuse, and receive reasonable care and assistance from their family and the State.',
    simplified_content: 'Older people have the right to participate in society, live in dignity, and receive care from their families and the government.',
    keywords: ['elderly', 'older', 'senior citizens', 'pension', 'care', 'wazee', 'aging'],
    one_word_tag: 'Elderly'
  },

  // ─── CHAPTER 5: Land and Environment ───
  {
    chapter_number: 5, article_number: 60, article_title: 'Principles of land policy',
    content: '(1) Land in Kenya shall be held, used and managed in a manner that is equitable, efficient, productive and sustainable, in accordance with the following principles: equitable access to land; security of land rights; sustainable and productive management; transparent administration; sound conservation; elimination of gender discrimination in land matters; and encouragement of communities to settle land disputes through local initiatives.',
    simplified_content: 'Land in Kenya must be managed fairly and sustainably. Everyone should have equal access. Gender discrimination in land ownership is prohibited.',
    keywords: ['land', 'land policy', 'property', 'ardhi', 'equitable', 'gender', 'ownership'],
    one_word_tag: 'Land'
  },
  {
    chapter_number: 5, article_number: 61, article_title: 'Classification of land',
    content: '(1) All land in Kenya belongs to the people of Kenya collectively, as communities and as individuals. (2) Land in Kenya is classified as public, community, or private.',
    simplified_content: 'All land in Kenya belongs to the people. Land is classified as public (government), community, or private (individual).',
    keywords: ['land', 'classification', 'public land', 'community land', 'private land', 'ardhi'],
    one_word_tag: 'Classification'
  },
  {
    chapter_number: 5, article_number: 62, article_title: 'Public land',
    content: 'Public land is land which includes unalienated government land, land held by State organs, all minerals and mineral oils, government forests, game reserves, water catchment areas, national parks, government animal sanctuaries, all rivers, lakes and other water bodies, the territorial sea, exclusive economic zone and sea bed, all land between high and low water marks, and any land not classified as private or community land.',
    simplified_content: 'Public land includes government buildings, forests, parks, rivers, lakes, and the seabed. It belongs to all Kenyans through the government.',
    keywords: ['public land', 'government land', 'forests', 'parks', 'rivers', 'lakes'],
    one_word_tag: 'PublicLand'
  },
  {
    chapter_number: 5, article_number: 63, article_title: 'Community land',
    content: '(1) Community land shall vest in and be held by communities identified on the basis of ethnicity, culture or similar community of interest. (2) Community land consists of land lawfully registered in the name of group representatives, land transferred to a specific community, and any land declared community land by an Act of Parliament.',
    simplified_content: 'Community land is held by communities based on culture or shared interests. It cannot be sold without community consent.',
    keywords: ['community land', 'communal', 'community', 'ethnicity', 'culture', 'group'],
    one_word_tag: 'CommunityLand'
  },
  {
    chapter_number: 5, article_number: 64, article_title: 'Private land',
    content: 'Private land consists of registered land held by any person under freehold tenure, land held under leasehold tenure, and any other land declared private land under an Act of Parliament.',
    simplified_content: 'Private land is land registered in your name through a title deed. It can be freehold or leasehold.',
    keywords: ['private land', 'title deed', 'freehold', 'leasehold', 'own land', 'personal'],
    one_word_tag: 'PrivateLand'
  },
  {
    chapter_number: 5, article_number: 65, article_title: 'Landholding by non-citizens',
    content: '(1) A person who is not a citizen may hold land on the basis of leasehold tenure only, and any such lease shall not exceed ninety-nine years.',
    simplified_content: 'Foreigners can only lease land in Kenya — they cannot own it permanently. Leases are limited to 99 years.',
    keywords: ['non-citizen', 'foreigner', 'lease', 'land ownership', '99 years'],
    one_word_tag: 'Foreigners'
  },
  {
    chapter_number: 5, article_number: 66, article_title: 'Regulation of land use and property',
    content: '(1) The State may regulate the use of any land, or any interest in or right over any land, in the interest of defence, public safety, public order, public morality, public health, or land use planning. (2) Parliament shall enact legislation ensuring that investments in property benefit local communities and their economies.',
    simplified_content: 'The government can regulate land use for public safety and planning. Land investments must benefit local communities.',
    keywords: ['land use', 'regulation', 'planning', 'property', 'zoning', 'development'],
    one_word_tag: 'Regulation'
  },
  {
    chapter_number: 5, article_number: 67, article_title: 'National Land Commission',
    content: '(1) There is established the National Land Commission. (2) Its functions are to manage public land on behalf of national and county governments, recommend a national land policy, advise on comprehensive registration of title, conduct research on land and natural resources, initiate investigations into land injustices, and encourage traditional dispute resolution mechanisms.',
    simplified_content: 'The National Land Commission manages public land, investigates land injustices, and advises on land policy.',
    keywords: ['NLC', 'national land commission', 'land management', 'land injustice', 'title'],
    one_word_tag: 'NLC'
  },
  {
    chapter_number: 5, article_number: 68, article_title: 'Legislation on land',
    content: 'Parliament shall revise, consolidate and rationalise existing land laws; revise sectoral land use laws in accordance with Article 60 principles; and enact legislation to prescribe minimum and maximum land holding acreages, regulate land conversion, protect food security, and enable review of all grants of public land.',
    simplified_content: 'Parliament must pass laws to regulate land sizes, prevent illegal land grabs, and protect food security.',
    keywords: ['land laws', 'legislation', 'land reform', 'minimum acreage', 'food security'],
    one_word_tag: 'LandLaw'
  },
  {
    chapter_number: 5, article_number: 69, article_title: 'Obligations in respect of the environment',
    content: 'The State shall ensure sustainable exploitation, utilisation, management and conservation of the environment and natural resources; work to achieve and maintain a tree cover of at least ten per cent of the land area; protect indigenous knowledge of biodiversity; encourage public participation in environmental management; protect genetic resources and biological diversity; establish systems of environmental impact assessment, audit and monitoring; eliminate processes that endanger the environment; and utilise natural resources for the benefit of the people.',
    simplified_content: 'The government must protect the environment, maintain at least 10% tree cover, conserve biodiversity, and share natural resource benefits fairly.',
    keywords: ['environment', 'conservation', 'tree cover', 'biodiversity', 'natural resources', 'climate', 'mazingira'],
    one_word_tag: 'Conservation'
  },
  {
    chapter_number: 5, article_number: 70, article_title: 'Enforcement of environmental rights',
    content: 'If a person alleges that a right to a clean and healthy environment under Article 42 has been denied, violated or is threatened, the person may apply to a court for redress in addition to any other legal remedies.',
    simplified_content: 'If someone pollutes your environment or threatens your right to a clean environment, you can take them to court.',
    keywords: ['environmental rights', 'pollution', 'court', 'enforcement', 'clean environment'],
    one_word_tag: 'EnvRights'
  },
  {
    chapter_number: 5, article_number: 71, article_title: 'Agreements relating to natural resources',
    content: 'A transaction is subject to ratification by Parliament if it involves the grant of a right or concession for the exploitation of any natural resource of Kenya, entered into on or after the effective date.',
    simplified_content: 'Any deal to exploit Kenya\'s natural resources must be approved by Parliament.',
    keywords: ['natural resources', 'mining', 'oil', 'gas', 'concessions', 'Parliament approval'],
    one_word_tag: 'Resources'
  },
  {
    chapter_number: 5, article_number: 72, article_title: 'Legislation relating to the environment',
    content: 'Parliament shall enact legislation to give full effect to the provisions of this Part.',
    simplified_content: 'Parliament must pass laws to protect the environment and implement constitutional environmental provisions.',
    keywords: ['environment legislation', 'laws', 'environment', 'Parliament'],
    one_word_tag: 'EnvLaw'
  },

  // ─── CHAPTER 6: Leadership and Integrity ───
  {
    chapter_number: 6, article_number: 73, article_title: 'Responsibilities of leadership',
    content: '(1) Authority assigned to a State officer is a public trust to be exercised in a manner consistent with this Constitution, with respect for the people, bringing honour and dignity to the office, and promoting public confidence. (2) Guiding principles include selection on the basis of integrity, objectivity and impartiality in decision making, selfless service, accountability to the public, and discipline in service to the people.',
    simplified_content: 'Leaders must serve the public honestly, avoid corruption, and make decisions based on the public interest — not personal gain.',
    keywords: ['leadership', 'integrity', 'corruption', 'accountability', 'public trust', 'ethics', 'rushwa'],
    one_word_tag: 'Leadership'
  },
  {
    chapter_number: 6, article_number: 75, article_title: 'Conduct of State officers',
    content: 'A State officer shall behave, in public and private life, in a manner that avoids any conflict between personal interests and public duties, compromising public interest for personal interest, or demeaning the office.',
    simplified_content: 'Government officials must avoid conflicts of interest and not use their position for personal gain.',
    keywords: ['conduct', 'state officers', 'conflict of interest', 'ethics', 'behaviour'],
    one_word_tag: 'Conduct'
  },
  {
    chapter_number: 6, article_number: 76, article_title: 'Financial probity of State officers',
    content: 'A gift or donation to a State officer on a public occasion is a gift to the Republic and shall be delivered to the State. A State officer shall not maintain a bank account outside Kenya except as provided by law, or seek a personal loan or benefit that compromises integrity.',
    simplified_content: 'Government officials cannot keep gifts received in their official role. They must not have secret foreign bank accounts or take bribes.',
    keywords: ['financial probity', 'gifts', 'bank account', 'bribe', 'corruption', 'state officer'],
    one_word_tag: 'Probity'
  },
  {
    chapter_number: 6, article_number: 77, article_title: 'Restriction on activities of State officers',
    content: 'A full-time State officer shall not participate in any other gainful employment. A retired State officer receiving a pension shall not hold more than two concurrent remunerative positions as chairperson, director or employee of a company owned or controlled by the State.',
    simplified_content: 'Full-time government officials cannot have side jobs. Retired officials on pension cannot hold more than two paid government positions.',
    keywords: ['restriction', 'state officer', 'employment', 'side job', 'pension'],
    one_word_tag: 'Restrictions'
  },
  {
    chapter_number: 6, article_number: 78, article_title: 'Citizenship and leadership',
    content: 'A person is not eligible for election or appointment to a State office unless the person is a citizen of Kenya.',
    simplified_content: 'Only Kenyan citizens can be elected or appointed to government positions.',
    keywords: ['citizenship', 'eligibility', 'state office', 'appointment', 'election'],
    one_word_tag: 'Citizenship'
  },
  {
    chapter_number: 6, article_number: 79, article_title: 'Ethics and Anti-Corruption Commission',
    content: 'There is established the Ethics and Anti-Corruption Commission, which shall be and have the status and powers of a commission under Chapter Fifteen.',
    simplified_content: 'The Ethics and Anti-Corruption Commission (EACC) is established to fight corruption among leaders.',
    keywords: ['EACC', 'anti-corruption', 'ethics', 'corruption', 'commission', 'rushwa'],
    one_word_tag: 'EACC'
  },
  {
    chapter_number: 6, article_number: 80, article_title: 'Legislation to establish the ethics commission',
    content: 'Parliament shall enact legislation to establish an independent ethics and anti-corruption commission for the purposes of ensuring compliance with and enforcement of the provisions of this Chapter.',
    simplified_content: 'Parliament must pass laws to make the anti-corruption commission effective in enforcing leadership and integrity rules.',
    keywords: ['legislation', 'ethics commission', 'anti-corruption', 'enforcement'],
    one_word_tag: 'Legislation'
  },

  // ─── CHAPTER 7: Representation of the People ───
  {
    chapter_number: 7, article_number: 81, article_title: 'General principles for the electoral system',
    content: 'The electoral system shall comply with the following principles: freedom of citizens to exercise political rights; not more than two-thirds of elective bodies shall be of the same gender; fair representation of persons with disabilities; universal suffrage based on fair representation and equality of vote; and free and fair elections.',
    simplified_content: 'Elections must be free and fair. No more than two-thirds of elected officials can be of one gender. Disabled persons must be represented.',
    keywords: ['election', 'electoral system', 'gender rule', 'two-thirds', 'fair representation', 'uchaguzi'],
    one_word_tag: 'Electoral'
  },
  {
    chapter_number: 7, article_number: 82, article_title: 'Legislation on elections',
    content: 'Parliament shall enact legislation to provide for delimitation of electoral units, nomination of candidates, continuous registration of citizens as voters, and progressive voter education.',
    simplified_content: 'Parliament must pass laws about constituencies, candidate nominations, voter registration, and voter education.',
    keywords: ['election laws', 'constituencies', 'nomination', 'voter registration', 'voter education'],
    one_word_tag: 'ElectionLaw'
  },
  {
    chapter_number: 7, article_number: 83, article_title: 'Registration as a voter',
    content: 'A person qualifies for registration as a voter if the person is an adult citizen, is not declared to be of unsound mind, and has not been convicted of an election offence during the preceding five years.',
    simplified_content: 'Any adult Kenyan citizen of sound mind can register to vote, unless convicted of an election offence in the past five years.',
    keywords: ['voter registration', 'register', 'vote', 'eligibility', 'citizen', 'adult'],
    one_word_tag: 'Registration'
  },
  {
    chapter_number: 7, article_number: 84, article_title: 'Candidates for election',
    content: 'A State officer or other person who has held a State office shall not be compelled to take leave to stand for election if otherwise qualified.',
    simplified_content: 'State officers do not have to resign from their jobs to stand for election.',
    keywords: ['candidates', 'state officers', 'election', 'stand', 'political rights'],
    one_word_tag: 'Candidates'
  },
  {
    chapter_number: 7, article_number: 85, article_title: 'Eligibility to stand as independent candidate',
    content: 'Any person is eligible to stand as an independent candidate for election if not a member of a registered political party for at least three months before the election date, and meets other requirements.',
    simplified_content: 'You can run for election without a political party if you left any party at least 3 months before the election.',
    keywords: ['independent candidate', 'no party', 'election', 'stand', 'run for office'],
    one_word_tag: 'Independent'
  },
  {
    chapter_number: 7, article_number: 86, article_title: 'Voting',
    content: 'At every election, the IEBC shall ensure: the system is simple, accurate, verifiable, secure, accountable and transparent; votes are counted and results announced promptly at each polling station; results are openly collated and announced by the returning officer; and appropriate mechanisms to eliminate malpractice are put in place.',
    simplified_content: 'Voting must be simple, secure, and transparent. Results must be counted and announced at each polling station to prevent fraud.',
    keywords: ['voting', 'ballot', 'election', 'counting', 'transparent', 'IEBC', 'polling station'],
    one_word_tag: 'Voting'
  },
  {
    chapter_number: 7, article_number: 87, article_title: 'Electoral disputes',
    content: 'Parliament shall establish mechanisms for timely settling of electoral disputes. Petitions concerning an election, other than presidential, shall be filed within twenty-eight days after declaration of results.',
    simplified_content: 'If you believe an election was unfair, you can file a petition within 28 days. Courts will settle election disputes.',
    keywords: ['election dispute', 'petition', 'court', 'results', 'challenge', '28 days'],
    one_word_tag: 'Disputes'
  },
  {
    chapter_number: 7, article_number: 88, article_title: 'Independent Electoral and Boundaries Commission',
    content: 'There is established the IEBC, responsible for conducting elections and referenda, continuous voter registration, revision of the voters roll, delimitation of constituencies and wards, regulation of party nomination, settlement of electoral disputes, investigation of electoral misconduct, voter education, and facilitation of election observation and monitoring.',
    simplified_content: 'The IEBC runs elections, registers voters, creates constituency boundaries, and investigates election fraud.',
    keywords: ['IEBC', 'electoral commission', 'elections', 'boundaries', 'voter registration', 'constituencies'],
    one_word_tag: 'IEBC'
  },
  {
    chapter_number: 7, article_number: 89, article_title: 'Delimitation of electoral units',
    content: 'There shall be two hundred and ninety constituencies. The IEBC shall review names and boundaries at intervals of not less than eight years and not more than twelve years.',
    simplified_content: 'Kenya has 290 constituencies. The IEBC reviews boundaries every 8 to 12 years.',
    keywords: ['constituencies', 'boundaries', 'delimitation', '290', 'IEBC'],
    one_word_tag: 'Constituencies'
  },
  {
    chapter_number: 7, article_number: 90, article_title: 'Allocation of party list seats',
    content: 'Elections for certain seats shall be on the basis of proportional representation by use of party lists.',
    simplified_content: 'Some parliamentary seats are filled through party lists to ensure proportional representation and inclusion.',
    keywords: ['party list', 'proportional representation', 'seats', 'nomination', 'parliament'],
    one_word_tag: 'PartyList'
  },
  {
    chapter_number: 7, article_number: 91, article_title: 'Basic requirements for political parties',
    content: 'Every political party shall: have a national character; have a democratically elected governing body; promote national unity; practise democracy through regular, fair and free elections within the party; respect rights of all persons including minorities and marginalised groups; promote human rights, gender equality and equity; promote the objects of this Constitution and rule of law; and subscribe to the code of conduct.',
    simplified_content: 'Political parties must be democratic, national in character, respect rights, promote gender equality, and follow the constitution.',
    keywords: ['political parties', 'party', 'democracy', 'national character', 'gender'],
    one_word_tag: 'Parties'
  },
  {
    chapter_number: 7, article_number: 92, article_title: 'Legislation on political parties',
    content: 'Parliament shall enact legislation to provide for reasonable and equitable allocation of airtime by State-owned and other broadcasting media to political parties, and regulation of freedom to broadcast for fair election campaigning.',
    simplified_content: 'Parliament must ensure political parties get fair media airtime, especially during election campaigns.',
    keywords: ['political parties', 'legislation', 'media airtime', 'campaigns', 'broadcasting'],
    one_word_tag: 'PartyLaw'
  },

  // ─── CHAPTER 8: Legislature ───
  {
    chapter_number: 8, article_number: 93, article_title: 'Establishment of Parliament',
    content: 'There is established a Parliament of Kenya, consisting of the National Assembly and the Senate.',
    simplified_content: 'Kenya\'s Parliament has two houses: the National Assembly and the Senate.',
    keywords: ['parliament', 'national assembly', 'senate', 'legislature', 'bunge', 'MPs'],
    one_word_tag: 'Parliament'
  },
  {
    chapter_number: 8, article_number: 94, article_title: 'Role of Parliament',
    content: 'The legislative authority of the Republic is derived from the people and, at the national level, is vested in and exercised by Parliament. Parliament manifests the diversity of the nation, represents the will of the people, and exercises their sovereignty. Parliament shall protect this Constitution and promote democratic governance.',
    simplified_content: 'Parliament makes laws for Kenya. It represents the people, protects the Constitution, and can amend it.',
    keywords: ['parliament', 'laws', 'legislation', 'national assembly', 'senate', 'sovereignty', 'bunge'],
    one_word_tag: 'Laws'
  },
  {
    chapter_number: 8, article_number: 95, article_title: 'Role of the National Assembly',
    content: 'The National Assembly represents the people of constituencies and special interests, deliberates on issues of concern, enacts legislation, determines allocation of national revenue, appropriates funds, exercises oversight over national revenue and expenditure, reviews conduct of the President and other State officers, and initiates removal from office.',
    simplified_content: 'The National Assembly represents constituencies, makes laws, controls the budget, and can remove the President through impeachment.',
    keywords: ['national assembly', 'MPs', 'budget', 'oversight', 'impeachment', 'legislation'],
    one_word_tag: 'Assembly'
  },
  {
    chapter_number: 8, article_number: 96, article_title: 'Role of the Senate',
    content: 'The Senate represents the counties and serves to protect their interests. The Senate participates in law-making by considering Bills concerning counties, determines allocation of national revenue among counties, exercises oversight over national revenue allocated to county governments, and participates in the oversight of State officers.',
    simplified_content: 'The Senate represents counties, protects county interests, controls county revenue allocation, and participates in impeachment.',
    keywords: ['senate', 'senators', 'counties', 'county interests', 'revenue allocation'],
    one_word_tag: 'Senate'
  },
  {
    chapter_number: 8, article_number: 97, article_title: 'Membership of National Assembly',
    content: 'The National Assembly consists of: 290 members each elected by registered voters of single member constituencies; 47 women each elected by registered voters of the counties; 12 members nominated by parliamentary political parties to represent special interests including youth, persons with disabilities and workers; and the Speaker, who is an ex officio member.',
    simplified_content: 'The National Assembly has 290 constituency MPs, 47 women county reps, 12 nominated members for special interests, and the Speaker.',
    keywords: ['national assembly', 'membership', '290', '47', 'nominated', 'speaker', 'MPs'],
    one_word_tag: 'Members'
  },
  {
    chapter_number: 8, article_number: 98, article_title: 'Membership of Senate',
    content: 'The Senate consists of: 47 members each elected by the registered voters of the counties; 16 women members nominated by political parties; 2 members representing the youth; 2 members representing persons with disabilities; and the Speaker, who is an ex officio member.',
    simplified_content: 'The Senate has 47 elected senators (one per county), 16 nominated women, 2 youth reps, 2 disability reps, and the Speaker.',
    keywords: ['senate', 'membership', '47', 'senators', 'nominated', 'speaker'],
    one_word_tag: 'Senators'
  },

  // ─── CHAPTER 9: Executive ───
  {
    chapter_number: 9, article_number: 129, article_title: 'Principles of executive authority',
    content: 'Executive authority derives from the people of Kenya and shall be exercised in accordance with this Constitution. Executive authority shall be exercised in a manner compatible with the principle of service to the people of Kenya, and for their well-being and benefit.',
    simplified_content: 'Executive power comes from the people and must be used to serve the people of Kenya.',
    keywords: ['executive', 'authority', 'president', 'government', 'power', 'service'],
    one_word_tag: 'Executive'
  },
  {
    chapter_number: 9, article_number: 130, article_title: 'The National Executive',
    content: 'The national executive comprises the President, the Deputy President and the rest of the Cabinet. The composition shall reflect the regional and ethnic diversity of the people of Kenya.',
    simplified_content: 'The national executive is the President, Deputy President, and Cabinet. It must reflect Kenya\'s diversity.',
    keywords: ['national executive', 'president', 'deputy president', 'cabinet', 'diversity'],
    one_word_tag: 'NationalExec'
  },
  {
    chapter_number: 9, article_number: 131, article_title: 'Authority of the President',
    content: 'The President: is the Head of State and Government; exercises executive authority with the assistance of the Deputy President and Cabinet Secretaries; is the Commander-in-Chief of the Kenya Defence Forces; is the chairperson of the National Security Council; and is a symbol of national unity.',
    simplified_content: 'The President is Head of State, Head of Government, and Commander-in-Chief of the military. They symbolise national unity.',
    keywords: ['president', 'head of state', 'commander in chief', 'authority', 'rais', 'government'],
    one_word_tag: 'President'
  },
  {
    chapter_number: 9, article_number: 132, article_title: 'Functions of the President',
    content: 'The President shall address the opening of each newly elected Parliament, address a special sitting of Parliament once every year, report to the nation annually on national values, nominate and appoint Cabinet Secretaries and the Attorney-General with approval of the National Assembly, chair Cabinet meetings, and direct and co-ordinate the functions of ministries.',
    simplified_content: 'The President addresses Parliament, appoints Cabinet Secretaries and the AG, chairs Cabinet, and reports to the nation annually.',
    keywords: ['president', 'functions', 'cabinet', 'appointments', 'address', 'parliament'],
    one_word_tag: 'Presidential'
  },
  {
    chapter_number: 9, article_number: 137, article_title: 'Qualifications for election as President',
    content: 'A person qualifies for nomination as a presidential candidate if the person is a citizen by birth, is qualified to stand for election as a member of Parliament, is nominated by a political party or is an independent candidate, and is nominated by not fewer than two thousand voters from each of a majority of the counties.',
    simplified_content: 'To run for President, you must be a Kenyan citizen by birth, be nominated by a party or as independent, and have 2000+ supporters from most counties.',
    keywords: ['president', 'qualification', 'nomination', 'election', 'citizen by birth', 'rais'],
    one_word_tag: 'Qualification'
  },
  {
    chapter_number: 9, article_number: 138, article_title: 'Procedure at presidential election',
    content: 'A candidate shall be declared elected as President if the candidate receives more than half of all the votes cast and at least twenty-five per cent of the votes cast in each of more than half of the counties.',
    simplified_content: 'To win the presidency, a candidate needs more than 50% of all votes AND at least 25% in more than half the counties.',
    keywords: ['presidential election', '50%', '25%', 'counties', 'votes', 'winner', 'uchaguzi'],
    one_word_tag: 'Election'
  },
  {
    chapter_number: 9, article_number: 143, article_title: 'Protection from legal proceedings',
    content: 'Criminal proceedings shall not be instituted against the President during their tenure of office. Civil proceedings shall not be instituted in respect of anything done in the exercise of presidential powers. Limitation periods are paused during the President\'s tenure.',
    simplified_content: 'The President cannot be taken to court while in office, but after leaving office they can be prosecuted. Time limits pause while they serve.',
    keywords: ['immunity', 'president', 'legal proceedings', 'prosecution', 'court', 'protection'],
    one_word_tag: 'Immunity'
  },
  {
    chapter_number: 9, article_number: 144, article_title: 'Removal of President on grounds of incapacity',
    content: 'A member of the Cabinet, supported by at least one third of all members of the National Assembly, may move a motion for investigation of the President\'s physical or mental capacity to perform the functions of office.',
    simplified_content: 'The President can be removed if a third of MPs agree they are physically or mentally unable to perform their duties.',
    keywords: ['removal', 'president', 'incapacity', 'mental', 'physical', 'motion'],
    one_word_tag: 'Incapacity'
  },
  {
    chapter_number: 9, article_number: 145, article_title: 'Removal of President by impeachment',
    content: 'A member of the National Assembly, supported by at least a third of all members, may move a motion for impeachment of the President: on the ground of a gross violation of the Constitution or other law; where there are serious reasons for believing the President has committed a crime; or for gross misconduct.',
    simplified_content: 'The President can be impeached for violating the Constitution, committing a crime, or gross misconduct. A third of MPs must support the motion.',
    keywords: ['impeachment', 'president', 'removal', 'misconduct', 'violation', 'crime'],
    one_word_tag: 'Impeachment'
  },
  {
    chapter_number: 9, article_number: 148, article_title: 'Election of Deputy President',
    content: 'Each candidate in a presidential election shall nominate a person who is qualified as a candidate for Deputy President. The IEBC shall declare the candidate nominated by the elected President to be elected as Deputy President.',
    simplified_content: 'The Deputy President runs alongside the presidential candidate as a running mate. If the president wins, the running mate becomes DP.',
    keywords: ['deputy president', 'running mate', 'election', 'nomination', 'DP'],
    one_word_tag: 'DeputyPresident'
  },
  {
    chapter_number: 9, article_number: 152, article_title: 'The Cabinet',
    content: 'The Cabinet consists of the President, the Deputy President, the Attorney-General, and not fewer than fourteen and not more than twenty-two Cabinet Secretaries. The President shall nominate Cabinet Secretaries with approval of the National Assembly. A Cabinet Secretary shall not be a Member of Parliament.',
    simplified_content: 'The Cabinet has the President, DP, AG, and 14-22 Cabinet Secretaries. Cabinet Secretaries cannot be MPs.',
    keywords: ['cabinet', 'cabinet secretary', 'minister', 'government', 'president', 'appointment'],
    one_word_tag: 'Cabinet'
  },
  {
    chapter_number: 9, article_number: 154, article_title: 'Secretary to the Cabinet',
    content: 'The Secretary to the Cabinet shall have charge of the Cabinet Office, be responsible for arranging business and keeping minutes of the Cabinet, convey decisions of the Cabinet, and perform other functions as directed by the Cabinet. The Secretary is nominated and appointed by the President with approval of the National Assembly.',
    simplified_content: 'The Secretary to the Cabinet manages the Cabinet office, keeps records, and communicates decisions.',
    keywords: ['secretary', 'cabinet office', 'minutes', 'administration'],
    one_word_tag: 'CabinetSecretary'
  },

  // ─── CHAPTER 10: Judiciary ───
  {
    chapter_number: 10, article_number: 159, article_title: 'Judicial authority',
    content: 'Judicial authority is derived from the people and vests in the courts and tribunals established by this Constitution. In exercising judicial authority, the courts shall be guided by the principles: justice shall be done to all irrespective of status; justice shall not be delayed; alternative dispute resolution shall be promoted; justice shall be administered without undue regard to technicalities; and the purpose and principles of this Constitution shall be protected and promoted.',
    simplified_content: 'Courts get their power from the people. Justice must be fair, prompt, and accessible. Alternative methods like mediation are encouraged.',
    keywords: ['judiciary', 'courts', 'justice', 'judges', 'tribunals', 'mahakama', 'law'],
    one_word_tag: 'Judiciary'
  },
  {
    chapter_number: 10, article_number: 160, article_title: 'Independence of the Judiciary',
    content: 'In the exercise of judicial authority, the Judiciary shall be subject only to this Constitution and the law and shall not be subject to the control or direction of any person or authority. The office of a judge shall not be abolished while there is a substantive holder. Judges\' remuneration shall not be varied to their disadvantage. A member of the Judiciary is not liable for anything done in good faith in the lawful performance of a judicial function.',
    simplified_content: 'The Judiciary is independent — no one can tell judges what to decide. Judges are protected from interference and cannot be sued for honest decisions.',
    keywords: ['independence', 'judiciary', 'judges', 'separation of powers', 'courts'],
    one_word_tag: 'Independence'
  },
  {
    chapter_number: 10, article_number: 161, article_title: 'Judicial offices and officers',
    content: 'The Judiciary consists of the judges of the superior courts, magistrates, other judicial officers and staff. There is established the office of Chief Justice, who shall be the Head of the Judiciary, the President of the Supreme Court, and shall chair the Judicial Service Commission.',
    simplified_content: 'The Judiciary includes judges, magistrates, and court staff. The Chief Justice heads the entire Judiciary and leads the Supreme Court.',
    keywords: ['chief justice', 'judges', 'magistrates', 'judicial officers', 'CJ'],
    one_word_tag: 'Officers'
  },
  {
    chapter_number: 10, article_number: 162, article_title: 'System of courts',
    content: 'The superior courts are the Supreme Court, the Court of Appeal, the High Court, and courts with High Court status established by Parliament to hear disputes relating to employment, labour, environment, and land.',
    simplified_content: 'Kenya\'s court system has the Supreme Court at the top, then Court of Appeal, then High Court. Special courts handle land and labour disputes.',
    keywords: ['courts', 'supreme court', 'court of appeal', 'high court', 'labour court', 'land court'],
    one_word_tag: 'Courts'
  },
  {
    chapter_number: 10, article_number: 163, article_title: 'Supreme Court',
    content: 'The Supreme Court consists of a Chief Justice as president of the court, a Deputy Chief Justice as vice-president, and five other judges. The Supreme Court shall have exclusive original jurisdiction to hear disputes relating to presidential elections and appellate jurisdiction to hear appeals from the Court of Appeal.',
    simplified_content: 'The Supreme Court has 7 judges led by the Chief Justice. It handles presidential election disputes and is the final court of appeal.',
    keywords: ['supreme court', 'chief justice', 'appeal', 'presidential petition', 'highest court'],
    one_word_tag: 'SupremeCourt'
  },
  {
    chapter_number: 10, article_number: 165, article_title: 'High Court',
    content: 'There is established the High Court, which shall have unlimited original jurisdiction in criminal and civil matters and jurisdiction to determine whether a right or fundamental freedom in the Bill of Rights has been denied, violated, infringed or threatened.',
    simplified_content: 'The High Court handles all types of cases and specifically protects your constitutional rights. It has unlimited jurisdiction.',
    keywords: ['high court', 'jurisdiction', 'rights', 'criminal', 'civil', 'constitutional'],
    one_word_tag: 'HighCourt'
  },

  // ─── CHAPTER 11: Devolution ───
  {
    chapter_number: 11, article_number: 174, article_title: 'Objects of devolution',
    content: 'The objects of devolution are to promote democratic and accountable exercise of power; foster national unity by recognising diversity; give powers of self-governance to the people; recognise the right of communities to manage their own affairs; protect minorities and marginalised communities; promote social and economic development and the provision of proximate, easily accessible services; ensure equitable sharing of national and local resources; facilitate decentralisation of State organs; and enhance checks and balances.',
    simplified_content: 'Devolution brings government closer to the people. Counties manage local affairs, share resources fairly, and deliver services directly to citizens.',
    keywords: ['devolution', 'county', 'decentralisation', 'services', 'self-governance', 'local government', 'kaunti'],
    one_word_tag: 'Devolution'
  },
  {
    chapter_number: 11, article_number: 175, article_title: 'Principles of devolved government',
    content: 'County governments shall be based on democratic principles and separation of powers, shall have reliable sources of revenue, and no more than two-thirds of representative bodies shall be of the same gender.',
    simplified_content: 'County governments must be democratic, have enough funding, and meet the two-thirds gender rule.',
    keywords: ['devolution', 'county government', 'democratic', 'gender rule', 'revenue'],
    one_word_tag: 'Principles'
  },
  {
    chapter_number: 11, article_number: 176, article_title: 'County governments',
    content: 'There shall be a county government for each county, consisting of a county assembly and a county executive. Every county government shall decentralise its functions and services to the extent that it is efficient and practicable.',
    simplified_content: 'Each of Kenya\'s 47 counties has its own government with a county assembly and a county executive led by the Governor.',
    keywords: ['county government', 'governor', 'county assembly', '47 counties', 'kaunti'],
    one_word_tag: 'Counties'
  },
  {
    chapter_number: 11, article_number: 185, article_title: 'Legislative authority of county assemblies',
    content: 'The legislative authority of a county is vested in and exercised by its county assembly. A county assembly may make laws necessary for the performance of the functions of the county government. A county assembly may exercise oversight over the county executive committee and approve plans and policies for county resources and development.',
    simplified_content: 'County assemblies make local laws, oversee the county executive, and approve plans for county resources and development.',
    keywords: ['county assembly', 'MCAs', 'local laws', 'oversight', 'county legislation'],
    one_word_tag: 'MCAs'
  },
  {
    chapter_number: 11, article_number: 186, article_title: 'Respective functions and powers',
    content: 'Except as otherwise provided by this Constitution, the functions and powers of the national government and the county governments are as set out in the Fourth Schedule.',
    simplified_content: 'The Constitution spells out which functions belong to the national government and which to county governments in the Fourth Schedule.',
    keywords: ['functions', 'powers', 'national government', 'county government', 'fourth schedule'],
    one_word_tag: 'Functions'
  },
  {
    chapter_number: 11, article_number: 187, article_title: 'Transfer of functions and powers',
    content: 'A function or power of government at one level may be transferred to a government at the other level by agreement if the function would be more effectively performed by the receiving government, and the transfer is approved by constitutional legislation.',
    simplified_content: 'Functions can be transferred between national and county governments if both levels agree and it makes services more effective.',
    keywords: ['transfer', 'functions', 'powers', 'national', 'county', 'agreement'],
    one_word_tag: 'Transfer'
  },

  // ─── CHAPTER 12: Public Finance ───
  {
    chapter_number: 12, article_number: 201, article_title: 'Principles of public finance',
    content: 'The following principles shall guide all aspects of public finance: openness and accountability including public participation; the public finance system shall promote an equitable society with fair sharing of the burden of taxation and equitable sharing of revenue among national and county governments; the burdens and benefits of the use of resources shall be shared between present and future generations; public money shall be used prudently and responsibly; and financial management shall be responsible with clear fiscal reporting.',
    simplified_content: 'Public money must be managed openly and responsibly. Taxes must be fair. Resources must be shared equitably between national and county governments.',
    keywords: ['public finance', 'budget', 'tax', 'accountability', 'revenue', 'expenditure', 'kodi'],
    one_word_tag: 'Finance'
  },
  {
    chapter_number: 12, article_number: 202, article_title: 'Equitable sharing of national revenue',
    content: 'Revenue raised nationally shall be shared equitably among the national and county governments. County governments may be given additional allocations from the national government\'s share either conditionally or unconditionally.',
    simplified_content: 'Revenue collected nationally must be shared fairly between the national government and the 47 county governments.',
    keywords: ['revenue sharing', 'equitable share', 'counties', 'national revenue', 'allocation'],
    one_word_tag: 'Revenue'
  },
  {
    chapter_number: 12, article_number: 203, article_title: 'Equitable share and other financial laws',
    content: 'Criteria for equitable shares include: the national interest; provision for public debt; needs of the national government; the need to ensure county governments can perform their functions; fiscal capacity of counties; developmental needs; economic disparities; the need for affirmative action; economic optimisation of each county; stable and predictable allocations; and flexibility for emergencies.',
    simplified_content: 'Revenue sharing considers county needs, economic disparities, disadvantaged areas, and the ability of counties to raise their own revenue.',
    keywords: ['equitable share', 'criteria', 'revenue', 'counties', 'allocation', 'needs'],
    one_word_tag: 'EquitableShare'
  },
  {
    chapter_number: 12, article_number: 210, article_title: 'Imposition of tax',
    content: 'No tax or licensing fee may be imposed, waived or varied except as provided by legislation. If legislation permits waiver of any tax, a public record of each waiver shall be maintained and reported to the Auditor-General.',
    simplified_content: 'Taxes can only be imposed through legislation. Any tax waiver must be recorded and reported to the Auditor-General.',
    keywords: ['tax', 'taxation', 'license', 'kodi', 'legislation', 'waiver', 'auditor'],
    one_word_tag: 'Tax'
  },
  {
    chapter_number: 12, article_number: 215, article_title: 'Commission on Revenue Allocation',
    content: 'There is established the Commission on Revenue Allocation. The Commission shall consist of a chairperson nominated by the President, persons nominated by political parties in the National Assembly and Senate according to their proportion, and the Principal Secretary in the Ministry responsible for finance.',
    simplified_content: 'The Commission on Revenue Allocation (CRA) ensures fair sharing of national revenue between national and county governments.',
    keywords: ['CRA', 'commission on revenue allocation', 'revenue', 'sharing', 'counties'],
    one_word_tag: 'CRA'
  },
  {
    chapter_number: 12, article_number: 216, article_title: 'Functions of CRA',
    content: 'The principal function of the CRA is to make recommendations concerning the basis for the equitable sharing of revenue raised nationally between national and county governments, and among county governments. It shall also make recommendations on other matters concerning the financing and financial management by county governments.',
    simplified_content: 'The CRA recommends how to divide revenue fairly between national and county governments.',
    keywords: ['CRA', 'functions', 'revenue', 'recommendations', 'equitable sharing'],
    one_word_tag: 'CRAFunctions'
  },
  {
    chapter_number: 12, article_number: 217, article_title: 'Division of revenue',
    content: 'Once every five years, the Senate shall, by resolution, determine the basis for allocating among the counties the share of national revenue that is annually allocated to the county level of government.',
    simplified_content: 'Every five years, the Senate decides the formula for dividing national revenue among the 47 counties.',
    keywords: ['division', 'revenue', 'senate', 'formula', 'counties', 'allocation'],
    one_word_tag: 'Division'
  },
  {
    chapter_number: 12, article_number: 218, article_title: 'Annual division and allocation of revenue',
    content: 'At least two months before the end of each financial year, there shall be introduced in Parliament: a Division of Revenue Bill, dividing revenue between national and county levels; and a County Allocation of Revenue Bill, dividing revenue among the counties.',
    simplified_content: 'Each year, Parliament passes laws to divide revenue between national and county governments, and among the 47 counties.',
    keywords: ['annual', 'division', 'revenue bill', 'county allocation', 'budget', 'financial year'],
    one_word_tag: 'AnnualRevenue'
  },
  {
    chapter_number: 12, article_number: 226, article_title: 'Accounts and audit of public entities',
    content: 'An Act of Parliament shall provide for keeping of financial records and auditing of accounts of all governments and public entities. The Auditor-General shall audit and report on accounts of the national and county governments, all funds and authorities, the courts, every commission and independent office, the National Assembly, the Senate, and the county assemblies.',
    simplified_content: 'All government accounts must be properly kept and audited. The Auditor-General audits national, county, and all public entity accounts.',
    keywords: ['accounts', 'audit', 'auditor-general', 'public finance', 'transparency', 'fiscal'],
    one_word_tag: 'Audit'
  },
  {
    chapter_number: 12, article_number: 227, article_title: 'Procurement of public goods and services',
    content: 'When a State organ or public entity contracts for goods or services, it shall do so in accordance with a system that is fair, equitable, transparent, competitive and cost-effective. Parliament shall prescribe a framework for procurement and asset disposal.',
    simplified_content: 'Government procurement must be fair, transparent, and competitive. Corruption in procurement is unconstitutional.',
    keywords: ['procurement', 'tenders', 'goods', 'services', 'transparent', 'competitive', 'corruption'],
    one_word_tag: 'Procurement'
  },
  {
    chapter_number: 12, article_number: 228, article_title: 'Controller of Budget',
    content: 'There shall be a Controller of Budget who shall be nominated by the President and appointed with approval of the National Assembly. The Controller of Budget shall oversee implementation of the budgets of national and county governments by authorising withdrawals from public funds.',
    simplified_content: 'The Controller of Budget oversees how the national and county governments spend money. They approve withdrawals from public funds.',
    keywords: ['controller of budget', 'budget', 'spending', 'public funds', 'oversight'],
    one_word_tag: 'Budget'
  },
  {
    chapter_number: 12, article_number: 229, article_title: 'Auditor-General',
    content: 'There shall be an Auditor-General who shall be nominated by the President and appointed with approval of the National Assembly. The Auditor-General shall audit and report on accounts of each entity and may audit any entity funded from public funds. The Auditor-General shall within six months after the end of each financial year submit audit reports to Parliament or the relevant county assembly.',
    simplified_content: 'The Auditor-General audits all government spending and reports to Parliament within 6 months of each financial year end.',
    keywords: ['auditor-general', 'audit', 'accounts', 'report', 'parliament', 'transparency'],
    one_word_tag: 'AuditorGeneral'
  }
];

const seedArticles = articles.map((a) => ({
  ...a,
  chapter_title: chapterMeta[a.chapter_number].title,
  category: chapterMeta[a.chapter_number].category
}));

module.exports = { seedArticles };
