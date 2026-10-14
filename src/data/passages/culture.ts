import type { PassageBank } from "../../lib/passages"

/**
 * Identity, style and Australia.
 *
 * All passages are original teaching constructions written for this app — no
 * real song lyrics, fiction, stand-up routines or commentary lines are
 * reproduced.
 */
export const bank12: PassageBank = {
  id: "culture",
  label: "Identity, Style & Australia",
  blurb:
    "Bush ballads, reviews, teenage group chat and a bilingual memoir — the bank where sound, style and social identity do the heavy lifting.",
  passages: [
    /* ------------------------------------------------------------------ 01 */
    {
      id: "culture-01",
      title: "Bush ballad, opening line",
      text: "The dusty drover drifts across the plains, and the long road rolls on.",
      source: "Verse from a bush ballad (constructed)",
      field: "Creative writing / Australian folk poetry",
      mode: 'written',
      setting: "Written, verse",
      tenor: "Ballad narrator to a general audience; nostalgic, measured",
      register: "neutral-register",
      registerNote:
        "Deliberately plain and slightly elevated: the diction avoids contractions to keep the ballad metre steady.",
      dominantFunction: "poetic",
      functionNote:
        "The sound patterning — repeated d and o — is the point of the line, not the information it conveys.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "alliteration",
          spans: ["dusty drover", "long road rolls"],
          note: "Repeated initial /d/ and /l/ sounds bind the line together.",
        },
        {
          feature: "assonance",
          spans: ["road rolls on"],
          note: "Long /oʊ/ vowels repeat across three stressed syllables.",
        },
        {
          feature: "metaphor",
          spans: ["long road"],
          note: "The literal road carries the conventional figurative weight of a life journey.",
        },
        { feature: "noun-common", spans: ["drover", "plains", "road"] },
        { feature: "adjective", spans: ["dusty"] },
        { feature: "verb-lexical", spans: ["drifts", "rolls"] },
        { feature: "preposition", spans: ["across"] },
        { feature: "conjunction-coordinating", spans: ["and"] },
      ],
      quiz: [
        {
          prompt: "Which sound device is carrying “dusty drover”?",
          options: ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme"],
          answer: 1,
          explain:
            "Alliteration is the repetition of the initial consonant sound — the two /d/ onsets of “dusty drover”.",
        },
        {
          prompt: "The line is a compound sentence because it…",
          options: [
            "contains a dependent clause",
            "joins two independent clauses with “and”",
            "is a single clause",
            "contains no verb",
          ],
          answer: 1,
          explain:
            "“The dusty drover drifts across the plains” and “the long road rolls on” can each stand alone, so “and” coordinates two independent clauses.",
        },
      ],
      teach:
        "Sound devices are the fastest way to talk about the poetic function. Point at the phonology, not the meaning — the line would still feel like a ballad if you changed every noun.",
    },

    /* ------------------------------------------------------------------ 02 */
    {
      id: "culture-02",
      title: "Graffiti wall, three words high",
      text: "Save our skyline. Say no to the concrete sprawl.",
      source: "Street-art caption (constructed)",
      field: "Activism / urban environment",
      mode: 'written',
      setting: "Written, public signage",
      tenor: "Campaigner to passing strangers; urgent, impersonal",
      register: "informal-register",
      registerNote:
        "Short clipped imperatives and no politeness markers — the register is built for maximum impact in two seconds of reading.",
      dominantFunction: "conative",
      functionNote:
        "Both sentences try to change what the reader does or believes; there is no hedging and no information for its own sake.",
      dominantSentenceType: "imperative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "metaphor",
          spans: ["concrete sprawl"],
          note: "“Sprawl” maps a human posture (sprawling) onto a pattern of development.",
        },
        {
          feature: "connotation",
          spans: ["sprawl"],
          note: "The word smuggles a negative evaluation into what reads like a factual label.",
        },
        { feature: "noun-common", spans: ["skyline", "sprawl"] },
        { feature: "adjective", spans: ["concrete"] },
        { feature: "determiner", spans: ["our", "the"] },
        { feature: "preposition", spans: ["to"] },
        { feature: "verb-lexical", spans: ["Save", "Say"] },
      ],
      quiz: [
        {
          prompt: "The dominant function of the caption is conative because it…",
          options: [
            "states verifiable facts",
            "directs the reader to act and believe something",
            "comments on the meaning of words",
            "keeps a social channel open",
          ],
          answer: 1,
          explain:
            "Imperatives (“Save…”, “Say no…”) and loaded language are the classic grammar of the conative, or directive, function.",
        },
        {
          prompt: "“Sprawl” is best described as loaded language because…",
          options: [
            "it is a technical term",
            "it carries a built-in negative evaluation of the development",
            "it is an acronym",
            "it is a modal verb",
          ],
          answer: 1,
          explain:
            "Compare “sprawl” with a neutral alternative such as “growth”. The choice of word does the arguing.",
        },
      ],
      teach:
        "Two imperatives and one loaded adjective is the whole persuasive toolkit of street activism. Ask students what a neutral rewrite would look like — the argument often disappears.",
    },

    /* ------------------------------------------------------------------ 03 */
    {
      id: "culture-03",
      title: "Original lyric extract",
      text: "Midnight on the tram line, your laugh like a bell. Somewhere a kettle sings, and the sleeping street hums well.",
      source: "Verse of an original song lyric (constructed)",
      field: "Popular music / songwriting",
      mode: 'written',
      setting: "Written to be sung; rhymed",
      tenor: "Songwriter to a single intimate listener",
      register: "neutral-register",
      registerNote:
        "Lyric diction: everyday nouns, no contractions, deliberately loose grammar for metre.",
      dominantFunction: "poetic",
      functionNote:
        "Rhyme, assonance and personification exist for their own sake — the verse is about how it sounds as much as what it says.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: "simile",
          spans: ["like a bell"],
          note: "The comparison is explicit and signalled by “like”.",
        },
        {
          feature: "personification",
          spans: ["a kettle sings", "the sleeping street"],
          note: "Non-human things are given human activities and states.",
        },
        {
          feature: "rhyme",
          spans: ["bell", "well"],
          note: "Perfect rhyme closing each sentence of the verse.",
        },
        {
          feature: "assonance",
          spans: ["sleeping street"],
          note: "The long /iː/ vowel repeats inside the phrase.",
        },
        { feature: "noun-common", spans: ["tram", "kettle", "street"] },
        { feature: "determiner", spans: ["your"] },
        { feature: "article-indefinite", spans: ["a"] },
        { feature: "adjective", spans: ["sleeping"] },
        { feature: "preposition", spans: ["on"] },
        { feature: "verb-lexical", spans: ["sings", "hums"] },
      ],
      quiz: [
        {
          prompt: "“your laugh like a bell” is a simile rather than a metaphor because…",
          options: [
            "it uses explicit comparative “like”",
            "it repeats a consonant sound",
            "it exaggerates",
            "it names a sound",
          ],
          answer: 0,
          explain:
            "Simile keeps the two things separate and visible; metaphor would say the laugh *is* a bell.",
        },
        {
          prompt: "The rhyme pair “bell / well” is which type of rhyme?",
          options: ["Identical rhyme", "Perfect rhyme", "Half rhyme", "Eye rhyme"],
          answer: 1,
          explain:
            "Both the vowel and the final consonant match, so the rhyme is perfect (full) rhyme.",
        },
      ],
      teach:
        "In lyric analysis, always pair the sound device with the effect on the listener. Assonance here slows the line down and makes the street feel sleepy, not just pretty.",
    },

    /* ------------------------------------------------------------------ 04 */
    {
      id: "culture-04",
      title: "Stand-up, two lines",
      text: "I told Mum I was taking a gap year. She said, “Oh lovely, darling, and what exactly is a year, anyway?”",
      source: "Stand-up comedy routine (constructed)",
      field: "Humour / family and education",
      mode: 'spoken',
      setting: "Spoken, performed monologue",
      tenor: "Comedian to a room of strangers; intimate and knowing",
      register: "informal-register",
      registerNote:
        "Contractions, vocatives (“darling”) and a discourse marker (“anyway”) imitate speech closely.",
      dominantFunction: "emotive",
      functionNote:
        "The extract discloses the speaker’s world and re-enacts a relationship rather than informing us of anything verifiable.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: "collocation",
          spans: ["gap year"],
          note: "A fixed pairing that speakers treat as one noun-like unit.",
        },
        {
          feature: "australian-english",
          spans: ["Mum"],
          note: "“Mum”, not “Mom”, is the Standard Australian English form.",
        },
        {
          feature: "discourse-marker",
          spans: ["anyway"],
          note: "Signals the turn back to the main joke after the aside.",
        },
        { feature: "interjection", spans: ["Oh"] },
        { feature: "adverb", spans: ["exactly"] },
        { feature: "pronoun", spans: ["I", "She"] },
        { feature: "verb-lexical", spans: ["told", "taking", "said"] },
        { feature: "verb-auxiliary", spans: ["was"] },
        { feature: "determiner", spans: ["a"] },
        { feature: "noun-common", spans: ["year"] },
      ],
      quiz: [
        {
          prompt: "The joke depends on which feature of the mother’s speech?",
          options: [
            "She uses technical jargon.",
            "She treats the established collocation “gap year” as though it were unfamiliar and literal.",
            "She uses a taboo word.",
            "She switches into regional dialect.",
          ],
          answer: 1,
          explain:
            "The humour comes from breaking the collocation apart — she isolates “year” and looks at it as a bare noun.",
        },
        {
          prompt: "“Oh” in this extract functions grammatically as…",
          options: ["a conjunction", "an interjection", "a determiner", "a modal verb"],
          answer: 1,
          explain:
            "Interjections stand outside clause structure and carry pure affect.",
        },
      ],
      teach:
        "Comedians are the best corpus for phatic and expressive language. Ask students to identify what the extract is *doing* before they identify a single word class.",
    },

    /* ------------------------------------------------------------------ 05 */
    {
      id: "culture-05",
      title: "Final quarter, commentary box",
      text: "Oh, he’s flown! Brilliant, brave, breathtaking — what a grab! The crowd is up, the siren is screaming, and the Saints are home.",
      source: "Sports broadcast commentary (constructed)",
      field: "Sport / live broadcast",
      mode: 'spoken',
      setting: "Spoken, simultaneous with the event",
      tenor: "Commentator to a mass audience; excited, evaluative",
      register: "neutral-register",
      registerNote:
        "Spoken immediacy and evaluative adjectives, but no slang — broadcast style sits between formal and casual.",
      dominantFunction: "emotive",
      functionNote:
        "The commentator reports feeling and intensity; the information content is small and the exclamation is the message.",
      dominantSentenceType: "exclamative",
      sentenceStructure: "compound-sentence",
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: "interjection",
          spans: ["Oh"],
          note: "A pure burst of affect before the clause even starts.",
        },
        {
          feature: "hyperbole",
          spans: ["flown"],
          note: "A player has jumped — “flown” wildly overstates it.",
        },
        {
          feature: "personification",
          spans: ["siren is screaming"],
          note: "An inanimate siren is given a human action.",
        },
        {
          feature: "alliteration",
          spans: ["Brilliant", "brave", "breathtaking"],
          note: "Three /b/ onsets in a row drive the excitement.",
        },
        {
          feature: "australian-english",
          spans: ["siren"],
          note: "The siren rather than a “whistle” is specific to Australian Rules football grounds.",
        },
        { feature: "noun-collective", spans: ["crowd"] },
        { feature: "noun-proper", spans: ["Saints"] },
        { feature: "contraction", spans: ["he’s"] },
        { feature: "verb-lexical", spans: ["flown", "screaming"] },
        { feature: "verb-auxiliary", spans: ["is"] },
      ],
      quiz: [
        {
          prompt: "“What a grab!” is best described as…",
          options: ["declarative", "imperative", "exclamative", "interrogative"],
          answer: 2,
          explain:
            "“What a…” is the standard exclamative frame, and it foregrounds intensity of feeling.",
        },
        {
          prompt: "Which device does “the siren is screaming” use?",
          options: ["simile", "personification", "alliteration", "euphemism"],
          answer: 1,
          explain:
            "Giving a human action (screaming) to an inanimate object is personification.",
        },
      ],
      teach:
        "Commentary language is 90% expressive and poetic. Ask students why broadcasters avoid slang but happily use hyperbole — the answer is about who is listening.",
    },

    /* ------------------------------------------------------------------ 06 */
    {
      id: "culture-06",
      title: "Novel opening: Yarrindal in January",
      text: "The town of Yarrindal sat in a bowl of dry country, and in January the heat came off the paddocks like a hand pressed flat on the roof. The main street kept its own time: the bakery shut at one, the pub opened at four, the road out of town emptied by six. Nothing arrived and nothing left except the train, which came through twice a week carrying wheat and complaints. Behind the last house a windmill turned all afternoon, counting something the town had stopped counting years ago.",
      source: "Opening paragraph of a novel (constructed)",
      field: "Creative writing / place description",
      mode: 'written',
      setting: "Written, literary fiction",
      tenor: "Narrator to an unknown reader; detached, observant",
      register: "neutral-register",
      registerNote:
        "Standard literary written English: no contractions, deliberate rhythm, dense noun phrases.",
      dominantFunction: "referential",
      functionNote:
        "The paragraph is doing its main work by describing a place — it tells us how the town is, and the figurative language is a secondary layer on top of that information.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: "noun-proper", spans: ["Yarrindal"], note: "A specific invented place name." },
        {
          feature: "noun-common",
          spans: ["town", "street", "bakery", "pub", "train", "windmill"],
          note: "Every occurrence counts — check the repetition of “town”.",
        },
        {
          feature: "noun-abstract",
          spans: ["complaints", "time"],
          note: "Neither can be put in a wheelbarrow.",
        },
        {
          feature: "simile",
          spans: ["like a hand pressed flat on the roof"],
          note: "An extended simile making the heat physical.",
        },
        {
          feature: "personification",
          spans: ["The main street kept its own time"],
          note: "The street behaves like a person with habits and a clock.",
        },
        {
          feature: "metaphor",
          spans: ["a bowl of dry country"],
          note: "The landscape is figured as a container.",
        },
        {
          feature: "irony",
          spans: ["wheat and complaints"],
          note: "A concrete cargo and an abstract one are yoked together as if both were freight.",
        },
        {
          feature: "hyperbole",
          spans: ["Nothing arrived and nothing left"],
          note: "Absolute negative framing that is literally untrue — the train arrives twice a week.",
        },
        {
          feature: "cohesive-repetition",
          spans: ["counting"],
          note: "The repetition of “counting” links the windmill to the town’s own neglect.",
        },
        {
          feature: "determiner",
          spans: ["one", "four", "six"],
          note: "Cardinal numerals give the small town a timetable.",
        },
        {
          feature: "preposition",
          spans: ["off", "through", "Behind"],
        },
        {
          feature: "verb-lexical",
          spans: ["sat", "kept", "emptied", "turned"],
        },
      ],
      quiz: [
        {
          prompt: "“like a hand pressed flat on the roof” is…",
          options: [
            "a metaphor asserting the heat is a hand",
            "a simile making the comparison explicit",
            "personification of the roof",
            "hyperbole",
          ],
          answer: 1,
          explain:
            "“Like” marks the explicit comparison, so the heat is compared to a hand rather than identified with it.",
        },
        {
          prompt: "“carrying wheat and complaints” is notable because it…",
          options: [
            "uses technical jargon",
            "uses alliteration",
            "pairs a concrete cargo with an abstract human dissatisfaction",
            "contains a phrasal verb",
          ],
          answer: 2,
          explain:
            "The clause makes the town’s grievances into something freightable, which is what makes the line quietly ironic.",
        },
      ],
      teach:
        "A referential description can still be full of figurative language — that is the point of the fiction question. Ask students which features are *doing information work* and which are doing style work.",
    },

    /* ------------------------------------------------------------------ 07 */
    {
      id: "culture-07",
      title: "Film review: Three Hours in Wonthaggi",
      text: "Three Hours in Wonthaggi is the sort of film that trusts its audience to sit still. Nothing much happens, and everything does: a daughter returns, a shed gets painted, a dog dies off-screen and the camera refuses to look away from the kitchen window. The performances are so quiet you lean in without noticing, and Nadia Oyelaran’s score does the shouting for them. It is not a crowd-pleaser and it never tries to be, but the final twenty minutes left this reviewer sitting in a dark room long after the credits had gone, thinking about my own parents’ kitchen. Utterly, quietly devastating.",
      source: "Online film review (constructed)",
      field: "Film criticism",
      mode: 'written',
      setting: "Written, published review",
      tenor: "Critic to a general arts readership; assured and personal",
      register: "informal-register",
      registerNote:
        "Conversational first person and direct address (“you lean in”) sit alongside precise critical vocabulary.",
      dominantFunction: "emotive",
      functionNote:
        "It is a review, so evaluation and personal response dominate — we are being told how the film made the writer feel, not just what happens.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "noun-proper",
          spans: ["Wonthaggi", "Nadia Oyelaran"],
          note: "A place name and the invented name of a composer.",
        },
        {
          feature: "personification",
          spans: ["the camera refuses to look away"],
          note: "A machine is given human refusal and attention.",
        },
        {
          feature: "metaphor",
          spans: ["does the shouting for them"],
          note: "The score is figured as a voice that shouts on the actors’ behalf.",
        },
        {
          feature: "oxymoron",
          spans: ["quietly devastating"],
          note: "Quietness and devastation pull in opposite directions of intensity.",
        },
        {
          feature: "connotation",
          spans: ["devastating"],
          note: "An emotive judgement presented as a description.",
        },
        { feature: "adverb-degree", spans: ["Utterly", "so"] },
        {
          feature: "compounding",
          spans: ["crowd-pleaser", "off-screen"],
          note: "Two words fused into single lexemes, one hyphenated and one compound.",
        },
        {
          feature: "cohesive-repetition",
          spans: ["kitchen"],
          note: "The second “kitchen” turns a detail of the film into the reviewer’s own memory.",
        },
        { feature: "verb-lexical", spans: ["returns", "dies", "refuses"] },
        { feature: "adjective", spans: ["quiet", "final", "dark"] },
      ],
      quiz: [
        {
          prompt: "“quietly devastating” is an oxymoron because…",
          options: [
            "it repeats a sound",
            "it yokes together words pointing in opposite directions of intensity",
            "it is a cliche",
            "it contains a modal verb",
          ],
          answer: 1,
          explain:
            "“Quietly” suppresses and “devastating” maximises, so the phrase holds a deliberate contradiction.",
        },
        {
          prompt: "The dominant function of the final sentence, “Utterly, quietly devastating.”, is…",
          options: ["referential", "metalinguistic", "expressive", "phatic"],
          answer: 2,
          explain:
            "A bare evaluative fragment conveys the reviewer’s feeling and nothing else — the textbook expressive move.",
        },
      ],
      teach:
        "Reviews are the best place to show students that evaluative adjectives are a grammatical resource for stance. Every “so quiet”, “utterly” and “devastating” is the writer telling you where to stand.",
    },

    /* ------------------------------------------------------------------ 08 */
    {
      id: "culture-08",
      title: "Album review: Cornershop Cathedral",
      text: "Nobody expected a second record this good, least of all the band. Cornershop Cathedral is eleven tracks of sweaty, patient, slightly unhinged pop, and it does not care whether you are ready for it. The opener builds for four minutes before anything resembling a chorus arrives, and when it finally does it lands like a dropped esky. Track six is the one they will play on the radio — you can hear the single in it from the first bar — but the best moment is the closer, a six-minute groove that just refuses to end. Bloody good stuff. An album that argues with itself for forty minutes and wins.",
      source: "Album review in a music magazine (constructed)",
      field: "Music criticism",
      mode: 'written',
      setting: "Written, published review",
      tenor: "Critic to a general music readership; chatty and confident",
      register: "informal-register",
      registerNote:
        "Mild taboo used as an intensifier, a distinctly Australian simile and conversational direct address (“you can hear”).",
      dominantFunction: "emotive",
      functionNote:
        "The paragraph spends most of its energy on judgement and attitude; the factual track listing exists only to support the verdict.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "noun-proper",
          spans: ["Cornershop Cathedral"],
          note: "Album titles function as proper nouns and take capitals.",
        },
        {
          feature: "simile",
          spans: ["lands like a dropped esky"],
          note: "A deliberately local, comic comparison.",
        },
        {
          feature: "australian-english",
          spans: ["esky"],
          note: "A trademark that has become the standard Australian word for a portable cooler.",
        },
        {
          feature: "personification",
          spans: ["refuses to end", "argues with itself"],
          note: "An album is given refusal and the capacity to argue.",
        },
        {
          feature: "taboo-language",
          spans: ["Bloody"],
          note: "Mild taboo in Australian English — much softer here than in other varieties.",
        },
        {
          feature: "metaphor",
          spans: ["eleven tracks of sweaty, patient, slightly unhinged pop"],
          note: "Music is described as if it had a body and a temperament.",
        },
        { feature: "adjective", spans: ["sweaty", "unhinged"] },
        {
          feature: "determiner",
          spans: ["eleven", "six"],
          note: "Numbers do the factual scaffolding for the review.",
        },
        { feature: "verb-modal", spans: ["will"] },
        { feature: "verb-lexical", spans: ["builds", "arrives", "lands", "refuses", "argues", "wins"] },
        { feature: "verb-auxiliary", spans: ["does", "are"] },
      ],
      quiz: [
        {
          prompt: "“Bloody good stuff” illustrates…",
          options: [
            "jargon",
            "mild taboo language used as an intensifier",
            "a euphemism",
            "an initialism",
          ],
          answer: 1,
          explain:
            "In Australian English “bloody” has weakened into an intensifier, though it remains mildly taboo in formal contexts.",
        },
        {
          prompt: "“An album that argues with itself… and wins” relies on…",
          options: ["alliteration", "personification", "assonance", "ellipsis"],
          answer: 1,
          explain:
            "The album is given an argument and a victory, both human attributes.",
        },
      ],
      teach:
        "Reviews are where students can see taboo, simile and personification sharing one paragraph. The register question is always: who is this critic allowed to swear in front of?",
    },

    /* ------------------------------------------------------------------ 09 */
    {
      id: "culture-09",
      title: "Rural radio interview, first three minutes",
      text: "HOST: How are you travelling this morning, Reg? REG: Oh, can’t complain. Bit of frost on the roof but the sheep don’t seem to mind. HOST: Good to hear. Now, I want to ask you about the water buyback — REG: Yeah, look, everyone’s got a different version of that story, and most of them aren’t mine. HOST: Fair enough. So what would you tell a city listener who has never stood on a property like yours? REG: I’d say the land talks to you if you shut up long enough to hear it. And I’d say we’re not heroes, we’re just the last ones still here.",
      source: "Transcribed regional radio interview (constructed)",
      field: "Agriculture / media interview",
      mode: 'spoken',
      setting: "Spoken then transcribed; two speakers",
      tenor: "Host to farmer, and farmer to a city audience; friendly and unguarded",
      register: "informal-register",
      registerNote:
        "Contractions throughout, ellipsis, discourse markers and the host’s small talk are all hallmarks of unscripted spoken register.",
      dominantFunction: "phatic",
      functionNote:
        "The extract opens with pure social maintenance — “How are you travelling this morning?” is not a request for travel details but an offer of goodwill.",
      dominantSentenceType: "interrogative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "idiom",
          spans: ["can’t complain", "shut up"],
          note: "Fixed, figurative expressions that cannot be read literally.",
        },
        {
          feature: "colloquialism",
          spans: ["Yeah, look"],
          note: "A conversational opener doing phatic work before the answer proper.",
        },
        {
          feature: "australian-english",
          spans: ["Fair enough"],
          note: "A marker of Australian conversational agreement and tolerance.",
        },
        {
          feature: "contraction",
          spans: ["everyone’s", "aren’t", "we’re", "I’d"],
          note: "Contraction density is the quickest register test in the whole passage.",
        },
        {
          feature: "ellipsis",
          spans: ["Bit of frost on the roof"],
          note: "“There’s a” is omitted because listeners recover it automatically.",
        },
        {
          feature: "personification",
          spans: ["the land talks to you"],
          note: "The land is given a voice and a will.",
        },
        {
          feature: "metaphor",
          spans: ["a different version of that story"],
          note: "A public policy debate is figured as competing narratives.",
        },
        {
          feature: "discourse-marker",
          spans: ["Now", "So"],
          note: "Both steer the interview: one opens the real topic, one redirects to the audience.",
        },
        { feature: "verb-modal", spans: ["would"], note: "Hypothetical obligation framing the answer." },
        {
          feature: "non-standard",
          spans: ["everyone’s got"],
          note: "Standard written English prefers “everyone has”; the spoken form is non-standard but entirely normal in speech.",
        },
        { feature: "interjection", spans: ["Oh"] },
      ],
      quiz: [
        {
          prompt: "“How are you travelling this morning, Reg?” serves mainly a…",
          options: ["referential function", "phatic function", "metalinguistic function", "poetic function"],
          answer: 1,
          explain:
            "It carries almost no information; its job is to open and maintain the social contact before business begins.",
        },
        {
          prompt: "“we’re not heroes, we’re just the last ones still here” works by…",
          options: [
            "using a modal verb of obligation",
            "contrasting an elevated self-description with a modest one",
            "using jargon",
            "using a simile",
          ],
          answer: 1,
          explain:
            "The negation sets up an antonym-like contrast between “heroes” and “the last ones”, which is what makes the line land.",
        },
      ],
      teach:
        "Spoken register is where ellipsis, discourse markers and non-standard grammar live. Remind students that non-standard is a description of prestige, not of correctness.",
    },

    /* ------------------------------------------------------------------ 10 */
    {
      id: "culture-10",
      title: "Group chat, Tuesday",
      text: "MAYA: you up JULES: barely. so dead today MAYA: same. u coming to get chips or are we ghosting everyone again JULES: ghosting. definitely ghosting. my brain is liquid MAYA: fair. ok so hear me out — what if we just rock up at 4 and act normal JULES: normal is doing a lot of heavy lifting in that sentence MAYA: it’s a flexible word. versatile. adaptable. like me JULES: nobody has ever called you adaptable MAYA: you literally called me adaptable last week JULES: i called you chaotic. same energy, different word",
      source: "Text-message exchange between friends (constructed)",
      field: "Digital messaging / friendship group",
      mode: 'written',
      setting: "Written, synchronous, very short turns",
      tenor: "Close friends in one in-group; high solidarity, no social distance",
      register: "informal-register",
      registerNote:
        "No punctuation at the ends of turns, no capitals for the first person pronoun, abbreviations and shared slang — register is doing social identity work, not just efficiency.",
      dominantFunction: "phatic",
      functionNote:
        "The plans are barely the point. The whole exchange maintains the friendship and reasserts the group’s shared code, including a running joke about which word applies to Maya.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "neologism",
          spans: ["ghosting"],
          note: "A recent coinage naming a new digital social behaviour; count all three occurrences.",
        },
        {
          feature: "idiom",
          spans: ["hear me out", "doing a lot of heavy lifting"],
          note: "Both are fixed figurative expressions, the second a recent idiom of internet argument.",
        },
        {
          feature: "slang",
          spans: ["so dead"],
          note: "In-group vocabulary for exhaustion; unintelligible outside the group.",
        },
        {
          feature: "australian-english",
          spans: ["rock up"],
          note: "A distinctly Australian informal verb meaning to arrive, often unannounced.",
        },
        {
          feature: "ellipsis",
          spans: ["you up", "barely", "same"],
          note: "Whole clauses are missing and everyone still understands.",
        },
        { feature: "contraction", spans: ["it’s"] },
        {
          feature: "discourse-marker",
          spans: ["ok so", "fair"],
          note: "“ok so” launches a proposal; “fair” concedes a point.",
        },
        {
          feature: "non-standard",
          spans: ["u coming", "i called you"],
          note: "The texting abbreviation and the lowercase first person pronoun both depart from Standard English.",
        },
        {
          feature: "metaphor",
          spans: ["my brain is liquid"],
          note: "Mental exhaustion figured as a physical state.",
        },
        {
          feature: "cohesive-repetition",
          spans: ["adaptable"],
          note: "The word is repeated to carry the running joke across three turns.",
        },
        { feature: "noun-abstract", spans: ["energy"] },
      ],
      quiz: [
        {
          prompt: "“ghosting” is best described as…",
          options: [
            "an acronym",
            "a neologism naming a new social behaviour that digital messaging made possible",
            "a complex preposition",
            "a modal verb",
          ],
          answer: 1,
          explain:
            "The word filled a genuine lexical gap, which is the usual reason a coinage survives.",
        },
        {
          prompt: "The exchange is dominated by the phatic function because…",
          options: [
            "it conveys detailed factual information",
            "its main work is maintaining the friendship and the group’s shared code",
            "it defines the word “ghosting”",
            "it is written in formal register",
          ],
          answer: 1,
          explain:
            "The logistics are trivial; the social maintenance, including the running joke about Maya, is the message.",
        },
      ],
      teach:
        "Digital writing is not broken writing — it is a register with its own rules. The abbreviation “u” and lowercase “i” are choices that signal closeness, not carelessness.",
    },

    /* ------------------------------------------------------------------ 11 */
    {
      id: "culture-11",
      title: "Memoir: two languages, one house",
      text: "At home we spoke two languages and never announced the switch. Mum would ask about school in Tamil and I would answer in English, and neither of us treated that as a problem. It only became a problem when visitors arrived, because then the rules changed and I was the translator, standing between two adults who loved each other and could not say so directly. I learned early that a word is not a container with the same shape everywhere. “Aunty” is not “athai”; it is smaller, looser, and it lets strangers in. When my grandmother died I found I could grieve in both languages, but only one of them had a word that felt the right size.",
      source: "Memoir extract (constructed)",
      field: "Memoir / language and identity",
      mode: 'written',
      setting: "Written, literary memoir",
      tenor: "Author to a general reader; reflective and analytic",
      register: "neutral-register",
      registerNote:
        "Literary written English: no contractions, measured sentences, but intimate first person throughout.",
      dominantFunction: "metalinguistic",
      functionNote:
        "The passage turns repeatedly to words themselves — what a word contains, what “Aunty” does that “athai” does not, and which word is the right size for grief.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: "noun-proper",
          spans: ["Tamil", "English"],
          note: "Language names are proper nouns and always take capitals.",
        },
        {
          feature: "metaphor",
          spans: ["a word is not a container with the same shape everywhere"],
          note: "The whole passage is built on the container metaphor for meaning — here it is explicitly denied.",
        },
        {
          feature: "euphemism",
          spans: ["could not say so directly"],
          note: "The indirectness is the point: the family avoids naming the affection.",
        },
        { feature: "noun-abstract", spans: ["problem"] },
        {
          feature: "cohesive-repetition",
          spans: ["languages", "word"],
          note: "Repeating these two key items holds a paragraph about translation together.",
        },
        {
          feature: "conjunction-subordinating",
          spans: ["because", "When"],
          note: "Both introduce the dependent clauses that carry the passage’s reasoning.",
        },
        { feature: "verb-modal", spans: ["could"], note: "Marks ability and its limits across two languages." },
        {
          feature: "pronoun",
          spans: ["neither of us", "we"],
          note: "First person plural shifts mark who counts as an insider in each situation.",
        },
        {
          feature: "australian-english",
          spans: ["Aunty"],
          note: "The respectful Australian/Indigenous and migrant use of “Aunty” as a kinship title, with a capital.",
        },
        {
          feature: "connotation",
          spans: ["loved"],
          note: "An emotive verb delivered flatly, which is what gives the sentence its weight.",
        },
        {
          feature: "collocation",
          spans: ["the right size"],
          note: "A fixed, idiomatic way of describing fit — here used to measure an emotion.",
        },
      ],
      quiz: [
        {
          prompt: "The passage is dominated by the metalinguistic function because…",
          options: [
            "it describes an event in sequence",
            "it examines what words mean and how meaning shifts between languages",
            "it issues instructions",
            "it relies mainly on sound patterning",
          ],
          answer: 1,
          explain:
            "The narrator stops to consider words as words — “Aunty” against “athai”, and which word is large enough for grief.",
        },
        {
          prompt: "“a word is not a container with the same shape everywhere” is…",
          options: ["a simile", "a metaphor", "an acronym", "a dysphemism"],
          answer: 1,
          explain:
            "A conventional metaphor for meaning (words contain meaning) is stated and then disputed, without any “like” or “as”.",
        },
      ],
      teach:
        "The metalinguistic function is the hardest one for students to spot in the wild, so keep this extract for revision. Ask them to find the exact sentence where the text stops using language and starts examining it.",
    },

    /* ------------------------------------------------------------------ 12 */
    {
      id: "culture-12",
      title: "Post: stop blaming the teenagers",
      text: "Everyone complaining that young people are destroying English has forgotten how English was made. Our language is a magpie: it steals, it blends, it clips, and it has been doing that for a thousand years. “Selfie” was a joke that became a dictionary entry. “Google” was a misspelling of a misspelling and now it is a verb. If a word is useful, people will use it. So no, the kids are not ruining the language. They are renovating it, badly, loudly, and in public, which is how every generation has done it.",
      source: "Public social-media post (constructed)",
      field: "Language change debate",
      mode: 'written',
      setting: "Written, digital public post",
      tenor: "Poster to a general online audience; argumentative and confident",
      register: "informal-register",
      registerNote:
        "Direct address, “So no,” and “the kids” give it the feel of speech, though the argument itself is carefully structured.",
      dominantFunction: "metalinguistic",
      functionNote:
        "Every claim in the post is a claim about language: how words are made, what a dictionary entry means, what it takes for a coinage to survive.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: "metaphor",
          spans: ["Our language is a magpie", "They are renovating it"],
          note: "Two extended metaphors: language as a scavenger, change as building work.",
        },
        {
          feature: "neologism",
          spans: ["Selfie", "Google"],
          note: "Both began as coinages; the surrounding sentences are the evidence for the claim.",
        },
        {
          feature: "conversion",
          spans: ["now it is a verb"],
          note: "A proper noun has become a verb with no change of form — zero derivation.",
        },
        {
          feature: "colloquialism",
          spans: ["the kids"],
          note: "Casual, slightly affectionate label for young people.",
        },
        {
          feature: "hyperbole",
          spans: ["a thousand years"],
          note: "A rounded, exaggerated span of time standing in for “a very long time”.",
        },
        {
          feature: "cohesive-repetition",
          spans: ["misspelling"],
          note: "Repeating the word inside the phrase does the joke’s work.",
        },
        {
          feature: "verb-lexical",
          spans: ["steals", "blends", "clips", "renovating"],
          note: "The three verbs also name word-formation processes — a neat metalinguistic double duty.",
        },
        { feature: "noun-abstract", spans: ["generation"] },
        {
          feature: "discourse-marker",
          spans: ["So"],
          note: "Signals the conclusion after the evidence.",
        },
        {
          feature: "conjunction-subordinating",
          spans: ["If", "which"],
          note: "One makes a condition, the other attaches a comment to the whole clause.",
        },
        {
          feature: "connotation",
          spans: ["destroying English", "ruining the language"],
          note: "The writer quotes the alarmist framing in order to reject it.",
        },
      ],
      quiz: [
        {
          prompt: "“Our language is a magpie” is…",
          options: ["a simile", "a metaphor", "an onomatopoeic line", "an imperative"],
          answer: 1,
          explain:
            "The language is identified *with* a magpie rather than compared to one with “like” or “as”.",
        },
        {
          prompt: "“renovating it, badly, loudly, and in public” most directly develops the idea that…",
          options: [
            "language change should be stopped",
            "language change is a natural, ongoing and untidy process that every generation performs",
            "English is a dead language",
            "young people use too much jargon",
          ],
          answer: 1,
          explain:
            "The renovation metaphor, plus “every generation”, reframes change as ordinary maintenance rather than damage.",
        },
      ],
      teach:
        "This is a model conclusion for an analytical essay on language change: name the process (compounding, conversion, clipping), give an example, and refuse the alarmist framing with evidence rather than opinion.",
    },
  ],
}
