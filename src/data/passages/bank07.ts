import type { PassageBank } from '../../lib/passages'

/** Tier 3 — Australian English, sport, culture and identity. */
export const bank07: PassageBank = {
  id: 'aussie',
  label: 'Australian English',
  blurb:
    'Full paragraphs of Australian language in the wild: commentary, club newsletters, talkback, group chats and bush verse. Hunt the clippings, idioms and understatement.',
  passages: [
    {
      id: 'au01',
      title: "He's absolutely roosting it",
      text: "The crowd's on its feet as Mahoney gathers the sherrin on the wing, takes on two, and streams towards goal. Ooh, that's a ripper! He's absolutely roosting it from outside fifty and it sails through. Gee, the Pies are on fire tonight — the Blues can't buy a touch. Heaps of noise now, and the boys in the cheer squad have gone off. The Blues have to answer, or this one's done.",
      source: 'Television football commentary, transcribed (constructed)',
      unit: 4,
      areaOfStudy: 'u4-australian-society',
      textType: 'speech',
      field: 'Australian rules football commentary',
      mode: 'spoken',
      setting: 'live TV broadcast, evening match',
      tenor: 'enthusiastic, commentator to a mass audience',
      register: 'informal-register',
      registerNote:
        'Spoken commentary leans on slang, clippings and stock sporting phrases even though the audience is huge.',
      dominantFunction: 'emotive',
      secondaryFunctions: ['referential'],
      functionNote:
        'The listener can already see the play, so the commentary releases shared excitement rather than reporting unseen facts.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['Ooh', 'Gee'],
          note: 'Grammatically independent bursts of feeling that carry no proposition.',
        },
        {
          feature: 'australian-english',
          spans: ['ripper', 'Heaps', 'the Pies'],
          note: '"Ripper" and the adverbial "heaps" are distinctively Australian, and the club nickname is used without explanation because the audience shares the reference.',
        },
        {
          feature: 'shortening',
          spans: ['Pies'],
          note: 'Clipped from "Magpies" — casual shortening is the default in sporting talk.',
        },
        {
          feature: 'idiom',
          spans: ["can't buy a touch"],
          note: 'A fixed figurative phrase meaning completely outplayed.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['takes on', 'gone off'],
          note: 'Verb + particle combinations with their own idiomatic meanings.',
        },
        {
          feature: 'hyperbole',
          spans: ['on fire'],
          note: 'The team is not burning — the exaggeration measures dominance.',
        },
        {
          feature: 'contraction',
          spans: ["crowd's", "that's", "He's", "can't", "one's"],
          note: 'Five contractions in seventy words sets the spoken, informal tone.',
        },
        {
          feature: 'noun-proper',
          spans: ['Daicos', 'Blues'],
          note: 'Player surname and club nickname, both capitalised as unique referents.',
        },
        {
          feature: 'adverb-degree',
          spans: ['absolutely'],
          note: 'Intensifier at the top of the scale — a hallmark of commentary hyperbole.',
        },
        {
          feature: 'colloquialism',
          spans: ['Heaps of noise'],
          note: 'Everyday speech wording where a broadcast report might say "a considerable volume".',
        },
        {
          feature: 'metaphor',
          spans: ['streams'],
          note: 'Movement compared to flowing water — a single word carrying an image.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is the dominant function expressive rather than referential?',
          options: [
            'Because it uses declarative sentences',
            'Because the audience can already see the game, so the words convey reaction rather than information',
            'Because it contains proper nouns',
            'Because it is broadcast',
          ],
          answer: 1,
          explain:
            'Ask what the utterance achieves. Here it shares excitement. The play-by-play facts are visible to everyone.',
        },
        {
          prompt: 'Which feature most clearly marks this as informal?',
          options: [
            'The proper nouns',
            'The contractions and slang clippings such as "ripper" and "Pies"',
            'The use of the present tense',
            'The declarative sentence type',
          ],
          answer: 1,
          explain:
            'Register is signalled by lexical and morphological choices: contraction, clipping and slang.',
        },
        {
          prompt: 'What kind of meaning does "Heaps of noise" carry that "a large volume of noise" does not?',
          options: [
            'More precision',
            'Greater social closeness and spoken provenance',
            'Greater formality',
            'A modal meaning',
          ],
          answer: 1,
          explain:
            'Colloquial quantifiers do the same job as formal ones but sound like talk, not writing.',
        },
      ],
      teach:
        'Sport commentary is where Australian English is most visible on television. Every clip, intensifier and stock phrase is evidence of register and audience design at work.',
    },
    {
      id: 'au02',
      title: 'Ten needed from three',
      text: 'Australia need twenty-eight from the last two overs, and Cummins is on strike. He works it into the gap at deep cover, comes back for two, and the equation tightens. Smith goes aerial next ball, clearing the rope with something to spare. Meanwhile the fielders spread, the keeper stands up, and the crowd holds its breath. Ten needed from three. Cummins must find the boundary now, or the tourists are taking this series home.',
      source: 'National broadcaster cricket commentary, transcribed (constructed)',
      field: 'Sport — cricket',
      mode: 'spoken',
      setting: 'spoken, broadcast',
      tenor: 'measured, commentator to a national audience',
      register: 'neutral-register',
      registerNote:
        'A composed broadcast voice: standard grammar and technical terms, but warm and idiomatic rather than formal.',
      dominantFunction: 'referential',
      functionNote:
        'The comment sets out the state of the game — a listener who was not watching can follow it exactly.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'jargon',
          spans: ['deep cover', 'the rope', 'the boundary'],
          note: 'In-group fielding and scoring terms that no outsider would decode on their own.',
        },
        {
          feature: 'determiner',
          spans: ['twenty-eight', 'two', 'three', 'Ten'],
          note: 'Numbers make the passage factual and checkable.',
        },
        {
          feature: 'personification',
          spans: ['the equation tightens'],
          note: 'An abstraction is given the physical power to tighten.',
        },
        {
          feature: 'metaphor',
          spans: ['goes aerial'],
          note: 'The batsman is described in terms of flight.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Meanwhile'],
          note: 'Signals a change of focus and keeps the listener oriented.',
        },
        {
          feature: 'verb-modal',
          spans: ['must'],
          note: 'Strong obligation — the only way to win.',
        },
        {
          feature: 'noun-proper',
          spans: ['Australia', 'Cummins', 'Smith'],
          note: 'A team name and two player surnames.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['comes back', 'stands up'],
          note: 'Verb + particle with a meaning beyond the literal words.',
        },
        {
          feature: 'preposition',
          spans: ['from', 'into', 'at'],
          note: 'Note how few prepositions a spoken-style passage needs.',
        },
        {
          feature: 'collocation',
          spans: ['holds its breath'],
          note: 'The expected partner of "crowd" in a tense moment — breaking it would sound odd.',
        },
        {
          feature: 'adverb',
          spans: ['now'],
          note: 'Time adverb creating urgency in a single syllable.',
        },
      ],
      quiz: [
        {
          prompt: 'Which audience is this commentary written for?',
          options: [
            'Members of one cricket club',
            'A general national audience with some cricket knowledge',
            'Cricket statisticians only',
            'People who dislike sport',
          ],
          answer: 1,
          explain:
            'The jargon is present but not exhaustive, and the sentences explain the situation — that is designed for a broad audience.',
        },
        {
          prompt: 'What is the role of the numerals in this passage?',
          options: [
            'They make the text more emotional',
            'They create the factual, verifiable texture of referential discourse',
            'They show the speaker is uncertain',
            'They signal a change of register',
          ],
          answer: 1,
          explain:
            'Numbers are the classic marker of informative language; you cannot be emotive about them without other devices.',
        },
        {
          prompt: 'Which word class dominates this passage compared with the football commentary in this bank?',
          options: [
            'Interjections',
            'Contractions',
            'Technical nouns and numerals',
            'Taboo language',
          ],
          answer: 2,
          explain:
            'Both passages report a sport, but this one carries its information in technical nouns rather than through slang and clipping.',
        },
      ],
      teach:
        'Compare the two broadcasts: the same field and roughly the same subject, but two different registers — a clean demonstration that register is a set of choices, not a fixed setting.',
    },
    {
      id: 'au03',
      title: 'Go Thunder',
      text: "It's been a massive season for the under-15s, and Saturday's grand final was the best game the club has seen in years. The girls came out hard, kept their structure under pressure, and never gave up the lead after quarter time. A huge thank you to every parent who ran the canteen, washed bibs and drove the early morning trips. Training resumes on Tuesday fortnight. Go Thunder.",
      source: 'Local netball club newsletter (constructed)',
      field: 'Community sport',
      mode: 'written',
      setting: 'written, semi-public',
      tenor: 'warm and inclusive, committee to families',
      register: 'informal-register',
      registerNote:
        'Community writing blends plain speech with a few institutional habits such as dates and fixed titles.',
      dominantFunction: 'referential',
      functionNote:
        'The news and the logistics are the point; the warm tone is a layer on top of the information.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'contraction',
          spans: ["It's", "Saturday's"],
          note: 'Contractions make the newsletter feel spoken rather than circularised.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['best'],
          note: 'A superlative claim about the whole season — mild but real exaggeration.',
        },
        {
          feature: 'hyperbole',
          spans: ['massive'],
          note: 'A word that inflates scale for warmth rather than accuracy.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['came out', 'gave up'],
          note: 'Both are verb + particle combinations with idiomatic force.',
        },
        {
          feature: 'collocation',
          spans: ['under pressure'],
          note: 'A fixed pairing; "beneath pressure" would sound wrong.',
        },
        {
          feature: 'australian-english',
          spans: ['canteen', 'fortnight'],
          note: 'Both are ordinary in Australian and British English but marked elsewhere.',
        },
        {
          feature: 'noun-collective',
          spans: ['club'],
          note: 'Singular in form, referring to a whole body of people.',
        },
        {
          feature: 'noun-abstract',
          spans: ['structure', 'pressure'],
          note: 'Abstract nouns lift the sports reporting into analysis.',
        },
        {
          feature: 'interjection',
          spans: ['Go'],
          note: 'The bare verb serves as an exclamation of support.',
        },
        {
          feature: 'noun-proper',
          spans: ['Saturday', 'Tuesday', 'Thunder'],
          note: 'Days and the team name are all capitalised as specific referents.',
        },
        {
          feature: 'determiner',
          spans: ['under-15s'],
          note: 'A numeral inside an age-grade label, which is typical of club writing.',
        },
      ],
      quiz: [
        {
          prompt: 'Which pair of words is doing most of the evaluative work in this newsletter?',
          options: [
            '"canteen" and "bibs"',
            '"massive" and "huge"',
            '"resumes" and "fortnight"',
            '"Saturday" and "Tuesday"',
          ],
          answer: 1,
          explain:
            'Both are scale words. They create a warm, appreciative tone without conveying any new information.',
        },
        {
          prompt: 'What does "Go Thunder" show about sentence type?',
          options: [
            'It is a declarative statement',
            'It is a bare imperative used as an expression of support',
            'It is an interrogative',
            'It is a complete complex sentence',
          ],
          answer: 1,
          explain:
            'Imperatives without a subject are the strongest grammatical signal of the conative function — here in its friendliest form.',
        },
      ],
      teach:
        'Community writing is a useful register to study because it mixes plain, warm language with institutional conventions. Look for where each one takes over.',
    },
    {
      id: 'au04',
      title: 'Running late',
      text: "Oi mate, running a bit late this arvo — the bloke at the depot's mucked us round and we've gotta grab another load. Reckon we'll be there round four. Chuck the kettle on and I'll shout you a servo coffee on the way through. Sorry about the muck-around, it's been flat out like a lizard drinking all week. Catch ya.",
      source: 'Text message between tradespeople (constructed)',
      field: 'Workplace scheduling',
      mode: 'written',
      setting: 'written, digital, informal',
      tenor: 'close and jokey, colleague to colleague',
      register: 'informal-register',
      registerNote:
        'Maximum informality: clipping, non-standard spelling, ellipsis and one long Australian idiom.',
      dominantFunction: 'conative',
      functionNote:
        'The message exists to change what the reader does — expect a delay, put the kettle on, expect a coffee.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['Oi'],
          note: 'An attention-getting interjection that also marks intimacy — you do not "oi" a stranger politely.',
        },
        {
          feature: 'australian-english',
          spans: ['mate', 'arvo', 'servo', 'bloke', 'Catch ya'],
          note: 'Five distinctly Australian markers in five sentences.',
        },
        {
          feature: 'shortening',
          spans: ['arvo', 'servo'],
          note: 'Both are shortened words, and both take the Australian -o ending.',
        },
        {
          feature: 'idiom',
          spans: ['flat out like a lizard drinking'],
          note: 'An established Australian idiom for extreme busyness, with a built-in simile.',
        },
        {
          feature: 'simile',
          spans: ['like a lizard drinking'],
          note: 'The "like" clause makes the comparison explicit.',
        },
        {
          feature: 'non-standard',
          spans: ['gotta', 'ya'],
          note: 'Both are non-standard written forms that mirror pronunciation.',
        },
        {
          feature: 'contraction',
          spans: ["depot's", "we've", "we'll", "I'll", "it's"],
          note: 'A contraction in almost every sentence.',
        },
        {
          feature: 'verb-semi-modal',
          spans: ['gotta'],
          note: 'The reduction of "got to" — an obligation marker built like an ordinary verb.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['mucked us round'],
          note: 'Verb plus particle plus object: the idiomatic form of "delayed us".',
        },
        {
          feature: 'colloquialism',
          spans: ['a bit', 'Chuck the kettle on'],
          note: 'Everyday words where formal writing would say "slightly" and "boil the kettle".',
        },
        {
          feature: 'ellipsis',
          spans: ["Reckon we'll be there round four"],
          note: 'The subject "I" has been dropped entirely — very common in speech and text messages.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature makes the delay apology work socially?',
          options: [
            'The proper noun',
            'The softening "a bit" plus the friendly idiom and the offer of a coffee',
            'The numeral',
            'The use of the past tense',
          ],
          answer: 1,
          explain:
            'Face-work in informal registers is done with diminutives, humour and small offers rather than formal apology formulae.',
        },
        {
          prompt: 'What kind of sentence is "Chuck the kettle on"?',
          options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamative'],
          answer: 2,
          explain: 'It is a bare imperative with an omitted "you" subject.',
        },
        {
          prompt: 'Why is "flat out like a lizard drinking" classed as an idiom?',
          options: [
            'It is written in capitals',
            'Its meaning cannot be worked out from the literal words',
            'It contains a numeral',
            'It is a proper noun',
          ],
          answer: 1,
          explain:
            'No lizard is involved. The whole phrase is a fixed, culturally shared unit of meaning.',
        },
      ],
      teach:
        'Digital informal writing is the richest source of language change. Clippings, reductions and idioms all cluster here, and the tiny word count makes each one easy to spot.',
    },
    {
      id: 'au05',
      title: 'Not bad at all',
      text: "How ya going? Yeah, not bad, not bad at all. Grab a spot in the shade and I'll get the flat whites. It's absolutely heaps busy today — everyone's come down for the long weekend. Nah, don't worry about the bill, I've got it. So how's the new job going? Reckon you'll stick at it? Anyway, we should make a move before the parking runs out.",
      source: 'Conversation at a beach-side cafe (constructed)',
      field: 'Everyday social talk',
      mode: 'spoken',
      setting: 'spoken, face to face',
      tenor: 'relaxed and close, friends',
      register: 'informal-register',
      registerNote:
        'Almost pure phatic talk: the friendship is the content, the plans are the excuse.',
      dominantFunction: 'phatic',
      functionNote:
        'Very little information is exchanged that either person needs. The exchange maintains the relationship, which is the point.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['Yeah', 'Nah'],
          note: 'Turn-taking signals rather than answers to questions.',
        },
        {
          feature: 'colloquialism',
          spans: ['not bad at all', 'Grab a spot'],
          note: 'Relaxed, everyday wording — the default texture of friendly talk.',
        },
        {
          feature: 'australian-english',
          spans: ['heaps'],
          note: 'Adverbial "heaps" for "very" is a well-known Australian marker.',
        },
        {
          feature: 'non-standard',
          spans: ['ya'],
          note: 'A non-standard spelling that encodes how the word is actually pronounced.',
        },
        {
          feature: 'idiom',
          spans: ['make a move'],
          note: 'Figurative — nobody is literally moving anywhere.',
        },
        {
          feature: 'contraction',
          spans: ["I'll", "It's", "everyone's", "don't", "I've", "how's", "you'll"],
          note: 'Seven contractions. At this density the writing is simply transcribed speech.',
        },
        {
          feature: 'discourse-marker',
          spans: ['So', 'Anyway'],
          note: 'Both manage the conversation: one opens a topic, the other closes it.',
        },
        {
          feature: 'adverb-degree',
          spans: ['absolutely'],
          note: 'Intensifier that pushes a casual statement into mild hyperbole.',
        },
        {
          feature: 'ellipsis',
          spans: ["Reckon you'll stick at it"],
          note: 'The subject and auxiliary ("Do you") have both been dropped.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['come down', 'runs out'],
          note: 'Verb + particle combinations with idiomatic meanings.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['in the shade'],
          note: 'A small adverbial phrase doing a lot of scene-setting.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the dominant function of this exchange?',
          options: [
            'Referential — it conveys essential information',
            'Phatic — it builds and maintains a relationship',
            'Metalinguistic — it discusses language',
            'Poetic — it foregrounds form',
          ],
          answer: 1,
          explain:
            'Almost nothing said here is new information. The exchange is the relationship doing maintenance on itself.',
        },
        {
          prompt: 'What is "So" doing at the start of "So how\'s the new job going?"',
          options: [
            'Addressing the reader directly',
            'Signalling a topic shift and managing the conversation',
            'Expressing obligation',
            'Forming a question tag',
          ],
          answer: 1,
          explain:
            'That is discourse-marking work. "Anyway" does the mirror-image job of closing a topic.',
        },
        {
          prompt: 'Which feature would disappear from this passage first if it were rewritten formally?',
          options: [
            'The nouns',
            'The contractions and non-standard spellings',
            'The declarative sentences',
            'The metaphors',
          ],
          answer: 1,
          explain:
            'Contraction and non-standard spelling are the fastest register dials in English.',
        },
      ],
      teach:
        'Phatic talk looks empty on the page but carries enormous social weight. Discourse markers, interjections and contractions are the machinery that holds it together.',
    },
    {
      id: 'au06',
      title: 'Everyone came home',
      text: "We got the call just after three, and by four the truck was on the ridge. The wind was shocking — it was pushing the fire straight at the Johnsons' place and we couldn't see more than a few metres. None of us said much. We just worked. When the wind turned, the whole thing swung around and we had to pull back to the dam. Everyone came home, and that's what matters.",
      source: 'Interview with a volunteer firefighter (constructed)',
      field: 'Emergency services',
      mode: 'spoken',
      setting: 'spoken, later transcribed',
      tenor: 'quiet and factual, volunteer to interviewer',
      register: 'neutral-register',
      registerNote:
        'Speech that has been stripped back by exhaustion: simple clauses, plain words, no decoration.',
      dominantFunction: 'referential',
      functionNote:
        'It reports what happened, in order, with almost no evaluation until the last clause.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Johnsons'],
          note: 'A surname turned into a place by adding an apostrophe — a familiar rural habit.',
        },
        {
          feature: 'adjective',
          spans: ['shocking'],
          note: 'The one evaluative adjective in the whole passage, which is why it lands hard.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['pull back', 'swung around'],
          note: 'Verb + particle combinations with directional, idiomatic senses.',
        },
        {
          feature: 'verb-semi-modal',
          spans: ['had to'],
          note: 'Obligation expressed by a verb that inflects for tense, unlike a true modal.',
        },
        {
          feature: 'ellipsis',
          spans: ['just after three'],
          note: '"O\u2019clock" is missing — the clock face is understood from context.',
        },
        {
          feature: 'metaphor',
          spans: ['the whole thing swung around'],
          note: 'The fire is described as a single object with momentum.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['wind'],
          note: 'The wind is named again and again, and each mention changes the situation.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['When'],
          note: 'Opens a dependent clause and creates the turn of the story.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'The repeated "and" chains events in the order they happened.',
        },
        {
          feature: 'contraction',
          spans: ["couldn't", "that's"],
          note: 'Two contractions — the small trace of speech left in the transcript.',
        },
        {
          feature: 'determiner',
          spans: ['three', 'four'],
          note: 'Precise times produce the referential, reportable quality of the account.',
        },
      ],
      quiz: [
        {
          prompt: 'Why are the sentences so short?',
          options: [
            'The speaker is not fluent',
            'Short clauses mirror the flat, controlled voice of someone managing distress',
            'Emergency workers are taught to write this way',
            'It is a translation',
          ],
          answer: 1,
          explain:
            'Sentence length carries meaning. Repetition and brevity here signal restraint, not simplicity.',
        },
        {
          prompt: 'What is unusual about "None of us said much" in context?',
          options: [
            'It is a question',
            'It is a spare, understated sentence that tells us more about the scene than detail would',
            'It contains a modal verb',
            'It is a fragment',
          ],
          answer: 1,
          explain:
            'Understatement is a recognisable Australian rhetorical habit, and it is doing emotional work here.',
        },
      ],
      teach:
        'When a text is deliberately plain, the analysis turns on what is absent: no intensifiers, no loaded adjectives, barely any figurative language. Absence is evidence too.',
    },
    {
      id: 'au07',
      title: 'First window, please',
      text: "Hi, welcome to Macca's, what can I get for you today? Yeah, can I grab a large Big Mac meal and a couple of cheeseburgers, thanks. Sweet. Anything else? Nah, that's it. Would you like to make it a large? It already is. No worries. That'll be eighteen fifty, first window please. Cheers, mate. Have a good one.",
      source: 'Fast food drive-through exchange, transcribed (constructed)',
      field: 'Retail and service',
      mode: 'spoken',
      setting: 'spoken, transactional',
      tenor: 'brisk and friendly, service script',
      register: 'informal-register',
      registerNote:
        'A corporate script performed in an informal voice: clipped questions, fixed courtesies, nickname branding.',
      dominantFunction: 'referential',
      functionNote:
        'Despite the warmth, the exchange transfers an order, a total and instructions. That is its actual work.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ["Macca's", 'Big Mac'],
          note: 'Both are brand names, and the first is also an Australianised clipping of a surname.',
        },
        {
          feature: 'australian-english',
          spans: ['No worries', 'mate'],
          note: 'Fixed politeness formulae of Australian service talk.',
        },
        {
          feature: 'interjection',
          spans: ['Yeah', 'Nah', 'Sweet', 'Cheers'],
          note: 'Four short response tokens that carry the rhythm of the transaction.',
        },
        {
          feature: 'contraction',
          spans: ["that's", "That'll"],
          note: 'Contractions keep the script sounding spoken rather than scripted.',
        },
        {
          feature: 'verb-modal',
          spans: ['can', 'Would'],
          note: 'Both soften requests and offers — modals do the politeness work here.',
        },
        {
          feature: 'idiom',
          spans: ['Have a good one'],
          note: 'A fixed farewell formula whose literal meaning is empty.',
        },
        {
          feature: 'jargon',
          spans: ['first window'],
          note: 'In-group service vocabulary that a first-time visitor has to guess.',
        },
        {
          feature: 'determiner',
          spans: ['eighteen fifty'],
          note: 'A price delivered as spoken numerals — Australian English routinely drops "dollars".',
        },
        {
          feature: 'collocation',
          spans: ['a couple of'],
          note: 'A vague quantifier that only works with countable nouns.',
        },
        {
          feature: 'ellipsis',
          spans: ['It already is'],
          note: 'The complement "a large" has been ellipted; the listener supplies it.',
        },
        {
          feature: 'preposition',
          spans: ['to', 'for', 'of'],
          note: 'Three prepositions, one per clause, each building a small phrase.',
        },
      ],
      quiz: [
        {
          prompt: "What does the exchange's warmth suggest about its purpose?",
          options: [
            'It is purely expressive',
            'It is referential content wrapped in phatic politeness to keep service frictionless',
            'It is metalinguistic',
            'It is poetic',
          ],
          answer: 1,
          explain:
            'Functions overlap. The information transfers a sale; the courtesies protect the interaction.',
        },
        {
          prompt: 'What is happening in "It already is"?',
          options: [
            'A question',
            'Ellipsis — "a large" has been omitted because the listener can easily supply it',
            'An imperative',
            'A metaphor',
          ],
          answer: 1,
          explain:
            'Ellipsis removes words that the context already makes recoverable.',
        },
        {
          prompt: 'Why does the worker say "first window" rather than "please drive to the first window"?',
          options: [
            'Ellipsis and jargon save time in a repetitive, high-volume register',
            'It is more formal',
            'Because it is a proper noun',
            'Because imperatives are rude',
          ],
          answer: 0,
          explain:
            'Service registers maximise efficiency, and the in-group phrase is understood by everyone in the queue.',
        },
      ],
      teach:
        'Service encounters show language as a script. Notice how the same few moves repeat: greeting, request, modal offer, total, farewell formula.',
    },
    {
      id: 'au08',
      title: 'Someone please define register',
      text: "ok so I've read about half of the unit guide and I'm already cooked. apparently the essay's due end of week five?? who decided that. anyway I'll chuck my draft in the doc tonight and youse can add comments if you want. also someone please tell me what 'register' actually means, I've written it in every paragraph and I still couldn't define it. we're gonna be fine. probably.",
      source: 'University study group chat (constructed)',
      field: 'Tertiary study',
      mode: 'written',
      setting: 'written, digital, private group',
      tenor: 'very close, students under pressure',
      register: 'informal-register',
      registerNote:
        'No capitals at all, minimal punctuation and heavy ellipsis — a distinct digital register with its own conventions.',
      dominantFunction: 'emotive',
      functionNote:
        'The message discharges anxiety and seeks solidarity; the logistics are almost incidental.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'fragment',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'non-standard',
          spans: ['youse'],
          note: 'A non-standard second-person plural pronoun that fills a real gap in standard English.',
        },
        {
          feature: 'slang',
          spans: ['cooked', 'chuck'],
          note: 'Both are informal and current — "cooked" means finished or exhausted.',
        },
        {
          feature: 'discourse-marker',
          spans: ['ok so', 'anyway', 'also'],
          note: 'Three markers steer the reader through a loosely structured message.',
        },
        {
          feature: 'neologism',
          spans: ['cooked'],
          note: 'An old word carrying a newly extended slang sense — a neologism of meaning, not of form.',
        },
        {
          feature: 'ellipsis',
          spans: ['who decided that', 'probably'],
          note: 'A fragment and a one-word sentence: whole structures have been dropped.',
        },
        {
          feature: 'contraction',
          spans: ["I've", "I'm", "essay's", "I'll", "we're", "couldn't"],
          note: 'Six different contractions, and "I\u2019ve" twice.',
        },
        {
          feature: 'verb-modal',
          spans: ['can'],
          note: 'Permission rather than ability — this one is social.',
        },
        {
          feature: 'pronoun',
          spans: ['someone'],
          note: 'An indefinite pronoun directing a plea at nobody in particular.',
        },
        {
          feature: 'verb-semi-modal',
          spans: ['gonna'],
          note: 'The reduced form of "going to", spelled as it is spoken.',
        },
        {
          feature: 'shortening',
          spans: ['doc'],
          note: 'Shortened from "document" — the group shares the reference, so no explanation is needed.',
        },
        {
          feature: 'interjection',
          spans: ['ok'],
          note: 'An attention-getting opener that softens everything after it.',
        },
        {
          feature: 'adverb',
          spans: ['already'],
          note: 'Time adverb carrying the whole complaint: it is early in semester and the work is piling up.',
        },
      ],
      quiz: [
        {
          prompt: 'Which sentence in this message is metalinguistic?',
          options: [
            'ok so I\u2019ve read about half of the unit guide',
            'who decided that',
            'someone please tell me what \u2018register\u2019 actually means',
            'we\u2019re gonna be fine',
          ],
          answer: 2,
          explain:
            'It asks about a word rather than using the word. Talking about language is the metalinguistic function.',
        },
        {
          prompt: 'What is the strongest evidence that this text was written for a very close audience?',
          options: [
            'It contains numerals',
            'The absence of capital letters and standard punctuation, which only works when the reader will not judge you',
            'It uses the word "paragraph"',
            'It is 85 words long',
          ],
          answer: 1,
          explain:
            'Non-compliance with standard conventions is a social choice, not an error. It signals closeness and a shared register.',
        },
        {
          prompt: 'Why is "youse" described as non-standard rather than simply incorrect?',
          options: [
            'Because it is new',
            'Because it follows consistent rules of a spoken variety but does not carry prestige',
            'Because it is only used in writing',
            'Because it is a loanword',
          ],
          answer: 1,
          explain:
            'Standardness is a social judgement. Linguistically, "youse" solves the missing plural of "you".',
        },
      ],
      teach:
        'Digital group chat is a register with real rules of its own. Judging it against essay conventions misses the point; the interesting question is what the choices achieve socially.',
    },
    {
      id: 'au09',
      title: 'Lest we forget',
      text: 'On this day, we remember the service and the sacrifice of those who answered a distant call. Their courage was not confined to the beaches of Gallipoli; it was repeated in the mud of the Somme, the heat of Kokoda, and the dust of more recent deployments. We gather here not to glorify conflict, but to acknowledge the cost of it. The freedoms we enjoy were purchased by others. Lest we forget.',
      source: 'Anzac Day commemorative address (constructed)',
      field: 'National commemoration',
      mode: 'spoken',
      setting: 'spoken, ceremonial',
      tenor: 'public and solemn, speaker to a gathered nation',
      register: 'formal-register',
      registerNote:
        'High formality: abstract nouns, balanced structures, the passive voice and one archaic formula.',
      dominantFunction: 'emotive',
      functionNote:
        'The speech does not inform anyone of anything they do not know. It articulates shared feeling and shared values.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Gallipoli', 'Somme', 'Kokoda'],
          note: 'Three place names doing the work of an entire shared history.',
        },
        {
          feature: 'noun-abstract',
          spans: ['service', 'sacrifice', 'courage', 'conflict', 'freedoms'],
          note: 'Five abstract nouns. This density is the signature of formal, commemorative discourse.',
        },
        {
          feature: 'idiom',
          spans: ['Lest we forget'],
          note: 'A fixed commemorative formula, quoted rather than composed.',
        },
        {
          feature: 'pronoun',
          spans: ['who'],
          note: 'A relative pronoun linking the people to their action.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['Lest'],
          note: 'An archaic subordinating conjunction, preserved by the formula alone.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['of Gallipoli', 'of the Somme', 'of Kokoda'],
          note: 'Parallel phrases stacked to build a rhythm of remembrance.',
        },
        {
          feature: 'preposition',
          spans: ['by'],
          note: 'Introduces the agent of a passive construction, which keeps the focus on the sacrifice.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['was', 'were'],
          note: 'Auxiliaries building passive verb phrases — a very common feature of formal prose.',
        },
        {
          feature: 'metaphor',
          spans: ['purchased by others'],
          note: 'Freedom treated as a commodity with a price. The metaphor shapes how the audience should feel about it.',
        },
        {
          feature: 'adjective',
          spans: ['distant', 'recent'],
          note: 'Two adjectives that situate the losses across a century.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature most reliably marks this as a formal register?',
          options: [
            'Short sentences',
            'The density of abstract nouns and the use of the passive voice',
            'Contractions',
            'Slang',
          ],
          answer: 1,
          explain:
            'Formality in English is largely lexical and grammatical: abstraction, passives, full forms and balanced clauses.',
        },
        {
          prompt: 'What is the effect of the phrase "purchased by others"?',
          options: [
            'It makes the speech humorous',
            'It frames national freedom as bought at a price, which creates a debt and an obligation to remember',
            'It is a metalinguistic comment',
            'It reduces the register',
          ],
          answer: 1,
          explain:
            'Conceptual metaphor shapes reasoning. Commerce lends the sentence a logic of debt and repayment.',
        },
        {
          prompt: 'Is "Lest we forget" an idiom?',
          options: [
            'No, because it is a full sentence',
            'Yes — it is a fixed, culturally recognised unit whose archaic grammar survives only inside the formula',
            'No, because it uses a conjunction',
            'It is an acronym',
          ],
          answer: 1,
          explain:
            '"Lest" is otherwise archaic. The whole phrase is memorised and reused, which is what makes a formula an idiom.',
        },
      ],
      teach:
        'Ceremonial language is where abstract nouns, parallelism and the passive voice all reinforce each other. Learn to name the cluster, not just the individual features.',
    },
    {
      id: 'au10',
      title: 'A fair go',
      text: "Look, I'll be honest with you, I've had a gutful of it. I rang up about the potholes on Beach Road three months ago and nothing's been done. Not a thing. And they reckon rates are going up again? You're kidding. Every single one of us is copping it in the neck while the council sits on its hands. I'm not having a go at the workers, mind you — all they want is a fair go. But someone up there has to pull their finger out.",
      source: 'Transcript of a talkback radio caller (constructed)',
      field: 'Local government and civic complaint',
      mode: 'spoken',
      setting: 'spoken, broadcast, unscripted',
      tenor: 'animated, citizen to a public audience',
      register: 'informal-register',
      registerNote:
        'Unscripted public speech: long chains of clauses, idioms, hyperbole and direct address.',
      dominantFunction: 'emotive',
      functionNote:
        'The caller is releasing frustration and inviting agreement. The underlying facts are familiar to the audience already.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'discourse-marker',
          spans: ['Look'],
          note: 'Opens the turn and warns the listener that a blunt opinion is coming.',
        },
        {
          feature: 'idiom',
          spans: [
            'had a gutful',
            'copping it in the neck',
            'sits on its hands',
            'pull their finger out',
            'a fair go',
          ],
          note: 'Five idioms in six sentences — the informal register is built almost entirely from them.',
        },
        {
          feature: 'australian-english',
          spans: ['gutful', 'reckon', 'fair go'],
          note: 'All three are strongly marked as Australian in ordinary usage.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['rang up', 'having a go', 'going up'],
          note: 'Verb + particle combinations, two of them also idioms.',
        },
        {
          feature: 'contraction',
          spans: ["I'll", "I've", "nothing's", "You're", "I'm"],
          note: 'Five contractions across the turn.',
        },
        {
          feature: 'colloquialism',
          spans: ['reckon', "You're kidding"],
          note: 'Everyday wording where formal civic language would say "believe" and "that is surprising".',
        },
        {
          feature: 'hyperbole',
          spans: ['Every single one of us'],
          note: 'The exaggeration gathers the whole community into the complaint.',
        },
        {
          feature: 'verb-semi-modal',
          spans: ['has to'],
          note: 'Obligation placed on an unnamed authority.',
        },
        {
          feature: 'noun-proper',
          spans: ['Beach Road'],
          note: 'A named local place — the specificity is what makes the complaint credible.',
        },
        {
          feature: 'pronoun',
          spans: ['they', 'someone', 'their'],
          note: 'Vague third-person reference to authority: nobody is named.',
        },
        {
          feature: 'ellipsis',
          spans: ['Not a thing'],
          note: 'The verb phrase has gone entirely; the fragment is the emphasis.',
        },
      ],
      quiz: [
        {
          prompt: 'How does the passage create an in-group with the audience?',
          options: [
            'By using formal Latinate vocabulary',
            'By stacking Australian idioms and colloquialisms that assume shared cultural knowledge',
            'By quoting statistics',
            'By using the passive voice',
          ],
          answer: 1,
          explain:
            'Sharing idioms is a solidarity move. It says "we speak the same way, so we want the same things".',
        },
        {
          prompt: 'What is the purpose of the pronoun cluster "they", "someone", "their"?',
          options: [
            'To name the responsible people precisely',
            'To keep authority unnamed and therefore shared as a complaint',
            'To include the caller',
            'To create a metaphor',
          ],
          answer: 1,
          explain:
            'Vague reference locates blame without requiring a target — very effective in spoken complaint.',
        },
        {
          prompt: 'Why does the text switch to "a fair go"?',
          options: [
            'To sound more formal',
            'Because it appeals to a shared Australian value of egalitarianism',
            'Because it is jargon',
            'Because it avoids a taboo word',
          ],
          answer: 1,
          explain:
            'Culture-bearing idioms carry presupposed values. Using one enlists the audience on your side instantly.',
        },
      ],
      teach:
        'Talkback radio is a superb source of unscripted informal speech. Idioms, hyperbole and vagueness all do persuasive work that the speaker never planned.',
    },
    {
      id: 'au11',
      title: 'Walls breathe here',
      text: 'Walls breathe here. The laneway has been repainted, board by board, and the best of it hums with anger and affection at the same time. One panel — a slow-motion fist above a smashed teacup — froze me cold. The artist works in spray and stencil, layering rust, turquoise and a hard electric pink. Some of it is loud and cheap; some of it is quiet and unforgettable. It is not decoration. It is an argument, sprayed onto a wall that had nothing to say before.',
      source: 'Online review of a street art exhibition (constructed)',
      field: 'Arts criticism',
      mode: 'written',
      setting: 'written, published online',
      tenor: 'reflective and evaluative, critic to reader',
      register: 'neutral-register',
      registerNote:
        'Standard grammar carrying deliberately figurative choices — the critic is playing with the reader.',
      dominantFunction: 'poetic',
      functionNote:
        'The phrasing is foregrounded: the short sentences, the images and the sound patterning all draw attention to their own construction.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'personification',
          spans: ['Walls breathe'],
          note: 'A building given lungs — the opening move sets up the whole conceit.',
        },
        {
          feature: 'metaphor',
          spans: ['It is an argument'],
          note: 'Art is asserted to be a speech act, not an object.',
        },
        {
          feature: 'noun-abstract',
          spans: ['anger', 'affection', 'decoration', 'argument'],
          note: 'Four abstractions, each attached to something concrete so they stay vivid.',
        },
        {
          feature: 'alliteration',
          spans: ['spray and stencil'],
          note: 'Two /s/ + consonant clusters that bind the technique to its tools.',
        },
        {
          feature: 'assonance',
          spans: ['froze me cold'],
          note: 'The long /oʊ/ recurs — the vowel itself feels frozen.',
        },
        {
          feature: 'onomatopoeia',
          spans: ['hums'],
          note: 'The word imitates the low sound it describes.',
        },
        {
          feature: 'adjective',
          spans: ['unforgettable', 'electric'],
          note: 'Evaluative adjectives that also carry shock value.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['best'],
          note: 'A superlative judgement, which is what reviewing is for.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has been', 'is'],
          note: 'A passive and a copula — the auxiliary load of descriptive prose.',
        },
        {
          feature: 'noun-concrete',
          spans: ['teacup', 'rust', 'pink'],
          note: 'Objects and colours anchor the abstractions in something visible.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['in spray and stencil', 'onto a wall'],
          note: 'Both phrases extend the verbs, adding method and destination.',
        },
      ],
      quiz: [
        {
          prompt: 'What sentence type is "Walls breathe here."?',
          options: [
            'A fragment',
            'A complete simple declarative sentence',
            'An imperative',
            'An interrogative',
          ],
          answer: 1,
          explain:
            'It has a subject ("Walls") and a verb ("breathe"), so it is complete — a plain sentence used for dramatic effect.',
        },
        {
          prompt: 'Why is this passage best described as poetic in function?',
          options: [
            'Because it is about art',
            'Because the sound and shape of the language are foregrounded alongside the meaning',
            'Because it uses declarative sentences',
            'Because it contains nouns',
          ],
          answer: 1,
          explain:
            'The poetic function is about drawing attention to form itself — alliteration, assonance, metaphor and rhythm all do that.',
        },
        {
          prompt: 'What does the pair "loud and cheap" / "quiet and unforgettable" achieve?',
          options: [
            'A single metaphor',
            'A balanced contrast in a compound sentence that measures two kinds of street art against each other',
            'Metalinguistic commentary',
            'A change in register',
          ],
          answer: 1,
          explain:
            'Paired clauses invite comparison. Even without naming the device, the reviewer is structuring judgement.',
        },
      ],
      teach:
        'Criticism sits between referential and poetic functions. It reports, but it reports through deliberately chosen figures — so almost every sentence carries analysable language play.',
    },
    {
      id: 'au12',
      title: 'The billy sang',
      text: "The billy sang and the stockhorse stood, while the paddocks drowned in a burnt-gold flood. Out on the plain where the crows all call, a drover remembers the lot of them all — the dust, the flies and the long dry track, the promise he made that he'd always come back. The wind through the saltbush is thin and mean, and the hills hold the heat like a lid on a dream. He'll camp by the creek till the morning light, and the stars will be out in the wide, wide night.",
      source: 'Bush ballad stanza, written in the traditional style (constructed)',
      field: 'Australian literature and folklore',
      mode: 'written',
      setting: 'written, verse',
      tenor: 'elegiac, narrator to reader',
      register: 'neutral-register',
      registerNote:
        'Elevated and patterned: the vocabulary is plain, but the arrangement is deliberately literary.',
      dominantFunction: 'poetic',
      functionNote:
        'Everything is shaped for sound and image — rhyme, metre and vowel patterning take priority over information.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'rhyme',
          spans: ['stood', 'flood', 'call', 'all', 'light', 'night'],
          note: 'Three couplets in rhyming pairs — the ballad has to sound like a ballad.',
        },
        {
          feature: 'alliteration',
          spans: ['the hills hold the heat'],
          note: 'Three /h/ onsets in a row, which thickens the line and slows the reader down.',
        },
        {
          feature: 'assonance',
          spans: ['wide, wide night'],
          note: 'The long /aɪ/ repeats three times inside one phrase.',
        },
        {
          feature: 'onomatopoeia',
          spans: ['sang'],
          note: 'The billy does not sing, but the word carries the sound the listener would hear.',
        },
        {
          feature: 'metaphor',
          spans: ['drowned in a burnt-gold flood'],
          note: 'Light is treated as water and as disaster; the image is violent and beautiful at once.',
        },
        {
          feature: 'simile',
          spans: ['like a lid on a dream'],
          note: 'An explicit "like" comparison that fuses the physical and the imagined.',
        },
        {
          feature: 'personification',
          spans: ['the hills hold the heat'],
          note: 'The country itself is given the human act of holding.',
        },
        {
          feature: 'australian-english',
          spans: ['billy', 'stockhorse', 'drover', 'saltbush'],
          note: 'Four items of rural Australian lexicon — the vocabulary of the ballad tradition.',
        },
        {
          feature: 'noun-concrete',
          spans: ['creek', 'stars', 'crows'],
          note: 'Physical nouns that keep the imagery from floating away into abstraction.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'A simple prediction in the last line, turning memory into something that continues.',
        },
        {
          feature: 'contraction',
          spans: ["He'll", "he'd"],
          note: 'Two contractions — the ballad voice stays close to speech even inside its metre.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature is most characteristic of the ballad tradition in this stanza?',
          options: [
            'The use of numerals',
            'The steady rhyme scheme combined with rural Australian lexicon',
            'The passive voice',
            'The jargon',
          ],
          answer: 1,
          explain:
            'Bush ballads are built from rhyme, regular metre and a rural idiom drawn from the working bush.',
        },
        {
          prompt: 'How does "drowned in a burnt-gold flood" work as a metaphor?',
          options: [
            'It compares light to water and to a disaster',
            'It uses the word "like" to make the comparison',
            'It is an example of jargon',
            'It reports a historical flood',
          ],
          answer: 0,
          explain:
            'There is no "like" or "as", so the two domains are fused: light literally becomes water.',
        },
        {
          prompt: 'Why is "till" significant?',
          options: [
            'It is a proper noun',
            'It is an older, contracted form of "until" that suits the traditional register',
            'It is a modal verb',
            'It creates an acronym',
          ],
          answer: 1,
          explain:
            'Word choice reaches back into older forms to signal tradition. That is a register move, not a modern clipping.',
        },
      ],
      teach:
        'Bush ballads are the cleanest place to study sound devices in Australian writing, because the metre guarantees you will find rhyme, assonance and alliteration in almost every line.',
    },
  ],
}
