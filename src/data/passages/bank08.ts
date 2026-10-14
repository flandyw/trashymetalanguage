import type { PassageBank } from '../../lib/passages'

/** Tier 3 — digital, social media and teen sociolect. */
export const bank08: PassageBank = {
  id: 'digital',
  label: 'Digital & social media',
  blurb:
    'Online writing is where English is changing fastest: clipped slang, initialisms, emoji punctuation and new words appearing within months. These paragraphs are full of it.',
  passages: [
    {
      id: 'd01',
      title: 'Get ready with me',
      text: 'get ready with me for the most chaotic 6am shift ever 😭 new scrubs are actually so comfy, lowkey obsessed. if you’ve watched this far, drop a comment with your go-to brekky and I’ll reply to every single one. anyway, clocking on in ten minutes, so wish me luck!!',
      source: 'TikTok video caption (constructed)',
      unit: 3,
      areaOfStudy: 'u3-informality',
      textType: 'social-media',
      field: 'Beauty and work day-in-the-life',
      mode: 'written',
      setting: 'TikTok video caption, posted before a 6am shift',
      tenor: 'intimate, creator to followers',
      register: 'informal-register',
      registerNote:
        'Contractions, clipped slang and intensifiers build the friendly, unedited voice that performs well on short-form video.',
      dominantFunction: 'phatic',
      secondaryFunctions: ['emotive', 'conative'],
      functionNote:
        'The caption shares an ordinary morning and invites replies, keeping the creator connected to followers; the emotive asides are its content rather than its purpose.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-complex-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'ellipsis',
          spans: ['get ready with me'],
          note: 'The subject and auxiliary — "I am going to" — have been dropped entirely.',
        },
        {
          feature: 'shortening',
          spans: ['brekky'],
          note: 'Shortened from "breakfast" with the -ie ending typical of Australian English.',
        },
        {
          feature: 'australian-english',
          spans: ['brekky', 'clocking on'],
          note: '"Brekky" and the workplace phrasal verb "clocking on" are distinctly Australian.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['clocking on'],
          note: 'Verb plus particle creating the meaning "starting a work shift".',
        },
        {
          feature: 'adjective-superlative',
          spans: ['most chaotic'],
          note: 'The periphrastic superlative: "most" instead of an -est ending.',
        },
        {
          feature: 'adverb-degree',
          spans: ['so'],
          note: 'An intensifier used twice, once for an adjective and once as a filler linking phrase.',
        },
        {
          feature: 'contraction',
          spans: ['you’ve', 'I’ll'],
          note: 'Apostrophes collapse subject and auxiliary, which is a rapid register marker.',
        },
        {
          feature: 'discourse-marker',
          spans: ['anyway'],
          note: 'Signals a topic shift back to the main thread of the story.',
        },
        {
          feature: 'colloquialism',
          spans: ['go-to'],
          note: 'Conversational word for a reliable favourite, acceptable in speech but marked in formal writing.',
        },
        {
          feature: 'hyperbole',
          spans: ['most chaotic 6am shift ever'],
          note: 'The claim is not literally verifiable exaggeration — it is manufactured drama for humour.',
        },
        {
          feature: 'connotation',
          spans: ['obsessed'],
          note: 'An emotive verb smuggled in as praise; it carries far more feeling than "I like".',
        },
      ],
      quiz: [
        {
          prompt: 'Which word-formation process produced "brekky"?',
          options: ['Blending', 'Clipping', 'Compounding', 'Conversion'],
          answer: 1,
          explain:
            'Clipping keeps the beginning of a word and discards the rest, then often adds -ie or -o.',
        },
        {
          prompt: 'The caption opens "get ready with me...". Which grammatical elements have been ellipted?',
          options: [
            'A conjunction and a preposition',
            'The subject and auxiliary — roughly "I am going to"',
            'The object of the verb',
            'Nothing has been left out',
          ],
          answer: 1,
          explain:
            'Ellipsis removes elements the audience can easily recover. Digital writing maximises it to save effort.',
        },
        {
          prompt:
            'Two invitations appear, yet the dominant function of the caption is expressive. Why?',
          options: [
            'Because it is written rather than spoken',
            'Because the main body is self-disclosure and evaluation, so feeling is the point',
            'Because it contains an emoji',
            'Because it uses present tense',
          ],
          answer: 1,
          explain:
            'Judge dominance by how much of the text does which job. The conative invitations are a small closing move.',
        },
      ],
      teach:
        'Vlog captions compress spoken features into writing: ellipsis, clipped slang, intensifiers and emoji punctuation. They are ideal texts for register analysis because every feature points the same way — informal.',
    },
    {
      id: 'd02',
      title: 'Maccas after training?',
      text: 'ok so who’s actually coming to maccas after training? need a yes or no by 5 bc I’m not booking a table for nobody lol. tbh I’d rather just get chips and sit in the car park. anyway lmk, otherwise I’m getting maccas solo 😤 someone please have their licence.',
      source: 'Group chat between netball teammates (constructed)',
      field: 'Social organisation',
      mode: 'written',
      setting: 'written, group chat',
      tenor: 'very close, teammates',
      register: 'informal-register',
      registerNote:
        'Three initialisms, one clipped brand name and a non-standard spelling in under sixty words.',
      dominantFunction: 'conative',
      functionNote:
        'The questions and the closing threat to go alone are designed to get commitments out of the group.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'initialism',
          spans: ['lol', 'tbh', 'lmk'],
          note: 'All three are read letter by letter, not as words.',
        },
        {
          feature: 'shortening',
          spans: ['maccas'],
          note: 'A clipped, plural-looking form of a brand name — Australian English at its most productive.',
        },
        {
          feature: 'australian-english',
          spans: ['maccas'],
          note: 'A brand nickname that many Australians consider the true name of the restaurant.',
        },
        {
          feature: 'contraction',
          spans: ['who’s', 'I’m', 'I’d'],
          note: '"I’m" appears twice; "I’d" hides the modal "would".',
        },
        {
          feature: 'non-standard',
          spans: ['bc'],
          note: 'A spelling abbreviation rather than a word, and unacceptable in formal writing.',
        },
        {
          feature: 'interjection',
          spans: ['ok'],
          note: 'An opener that manages the conversation rather than carrying information.',
        },
        {
          feature: 'discourse-marker',
          spans: ['anyway', 'so'],
          note: 'Both steer the reader through the message: "so" frames the question, "anyway" moves to the close.',
        },
        {
          feature: 'ellipsis',
          spans: ['need a yes or no by 5'],
          note: 'The subject of "need" has been dropped — probably "we" or "I".',
        },
        {
          feature: 'adverb-degree',
          spans: ['actually', 'just'],
          note: 'Adverbs doing emotional work: "actually" demands honesty, "just" makes it sound low-effort.',
        },
        {
          feature: 'compounding',
          spans: ['car park'],
          note: 'Two free morphemes written as separate words but functioning as one noun.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['or'],
          note: 'Joins the two options a yes-or-no answer must choose between.',
        },
      ],
      quiz: [
        {
          prompt: 'What does the initialism "tbh" stand for?',
          options: ['To be honest', 'The best half', 'Talking back here', 'Too busy honestly'],
          answer: 0,
          explain:
            'Initialisms are read letter by letter and their full forms are often used in more formal registers.',
        },
        {
          prompt: 'Why is "bc" grouped as non-standard rather than slang?',
          options: [
            'It is a spelling abbreviation rather than a word with its own in-group meaning',
            'It is offensive',
            'It is a proper noun',
            'It is a contraction of two words',
          ],
          answer: 0,
          explain:
            'Slang is vocabulary with social meaning; "bc" is simply a compressed spelling of "because".',
        },
        {
          prompt: 'Which feature do "lol", "tbh" and "lmk" share?',
          options: [
            'They are all acronyms pronounced as words',
            'They are all initialisms read letter by letter',
            'They are all clippings with -o endings',
            'They are all compounds',
          ],
          answer: 1,
          explain: 'Acronyms such as ATAR are said as words; these three are spelled out letter by letter.',
        },
      ],
      teach:
        'Group chats are a laboratory for language change. Count the initialisms, clippings and non-standard spellings in a single message and you have a ready-made register analysis.',
    },
    {
      id: 'd03',
      title: 'Anyone on for ranked?',
      text: 'yo anyone on for ranked tonight? we need a healer or we’re getting absolutely cooked again 🙃 I’ll be on from 7, just ping me in general. honestly the last match was so cooked I nearly rage quit. please actually practise your rotation before you queue, it’s not that hard.',
      source: 'Discord message in a gaming server (constructed)',
      field: 'Online gaming',
      mode: 'written',
      setting: 'written, Discord server',
      tenor: 'familiar, gamer to gamer',
      register: 'informal-register',
      registerNote:
        'Dense community jargon plus emotive slang, with politeness markers doing the social repair work.',
      dominantFunction: 'conative',
      functionNote:
        'The message recruits teammates, sets a time and issues instructions about how to play.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'interjection',
          spans: ['yo'],
          note: 'A greeting particle that hails the group and opens the turn.',
        },
        {
          feature: 'jargon',
          spans: ['ranked', 'healer', 'ping', 'rotation', 'queue'],
          note: 'Specialist vocabulary that is fully opaque outside the gaming discourse community.',
        },
        {
          feature: 'slang',
          spans: ['cooked'],
          note: 'In-group slang meaning exhausted, doomed or humiliated; twice used here with different edges.',
        },
        {
          feature: 'adverb-degree',
          spans: ['absolutely', 'so', 'just'],
          note: 'Intensifiers carry most of the emotional charge of the complaint.',
        },
        {
          feature: 'contraction',
          spans: ['we’re', 'I’ll', 'it’s'],
          note: 'Three different contractions in one short message.',
        },
        {
          feature: 'pronoun',
          spans: ['anyone', 'your'],
          note: 'Indefinite "anyone" addresses an open group; "your" pins responsibility on the reader.',
        },
        {
          feature: 'ellipsis',
          spans: ['anyone on for ranked tonight'],
          note: 'The auxiliary "is" has been ellipted at the start of the question.',
        },
        {
          feature: 'discourse-marker',
          spans: ['honestly'],
          note: 'Frames the following complaint as a frank confession, softening how confrontational it sounds.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['or'],
          note: 'Sets up the consequence of failing to find a healer.',
        },
        {
          feature: 'hyperbole',
          spans: ['so cooked I nearly rage quit'],
          note: 'The feeling is scaled up far beyond the literal event for comic effect.',
        },
      ],
      quiz: [
        {
          prompt: 'The words "ranked", "healer" and "rotation" are best described as which feature?',
          options: [
            'Jargon — the specialised lexicon of a discourse community',
            'Archaic vocabulary',
            'Standard formal lexis',
            'Euphemism',
          ],
          answer: 0,
          explain:
            'Jargon is efficient inside a community and exclusionary outside it, which is exactly how it works here.',
        },
        {
          prompt: 'Why does "cooked" need context to be understood?',
          options: [
            'It is a proper noun',
            'It is slang whose meaning is fixed by the in-group rather than by the word’s literal sense',
            'It is a compound',
            'It is non-standard spelling',
          ],
          answer: 1,
          explain:
            'Slang meaning is arbitrary and shifts quickly. This is why slang is a marker of group membership as much as of meaning.',
        },
        {
          prompt: 'Which move softens the force of "practise your rotation before you queue"?',
          options: [
            'The word "please", the intensifier "actually" and the politeness of a direct request',
            'The use of the modal "will"',
            'The ellipsis at the start of the message',
            'The gaming jargon',
          ],
          answer: 0,
          explain:
            'Politeness in English is often grammatical and lexical at once: please, hedges and modals all reduce imposition.',
        },
      ],
      teach:
        'Online gaming communities develop specialised lexis extraordinarily quickly, and that lexis doubles as an identity badge. Slang and jargon in the same text let you discuss both group membership and field.',
    },
    {
      id: 'd04',
      title: 'Finished this at 2am',
      text: 'finished this one at 2am and I am not okay 😭 the prose is so sharp it left little paper cuts all over my heart. if you like slow burns and morally grey love interests, this is your next read. not gonna lie, the ending absolutely destroyed me. five stars, no notes.',
      source: 'BookTok review (constructed)',
      field: 'Books and reading',
      mode: 'written',
      setting: 'written, online review',
      tenor: 'enthusiastic, reviewer to reading community',
      register: 'informal-register',
      registerNote:
        'Genre jargon, intensifiers and a sustained metaphor create the breathless BookTok voice.',
      dominantFunction: 'emotive',
      functionNote:
        'It recommends, but the recommendation is carried by overwhelming feeling rather than evidence.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'metaphor',
          spans: ['left little paper cuts all over my heart'],
          note: 'Sharp prose becomes a physical object that wounds — a sustained metaphor, not a single word swap.',
        },
        {
          feature: 'hyperbole',
          spans: ['destroyed me', 'not okay'],
          note: 'Emotional collapse is claimed for a book. The exaggeration is the point.',
        },
        {
          feature: 'idiom',
          spans: ['no notes'],
          note: 'A fixed, figurative sign-off meaning "nothing needs changing".',
        },
        {
          feature: 'jargon',
          spans: ['slow burns', 'morally grey'],
          note: 'Genre-critical terms that carry a great deal of shared meaning for the reading community.',
        },
        {
          feature: 'contraction',
          spans: ['gonna'],
          note: 'A phonological contraction of "going to" reduced to a single written token.',
        },
        {
          feature: 'adverb-degree',
          spans: ['so', 'absolutely'],
          note: 'Both intensifiers do the emotional labour the review depends on.',
        },
        {
          feature: 'determiner',
          spans: ['five'],
          note: 'The conventional rating scale compressed into a numeral, which reads as referential even inside opinion.',
        },
        {
          feature: 'pronoun',
          spans: ['you', 'your'],
          note: 'Second person direct address turns a personal reaction into a recommendation.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Twice used to chain clauses into an accelerating, breathless rhythm.',
        },
        {
          feature: 'compounding',
          spans: ['love interests'],
          note: 'Two morphemes forming one compound noun with a specific genre meaning.',
        },
        {
          feature: 'noun-abstract',
          spans: ['prose'],
          note: 'An abstract noun naming style itself, which is what the review is really evaluating.',
        },
      ],
      quiz: [
        {
          prompt:
            'Which figurative device carries the emotional weight of "the prose is so sharp it left little paper cuts all over my heart"?',
          options: ['Simile', 'Metaphor', 'Onomatopoeia', 'Oxymoron'],
          answer: 1,
          explain: 'The prose is not said to be like a blade; it is said to cut. Asserting identity is metaphor.',
        },
        {
          prompt: 'What does the idiom "no notes" mean in a review?',
          options: [
            'The reviewer left no comments',
            'Nothing needs changing — it is perfect',
            'The book had no dialogue',
            'The reviewer has not read it',
          ],
          answer: 1,
          explain:
            'Idioms carry meaning that cannot be worked out from the individual words, which is why they mark in-group language.',
        },
        {
          prompt:
            'The review addresses the reader directly with "if you like... this is your next read". What does that achieve?',
          options: [
            'It makes the review sound metalinguistic',
            'It creates intimacy and makes the recommendation feel personally addressed',
            'It makes the sentence imperative',
            'It avoids the need for a numeral rating',
          ],
          answer: 1,
          explain:
            'Second person reference collapses the distance between reviewer and reader, which is a persuasive strategy.',
        },
      ],
      teach:
        'Online review genres have their own jargon and rituals. "Slow burn", "morally grey" and "no notes" are community shorthand that an outsider would have to have explained — a neat illustration of jargon in action.',
    },
    {
      id: 'd05',
      title: 'Rant over',
      text: 'honestly the biggest issue with public transport here is that the timetable assumes everyone works nine to five. I catch the 6:40 train every morning and half the time it’s cancelled without any explanation. they should at least put the cancellations on the app before people leave home. rant over, I know it’s not the driver’s fault.',
      source: 'Reddit comment on a public transport thread (constructed)',
      field: 'Public transport and infrastructure',
      mode: 'written',
      setting: 'written, online forum',
      tenor: 'opinionated, commenter to strangers',
      register: 'informal-register',
      registerNote:
        'An informal complaint that borrows the structure of an argument: claim, evidence, demand, concession.',
      dominantFunction: 'conative',
      functionNote:
        'The complaint exists to justify a demand for action — "they should at least put the cancellations on the app".',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'adjective-superlative',
          spans: ['biggest'],
          note: 'The -est superlative turns one complaint into the single most important problem.',
        },
        {
          feature: 'noun-abstract',
          spans: ['issue', 'explanation', 'fault'],
          note: 'Abstract nouns allow the writer to discuss causes and failures rather than objects.',
        },
        {
          feature: 'compounding',
          spans: ["timetable","public transport"],
          note: "A compound noun formed by joining two free morphemes. Two words functioning as one noun, and the topic of the whole paragraph.",
        },
        {
          feature: 'verb-modal',
          spans: ['should'],
          note: 'The modal of weak obligation converts the complaint into a demand.',
        },
        {
          feature: 'determiner',
          spans: ['every', 'half'],
          note: 'Quantifying determiners generalise the complaint from one trip to a pattern.',
        },
        {
          feature: 'preposition',
          spans: ['without', 'before'],
          note: 'Each preposition builds the clause that makes the complaint precise.',
        },
        {
          feature: 'pronoun',
          spans: ['everyone', 'they'],
          note: '"Everyone" generalises the sufferer; "they" attributes responsibility to an unnamed authority.',
        },
        {
          feature: 'discourse-marker',
          spans: ['honestly'],
          note: 'Opens the comment by framing it as blunt truth-telling.',
        },
        {
          feature: 'contraction',
          spans: ['it’s'],
          note: 'Two instances, both in informal clauses.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that'],
          note: 'Introduces the dependent clause that carries the actual claim.',
        },
      ],
      quiz: [
        {
          prompt: 'Which modal verb turns this complaint into a demand for change?',
          options: ['should', 'catch', 'assumes', 'leave'],
          answer: 0,
          explain:
            'Obligation modals (should, must, ought to) are the grammatical home of the conative function.',
        },
        {
          prompt: 'Which word-formation process is shown by "timetable"?',
          options: ['Clipping', 'Compounding', 'Blending', 'Conversion'],
          answer: 1,
          explain:
            'Compounding joins two free morphemes with no affixes, one of the most productive processes in English.',
        },
        {
          prompt:
            'The final clause concedes "I know it’s not the driver’s fault". What is that doing socially?',
          options: [
            'It makes the paragraph referential',
            'It is face-work: the writer protects an individual while still attacking the system',
            'It introduces jargon',
            'It contradicts the demand for action',
          ],
          answer: 1,
          explain:
            'Concessions manage the social relationship. Attacking a system is safer than attacking a person, and saying so signals fairness.',
        },
      ],
      teach:
        'Informal online complaints often follow a formal argument structure. Naming the structure — claim, evidence, demand, concession — is a strong analytical move even for a Reddit comment.',
    },
    {
      id: 'd06',
      title: 'The bit at 4:12',
      text: 'the bit at 4:12 where the dog just sits down and stares at the camera is the funniest thing I’ve seen all year. I laughed so hard I choked on my toast. also can someone explain what “skibidi” actually means? I’ve asked three people and nobody can tell me, and at this point I think it just means nothing.',
      source: 'YouTube comment (constructed)',
      field: 'Online video',
      mode: 'written',
      setting: 'written, video comment',
      tenor: 'chatty, viewer to creator and other viewers',
      register: 'informal-register',
      registerNote:
        'Expressive enjoyment in the first half, then a genuine question about a word in the second.',
      dominantFunction: 'emotive',
      functionNote:
        'The dominant move is reaction: the comment exists mainly to share how much the viewer laughed.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'verb-phrasal',
          spans: ['sits down'],
          note: 'Verb plus particle — the "down" cannot be swapped for another preposition without changing the meaning.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['funniest'],
          note: 'The -est form makes a personal reaction sound like a verdict.',
        },
        {
          feature: 'hyperbole',
          spans: ['laughed so hard I choked on my toast'],
          note: 'A vivid, exaggerated consequence that replaces a plain intensifier.',
        },
        {
          feature: 'verb-modal',
          spans: ['can'],
          note: 'Both instances express ability or possibility in a genuine question and its answer.',
        },
        {
          feature: 'pronoun',
          spans: ['someone', 'nobody'],
          note: 'Indefinite pronouns point at unnamed people and hide exactly who was asked.',
        },
        {
          feature: 'determiner',
          spans: ['three'],
          note: 'A precise number lends the joke an air of evidence.',
        },
        {
          feature: 'adverb-degree',
          spans: ['so', 'just'],
          note: 'Two intensifiers, one scaling the laughter, one deflating the dog’s behaviour.',
        },
        {
          feature: 'discourse-marker',
          spans: ['also'],
          note: 'Signals a change of topic from the reaction to the question.',
        },
        {
          feature: 'contraction',
          spans: ['I’ve'],
          note: 'The perfect auxiliary reduced and attached to the pronoun.',
        },
        {
          feature: 'alliteration',
          spans: ['sits down and stares'],
          note: 'The repeated /s/ binds the two actions together phonologically.',
        },
        {
          feature: 'irony',
          spans: ['nobody can tell me, and at this point I think it just means nothing'],
          note: 'Deadpan resignation where you expect a serious answer about meaning.',
        },
      ],
      quiz: [
        {
          prompt:
            'The comment asks "can someone explain what skibidi actually means?". Which function of language is that?',
          options: [
            'Phatic — it maintains contact only',
            'Metalinguistic — it asks about a word itself',
            'Referential — it reports a fact',
            'Conative — it orders someone to act',
          ],
          answer: 1,
          explain:
            'Any utterance about the code, rather than through it, is metalinguistic. Defining, correcting and asking about meaning all qualify.',
        },
        {
          prompt: '"the funniest thing I’ve seen all year" is an example of which feature?',
          options: ['Cliché', 'Hyperbole', 'Simile', 'Euphemism'],
          answer: 1,
          explain:
            'Hyperbole exaggerates for effect. Note that it also relies on the superlative form to work.',
        },
        {
          prompt: 'Which sound device appears in "sits down and stares"?',
          options: ['Onomatopoeia', 'Assonance', 'Alliteration', 'Rhyme'],
          answer: 2,
          explain:
            'Alliteration repeats initial consonant sounds; assonance repeats vowels inside words.',
        },
      ],
      teach:
        'A single YouTube comment can move from expressive to metalinguistic in one sentence. Exam answers that notice the shift, and name both functions, score well.',
    },
    {
      id: 'd07',
      title: 'No shortcuts',
      text: 'no shortcuts. no excuses. just 12 weeks of showing up. our coaches will build a plan around your life, not the other way round. book your free session before Friday and we’ll throw in a body scan. spots are limited, and last intake filled in four days.',
      source: 'Instagram carousel caption for a gym (constructed)',
      field: 'Fitness and marketing',
      mode: 'written',
      setting: 'written, commercial caption',
      tenor: 'motivating, brand to customer',
      register: 'informal-register',
      registerNote:
        'Corporate motivational language: punchy fragments for rhythm, imperatives to drive action, promises to close.',
      dominantFunction: 'conative',
      functionNote: 'Every sentence is designed to make the reader book a session.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'verb-phrasal',
          spans: ['showing up', 'throw in'],
          note: 'Both are verb-plus-particle units; "throw in" means to include for free.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'Promises rather than commands — the persuasive flip side of obligation.',
        },
        {
          feature: 'determiner',
          spans: ['12', 'four'],
          note: 'Precise figures turn vague promises into something that sounds measurable.',
        },
        {
          feature: 'ellipsis',
          spans: ['just 12 weeks of showing up'],
          note: 'No subject or verb — the fragment is a deliberate stylistic choice.',
        },
        {
          feature: 'noun-abstract',
          spans: ['shortcuts', 'excuses', 'life', 'intake'],
          note: 'Abstract nouns let the brand talk about commitment, blame and change rather than objects.',
        },
        {
          feature: 'noun-concrete',
          spans: ['coaches', 'plan', 'session', 'body scan'],
          note: 'Concrete nouns supply the tangible delivery the offer depends on.',
        },
        {
          feature: 'preposition',
          spans: ['of', 'around', 'before'],
          note: 'Each preposition builds a phrase that makes the offer feel personalised.',
        },
        {
          feature: 'adjective',
          spans: ['free', 'limited', 'last'],
          note: 'Three evaluative adjectives doing the urgency work of the close.',
        },
        {
          feature: 'noun-proper',
          spans: ['Friday'],
          note: 'A named deadline makes the call to action feel real.',
        },
        {
          feature: 'idiom',
          spans: ['the other way round'],
          note: 'A fixed figurative phrase reversed from the usual idiom "the other way around".',
        },
        {
          feature: 'hyperbole',
          spans: ['filled in four days'],
          note: 'An unverifiable claim of overwhelming demand — urgency manufactured through exaggeration.',
        },
      ],
      quiz: [
        {
          prompt: 'The caption opens with two fragments, "no shortcuts. no excuses." What is the effect?',
          options: [
            'It makes the text sound academic',
            'It creates a punchy, emphatic rhythm before the sales pitch',
            'It introduces jargon',
            'It makes the sentences interrogative',
          ],
          answer: 1,
          explain:
            'Deliberate fragments are a stylistic resource. Short, verbless units feel like a coach barking instructions.',
        },
        {
          prompt: 'Which word class does "around" belong to in "a plan around your life"?',
          options: ['Adverb', 'Conjunction', 'Preposition', 'Pronoun'],
          answer: 2,
          explain: 'It heads a prepositional phrase whose noun phrase is "your life".',
        },
        {
          prompt: 'Which type of noun are "shortcuts" and "excuses"?',
          options: [
            'Concrete nouns — you can see them',
            'Abstract nouns — neither is perceptible',
            'Proper nouns',
            'Collective nouns',
          ],
          answer: 1,
          explain:
            'Abstract nouns name concepts and qualities. Their density is one of the clearest markers of formal or persuasive registers.',
        },
      ],
      teach:
        'Marketing copy is built to be analysed: fragments for rhythm, numerals for credibility, modals for promises and adjectives for urgency. Almost every metalanguage category is on show in a single caption.',
    },
    {
      id: 'd08',
      title: 'Me vs also me',
      text: 'me: I’ll be in bed by 9. also me at 2am: researching whether penguins have knees, and why toast always lands butter side down. every single night. this is not a personality trait, it’s a lifestyle, and I refuse to seek help. send help, or better yet, send sleep.',
      source: 'Meme caption (constructed)',
      field: 'Everyday humour',
      mode: 'written',
      setting: 'written, meme format',
      tenor: 'self-deprecating, poster to online peers',
      register: 'informal-register',
      registerNote:
        'The joke lives in the format: two competing selves, a list, a punchline and a reversal.',
      dominantFunction: 'poetic',
      functionNote:
        'The humour depends on the shape of the utterance — the "me / also me" frame and its punchline — so form is foregrounded.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'fragment',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'ellipsis',
          spans: ['me: I’ll be in bed by 9'],
          note: 'The reporting clause has been dropped, leaving only a label and the promise.',
        },
        {
          feature: 'determiner',
          spans: ['9', '2am'],
          note: 'Times create the contrast the joke depends on.',
        },
        {
          feature: 'hyperbole',
          spans: ['every single night'],
          note: 'Absolute frequency claimed for comic effect.',
        },
        {
          feature: 'collocation',
          spans: ['butter side down'],
          note: 'A fixed pairing that only sounds right in this order — a classic collocation.',
        },
        {
          feature: 'irony',
          spans: ['this is not a personality trait, it’s a lifestyle'],
          note: 'The denial is undercut in the same breath by the more extreme claim.',
        },
        {
          feature: 'adverb',
          spans: ['always'],
          note: 'A frequency adverb making a claim about the universe that the speaker cannot really justify.',
        },
        {
          feature: 'pronoun',
          spans: ['me', 'I'],
          note: 'First person pronouns are used twice as labels, which is unusual and part of the format.',
        },
        {
          feature: 'contraction',
          spans: ['I’ll', 'it’s'],
          note: 'Contractions keep the tone conversational and quick.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Chains the list of late-night research topics.',
        },
        {
          feature: 'discourse-marker',
          spans: ['also'],
          note: 'Introduces the second self and turns the caption into a two-part structure.',
        },
        {
          feature: 'verb-modal',
          spans: ['I’ll'],
          note: 'The same token is both a contraction and a modal construction — features overlap in real texts.',
        },
      ],
      quiz: [
        {
          prompt:
            'Which function of language does the "me: / also me at 2am:" format mainly serve?',
          options: [
            'Referential — it reports facts about sleep',
            'Poetic — the shape of the utterance is what makes the joke work',
            'Metalinguistic — it defines a word',
            'Phatic — it maintains contact only',
          ],
          answer: 1,
          explain:
            'When the arrangement of the language is doing the work, the poetic function is foregrounded.',
        },
        {
          prompt: '"butter side down" is an example of which feature?',
          options: [
            'A collocation — a habitual, expected word pairing',
            'A simile',
            'An initialism',
            'A complex preposition',
          ],
          answer: 0,
          explain:
            'Collocations sound natural because they habitually co-occur. Swapping the order makes the phrase feel wrong.',
        },
        {
          prompt:
            'What makes "this is not a personality trait, it’s a lifestyle" funny?',
          options: [
            'It contains a modal verb',
            'It denies one description only to accept a more extreme one',
            'It uses alliteration',
            'It is written in the passive voice',
          ],
          answer: 1,
          explain:
            'The paradox (or irony) comes from the reversal: refusing the smaller label while claiming the bigger one.',
        },
      ],
      teach:
        'Meme formats are grammatical templates. Analysing what the template deletes, repeats and inverts is a genuinely high-level metalanguage skill.',
    },
    {
      id: 'd09',
      title: 'At the beach',
      text: 'at the beach with the girls 🌊 we’ve been here since 8 and I’m already burnt lol. there’s not a single tree for shade, so we’re all fighting over one towel. someone pls bring sunscreen and a hat, I’m not joking. anyway that’s the story, love youse, catch you tonight.',
      source: 'Snapchat story post (constructed)',
      field: 'Friends and weekend life',
      mode: 'written',
      setting: 'written, ephemeral social post',
      tenor: 'very close, friends',
      register: 'informal-register',
      registerNote:
        'A running commentary of clipped sentences, contractions and non-standard spellings aimed at close friends.',
      dominantFunction: 'phatic',
      functionNote:
        'Nothing here needs to be communicated — the post exists to keep friends connected to the day.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'contraction',
          spans: ['we’ve', 'I’m', 'there’s', 'we’re', 'that’s'],
          note: 'Five contractions, and "I’m" appears twice — the strongest single register signal in the post.',
        },
        {
          feature: 'initialism',
          spans: ['lol'],
          note: 'Read letter by letter, and no longer literal.',
        },
        {
          feature: 'non-standard',
          spans: ['youse', 'pls'],
          note: 'One a dialect pronoun, one a keystroke-saving spelling — neither is Standard Australian English.',
        },
        {
          feature: 'australian-english',
          spans: ['youse'],
          note: 'A plural "you" that fills a gap left by the loss of the older English plural pronoun.',
        },
        {
          feature: 'preposition',
          spans: ['at', 'with', 'since', 'for', 'over'],
          note: 'Five different prepositions build time, place and a whole dispute about one towel.',
        },
        {
          feature: 'adverb-degree',
          spans: ['already', 'so'],
          note: '"Already" intensifies the surprise of the sunburn; "so" links the consequence.',
        },
        {
          feature: 'adjective',
          spans: ['burnt', 'single'],
          note: 'One describes the writer, the other dramatises the lack of shade.',
        },
        {
          feature: 'discourse-marker',
          spans: ['lol', 'anyway'],
          note: 'Both manage tone rather than content: "lol" lightens the complaint, "anyway" closes the post.',
        },
        {
          feature: 'ellipsis',
          spans: ['someone pls bring sunscreen and a hat'],
          note: 'The modal — probably "can" or "could" — has been dropped before the verb.',
        },
        {
          feature: 'pronoun',
          spans: ['someone', 'you'],
          note: 'An indefinite pronoun and a direct address to the reader.',
        },
        {
          feature: 'determiner',
          spans: ['8', 'one'],
          note: 'The hour and the single contested towel.',
        },
      ],
      quiz: [
        {
          prompt:
            '"lol" began as an initialism for "laughing out loud". What is it doing in this post?',
          options: [
            'Reporting that the writer is laughing',
            'Acting as a discourse marker that signals a light, unbothered tone',
            'Functioning as a verb',
            'Marking the start of a new paragraph',
          ],
          answer: 1,
          explain:
            'Initialisms often drift from literal meaning into tone markers. That drift is itself evidence of language change.',
        },
        {
          prompt: '"youse" is best described as which of the following?',
          options: [
            'A non-standard second-person plural pronoun',
            'A clipping of "you"',
            'A contraction',
            'A neologism for one person',
          ],
          answer: 0,
          explain:
            'It fills a real grammatical gap — English lost its plural "you" centuries ago — but it carries low overt prestige.',
        },
        {
          prompt: 'Which register features most clearly mark this post as informal?',
          options: [
            'Long complex sentences and Latinate vocabulary',
            'Contractions, non-standard spellings and clipped slang',
            'Passive voice and nominalisation',
            'Definite articles and abstract nouns',
          ],
          answer: 1,
          explain:
            'Informality is cumulative. No single feature decides it; the density of informal markers does.',
        },
      ],
      teach:
        'Ephemeral social posts are the closest written form to speech. They are excellent evidence for the claim that register is a matter of choices piling up in one direction.',
    },
    {
      id: 'd10',
      title: 'Hey chat',
      text: 'hey chat, welcome back to the stream. we’re doing a chill one tonight, so no ranked, no drama, just vibes. drop a hello in the chat so I know who’s here. also if you’re new, the rules are pinned, please read them before you type anything weird.',
      source: 'Twitch stream introduction (constructed)',
      field: 'Live streaming',
      mode: 'spoken',
      setting: 'spoken, transcribed for stream',
      tenor: 'matey, streamer to regular viewers',
      register: 'informal-register',
      registerNote:
        'Greetings and in-group lexis build rapport; imperatives then set expectations for the session.',
      dominantFunction: 'phatic',
      functionNote:
        'The opening exists to acknowledge and welcome an audience. The instructions that follow are housekeeping, not the main event.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['hey'],
          note: 'A greeting particle that opens the channel with the audience.',
        },
        {
          feature: 'jargon',
          spans: ['stream', 'ranked', 'chat'],
          note: 'Core streaming vocabulary. "Chat" names the audience as a collective entity.',
        },
        {
          feature: 'contraction',
          spans: ['we’re', 'you’re', 'who’s'],
          note: 'Three contractions signal a relaxed spoken register transcribed into writing.',
        },
        {
          feature: 'slang',
          spans: ['vibes'],
          note: 'An in-group noun for an intangible mood — vague by design.',
        },
        {
          feature: 'colloquialism',
          spans: ['chill'],
          note: 'Conversational adjective meaning relaxed; fine in speech, marked in formal writing.',
        },
        {
          feature: 'verb-lexical',
          spans: ['drop', 'read', 'type'],
          note: 'Three bare main verbs heading imperatives after an omitted subject.',
        },
        {
          feature: 'discourse-marker',
          spans: ['so', 'also'],
          note: 'Both organise the monologue: "so" sets expectations, "also" adds housekeeping for newcomers.',
        },
        {
          feature: 'pronoun',
          spans: ['I', 'you', 'them'],
          note: 'The streamer, the viewer and the rules are all referred to pronominally.',
        },
        {
          feature: 'adjective',
          spans: ['new', 'weird'],
          note: 'One identifies a subgroup of viewers, the other sets the behavioural boundary.',
        },
        {
          feature: 'noun-abstract',
          spans: ['drama', 'rules'],
          note: 'Abstract nouns let the streamer talk about mood and conduct without naming anyone.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if', 'before'],
          note: 'Both create dependent clauses that attach conditions to the requests.',
        },
      ],
      quiz: [
        {
          prompt:
            'Which feature shows the streamer building rapport before making any requests?',
          options: [
            'The jargon in "ranked"',
            'The phatic greeting and direct address — "hey chat, welcome back"',
            'The abstract noun "drama"',
            'The subordinating conjunction "if"',
          ],
          answer: 1,
          explain:
            'Phatic language maintains the social channel. It is why openings matter more in interactive than broadcast media.',
        },
        {
          prompt: 'In "drop a hello in the chat", which word class is "hello"?',
          options: ['Interjection', 'Adjective', 'Noun', 'Verb'],
          answer: 2,
          explain:
            'It follows a determiner and heads a noun phrase, so it is acting as a noun here. Word class is about function, not just form.',
        },
        {
          prompt:
            '"no ranked, no drama, just vibes" — what is the effect of the repeated negation plus the closing noun?',
          options: [
            'It makes the sentence passive',
            'It sets expectations concisely through parallel, verbless units',
            'It introduces a simile',
            'It makes the statement metalinguistic',
          ],
          answer: 1,
          explain:
            'Repetition and parallelism in short fragments create rhythm and clarity — a hallmark of informal spoken style.',
        },
      ],
      teach:
        'Interactive media blends speech and writing. Stream intros are phatic work plus housekeeping, and both jobs leave grammatical fingerprints.',
    },
    {
      id: 'd11',
      title: 'Quick update',
      text: 'hi team, quick update: I’ve finished the intro and the references, so that part is done. could someone please do the slides by Wednesday? Zoe said she’d handle the handout but she hasn’t replied, so if anyone knows her schedule pls say. we’re running out of time, and honestly I’d rather not do it all the night before again.',
      source: 'School group project chat (constructed)',
      field: 'Schoolwork',
      mode: 'written',
      setting: 'written, group chat',
      tenor: 'polite but pressured, students to each other',
      register: 'informal-register',
      registerNote:
        'Formal-sounding politeness markers sit on top of very informal digital writing — a common hybrid.',
      dominantFunction: 'conative',
      functionNote:
        'The purpose of the message is to get other group members to complete their parts.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Zoe', 'Wednesday'],
          note: 'One names a person, one names a day — both are specific and capitalised.',
        },
        {
          feature: 'verb-modal',
          spans: ['could'],
          note: 'A past-form modal that makes the request tentative and polite rather than demanding.',
        },
        {
          feature: 'contraction',
          spans: ['I’ve', 'she’d', 'hasn’t', 'we’re', 'I’d'],
          note: 'Five contractions, two of which conceal modals.',
        },
        {
          feature: 'non-standard',
          spans: ['pls'],
          note: 'A keystroke-saving spelling that would be out of place in anything but digital chat.',
        },
        {
          feature: 'noun-abstract',
          spans: ['update', 'references', 'schedule', 'time'],
          note: 'Abstract nouns let the group discuss tasks, availability and pressure.',
        },
        {
          feature: 'preposition',
          spans: ['by', 'of', 'before'],
          note: 'Each preposition anchors the message in a deadline or a quantity.',
        },
        {
          feature: 'discourse-marker',
          spans: ['honestly', 'so'],
          note: '"So" appears twice as a linking move; "honestly" flags the writer’s genuine frustration.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and', 'but'],
          note: '"And" joins tasks; "but" introduces the contrast that creates the problem.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if'],
          note: 'Introduces the condition under which the group should act.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['running out of'],
          note: 'A phrasal verb meaning to have too little of something left — not literal movement.',
        },
        {
          feature: 'ellipsis',
          spans: ['quick update'],
          note: 'The clause reduces to two words; "here is a" has been dropped entirely.',
        },
      ],
      quiz: [
        {
          prompt:
            'Why does "could someone please do the slides" sound polite rather than demanding?',
          options: [
            'Because it uses the past tense throughout',
            'Because the modal, the word "please" and the question form all reduce the imposition',
            'Because it avoids contractions',
            'Because it is a fragment',
          ],
          answer: 1,
          explain:
            'Politeness in English is largely grammatical: modals, hedges and interrogative form all soften a request.',
        },
        {
          prompt: 'Which feature makes "running out of" idiomatic rather than literal?',
          options: [
            'It is a phrasal verb whose meaning cannot be predicted from its parts',
            'It is a complex preposition',
            'It is a collective noun',
            'It is a superlative',
          ],
          answer: 0,
          explain:
            'Phrasal verbs are idiomatic units, and they are markedly more common in speech than in formal writing.',
        },
        {
          prompt: 'Why has "pls" been written without its vowels?',
          options: [
            'It is a spelling error',
            'It sacrifices letters to save keystrokes, a common feature of digital writing',
            'It is a euphemism',
            'It is an acronym',
          ],
          answer: 1,
          explain:
            'Digital writing economy produces its own conventions. Speed of production shapes the written form as much as grammar does.',
        },
      ],
      teach:
        'This hybrid register is everywhere now: polite modals and full clauses mixed with "pls". Being able to say why a text sounds formal and informal at the same time is exactly the kind of analysis examiners reward.',
    },
    {
      id: 'd12',
      title: 'Quick explainer',
      text: 'quick explainer for anyone over thirty: “rizz” is short for charisma, and it means the ability to charm someone. it started on TikTok around 2023 and spread into everyday speech within a year. linguists call that lexical diffusion. if a teenager calls you rizzless, that is not a compliment, and you should probably just nod politely.',
      source: 'Social media explainer post (constructed)',
      field: 'Language commentary',
      mode: 'written',
      setting: 'written, online explainer',
      tenor: 'mock-patient, young writer to older readers',
      register: 'neutral-register',
      registerNote:
        'An informal text doing careful, formal linguistic work, which is why it reads as a hybrid.',
      dominantFunction: 'metalinguistic',
      functionNote:
        'The whole post is language about language: it defines a word, dates it and names the process of its spread.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'shortening',
          spans: ['rizz'],
          note: 'Shortened from "charisma" by keeping the middle of the word — an unusual clipping point.',
        },
        {
          feature: 'neologism',
          spans: ['rizzless'],
          note: 'A new coinage built on top of a new coinage within a couple of years.',
        },
        {
          feature: 'slang',
          spans: ['rizz'],
          note: 'In-group vocabulary whose meaning is fixed by use, not by the dictionary.',
        },
        {
          feature: 'suffix',
          spans: ["rizzless"],
          note: '"Less" is a bound morpheme meaning without — the productive suffix of English negation.',
        },
        {
          feature: 'verb-modal',
          spans: ['should'],
          note: 'Advice rather than obligation, aimed at the older reader.',
        },
        {
          feature: 'noun-abstract',
          spans: ['charisma', 'ability', 'speech', 'diffusion'],
          note: 'Four abstract nouns in one short post — the sign of an explanatory register.',
        },
        {
          feature: 'noun-proper',
          spans: ['TikTok'],
          note: 'A brand name acting as the named origin of the change.',
        },
        {
          feature: 'determiner',
          spans: ['thirty', '2023'],
          note: 'One divides the audience by age, the other dates the change precisely.',
        },
        {
          feature: 'adverb',
          spans: ['probably', 'politely'],
          note: 'A hedge and a manner adverb make the closing advice sound gentle and knowing.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if'],
          note: 'Introduces the hypothetical scenario that delivers the punchline.',
        },
        {
          feature: 'collocation',
          spans: ['lexical diffusion'],
          note: 'A fixed technical pairing from linguistics — jargon that appears here in its own definition.',
        },
      ],
      quiz: [
        {
          prompt: 'What makes this post metalinguistic?',
          options: [
            'It is written in an informal register',
            'It defines a word and comments on how language changes',
            'It uses second person address',
            'It mentions a social media platform',
          ],
          answer: 1,
          explain:
            'Talking about words, meanings and language change is language about language, regardless of how informal the tone is.',
        },
        {
          prompt: '"rizz" is formed by which word-formation process?',
          options: ['Blending', 'Conversion', 'Clipping', 'Compounding'],
          answer: 2,
          explain:
            'Clipping shortens a word while keeping its core meaning. Note that "rizz" clips from the middle of "charisma".',
        },
        {
          prompt: '"lexical diffusion" describes which linguistic phenomenon?',
          options: [
            'The spread of a new word or sense through a speech community',
            'A change in pronunciation over centuries',
            'The merging of two dialects',
            'The loss of inflections',
          ],
          answer: 0,
          explain:
            'Lexical diffusion names the social spread of new lexis. It is the process being illustrated by "rizz" spreading from TikTok into everyday speech.',
        },
      ],
      teach:
        'The most useful texts for Unit 3 and 4 are ones that perform the analysis for you in an informal register. Here, slang and technical jargon share a paragraph — proof that register is about context, not about the words themselves.',
    },
  ],
}
