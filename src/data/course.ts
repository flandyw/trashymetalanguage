/** App-authored paraphrases of the supplied study design's outcomes and skills. */
export interface AreaGuide {
  page: number
  outcome: string
  focus: string[]
  task: string
  planning: string[]
  caution: string
}
export const AREA_GUIDES: Record<string, AreaGuide> = {
  'u1-nature-functions': {
    page: 23, outcome: 'Identify and describe central aspects of human language and the functions it serves.',
    focus: ['Language as a system of signs: arbitrary relationships and shared conventions', 'Functions, register, tenor and audience', 'Situational context: field, mode, setting and text type', 'Cultural context: values, attitudes and beliefs', 'Speech, writing, prosody and paralinguistic meaning'],
    task: 'Explain how two language choices help this text perform a function for its particular audience.',
    planning: ['Identify the field, mode, audience and relationship.', 'Quote two precise examples and name their features.', 'Explain what each choice does in this exchange, rather than listing definitions.'],
    caution: 'Mode and register are different. A typed conversation can be informal; a prepared speech can be formal.',
  },
  'u1-acquisition': {
    page: 24, outcome: 'Describe first- and additional-language acquisition and investigate it using linguistic theories.',
    focus: ['Development across phonology, morphology, lexicology, syntax and semantics', 'Universal grammar and usage-based accounts', 'Critical period and differences between child and adult acquisition', 'Multilingualism and code switching in learning', 'Fieldwork: informed consent, collection and interpretation of samples; IPA'],
    task: 'Analyse a feature of the child’s language. Explain the pattern and what it suggests about language development, with a limitation of the sample.',
    planning: ['Distinguish the child’s actual utterance from the adult’s report.', 'Identify a developmental pattern and the relevant subsystem.', 'Separate observation from theoretical interpretation. One utterance cannot establish a developmental stage or prove a theory.'],
    caution: 'Over-generalisation is evidence of a productive pattern, not simply a failure to imitate adults. Collect real language data only with appropriate consent.',
  },
  'u2-english-across-time': {
    page: 26, outcome: 'Describe language change, analyse its effects and examine attitudes towards it.',
    focus: ['English and its Indo-European relationships; historical periods', 'Codification and standardisation of spelling and grammar', 'Change across subsystems: Great Vowel Shift, word formation, borrowing, word order and semantic change', 'Prescriptivist and descriptivist attitudes', 'Introduce both electives; study either Incursions or Inventions in depth'],
    task: 'Identify a linguistic change or an attitude towards change in this text. Explain the social or technological context and support the analysis with evidence.',
    planning: ['Name the process precisely; do not confuse compounding with blending.', 'Distinguish a writer’s evaluation from a description of usage.', 'For historical claims, record an etymological source and date; a modern invented text is not historical evidence.'],
    caution: 'Incursions covers Vikings, the Norman conquest, religion and plagues. Inventions covers printing, dictionaries, typewriters/keyboards and the internet. The course requires depth in one elective, not both.',
  },
  'u2-englishes-in-contact': {
    page: 27, outcome: 'Explain effects of the global spread of English through analysis of spoken and written texts.',
    focus: ['Trade, colonisation and the global spread of English', 'Lingua franca uses and distinctive English-based varieties', 'Pidgins and creoles', 'Language, culture and worldview', 'Maintenance, shift and reclamation; effects on Aboriginal and Torres Strait Islander languages'],
    task: 'Explain an effect of language contact represented in the text and connect it to language use, cultural identity or language maintenance.',
    planning: ['Identify the community, setting and relationship between languages.', 'Distinguish maintenance, shift and reclamation.', 'Discuss social power and consequences without treating a variety as deficient.'],
    caution: 'Aboriginal Australian Englishes are varieties of English. They are not interchangeable with Aboriginal and Torres Strait Islander languages. A constructed scenario cannot establish facts about a real community.',
  },
  'u3-informality': {
    page: 30, outcome: 'Identify, describe and analyse distinctive features of informal spoken and written texts.',
    focus: ['Context, function, tenor and audience; Standard English in informal texts', 'Colloquial language, slang, taboo language, dysphemism and swearing', 'Spoken discourse: cooperation, repair, turn-taking and non-fluency', 'Politeness, rapport, solidarity, equality and in-group membership', 'Cohesion, coherence and transcript conventions, including line numbers'],
    task: 'Analyse how two features of this text support rapport or cooperation in its particular context.',
    planning: ['Establish the participants, relationship, setting and function.', 'Use exact quotes or line references and precise metalanguage across subsystems.', 'Explain how choices manage face, solidarity or the interaction; distinguish cohesion from coherence.'],
    caution: 'Informality is not evidence of poor grammar. Standard English can be used informally, and slang does not automatically create solidarity with every audience.',
  },
  'u3-formality': {
    page: 32, outcome: 'Identify, describe and analyse distinctive features of formal spoken and written texts.',
    focus: ['Context, function, tenor and audience; preparation and editing', 'Rhetoric, jargon, euphemism, double speak and non-discriminatory language', 'Politeness, expertise, social distance and authority', 'Clarifying, manipulating, obfuscating and negotiating social taboos', 'Cohesion, coherence, spoken discourse and transcript conventions'],
    task: 'Analyse how language choices establish authority or manage the relationship with the audience. Evaluate whether they clarify or obscure the message.',
    planning: ['Identify the institution or speaker, audience and communicative purpose.', 'Quote features from at least two relevant subsystems.', 'Connect each choice to social distance, expertise, face needs or clarity in this text.'],
    caution: 'Formality does not guarantee clarity or hostility. Jargon can establish expertise or exclude; the effect depends on the audience and context.',
  },
  'u4-australian-society': {
    page: 35, outcome: 'Analyse Australian English varieties, attitudes towards them and the identities they reflect.',
    focus: ['Standard Australian English and institutional prestige', 'Broad, General and Cultivated Australian English accents', 'Aboriginal Australian Englishes and migrant ethnolects', 'National identity, stereotypes and attitudes towards varieties', 'Global contact, modern technologies and changing Australian Englishes'],
    task: 'Analyse how the text constructs an Australian identity or evaluates an English variety. Support your discussion with specific linguistic evidence.',
    planning: ['Identify a language choice rather than assuming identity from a speaker’s name.', 'Connect evidence to national identity, prestige or attitudes.', 'Consider who is included, excluded or stereotyped and qualify the interpretation.'],
    caution: 'Broad, General and Cultivated describe accents. Do not infer accent, ethnicity, intelligence or social class from a written word alone.',
  },
  'u4-identity': {
    page: 36, outcome: 'Analyse how linguistic repertoires and variation reflect and convey individual and group identities.',
    focus: ['Sociolects, idiolects and intersecting social variables', 'Identity as reflected, imposed, negotiated and conveyed', 'Social expectations, community attitudes and discrimination', 'Overt and covert prestige; access to power', 'Code switching, linguistic repertoire and group belonging'],
    task: 'Analyse how language choices negotiate group membership or prestige in this text. Consider the role of the audience and community norms.',
    planning: ['Identify the relevant speech community and its norms.', 'Quote evidence of a repertoire choice, style shift or evaluation.', 'Explain prestige in relation to the community; consider alternative interpretations and avoid deterministic stereotypes.'],
    caution: 'Covert prestige is prestige within a group, not an absence of prestige. A person can draw on different varieties for different audiences.',
  },
}

export const ANALYSIS_CHECKS = [
  ['evidence', 'I quote precise evidence and give line references where available.'],
  ['metalanguage', 'I name the feature and subsystem accurately.'],
  ['context', 'I link my explanation to these participants, this audience and this setting.'],
  ['effect', 'I explain a function or social effect instead of restating a definition.'],
  ['qualified', 'I qualify claims and distinguish observation from inference.'],
] as const

export const UNIT_CONCEPTS: Record<number, {term:string; explanation:string}[]> = {
  1: [
    {term:'Function and purpose',explanation:'Jakobson’s six functions offer categories for what language does. A purpose is a contextual reason for creating a text, such as establishing expertise or negotiating a social taboo; purposes are not a closed list.'},
    {term:'Situational and cultural context',explanation:'Situational context includes field, tenor, mode, setting and text type. Cultural context includes values, attitudes and beliefs. Support cultural interpretations with the language and supplied contextual information.'},
    {term:'Universal grammar and usage-based accounts',explanation:'Universal grammar proposes an innate basis for linguistic structure. Usage-based accounts explain development through interaction and general cognitive abilities. Distinguish a theoretical explanation from an observation in a language sample.'},
    {term:'Critical period and fieldwork',explanation:'The study design discusses a proposed period from birth to puberty when acquisition is especially accessible. Do not turn that hypothesis into a diagnosis from one utterance. Collect samples with appropriate consent and document their context.'},
    {term:'IPA and spelling',explanation:'IPA represents speech sounds; ordinary spelling does not consistently do so. The supplied design specifies the Australian English transcription described by Harrington, Cox & Evans (1997). Use phonetic evidence to analyse a sound process.'},
  ],
  2: [
    {term:'Codification and standardisation',explanation:'Codification records and develops norms in reference systems such as dictionaries and grammar guides. Standardisation promotes greater uniformity. Neither process means that all variation disappears.'},
    {term:'Prescriptivism and descriptivism',explanation:'A prescriptivist position evaluates how language should be used. A descriptivist approach describes observed patterns of use. Identify the position through evidence rather than assuming every complaint is about grammar.'},
    {term:'Maintenance, shift and reclamation',explanation:'Maintenance supports continued use of a language. Shift involves replacing its use with another language. Reclamation seeks to revitalise a language at risk of loss and is connected to community identity and agency.'},
    {term:'Lingua franca, pidgin and creole',explanation:'A lingua franca enables communication across language groups. In the study design’s account, a pidgin arises through contact and is initially no community’s first language; a creole develops as a community’s first language. These labels require sociolinguistic evidence.'},
    {term:'A historical claim needs a source',explanation:'Use dated texts, etymological dictionaries and other appropriate sources to trace change. An invented modern example can help practise a process, but cannot establish when or why a real change occurred.'},
  ],
  3: [
    {term:'Register is a continuum',explanation:'Analyse formality through a cluster of choices across subsystems in context. Spoken does not mean informal, written does not mean formal, and Standard English can be used in both.'},
    {term:'Function is not sentence type',explanation:'An interrogative can function as a request rather than simply seek information. Relate grammatical form to communicative function and the text’s purposes, using the participants and setting.'},
    {term:'Positive and negative face',explanation:'Positive face concerns being valued or approved of; negative face concerns freedom of action. Politeness strategies manage these needs. Negative politeness is not a synonym for rudeness.'},
    {term:'Cohesion and coherence',explanation:'Cohesion involves links such as reference, lexical relations and conjunctions. Coherence concerns how a text makes sense through such links, inference, logical ordering and conventions. Name the actual link before explaining its contribution.'},
    {term:'Transcript evidence',explanation:'Use the supplied legend and line numbers. A pause records timing, not a proven emotion; a false start can accompany reformulation. Explain how a sequence works in the interaction rather than counting disfluencies.'},
  ],
  4: [
    {term:'Overt and covert prestige',explanation:'Overt prestige attaches to standard variants valued by powerful institutions. Covert prestige attaches to local forms valued within a group. Explain whose norms are operating and how a choice gains value in that context.'},
    {term:'Accent, dialect, sociolect and idiolect',explanation:'Accent concerns pronunciation; dialect includes distinctive vocabulary and grammar. A sociolect is associated with a social group; an idiolect concerns an individual’s patterns at a particular time. One written form cannot establish a speaker’s accent.'},
    {term:'Repertoire and code switching',explanation:'A linguistic repertoire gives a speaker resources for different contexts. The supplied design defines code switching as moving between languages in an interaction. Do not automatically label every shift in formality as code switching.'},
    {term:'Standard Australian English and identity',explanation:'SAE is a codified prestige variety in Australia, not a measure of a speaker’s intelligence or the inherent worth of another variety. Analyse how institutions and communities attach value to language.'},
    {term:'Varieties and stereotyping',explanation:'Distinguish Aboriginal Australian Englishes from Aboriginal and Torres Strait Islander languages. Discuss migrant ethnolects and other varieties through specific linguistic evidence; do not infer identity or ability from a name or stereotype.'},
  ],
}
