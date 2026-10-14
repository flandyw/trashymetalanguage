import type { PassageBank } from '../../lib/passages'

export const bank09: PassageBank = {
  id: 'everyday',
  label: 'Everyday & Digital Talk',
  blurb:
    'SMS, group chats, comments, captions, dinner tables and voice chat. The informal end of the continuum, where language change happens first.',
  passages: [
    /* ------------------------------------------------------------------ 01 */
    {
      id: 'everyday-01',
      title: 'Running late (SMS)',
      text: "Hey, still coming tonight? I’m running a bit late sorry. Grab the tickets from Cam if you get there before me and text me.",
      source: 'SMS exchange between two friends (constructed)',
      field: 'social plans',
      mode: 'written',
      setting: 'written, digital, synchronous (SMS)',
      tenor: 'close friends of equal status',
      register: 'informal-register',
      registerNote:
        'Contractions, a clipped subject in a question and the filler "a bit" all signal closeness rather than distance.',
      dominantFunction: 'phatic',
      functionNote:
        'The message mostly maintains the friendship and checks in; the practical request to grab the tickets is secondary.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['Hey'],
          note: 'Opens the message as pure contact-making.',
        },
        {
          feature: 'ellipsis',
          spans: ['still coming tonight'],
          note: 'The subject and auxiliary ("Are you") are left out because the context makes them obvious.',
        },
        {
          feature: 'contraction',
          spans: ['I’m'],
          note: 'Two words folded into one — a fast register marker.',
        },
        {
          feature: 'verb-lexical',
          spans: ['coming', 'running', 'Grab', 'text'],
          note: 'The doing words. "Grab" here means collect, not physically seize.',
        },
        {
          feature: 'adverb',
          spans: ['still', 'late'],
          note: '"still" gives time, "late" tells you how far behind.',
        },
        {
          feature: 'colloquialism',
          spans: ['a bit'],
          note: 'Vague hedging that softens the apology instead of committing to a number of minutes.',
        },
        {
          feature: 'noun-common',
          spans: ['tickets'],
        },
        {
          feature: 'noun-proper',
          spans: ['Cam'],
          note: 'A single capitalised name — no "the" needed, because there is only one Cam in play.',
        },
        {
          feature: 'preposition',
          spans: ['from', 'before'],
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if'],
          note: 'Creates a dependent clause and turns a simple request into a complex structure.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Joins two equal imperatives, making the final sentence compound.',
        },
        {
          feature: 'pronoun',
          spans: ['you', 'me'],
          note: 'Anaphoric pronouns do the work here instead of repeating names.',
        },
      ],
      quiz: [
        {
          prompt: 'The opening question omits "Are" from "Are you still coming tonight?". This is:',
          options: ['alliteration', 'jargon', 'ellipsis', 'a proper noun'],
          answer: 2,
          explain:
            'Ellipsis omits words that the listener can recover from context. In speech and texts it saves effort and feels intimate.',
        },
        {
          prompt: 'Which feature most clearly marks the message as informal rather than formal?',
          options: ['the noun tickets', 'the contraction I’m', 'the preposition from', 'the name Cam'],
          answer: 1,
          explain:
            'Contractions imitate speech and reduce social distance. A formal message would write "I am running late".',
        },
      ],
      teach:
        'Informal messages are grammatical — they just follow the grammar of conversation, where recoverable words get dropped and vagueness does social work.',
    },

    /* ------------------------------------------------------------------ 02 */
    {
      id: 'everyday-02',
      title: 'Group chat roll call',
      text: "oi is anyone actually going to Sam’s thing on saturday?? i need a lift bc mum’s got the car and youse are all leaving at 6. pls respond",
      source: 'Group chat message (constructed)',
      field: 'social plans',
      mode: 'written',
      setting: 'written, digital, group chat',
      tenor: 'intimate peer group',
      register: 'informal-register',
      registerNote:
        'Lowercase throughout, doubled punctuation for emphasis, an abbreviated "pls" and a non-standard pronoun all point to an uncorrected peer register.',
      dominantFunction: 'conative',
      functionNote: 'The whole message is engineered to get a reply and secure a lift.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['oi'],
          note: 'A blunt attention-getter rather than a greeting — it demands a turn.',
        },
        {
          feature: 'non-standard',
          spans: ['youse'],
          note: 'A second-person plural pronoun that is rule-governed in many Australian dialects but not part of the standard variety.',
        },
        {
          feature: 'shortening',
          spans: ['pls'],
          note: 'The vowel is stripped out of "please" because typing speed beats spelling.',
        },
        {
          feature: 'contraction',
          spans: ['mum’s'],
        },
        {
          feature: 'pronoun',
          spans: ['anyone', 'i'],
          note: '"anyone" is indefinite — it addresses the whole group without naming anyone.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['are'],
        },
        {
          feature: 'verb-lexical',
          spans: ['going', 'need', 'got', 'leaving', 'respond'],
        },
        {
          feature: 'noun-proper',
          spans: ['Sam’s'],
          note: 'A proper noun with a possessive -s, standing in for "the party at Sam’s house".',
        },
        {
          feature: 'noun-common',
          spans: ['thing', 'lift', 'car'],
          note: '"thing" is deliberately vague — the group already knows what the event is.',
        },
        {
          feature: 'preposition',
          spans: ['to', 'on', 'at'],
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['bc'],
          note: '"bc" is a clipped subordinating conjunction. Even at maximum speed, the causality gets marked.',
        },
        {
          feature: 'adverb-degree',
          spans: ['actually'],
          note: 'An intensifier expressing the writer’s impatience with a non-answer.',
        },
      ],
      quiz: [
        {
          prompt: '"youse" is best described as:',
          options: [
            'a typo with no grammatical meaning',
            'a formal plural pronoun',
            'an initialism',
            'a non-standard variant that is regular in many Australian dialects',
          ],
          answer: 3,
          explain:
            'Non-standard means "not part of the standard variety", not "wrong". The form is systematic in the dialects that use it.',
        },
        {
          prompt: 'Which word in the message is deliberately vague, relying on shared knowledge?',
          options: ['lift', 'thing', 'car', 'saturday'],
          answer: 1,
          explain:
            'In-group talk can be vague because the referent is already shared. Outsiders would need to ask what "Sam’s thing" is.',
        },
      ],
      teach:
        'Speed-driven writing produces its own conventions: clipping, doubled punctuation, lowercase "i". These are register choices, not carelessness.',
    },

    /* ------------------------------------------------------------------ 03 */
    {
      id: 'everyday-03',
      title: 'Clinic voicemail',
      text: "Hi, it’s Deb from the clinic. Just calling to confirm your appointment on Tuesday at 2:30. If you need to change it, give us a ring back on the same number. Thanks!",
      source: 'Voicemail message, medical clinic (constructed)',
      field: 'appointment administration',
      mode: 'spoken',
      setting: 'spoken, recorded, asynchronous',
      tenor: 'service provider to client, fairly distant',
      register: 'neutral-register',
      registerNote:
        'Contractions and the idiom "give us a ring" keep it warm, while the job title, the fixed time and the polite formula keep it professional.',
      dominantFunction: 'conative',
      functionNote:
        'The message exists to make the client confirm or reschedule — the appointment details are the means, not the purpose.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['Hi'],
        },
        {
          feature: 'contraction',
          spans: ['it’s'],
        },
        {
          feature: 'noun-proper',
          spans: ['Deb', 'Tuesday'],
          note: 'Names one person uniquely and one specific day.',
        },
        {
          feature: 'preposition',
          spans: ['from', 'on', 'at', 'to'],
        },
        {
          feature: 'determiner',
          spans: ['the', 'your'],
          note: '"the" marks something identifiable, "your" links the appointment back to the listener.',
        },
        {
          feature: 'noun-common',
          spans: ['clinic', 'appointment', 'number'],
        },
        {
          feature: 'verb-lexical',
          spans: ['calling', 'confirm', 'need', 'change', 'give', 'ring'],
        },
        {
          feature: 'verb-semi-modal',
          spans: ['need to'],
          note: 'A modal job done by an ordinary verb, so it can take tense and agreement.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['ring back'],
          note: 'The particle changes the meaning from "phone" to "return the call".',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['If'],
          note: 'Sets up the condition that makes the request relevant.',
        },
        {
          feature: 'idiom',
          spans: ['give us a ring'],
          note: 'Figurative and informal — nobody is being handed jewellery. "us" means "me".',
        },
        {
          feature: 'adverb',
          spans: ['Just'],
          note: 'Minimises the imposition: "I am only calling for this one reason".',
        },
      ],
      quiz: [
        {
          prompt: 'Which expression turns a direct instruction into a friendly request?',
          options: ['confirm your appointment', 'on the same number', 'give us a ring back', 'at 2:30'],
          answer: 2,
          explain:
            'The idiom softens the face threat of telling the listener to phone. A bald "Phone us." would be far more conative in force.',
        },
        {
          prompt: 'In "on Tuesday", the word "on" is a:',
          options: ['conjunction', 'determiner', 'modal verb', 'preposition'],
          answer: 3,
          explain: 'It heads a prepositional phrase giving the relationship of time between the call and the appointment.',
        },
      ],
      teach:
        'Institutional speech is not automatically formal. Voicemail sits in the middle: scripted conventions, but delivered with conversational softening.',
    },

    /* ------------------------------------------------------------------ 04 */
    {
      id: 'everyday-04',
      title: 'Comment section pile-on',
      text: "not me watching this at 2am like it’s a documentary. honestly the bit about the magpie is so real. i’ve had one swoop me three times on the way to the servo. anyway if you’re scared of them just walk don’t run and hold something over your head. my nan reckons they remember faces which is terrifying ngl. also can we talk about how the audio is doing way too much? the song is lowkey better than the actual video lol. no cap this is the funniest thing i’ve seen all week and i’ll die on that hill.",
      source: 'Comment thread under a short-form video (constructed)',
      field: 'reaction to popular culture',
      mode: 'written',
      setting: 'written, digital, public, asynchronous',
      tenor: 'anonymous peers performing for strangers',
      register: 'informal-register',
      registerNote:
        'Zero capitals, abbreviations, a coinage-style intensifier and extreme exaggeration are all badges of belonging to the platform’s community.',
      dominantFunction: 'emotive',
      functionNote:
        'The comment is a performance of the writer’s own reaction; the factual magpie detail is a springboard for attitude.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'neologism',
          spans: ['lowkey'],
          note: 'A relatively recent borrowing used here as an intensifier meaning "secretly, but genuinely".',
        },
        {
          feature: 'slang',
          spans: ['no cap', 'ngl', 'lol'],
          note: 'In-group markers. They carry solidarity rather than literal meaning.',
        },
        {
          feature: 'australian-english',
          spans: ['servo', 'nan', 'reckons'],
          note: 'A clipped form, an affectionate family term and a distinctly Australian verb of thinking.',
        },
        {
          feature: 'contraction',
          spans: ['it’s', 'i’ve', 'you’re', 'don’t', 'i’ll'],
        },
        {
          feature: 'verb-modal',
          spans: ['can'],
          note: 'Introduces a rhetorical question that pretends to seek permission.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['funniest'],
          note: 'Puts the video at the top of a scale — the strongest possible claim.',
        },
        {
          feature: 'adjective-comparative',
          spans: ['better'],
          note: 'Evaluates the song against the video.',
        },
        {
          feature: 'hyperbole',
          spans: ['way too much', 'i’ll die on that hill'],
          note: 'Gross exaggeration used as a commitment device: "I will not change my mind".',
        },
        {
          feature: 'simile',
          spans: ['like it’s a documentary'],
          note: 'An explicit comparison with "like", positioning serious factual viewing on a trivial clip.',
        },
        {
          feature: 'discourse-marker',
          spans: ['anyway', 'honestly', 'also'],
          note: 'These manage the flow of the comment and signal the writer’s stance.',
        },
        {
          feature: 'adverb-degree',
          spans: ['so', 'way', 'too'],
        },
        {
          feature: 'preposition',
          spans: ['about', 'over', 'of', 'than'],
        },
      ],
      quiz: [
        {
          prompt: 'Which cluster of words is the clearest evidence of Australian English?',
          options: ['audio, video, week', 'servo, nan, reckons', 'anyway, honestly, also', 'so, way, too'],
          answer: 1,
          explain:
            'Servo is a clipping of service station, nan is the common Australian family term, and reckons is a distinctly Australian verb of opinion.',
        },
        {
          prompt: 'What is the dominant function of this comment?',
          options: ['referential', 'metalinguistic', 'conative', 'expressive'],
          answer: 3,
          explain:
            'The passage reports almost no verifiable information. Its purpose is to display the writer’s attitude and identity for an audience.',
        },
      ],
      teach:
        'Online comments mix typographic shortcuts, rapid neologisms and hyperbole. The key move is separating what is new (form) from what is constant (attitude, solidarity, evaluation).',
    },

    /* ------------------------------------------------------------------ 05 */
    {
      id: 'everyday-05',
      title: 'Birthday caption',
      text: "three years of this face and i’m still not sick of it. happy birthday to my favourite human. you make every ordinary tuesday feel like a road trip with no playlist and i would do it all again in a heartbeat. thank you for the terrible jokes, the late night chips, and for always picking up when i ring. here’s to many more. love you heaps. anyway, i’m off to buy you a coffee because honestly i have no idea what else to get you. consider this caption your present.",
      source: 'Public social media caption (constructed)',
      field: 'personal celebration',
      mode: 'written',
      setting: 'written, digital, public, one-to-many',
      tenor: 'intimate, but performed in front of an audience',
      register: 'informal-register',
      registerNote:
        'Contractions, the clipped adverb "heaps", a phrasal verb and stacked clauses create warmth while staying deliberately unpolished.',
      dominantFunction: 'emotive',
      functionNote:
        'The caption expresses affection. Its details are shared not because the reader needs them, but to display the relationship.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'colloquialism',
          spans: ['heaps'],
          note: 'An Australian-flavoured informal quantifier meaning "a lot".',
        },
        {
          feature: 'idiom',
          spans: ['in a heartbeat'],
          note: 'Fixed figurative expression meaning "without hesitation".',
        },
        {
          feature: 'verb-phrasal',
          spans: ['picking up'],
          note: 'Here it means answering a phone call, not lifting an object.',
        },
        {
          feature: 'simile',
          spans: ['like a road trip with no playlist'],
          note: 'An extended simile — the second half adds its own detail, which keeps it fresh.',
        },
        {
          feature: 'contraction',
          spans: ['i’m', 'here’s'],
        },
        {
          feature: 'adjective',
          spans: ['favourite', 'ordinary', 'terrible'],
          note: 'Note the evaluation: "terrible jokes" is a compliment in this context despite the negative adjective.',
        },
        {
          feature: 'determiner',
          spans: ['my', 'every', 'this'],
          note: '"every" generalises, which makes the compliment broader and stronger.',
        },
        {
          feature: 'verb-modal',
          spans: ['would'],
          note: 'Expresses willingness and a hypothetical, in a conditional about the past.',
        },
        {
          feature: 'pronoun',
          spans: ['you', 'it'],
        },
        {
          feature: 'preposition',
          spans: ['of', 'to', 'with', 'for', 'in'],
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['when', 'because'],
          note: '"because" hands the audience a reason, which reads as sincerity rather than excuse.',
        },
        {
          feature: 'discourse-marker',
          spans: ['anyway', 'honestly'],
          note: 'Both manage the shift from sentiment back to banter.',
        },
      ],
      quiz: [
        {
          prompt: '"like a road trip with no playlist" is an example of:',
          options: ['a metaphor', 'personification', 'a simile', 'an oxymoron'],
          answer: 2,
          explain:
            'The comparison is flagged by "like". A metaphor would drop the flag and say the relationship is a road trip.',
        },
        {
          prompt: 'Which word functions as a determiner in "every ordinary tuesday"?',
          options: ['ordinary', 'every', 'tuesday', 'the'],
          answer: 1,
          explain: '"every" sits at the front of the noun phrase and quantifies the head noun "tuesday".',
        },
      ],
      teach:
        'Personal captions do double duty: they address one person while performing intimacy for a wide audience. Watch how the private pronoun "you" is embedded in public text.',
    },

    /* ------------------------------------------------------------------ 06 */
    {
      id: 'everyday-06',
      title: 'New to the city',
      text: "so i moved to Melbourne six months ago and i still can’t get my head around the coffee culture. every second shop is a cafe and everyone has an opinion about which one does the best flat white. my coworker told me that if you order a latte after 3pm people will judge you. i thought she was joking but then someone actually sighed at me. anyway, i’m not complaining, the coffee is genuinely better than anywhere else i have lived. i just want to know how long it takes before you stop feeling like a tourist in your own suburb. any advice would be appreciated.",
      source: 'Forum post in a city subreddit (constructed)',
      field: 'settling into a new city',
      mode: 'written',
      setting: 'written, digital, semi-public forum',
      tenor: 'strangers with a shared local interest',
      register: 'informal-register',
      registerNote:
        'Contractions, a colloquial idiom and first person narrative keep it conversational, even though the sentences are long and well built.',
      dominantFunction: 'referential',
      functionNote:
        'Most of the post reports and explains the writer’s observations; the closing question adds a conative layer.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Melbourne'],
          note: 'No article needed — the name points to exactly one place.',
        },
        {
          feature: 'noun-common',
          spans: ['coffee', 'cafe', 'latte', 'suburb'],
        },
        {
          feature: 'noun-abstract',
          spans: ['culture', 'opinion'],
          note: 'Neither can be put in a wheelbarrow. Abstract nouns like these cluster in explanation.',
        },
        {
          feature: 'verb-modal',
          spans: ['can’t', 'will', 'would'],
          note: 'A negated ability modal, a prediction modal and a politeness modal in one short post.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'was', 'have', 'has'],
        },
        {
          feature: 'adjective-comparative',
          spans: ['better'],
          note: 'Evaluates Melbourne against everywhere else the writer has lived.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['best'],
          note: 'Claims the top of the scale for one cafe’s flat white.',
        },
        {
          feature: 'idiom',
          spans: ['can’t get my head around'],
          note: 'Fixed figurative expression meaning "cannot understand or accept".',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if', 'before', 'which'],
          note: 'Three different logical relationships: condition, time and relative description.',
        },
        {
          feature: 'preposition',
          spans: ['around', 'about', 'after', 'than'],
        },
        {
          feature: 'adverb',
          spans: ['genuinely', 'actually', 'just', 'still'],
          note: '"genuinely" and "actually" are stance adverbs — they insist on the truth of the claim.',
        },
        {
          feature: 'discourse-marker',
          spans: ['so', 'anyway'],
          note: '"so" opens the narrative, "anyway" steers away from the digression.',
        },
      ],
      quiz: [
        {
          prompt: '"can’t get my head around" is best classified as:',
          options: ['jargon', 'an idiom', 'a euphemism', 'an oxymoron'],
          answer: 1,
          explain:
            'The meaning is not derivable from the individual words, and it is a fixed expression — the two hallmarks of an idiom.',
        },
        {
          prompt: 'Which pair contrasts two points on an evaluation scale?',
          options: ['is / was', 'around / about', 'so / anyway', 'better / best'],
          answer: 3,
          explain: 'The comparative and superlative forms of "good" build a graded judgement across the post.',
        },
      ],
      teach:
        'Informal does not mean unsophisticated. This post uses complex sentences, modals and abstract nouns while still sounding like a person talking.',
    },

    /* ------------------------------------------------------------------ 07 */
    {
      id: 'everyday-07',
      title: 'A lift on Saturday (phone call)',
      text: "Rhys: hey, yeah, sorry, i missed your call before, i was on the tram and it was packed. Tiah: all good. listen, do you still want a lift to the game on Saturday? Rhys: oh, definitely, if that’s— hold on. sorry. yes, still alright. what time are you heading off? Tiah: probs around eleven, but i might have to drop past mum’s first. Rhys: yeah, no worries, that’s fine. just text me when you’re out the front and i’ll come down. Tiah: sweet, i’ll see you then.",
      source: 'Transcript of a phone call between friends (constructed)',
      field: 'arranging transport',
      mode: 'spoken',
      setting: 'spoken, telephone, synchronous',
      tenor: 'close friends, relaxed and overlapping',
      register: 'informal-register',
      registerNote:
        'Discourse markers, a self-interruption, a clipped form and an Australian idiom are all typical of relaxed conversational turn-taking.',
      dominantFunction: 'phatic',
      functionNote:
        'The lift could be arranged in one line. The rest of the exchange maintains the relationship, which is the real work of the call.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['oh', 'yeah', 'sweet'],
          note: 'Short emotional bursts that carry the tone of each turn.',
        },
        {
          feature: 'discourse-marker',
          spans: ['listen', 'all good'],
          note: '"listen" claims the floor and signals a topic change; "all good" closes the previous apology.',
        },
        {
          feature: 'australian-english',
          spans: ['no worries', 'probs'],
          note: 'The national formula of reassurance plus an Australian clipped form of "probably".',
        },
        {
          feature: 'shortening',
          spans: ['probs'],
          note: 'Shortened by removing the final syllable, keeping the meaning intact.',
        },
        {
          feature: 'verb-modal',
          spans: ['might'],
        },
        {
          feature: 'verb-semi-modal',
          spans: ['have to'],
          note: 'Expresses obligation using the grammar of an ordinary verb — it can change tense.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['heading off', 'drop past', 'come down', 'hold on'],
          note: 'Four phrasal verbs in one short call — a hallmark of spoken Australian English.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['when', 'if'],
        },
        {
          feature: 'contraction',
          spans: ['that’s', 'i’ll', 'you’re'],
        },
        {
          feature: 'adverb',
          spans: ['still', 'definitely', 'first'],
        },
        {
          feature: 'verb-lexical',
          spans: ['missed', 'want', 'text', 'see'],
        },
        {
          feature: 'noun-common',
          spans: ['tram', 'lift', 'game', 'front'],
        },
      ],
      quiz: [
        {
          prompt: '"have to" behaves differently from "might" because it:',
          options: [
            'cannot express obligation',
            'is a preposition',
            'takes ordinary verb grammar, including tense and agreement',
            'is a proper noun',
          ],
          answer: 2,
          explain:
            'Semi-modals like "had to", "needs to" and "used to" inflect, which true modals never do.',
        },
        {
          prompt: 'Which group contains only phrasal verbs?',
          options: [
            'sorry, please, thanks',
            'heading off, drop past, come down',
            'tram, game, front',
            'might, have to, want',
          ],
          answer: 1,
          explain: 'Each is a verb plus a particle whose combination has a meaning of its own.',
        },
      ],
      teach:
        'Transcripts of real talk are messy on purpose. Self-interruption, filled pauses and overlapping turns are features of the mode, not failures of the speaker.',
    },

    /* ------------------------------------------------------------------ 08 */
    {
      id: 'everyday-08',
      title: 'Podcast hosts on class markers',
      text: "Maz: okay so before we get into it, i have to say the bit about the puffer jackets absolutely killed me. Kev: right? i was in the studio like, is this real. Maz: anyway, we should probably explain what we mean by class markers, because half our listeners are probably going, what does she mean. Kev: yeah, fair. so basically it’s the little stuff, the way you say certain vowels, the brands you wear, whether you call it a pool or a swimming pool. Maz: and none of that is good or bad, it’s just data. Kev: exactly. it just tells you which group you grew up around. Maz: beautiful. okay, let’s actually do the segment.",
      source: 'Transcript of a podcast segment (constructed)',
      field: 'discussing sociolinguistics',
      mode: 'spoken',
      setting: 'spoken, recorded broadcast',
      tenor: 'co-hosts performing for listeners they cannot see',
      register: 'informal-register',
      registerNote:
        'Heavy discourse marking, hedges and casual evaluation sounds spontaneous, even though podcasts are edited and planned.',
      dominantFunction: 'metalinguistic',
      functionNote:
        'The hosts literally talk about language and meaning — defining a term, quoting examples and checking their own phrasing.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'interjection',
          spans: ['okay', 'yeah', 'exactly', 'right'],
          note: 'Turn-taking noises that keep the conversation moving without adding content.',
        },
        {
          feature: 'discourse-marker',
          spans: ['so', 'anyway', 'basically', 'like'],
          note: 'The highlighter test: delete them and the content survives, but the flow and stance disappear.',
        },
        {
          feature: 'noun-proper',
          spans: ['Maz', 'Kev'],
          note: 'Speaker labels name two unique individuals.',
        },
        {
          feature: 'noun-abstract',
          spans: ['class', 'data'],
          note: 'Both are concepts rather than objects — the vocabulary of analysis.',
        },
        {
          feature: 'verb-modal',
          spans: ['should'],
        },
        {
          feature: 'verb-semi-modal',
          spans: ['have to'],
        },
        {
          feature: 'verb-lexical',
          spans: ['killed', 'explain', 'mean', 'wear', 'call', 'grew'],
        },
        {
          feature: 'adjective',
          spans: ['certain', 'little', 'beautiful'],
          note: '"beautiful" here means "well said" — evaluation of the discussion, not of an object.',
        },
        {
          feature: 'adverb-degree',
          spans: ['absolutely'],
          note: 'Turns a mild reaction into an extreme one.',
        },
        {
          feature: 'adverb',
          spans: ['probably', 'actually', 'just'],
          note: '"probably" hedges the claim, "just" minimises it — both protect the hosts from overclaiming.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['because', 'whether', 'which'],
        },
        {
          feature: 'colloquialism',
          spans: ['the bit'],
          note: '"the bit" means "the section" — conversational wording for structure.',
        },
      ],
      quiz: [
        {
          prompt: 'Which word is a discourse marker managing the structure of the episode?',
          options: ['jackets', 'vowels', 'segment', 'anyway'],
          answer: 3,
          explain:
            '"anyway" signals a return to the main thread. Nouns like "segment" name content rather than managing flow.',
        },
        {
          prompt: 'The hosts quote the question "what does she mean". This makes the segment:',
          options: ['poetic', 'metalinguistic', 'phatic', 'imperative'],
          answer: 1,
          explain: 'They are using language to comment on and clarify language itself.',
        },
      ],
      teach:
        'Metalinguistic talk is easy to miss because it looks like ordinary chatter. If the participants are defining, correcting or quoting language, the function is metalinguistic.',
    },

    /* ------------------------------------------------------------------ 09 */
    {
      id: 'everyday-09',
      title: 'Bus stop after school',
      text: "Lena: are you coming to Marcus’s thing friday? Josh: yeah maybe, depends if i finish the bio assignment. Lena: bro you’ve had like three weeks. Josh: i know, i know, don’t even. i kept getting distracted by that new game. Lena: honestly same, i was up till one doing the write up. Josh: anyway, if i get it done tonight i’ll be there. Lena: sweet, we’re getting the 4:15 bus. Josh: okay, text me if anything changes. Lena: will do.",
      source: 'Conversation overheard at a bus stop (constructed)',
      field: 'schoolwork and social plans',
      mode: 'spoken',
      setting: 'spoken, face-to-face, casual',
      tenor: 'classmates and close friends',
      register: 'informal-register',
      registerNote:
        'Clipping, a vocative "bro", repetition for emphasis and a two-word elliptical reply — every line is built for speed.',
      dominantFunction: 'phatic',
      functionNote:
        'The plan is almost beside the point. The exchange cements the friendship through teasing and shared complaint.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Lena', 'Josh', 'Marcus’s'],
          note: 'Speaker labels plus the host of the event, which carries a possessive.',
        },
        {
          feature: 'interjection',
          spans: ['yeah', 'bro', 'sweet', 'okay'],
          note: '"bro" works as a vocative interjection — it is a social move as much as a word.',
        },
        {
          feature: 'shortening',
          spans: ['bio'],
          note: 'Drops three syllables from "biology assignment" while keeping the meaning.',
        },
        {
          feature: 'colloquialism',
          spans: ['don’t even', 'same'],
          note: '"same" is an adverb of agreement in this peer register; it would be marked in an essay.',
        },
        {
          feature: 'contraction',
          spans: ['you’ve', 'i’ll', 'we’re', 'don’t'],
        },
        {
          feature: 'verb-lexical',
          spans: ['coming', 'finish', 'kept', 'getting', 'doing', 'changes'],
        },
        {
          feature: 'verb-auxiliary',
          spans: ['was', 'had'],
        },
        {
          feature: 'noun-common',
          spans: ['thing', 'assignment', 'weeks', 'game', 'bus'],
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if', 'till'],
          note: '"till" is a spoken form of "until" introducing a time clause.',
        },
        {
          feature: 'determiner',
          spans: ['three', 'one', '4:15'],
          note: 'Three numerals in under a minute of talk — quantity is casually everywhere.',
        },
        {
          feature: 'adverb',
          spans: ['maybe', 'tonight'],
        },
        {
          feature: 'discourse-marker',
          spans: ['honestly', 'anyway'],
        },
      ],
      quiz: [
        {
          prompt: 'Which word is a clipped form of "biology"?',
          options: ['thing', 'bio', 'bus', 'game'],
          answer: 1,
          explain: 'Clipping shortens a word without changing its meaning or word class.',
        },
        {
          prompt: 'Lena’s closing "will do" leaves out the rest of the clause. This relies on:',
          options: ['alliteration', 'jargon', 'ellipsis', 'a proper noun'],
          answer: 2,
          explain:
            'The full form would be something like "I will text you if anything changes". Ellipsis is licensed by the shared context.',
        },
      ],
      teach:
        'Teen talk is the fastest-moving part of the lexicon. Note how much of this exchange is doing social work rather than transferring information.',
    },

    /* ------------------------------------------------------------------ 10 */
    {
      id: 'everyday-10',
      title: 'Dinner table negotiation',
      text: "Mum: who wants more rice? Dad: i’ll have a bit. Mum: there’s plenty, i made way too much again. Ella: because you always do. Dad: careful, that’s your mother. Ella: i’m joking. honestly though, can we talk about the wedding for five minutes without someone storming off? Mum: i didn’t storm off, i went to get the dessert. Dad: which is still in the fridge, by the way. Ella: see, this is why we can’t have nice conversations. Mum: alright, alright, i’ll get it. Ella: thank you. so, Aunty Jo asked whether we’re doing a speech and i said we are. Dad: we are? Ella: we are now.",
      source: 'Family dinner table exchange (constructed)',
      field: 'family life and a wedding',
      mode: 'spoken',
      setting: 'spoken, face-to-face, intimate',
      tenor: 'immediate family, affectionate teasing',
      register: 'informal-register',
      registerNote:
        'Overlapping turns, a warning interjection, a repeated filler and the family address term "Aunty Jo" mark a private, close register.',
      dominantFunction: 'emotive',
      functionNote:
        'Feelings are the content here: mock outrage, defence, teasing. The wedding is the excuse for the performance.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'interjection',
          spans: ['alright', 'careful'],
          note: '"careful" warns rather than describes — a one-word social intervention.',
        },
        {
          feature: 'discourse-marker',
          spans: ['so', 'honestly', 'by the way', 'though'],
          note: 'Each one redirects the topic or hedges the tone of the turn.',
        },
        {
          feature: 'noun-proper',
          spans: ['Aunty Jo', 'Ella'],
          note: '"Aunty Jo" is a kinship title used as a name — a very Australian pattern.',
        },
        {
          feature: 'noun-abstract',
          spans: ['wedding', 'speech'],
          note: 'Events rather than objects: the family is negotiating ideas, not handling things.',
        },
        {
          feature: 'noun-common',
          spans: ['rice', 'dessert', 'fridge', 'minutes'],
        },
        {
          feature: 'verb-modal',
          spans: ['can'],
          note: 'Part of a rhetorical question about the family’s behaviour.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['didn’t', 'are'],
        },
        {
          feature: 'contraction',
          spans: ['there’s', 'that’s', 'i’m', 'we’re'],
        },
        {
          feature: 'verb-phrasal',
          spans: ['storming off', 'storm off'],
          note: 'Recycled by three speakers in two lines — the family is arguing about the same phrase.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['because', 'whether'],
        },
        {
          feature: 'irony',
          spans: ['this is why we can’t have nice conversations'],
          note: 'Said while everyone is enjoying the argument. The surface meaning is the opposite of the intended one.',
        },
        {
          feature: 'hyperbole',
          spans: ['way too much'],
          note: 'Deliberate overstatement about the quantity of rice, carrying the complaint.',
        },
      ],
      quiz: [
        {
          prompt: 'Ella’s line "this is why we can’t have nice conversations" is an example of:',
          options: ['hyperbole', 'jargon', 'alliteration', 'irony'],
          answer: 3,
          explain:
            'The family is clearly having fun. The words say one thing and the shared context implies the other.',
        },
        {
          prompt: 'Which phrase delivers a deliberately exaggerated judgement about quantity?',
          options: ['plenty', 'a bit', 'way too much', 'there’s'],
          answer: 2,
          explain: 'The intensifier "way" combined with "too much" makes the claim about scale an exaggeration.',
        },
      ],
      teach:
        'Family talk is high-context. Half the meaning lives in shared history, so irony and repetition can carry the whole exchange.',
    },

    /* ------------------------------------------------------------------ 11 */
    {
      id: 'everyday-11',
      title: 'Discord lobby call',
      text: "yo is anyone on tonight? i’m trying to get a squad together for the new ranked season. i’ve got the mic fixed finally, the old one was so cooked. we need at least three people or it’s not worth it. ping me in general if you’re keen. also i finally hit diamond last night which is genuinely insane. anyway, drop a yeah if you’re in and i’ll set up the lobby at 8. no pressure if you’re busy obviously. gg",
      source: 'Message in a gaming Discord server (constructed)',
      field: 'recruiting players for a game',
      mode: 'written',
      setting: 'written, digital, community server',
      tenor: 'online community with a shared hobby',
      register: 'informal-register',
      registerNote:
        'Lowercase, gaming jargon, slang and a two-letter closing formula all signal in-group membership.',
      dominantFunction: 'conative',
      functionNote:
        'Everything here pushes towards one behaviour: reply and join the lobby.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['yo'],
          note: 'A greeting that doubles as a summons — informal to the point of being a solidarity signal.',
        },
        {
          feature: 'initialism',
          spans: ['gg'],
          note: 'Said letter by letter, it closes the message like a handshake.',
        },
        {
          feature: 'slang',
          spans: ['cooked'],
          note: 'Here it means broken or useless, not cooked as in food.',
        },
        {
          feature: 'jargon',
          spans: ['ranked season', 'squad', 'lobby', 'diamond'],
          note: 'Shared vocabulary that marks the writer as a member of this discourse community.',
        },
        {
          feature: 'shortening',
          spans: ['mic'],
          note: 'Shortened from "microphone".',
        },
        {
          feature: 'contraction',
          spans: ['i’m', 'i’ve', 'it’s', 'you’re', 'i’ll'],
        },
        {
          feature: 'verb-lexical',
          spans: ['need', 'trying', 'hit', 'drop'],
          note: '“Need” takes the noun phrase “at least three people”, so it is a main verb here. “Hit diamond” and “drop a yeah” use verbs with specialised gaming senses.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['set up'],
          note: 'The particle changes the meaning from putting something down to arranging something.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if', 'which'],
        },
        {
          feature: 'determiner',
          spans: ['three', '8'],
          note: 'A cardinal number and a clock figure — informal text handles numbers casually.',
        },
        {
          feature: 'discourse-marker',
          spans: ['also', 'anyway'],
          note: 'Both add and redirect information without any formal linking phrase.',
        },
      ],
      quiz: [
        {
          prompt: 'Which set of words is specialist gaming jargon?',
          options: [
            'tonight, pressure, busy',
            'ranked season, squad, diamond',
            'finally, genuinely, obviously',
            'mic, yeah, gg',
          ],
          answer: 1,
          explain:
            'Jargon is efficient inside the community and opaque outside it — exactly what those three words do.',
        },
        {
          prompt: 'The word "mic" has been formed by:',
          options: ['compounding', 'blending', 'conversion', 'clipping'],
          answer: 3,
          explain: 'Clipping drops part of a word; nothing new is joined and the word class does not change.',
        },
      ],
      teach:
        'Discourse communities protect their boundaries with vocabulary. Jargon, slang and initialisms here all say "you are one of us".',
    },

    /* ------------------------------------------------------------------ 12 */
    {
      id: 'everyday-12',
      title: 'Voice chat under pressure',
      text: "Tommo: on me, on me, he’s one shot. Priya: i’m pushing left, cover me. Tommo: nice, nice, that’s a double. Priya: i told you the shotgun was unreal on this map. Tommo: yeah okay, you were right. uh, wait, i think someone’s behind us. Priya: nah, that’s just the rain noise. Tommo: okay cool. so do we rotate now or hold the building? Priya: let’s rotate, the circle’s closing in about forty seconds. Tommo: copy that. oh no, my controller just died. Priya: seriously? Tommo: yep. Priya: you’re joking.",
      source: 'In-game voice chat transcript (constructed)',
      field: 'in-game coordination',
      mode: 'spoken',
      setting: 'spoken, voice chat, real time',
      tenor: 'teammates under time pressure',
      register: 'informal-register',
      registerNote:
        'Fragments, imperatives, clipped replies and rapid turn-taking everywhere — the text is almost a transcript of the game itself.',
      dominantFunction: 'conative',
      functionNote:
        'Every utterance is designed to change what a teammate does next: move, cover, wait, rotate.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['uh', 'yep', 'nah'],
          note: 'One-word turns that carry hesitation, agreement and denial without a full clause.',
        },
        {
          feature: 'jargon',
          spans: ["shotgun","map","rotate","circle’s"],
          note: 'Game vocabulary: "the circle" and "rotate" are meaningless to an outsider.',
        },
        {
          feature: 'verb-lexical',
          spans: ['pushing', 'cover', 'told', 'hold', 'closing', 'died'],
        },
        {
          feature: 'verb-auxiliary',
          spans: ['was', 'were'],
        },
        {
          feature: 'contraction',
          spans: ['he’s', 'i’m', 'that’s', 'you’re'],
        },
        {
          feature: 'verb-phrasal',
          spans: ['closing in'],
          note: 'The particle intensifies the meaning — the circle is not just closing, it is closing in on them.',
        },
        {
          feature: 'noun-common',
          spans: ['building', 'seconds', 'noise', 'rain'],
        },
        {
          feature: 'determiner',
          spans: ['forty'],
        },
        {
          feature: 'adjective',
          spans: ['unreal', 'cool'],
          note: '"unreal" is colloquial evaluation, not a claim about reality.',
        },
        {
          feature: 'preposition',
          spans: ['behind', 'about'],
        },
        {
          feature: 'ellipsis',
          spans: ['he’s one shot'],
          note: 'Leaves out "away from being eliminated" because the situation supplies it instantly.',
        },
        {
          feature: 'idiom',
          spans: ['copy that'],
          note: 'Borrowed from radio procedure, now a fixed formula for "message received".',
        },
      ],
      quiz: [
        {
          prompt: 'Which group functions as jargon that only players would decode?',
          options: [
            'rain, noise, seconds',
            'uh, yep, nah',
            'shotgun, map, rotate',
            'cool, unreal, nice',
          ],
          answer: 2,
          explain: 'These words either name game objects or name a game action with a shifted sense.',
        },
        {
          prompt: '"he’s one shot" omits "away from being eliminated". This is:',
          options: ['alliteration', 'ellipsis', 'a euphemism', 'an acronym'],
          answer: 1,
          explain:
            'In real-time speech, recoverable words are dropped. Ellipsis keeps the turn short enough to be useful.',
        },
      ],
      teach:
        'Extreme informality can be highly functional. Under time pressure, fragments and one-word turns outperform full sentences — ellipsis is a tool, not a mistake.',
    },
  ],
}

export default bank09
