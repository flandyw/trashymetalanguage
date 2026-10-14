/**
 * Persuasion & Arguments bank.
 *
 * Advertising, activism, politics and fundraising. The dominant function
 * across this bank is deliberately conative, with poetic and referential
 * texts included for contrast.
 *
 * Every `spans` string below appears character-for-character inside its
 * passage `text`. Short function words are only annotated when no other word
 * in the passage contains them as a substring, so the resolver cannot create
 * bogus matches.
 */

import type { PassageBank } from '../../lib/passages'

export const bank13: PassageBank = {
  id: 'persuasion',
  label: 'Persuasion & Arguments',
  blurb:
    'Advertisements, appeals, campaign material and opinion writing. Conative texts dominate, so you meet imperatives, modals of obligation, comparatives, superlatives and loaded language in their natural habitat.',
  passages: [
    {
      id: 'persuasion-01',
      title: 'Supermarket catalogue headline',
      text: 'Half price. Every day. No catch.',
      source: 'Catalogue headline, fictional retailer Big Barn',
      unit: 3,
      areaOfStudy: 'u3-formality',
      textType: 'advertising',
      field: 'Retail advertising',
      mode: 'written',
      setting: 'printed catalogue, mass distribution',
      tenor: 'Distant but friendly — retailer to anonymous shoppers',
      register: 'neutral-register',
      registerNote:
        'Three verbless fragments with no contractions or colloquial lexis: the compression is a headline convention, so the register sits in the standard middle.',
      dominantFunction: 'conative',
      functionNote:
        'The price and the no-catch promise are information in form, but the whole utterance exists to move the reader toward a purchase.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'fragment',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        { feature: 'adjective', spans: ['Half'], note: 'Half is the only modifier in the headline and it does the work of a whole price claim.' },
        { feature: 'noun-common', spans: ['price', 'day'] },
        {
          feature: 'determiner',
          spans: ['Every', 'No'],
          note: 'Every and No quantify a noun with total confidence, which is what gives two fragments the force of a guarantee.',
        },
        { feature: 'noun-abstract', spans: ['catch'], note: 'A catch is a hidden disadvantage — an idea, not an object.' },
        { feature: 'collocation', spans: ['Every day'], note: 'Every day (two words) means daily. Everyday (one word) is an adjective meaning ordinary.' },
        { feature: 'ellipsis', spans: ['No catch'], note: 'The verb has been dropped: there is no catch.' },
      ],
      quiz: [
        {
          prompt: 'The headline contains no main verb at all. What is the effect?',
          options: [
            'It makes the claim sound official and legal',
            'It compresses the message into a punchy fragment with nothing to qualify or argue against',
            'It signals that the retailer is uncertain about the price',
            'It makes the text more formal and impersonal',
          ],
          answer: 1,
          explain:
            'Three fragments stack claims without a verb. Nothing is predicated, so nothing sounds debatable — a compressed, confident promotional register.',
        },
        {
          prompt: 'In "No catch", the word "catch" is best classified as…',
          options: [
            'a concrete noun naming a physical object',
            'an abstract noun meaning a hidden disadvantage',
            'a verb meaning to seize something',
            'a collective noun for a group of shoppers',
          ],
          answer: 1,
          explain:
            'Here catch names an idea rather than an object. The abstract sense was converted from the verb, which is why the word can shift word classes so easily.',
        },
      ],
      teach:
        'Two sentences, five words of content words and not one verb. Notice how much of advertising works by removing grammar rather than adding adjectives.',
    },
    {
      id: 'persuasion-02',
      title: 'Soft-drink billboard slogan',
      text: 'FizzUp. Taste the thunder. Feel the fizz.',
      source: 'Billboard slogan, fictional soft drink FizzUp',
      field: 'Beverage advertising',
      mode: 'written',
      setting: 'Written, public, one-way',
      tenor: 'Brand to passing strangers; the implied speaker is a friend',
      register: 'informal-register',
      registerNote:
        'Fragments with no subject and no hedging — the register of a shout, not a report.',
      dominantFunction: 'poetic',
      functionNote:
        'The message is carried by sound: repeated /t/ and /f/ consonants and a coined brand name. The two bare verbs direct, but what you remember is the patterning.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'fragment',
      lengthTier: 1,
      difficulty: 2,
      gold: [
        { feature: 'noun-proper', spans: ['FizzUp'], note: 'A coined brand name — a proper noun with no history behind it.' },
        { feature: 'verb-lexical', spans: ['Taste', 'Feel'], note: 'Both are bare imperatives with no subject.' },
        { feature: 'noun-common', spans: ['thunder', 'fizz'] },
        { feature: 'alliteration', spans: ['Taste the thunder', 'Feel the fizz'] },
        { feature: 'metaphor', spans: ['thunder'], note: 'Thunder is sound and weather; here it stands in for flavour and intensity.' },
        { feature: 'onomatopoeia', spans: ['fizz'], note: 'The word imitates the sound it names.' },
        { feature: 'article-definite', spans: ['the'] },
      ],
      quiz: [
        {
          prompt: 'Both sentences are imperative. What does the imperative mood do here?',
          options: [
            'It asks the reader a question',
            'It reports a fact about the drink',
            'It issues a command in the form of an invitation, so the advertiser sounds like a friend',
            'It expresses the writer\'s personal feelings',
          ],
          answer: 2,
          explain:
            'Taste… Feel… use the bare verb with no subject. The command is softened into an invitation, which is why imperatives dominate advertising copy.',
        },
        {
          prompt: 'In "Taste the thunder", what kind of figurative language is at work?',
          options: [
            'Simile — the flavour is compared using like or as',
            'Metaphor — the flavour is spoken about as if it were thunder',
            'Personification — the drink is given human feelings',
            'Hyperbole — the claim is simply an exaggeration',
          ],
          answer: 1,
          explain:
            'There is no like or as, so it is not a simile: thunder stands in for the drink\'s intensity. The alliterative /t/ is what makes the substitution memorable.',
        },
      ],
      teach:
        'A slogan is a phonological object before it is a sentence. Count the /f/ and /t/ repetitions and you have found the actual persuasive mechanism.',
    },
    {
      id: 'persuasion-03',
      title: 'Climate strike placard',
      text: 'No second planet. No second chance. Vote like the ground is burning.',
      source: 'Placard carried at a fictional school climate strike',
      field: 'Environmental activism',
      mode: 'written',
      setting: 'Written, public, carried at a rally',
      tenor: 'Peer to peer; the carrier is one of the crowd',
      register: 'informal-register',
      registerNote:
        'Two parallel fragments and a colloquial comparison — the short, chant-like diction of protest signage.',
      dominantFunction: 'conative',
      functionNote:
        'Two warnings and a directive aimed at changing a vote. Persuasion, not information.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'fragment',
      lengthTier: 1,
      difficulty: 3,
      gold: [
        {
          feature: 'determiner',
          spans: ['second'],
          note: 'An ordinal numeral, repeated so that two losses are heard as one.',
        },
        { feature: 'noun-common', spans: ['planet', 'ground'] },
        { feature: 'noun-abstract', spans: ['chance'] },
        { feature: 'determiner', spans: ['No'] },
        { feature: 'article-definite', spans: ['the'] },
        { feature: 'verb-lexical', spans: ['Vote', 'burning'] },
        { feature: 'verb-auxiliary', spans: ['is'] },
        { feature: 'simile', spans: ['like the ground is burning'] },
        { feature: 'cohesive-repetition', spans: ['No second'] },
      ],
      quiz: [
        {
          prompt: 'The placard repeats the frame "No second ___" for planet and chance. What is the purpose of that repetition?',
          options: [
            'It makes the text longer so it looks more researched',
            'It links two losses together, so a political choice feels as final as the planet running out',
            'It shows the writer cannot think of a synonym',
            'It makes the register more formal',
          ],
          answer: 1,
          explain:
            'Lexical repetition is the strongest cohesion device here: repeating No second fuses environmental loss and electoral consequence into one memorable frame.',
        },
        {
          prompt: 'Why is "Vote like the ground is burning" a simile?',
          options: [
            'It contains an explicit comparison with like, so the stakes are made physical',
            'It lists reasons for voting',
            'It creates a compound sentence',
            'It makes a comment about language itself',
          ],
          answer: 0,
          explain:
            'The comparison is signalled by like, so it is a simile — and it recruits fear to a political act. A metaphor would have claimed the ground simply is burning.',
        },
      ],
      teach:
        'The whole placard is one idea repeated in two frames. Repeating a syntactic pattern is how protest language is remembered.',
    },
    {
      id: 'persuasion-04',
      title: 'Fitness app push notification',
      text: 'You\u2019re 400 steps from your best day this month. Don\u2019t stop now \u2014 you\u2019ve got this!',
      source: 'Push notification, fictional fitness app StrideOn',
      field: 'Health and fitness technology',
      mode: 'written',
      setting: 'Written, private, delivered to one user\u2019s phone',
      tenor: 'App to user, pretending to be both coach and friend',
      register: 'informal-register',
      registerNote:
        'Contractions, second person address, a dash and an exclamation mark \u2014 the intimacy of one-to-one speech, manufactured by software.',
      dominantFunction: 'conative',
      functionNote:
        'It reports one number and spends the rest of the message pushing the user to keep moving. Directive, disguised as encouragement.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        { feature: 'determiner', spans: ['400'] },
        {
          feature: 'contraction',
          spans: ['You\u2019re', 'Don\u2019t', 'you\u2019ve'],
          note: 'Three contractions in two sentences: the single fastest signal that this text wants to sound spoken.',
        },
        { feature: 'pronoun-demonstrative', spans: ['this'] },
        { feature: 'determiner', spans: ['your'] },
        { feature: 'adjective-superlative', spans: ['best'], note: 'Best turns a statistic into a personal record to beat.' },
        { feature: 'noun-common', spans: ['steps', 'day', 'month'] },
        { feature: 'preposition', spans: ['from'] },
        { feature: 'verb-lexical', spans: ['stop', 'got'] },
        { feature: 'idiom', spans: ['you\u2019ve got this'] },
        { feature: 'adverb', spans: ['now'] },
        { feature: 'collocation', spans: ['Don\u2019t stop'] },
      ],
      quiz: [
        {
          prompt: 'The app calls the user\u2019s record "your best day this month". What work does that do?',
          options: [
            'It provides verifiable information about the user\u2019s health',
            'It creates a personal, competitive target, so the user is measured against themselves',
            'It expresses the app\u2019s own feelings',
            'It makes the register more formal',
          ],
          answer: 1,
          explain:
            'The superlative best plus the possessive your turns a statistic into a challenge. The number was already known; the framing is the persuasive act.',
        },
        {
          prompt: 'Which feature most clearly signals the informal register?',
          options: [
            'The numeral 400',
            'The contractions You\u2019re, Don\u2019t and you\u2019ve',
            'The preposition from',
            'The noun month',
          ],
          answer: 1,
          explain:
            'Two words reduced to one imitate speech. Contraction density is one of the fastest ways to place a text on the formality scale.',
        },
      ],
      teach:
        'Nothing here is new information. The persuasion is entirely in the second person, the superlative and the contractions.',
    },
    {
      id: 'persuasion-05',
      title: 'How-to-vote card',
      text: 'Put Ashbury first on Saturday. You must number every box, or your vote is wasted. This card is approved by K. Delaney, 14 Fisher Street.',
      source: 'How-to-vote card, fictional candidate K. Delaney',
      field: 'Electoral politics',
      mode: 'written',
      setting: 'Written, printed and handed out at a polling booth',
      tenor: 'Candidate to voter: one-to-many, but physically close',
      register: 'neutral-register',
      registerNote:
        'The instructions are blunt imperatives with direct address, but the final sentence switches to the impersonal passive of an official document.',
      dominantFunction: 'conative',
      functionNote:
        'Every clause is aimed at the pencil in the voter\u2019s hand. The authorisation line borrows authority to support that direction.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Ashbury', 'Saturday', 'K. Delaney', 'Fisher Street'] },
        { feature: 'verb-lexical', spans: ['Put', 'number', 'approved'] },
        { feature: 'noun-common', spans: ['box', 'vote', 'card'] },
        { feature: 'adjective', spans: ['first'] },
        { feature: 'determiner', spans: ['every', 'your', 'This'] },
        { feature: 'verb-auxiliary', spans: ['is'] },
        { feature: 'verb-modal', spans: ['must'], note: 'The strongest modal of obligation. There is no polite alternative offered.' },
        { feature: 'preposition', spans: ['on', 'by'] },
        {
          feature: 'conjunction-coordinating',
          spans: ['or'],
          note: 'Or coordinates a consequence: follow the instruction, or lose the vote.',
        },
        { feature: 'determiner', spans: ['14'] },
        { feature: 'connotation', spans: ['wasted'], note: 'Not lost or informal — wasted, which implies carelessness as well as loss.' },
        { feature: 'pronoun', spans: ['You'], note: 'Direct second-person address makes the instruction personal.' },
      ],
      quiz: [
        {
          prompt: 'The card orders the voter to "Put Ashbury first" and adds "or your vote is wasted". Which feature carries the threat?',
          options: [
            'The proper noun Ashbury',
            'The coordinating conjunction or, which sets up a consequence for disobeying',
            'The numeral 14',
            'The preposition on',
          ],
          answer: 1,
          explain:
            'Or coordinates a consequence clause: choose this way, or lose your vote. The persuasion here is grammatical rather than lexical.',
        },
        {
          prompt: 'Why does the last sentence feel so different in register from the rest?',
          options: [
            'It uses a modal verb of obligation',
            'It drops the second person and uses an impersonal passive with a full postal address — the formulaic register required by electoral law',
            'It is written in a non-standard dialect',
            'It contains hyperbole',
          ],
          answer: 1,
          explain:
            'The passive This card is approved by removes the actor and names an authority instead. That fixed, formulaic wording is what make the document official.',
        },
      ],
      teach:
        'One card, two registers: a personal imperative and an impersonal legal formula. Real texts code-switch inside a single paragraph.',
    },
    {
      id: 'persuasion-06',
      title: 'Online real-estate listing',
      text: 'Sun-drenched three-bedroom haven in the heart of Marrong. Renovator\u2019s dream or forever home? Inspect today.',
      source: 'Listing description, fictional agency Hart & Vale',
      field: 'Property advertising',
      mode: 'written',
      setting: 'Written, public, commercial',
      tenor: 'Agent to prospective buyer, warm and aspirational',
      register: 'neutral-register',
      registerNote:
        'Aspirational pre-modification and a rhetorical question give it a marketing sheen, but the clipped final imperative pulls it back toward the informal.',
      dominantFunction: 'conative',
      functionNote:
        'Every clause exists to get a body through the front door. The description is a means, not an end.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Marrong'] },
        { feature: 'noun-common', spans: ['haven', 'home'] },
        { feature: 'noun-abstract', spans: ['dream'] },
        { feature: 'metaphor', spans: ['heart'], note: 'A body part borrowed for the centre of a suburb, which makes the location feel alive.' },
        { feature: 'compounding', spans: ['Sun-drenched', 'three-bedroom'] },
        { feature: 'preposition', spans: ['in', 'of'] },
        { feature: 'article-definite', spans: ['the'] },
        { feature: 'adverb', spans: ['today'], note: 'A time adverb used as an urgency device — inspect, and inspect now.' },
        { feature: 'verb-lexical', spans: ['Inspect'] },
        { feature: 'idiom', spans: ['Renovator\u2019s dream'], note: 'So predictable in listings that it has lost almost all meaning.' },
        { feature: 'determiner', spans: ['three'], note: 'A cardinal numeral folded into a compound adjective.' },
      ],
      quiz: [
        {
          prompt: 'Why does the question "Renovator\u2019s dream or forever home?" work as persuasion?',
          options: [
            'It genuinely seeks a factual answer from the agent',
            'It invites the reader to imagine both futures, so they start choosing before they inspect',
            'It is a metalinguistic comment on the word dream',
            'It signals a formal legal register',
          ],
          answer: 1,
          explain:
            'A rhetorical question offers two attractive narratives rather than a fact, and both branches end in an inspection.',
        },
        {
          prompt: 'Why is "in the heart of Marrong" figurative?',
          options: [
            'It is a compound noun',
            'It borrows a body part to say the suburb is central, which makes the location feel alive and desirable',
            'It exaggerates the distance to the city',
            'It uses a non-standard plural',
          ],
          answer: 1,
          explain:
            'A heart is concrete; the centre of a suburb is not. Mapping one onto the other is a lexical metaphor, and it carries warmth that centre of Marrong would not.',
        },
      ],
      teach:
        'Note the order: aspiration first, urgency last. The imperative Inspect today is the only clause that asks for anything.',
    },
    {
      id: 'persuasion-07',
      title: 'University open-day information sheet',
      text: 'Students who enrol in the Bachelor of Linguistics at Carramar University complete six core units before choosing a specialisation. Prospective students may attend a sample lecture during the open day, and advisers will be available afterwards to discuss ATAR requirements. Carramar has offered linguistics since 1968, and the degree remains one of the few in the state to include a compulsory fieldwork subject.',
      source: 'Course information sheet, fictional Carramar University',
      field: 'Tertiary education',
      mode: 'written',
      setting: 'Written, public, informative and promotional',
      tenor: 'Institution to prospective student; distant but welcoming',
      register: 'formal-register',
      registerNote:
        'Latinate vocabulary (specialisation, requirements), nominalisation, an agentless passive and long complex sentences with pre-modified subjects.',
      dominantFunction: 'referential',
      functionNote:
        'Almost every clause is verifiable information about a degree. The persuasion is carried by what the institution chooses to report.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Carramar University', 'ATAR'] },
        { feature: 'acronym', spans: ['ATAR'], note: 'Read as a word rather than letter by letter.' },
        {
          feature: 'noun-abstract',
          spans: ['specialisation', 'requirements', 'fieldwork'],
          note: 'Fieldwork and specialisation name activities and ideas rather than things you can put in a wheelbarrow.',
        },
        { feature: 'noun-common', spans: ['units', 'lecture', 'advisers', 'subject', 'degree'] },
        { feature: 'determiner', spans: ['six', '1968'] },
        { feature: 'verb-modal', spans: ['may', 'will'] },
        { feature: 'verb-auxiliary', spans: ['has', 'be'] },
        { feature: 'verb-lexical', spans: ['enrol', 'complete', 'attend', 'discuss', 'remains', 'include', 'offered'] },
        { feature: 'conjunction-coordinating', spans: ['and'] },
        { feature: 'preposition', spans: ['before', 'during', 'since'] },
        { feature: 'pronoun', spans: ['who'], note: 'A relative pronoun, which is what makes the first sentence complex.' },
        { feature: 'suffix', spans: ['afterwards'], note: 'The bound morpheme -wards turns after into an adverb of time.' },
      ],
      quiz: [
        {
          prompt: '"Students who enrol in the Bachelor of Linguistics at Carramar University complete six core units…" — which structure is this?',
          options: [
            'A compound sentence with two independent clauses',
            'A complex sentence, with a relative clause embedded inside the main clause',
            'A simple sentence with one verb',
            'A fragment used for emphasis',
          ],
          answer: 1,
          explain:
            'The clause who enrol in the Bachelor of Linguistics at Carramar University sits inside the main clause, so the sentence is complex — and its subject arrives heavily pre-modified.',
        },
        {
          prompt: 'Which feature is the strongest evidence that this text is in a formal register?',
          options: [
            'The modal may',
            'The Latinate nominalisations such as specialisation and requirements',
            'The coordinating conjunction and',
            'The numeral six',
          ],
          answer: 1,
          explain:
            'Nominalisation packs processes into abstract nouns, letting the institution sound impersonal and authoritative. It is a signature of academic and institutional registers.',
        },
      ],
      teach:
        'This is a sales document with almost no advertising grammar in it. Formality itself is the sales pitch: the course sounds serious because the sentences do.',
    },
    {
      id: 'persuasion-08',
      title: 'Charity appeal letter',
      text: 'Dear Supporter, Wren has slept in the same jacket for eleven weeks. Since the flood, this nine-year-old has moved between three temporary homes, and each move costs her another classroom. Our Second Harvest Appeal exists to close that gap. Every twenty dollars we receive funds a full school kit \u2014 a backpack, a uniform and the books Wren needs to keep learning. We cannot undo the flood, but we could still refuse to let it decide her future. Please make a gift today.',
      source: 'Direct-mail appeal, fictional Second Harvest Appeal',
      field: 'Charity fundraising',
      mode: 'written',
      setting: 'Written, sent to an individual donor, one-to-many',
      tenor: 'Charity to donor: an institutional voice that borrows a child\u2019s name',
      register: 'formal-register',
      registerNote:
        'There is not one contraction in the letter. Warmth is produced with concrete detail and second-person courtesy rather than with informal grammar.',
      dominantFunction: 'conative',
      functionNote:
        'The narrative of Wren is evidence, and the bare imperative at the end is the point. Every other sentence is arranged to make that request land.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Wren', 'Second Harvest Appeal'] },
        {
          feature: 'noun-concrete',
          spans: ['jacket', 'backpack', 'uniform', 'books'],
          note: 'Four objects you could photograph. Concrete nouns give an abstract disaster a visible face.',
        },
        { feature: 'noun-abstract', spans: ['future'] },
        { feature: 'noun-common', spans: ['homes', 'classroom', 'gap', 'dollars'] },
        { feature: 'determiner', spans: ['eleven', 'three', 'twenty'], note: 'Specific figures read as evidence, not as exaggeration.' },
        { feature: 'compounding', spans: ['nine-year-old', 'school kit'] },
        { feature: 'verb-modal', spans: ['cannot', 'could'], note: 'A negative modal admits a limit, and the second modal offers what is still possible.' },
        { feature: 'verb-lexical', spans: ['slept', 'moved', 'costs', 'exists', 'receive', 'funds', 'needs', 'refuse', 'decide', 'make'] },
        { feature: 'prefix', spans: ['undo'], note: 'The bound morpheme un- reverses the root verb.' },
        { feature: 'pronoun', spans: ['her', 'Our'], note: 'Our builds collective identity; her keeps one child in view.' },
        {
          feature: 'personification',
          spans: ['let it decide her future'],
          note: 'A flood cannot decide anything. Giving it agency makes the risk feel like a person making a choice about a child.',
        },
      ],
      quiz: [
        {
          prompt: 'The letter says a move "costs her another classroom". Which feature is at work?',
          options: [
            'a simile using like or as',
            'a metaphor in which lost schooling is spoken about as a price to be paid',
            'an acronym for a school program',
            'a collective noun',
          ],
          answer: 1,
          explain:
            'Classrooms are not money, but costs frames lost schooling as a financial loss. The metaphor makes an abstract harm feel countable.',
        },
        {
          prompt: 'Which two features combine to make the final sentence conative?',
          options: [
            'The proper noun Wren and the numeral twenty',
            'The politeness marker Please and the bare imperative make a gift today',
            'The prefix in undo and the modal cannot',
            'The abstract noun future and the definite article the',
          ],
          answer: 1,
          explain:
            'A bare imperative is the strongest grammatical marker of the conative function, and Please softens it into a request that is hard to refuse.',
        },
      ],
      teach:
        'Formal and persuasive are not opposites. This letter never uses a contraction, yet it is one of the most directive texts in the bank.',
    },
    // INSERT-ANCHOR
  ],
}
