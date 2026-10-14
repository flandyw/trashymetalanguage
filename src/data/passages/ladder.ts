import type { PassageBank } from '../../lib/passages'

export const bank14: PassageBank = {
  id: 'ladder',
  label: "One Word at a Time",
  blurb:
    "The bottom rungs: a single word, then a phrase or one short sentence. Name the word class, then the unit of language it belongs to.",
  passages: [
    {
      id: "ladder-01",
      title: "doomscroll",
      text: "doomscroll",
      source: "Single word from a social media caption (constructed)",
      unit: 2,
      areaOfStudy: "u2-english-across-time",
      textType: "social-media",
      field: "Digital culture",
      mode: 'written',
      setting: "social media caption, online, public",
      tenor: "Peer to peer",
      register: "informal-register",
      registerNote:
        "A recent, playful coinage built from everyday words; it would be out of place in formal writing.",
      dominantFunction: "referential",
      functionNote:
        "On its own the word simply labels a behaviour, so it informs rather than directs.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 2,
      gold: [
        { feature: "neologism", spans: ["doomscroll"], note: "Coined for a behaviour that had no name." },
        {
          feature: "compounding",
          spans: ["doomscroll"],
          note: "A compound: both free morphemes, doom and scroll, are kept whole.",
        },
        {
          feature: "free-morpheme",
          spans: ["doomscroll"],
          note: "Doom and scroll each stand alone as words, so each is a free morpheme inside this word.",
        },
        {
          feature: "verb-lexical",
          spans: ["doomscroll"],
          note: "In its verb sense, doomscroll names an action: to doomscroll is to scroll through bad news for hours.",
        },
      ],
      quiz: [
        {
          prompt: "Which word-formation process produced the word doomscroll?",
          options: ["Compounding", "Initialism", "Backformation", "Conversion"],
          answer: 0,
          explain:
            "Both parts are kept whole: doom plus scroll. A blend fuses cut-back parts of two words, as in podcast from iPod plus broadcast.",
        },
      ],
      teach:
        "Most neologisms are not invented from nothing — they are old material rearranged. Name the process and you have explained the word.",
    },
    {
      id: "ladder-02",
      title: "arvo",
      text: "arvo",
      source: "Single word from a text message between friends (constructed)",
      field: "Everyday life",
      mode: 'written',
      setting: "Written, digital, private",
      tenor: "Close friends",
      register: "informal-register",
      registerNote: "Speech-like, private and abbreviated.",
      dominantFunction: "referential",
      functionNote: "It still names a time of day; the informality is in the form, not the purpose.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 1,
      gold: [
        {
          feature: "shortening",
          spans: ["arvo"],
          note: "Shortened from afternoon, then given the -o ending typical of Australian clipping.",
        },
        {
          feature: "australian-english",
          spans: ["arvo"],
          note: "The -o clipping pattern is a strong marker of Australian English.",
        },
        { feature: "noun-common", spans: ["arvo"], note: "It names a thing, a general period of time." },
      ],
      quiz: [
        {
          prompt: "Which process has produced arvo from afternoon?",
          options: ["Clipping", "Compounding", "Blending", "Acronym"],
          answer: 0,
          explain:
            "Clipping shortens an existing word while the meaning stays the same. The -o ending is the Australian styling.",
        },
        {
          prompt: "What word class is arvo?",
          options: ["Noun", "Adjective", "Adverb", "Interjection"],
          answer: 0,
          explain: "It names a period of time, so it behaves like a noun: see you this arvo.",
        },
      ],
      teach:
        "Clipping is one of the most productive processes in Australian English. Look for the -o and -ie endings: servo, smoko, brekky, ambo.",
    },
    {
      id: "ladder-03",
      title: "freedom",
      text: "freedom",
      source: "Single word from a protest placard (constructed)",
      field: "Politics and society",
      mode: 'written',
      setting: "Written, public, visual",
      tenor: "Group to public",
      register: "neutral-register",
      registerNote: "A single abstract word can work in any register, from a placard to a policy paper.",
      dominantFunction: "referential",
      functionNote:
        "The word names a concept. Loaded as it is, without context it states rather than persuades, though on a placard it leans conative.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 1,
      gold: [
        {
          feature: "noun-abstract",
          spans: ["freedom"],
          note: "You cannot put freedom in a wheelbarrow. It names a state, not an object.",
        },
        {
          feature: "suffix",
          spans: ["freedom"],
          note: "The bound morpheme -dom turns the adjective free into a noun.",
        },
      ],
      quiz: [
        {
          prompt: "What is the bound morpheme in freedom?",
          options: ["-dom", "free-", "-eed-", "there is no bound morpheme"],
          answer: 0,
          explain:
            "Free is the free morpheme and -dom is bound: it cannot stand alone but it changes free into a noun.",
        },
      ],
      teach:
        "Abstract nouns name ideas, qualities and states. They are the lifeblood of analytical writing, which is why examiners reward them in essays.",
    },
    {
      id: "ladder-04",
      title: "must",
      text: "must",
      source: "Single word from a workplace signage draft (constructed)",
      field: "Workplace safety",
      mode: 'written',
      setting: "Written, public, instructional",
      tenor: "Institution to staff",
      register: "neutral-register",
      registerNote: "Brief, impersonal, and high in obligation.",
      dominantFunction: "conative",
      functionNote:
        "Even alone, must pushes the reader towards an action. It is the grammar of obligation.",
      dominantSentenceType: "imperative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 2,
      gold: [
        {
          feature: "verb-modal",
          spans: ["must"],
          note: "Must expresses the strongest degree of obligation in the modal set.",
        },
        {
          feature: "verb-phrase",
          spans: ["must"],
          note: "In real use must always heads a verb phrase: must wear, must sign in.",
        },
      ],
      quiz: [
        {
          prompt: "Which meaning does the modal verb must carry?",
          options: ["Strong obligation", "Permission", "Habitual past action", "Physical ability"],
          answer: 0,
          explain:
            "Must sits at the top of the obligation scale. Compare the weaker should and the permissive may.",
        },
      ],
      teach:
        "Modal verbs are the clearest grammatical marker of the conative function. Track must, should, will and can in any persuasive text.",
    },
    {
      id: "ladder-05",
      title: "under",
      text: "under",
      source: "Single caption word from a photo of a cat in a box (constructed)",
      field: "Everyday life",
      mode: 'written',
      setting: "Written, digital, public",
      tenor: "Peer to peer",
      register: "informal-register",
      registerNote: "A one-word caption is as informal and context-dependent as language gets.",
      dominantFunction: "referential",
      functionNote: "It locates something in space, which is informational and easily verified.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 1,
      gold: [
        {
          feature: "preposition",
          spans: ["under"],
          note: "It shows a relationship of place, and it would be followed by a noun phrase: under the blanket.",
        },
      ],
      quiz: [
        {
          prompt: "Which word class is under?",
          options: ["Preposition", "Conjunction", "Adverb", "Determiner"],
          answer: 0,
          explain:
            "A preposition shows a relationship between things and is normally followed by a noun phrase.",
        },
        {
          prompt: "How many prepositions are there in English?",
          options: ["Around 150", "Exactly 12", "Thousands", "Under 10"],
          answer: 0,
          explain:
            "English has only around 150 prepositions, but on, in and at do an enormous amount of work.",
        },
      ],
      teach:
        "Prepositions are a closed class, so the list is learnable. Spot them and you can also spot the prepositional phrases they build.",
    },
    {
      id: "ladder-06",
      title: "Bunnings",
      text: "Bunnings",
      source: "Single word from a retail slogan (constructed)",
      field: "Commerce",
      mode: 'written',
      setting: "Written, public, commercial",
      tenor: "Brand to customer",
      register: "neutral-register",
      registerNote: "A brand name carries no formality marking of its own.",
      dominantFunction: "referential",
      functionNote: "As a name it identifies one specific business and nothing more.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 1,
      gold: [
        {
          feature: "noun-proper",
          spans: ["Bunnings"],
          note: "It names one specific business, so it is capitalised and resists articles.",
        },
        {
          feature: "australian-english",
          spans: ["Bunnings"],
          note: "The name carries strong cultural meaning for Australian readers, including the sausage sizzle.",
        },
      ],
      quiz: [
        {
          prompt: "Why is Bunnings a proper noun?",
          options: [
            "It names one specific entity and is capitalised",
            "It is a long word",
            "It is a brand, and brands are always adjectives",
            "It can be made plural",
          ],
          answer: 0,
          explain:
            "Proper nouns single out one referent. That is why we say Bunnings, not a Bunnings, in its usual sense.",
        },
      ],
      teach:
        "Proper nouns are one of the strongest signals of a text's domain: names of people, places, brands and events tell you what the text is about.",
    },
    {
      id: "ladder-07",
      title: "unhappy",
      text: "unhappy",
      source: "Single word from a handwritten diary entry (constructed)",
      field: "Personal life",
      mode: 'written',
      setting: "Written, private, reflective",
      tenor: "Self to self",
      register: "informal-register",
      registerNote: "Private writing tolerates plain, unguarded word choice.",
      dominantFunction: "emotive",
      functionNote: "Even one word can carry the writer's inner state. This one does.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 0,
      difficulty: 1,
      gold: [
        {
          feature: "prefix",
          spans: ["unhappy"],
          note: "The bound morpheme un- sits before the root and reverses its meaning.",
        },
        {
          feature: "adjective",
          spans: ["unhappy"],
          note: "It describes a person's state, so it modifies a noun: an unhappy customer.",
        },
      ],
      quiz: [
        {
          prompt: "What is the job of the prefix un- in unhappy?",
          options: [
            "It reverses the meaning of the root without changing word class",
            "It changes the word class to a noun",
            "It marks a plural",
            "It marks tense",
          ],
          answer: 0,
          explain:
            "Happy and unhappy are both adjectives. Prefixes usually change meaning, while suffixes usually change word class.",
        },
      ],
      teach:
        "Morphology gives you a reliable word-class test: endings like -ness, -ly and -able change class, beginnings like un- and re- usually do not.",
    },
    {
      id: "ladder-08",
      title: "the very old dog",
      text: "the very old dog",
      source: "Noun phrase from a children's picture book (constructed)",
      field: "Narrative",
      mode: 'written',
      setting: "Written, literary",
      tenor: "Narrator to child reader",
      register: "neutral-register",
      registerNote: "Simple and unmarked, equally at home in storybooks and conversation.",
      dominantFunction: "referential",
      functionNote: "The phrase identifies one specific animal and describes it.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "noun-phrase",
          spans: ["the very old dog"],
          note: "A determiner, an intensifier, an adjective and the head noun dog.",
        },
        { feature: "article-definite", spans: ["the"], note: "The reader is expected to know which dog." },
        {
          feature: "adverb-degree",
          spans: ["very"],
          note: "Very modifies the adjective old, not the noun, which is how intensifiers work.",
        },
        { feature: "adjective", spans: ["old"], note: "Old describes the head noun." },
      ],
      quiz: [
        {
          prompt: "What is the head of this noun phrase?",
          options: ["dog", "very", "old", "the"],
          answer: 0,
          explain:
            "The head is the noun the whole phrase is built around. Remove everything else and dog still carries the meaning.",
        },
        {
          prompt: "What does the word very modify here?",
          options: ["The adjective old", "The noun dog", "The determiner the", "Nothing"],
          answer: 0,
          explain:
            "Intensifiers scale whatever follows them. Here very scales old, so scold the adjective, not the dog.",
        },
      ],
      teach:
        "A noun phrase is built around a head noun, with optional determiners and modifiers. Count modifiers to judge how dense a text's noun phrases are.",
    },
    {
      id: "ladder-09",
      title: "in spite of the rain",
      text: "in spite of the rain",
      source: "Prepositional phrase from a weather report (constructed)",
      field: "Weather and events",
      mode: 'written',
      setting: "Written, public",
      tenor: "Reporter to audience",
      register: "formal-register",
      registerNote: "The three-word preposition is a formal alternative to despite or even with.",
      dominantFunction: "referential",
      functionNote: "It sets up the circumstances of an event, which is informational.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 1,
      difficulty: 3,
      gold: [
        {
          feature: "preposition-complex",
          spans: ["in spite of"],
          note: "Three words working as a single preposition. Despite would do the same job.",
        },
        { feature: "article-definite", spans: ["the"], note: "The rain is already known to the reader." },
        { feature: "noun-common", spans: ["rain"], note: "The head noun of the phrase." },
        {
          feature: "prepositional-phrase",
          spans: ["in spite of the rain"],
          note: "A preposition plus its noun phrase, working adverbially.",
        },
      ],
      quiz: [
        {
          prompt: "Why is in spite of called a complex preposition?",
          options: [
            "It is made of several words functioning as one preposition",
            "It is hard to understand",
            "It contains a verb",
            "It is a synonym for a conjunction",
          ],
          answer: 0,
          explain:
            "Complex prepositions are multi-word units: in spite of, as a result of, in front of, on behalf of.",
        },
        {
          prompt: "What job does this phrase do in a sentence?",
          options: [
            "It works adverbially, giving the circumstance of an event",
            "It names a person",
            "It replaces a verb",
            "It joins two independent clauses",
          ],
          answer: 0,
          explain:
            "We played on in spite of the rain. The phrase tells us the circumstances of playing, so it modifies the verb.",
        },
      ],
      teach:
        "Complex prepositions are a quick formality signal. Compare despite the rain in a news report with even with the rain in casual speech.",
    },
    {
      id: "ladder-10",
      title: "How good is that!",
      text: "How good is that!",
      source: "Spoken exclamation from a sports broadcast (constructed)",
      field: "Sport",
      mode: 'spoken',
      setting: "Spoken, broadcast, spontaneous",
      tenor: "Commentator to general audience",
      register: "informal-register",
      registerNote: "Speech-like, emotional and immediate.",
      dominantFunction: "emotive",
      functionNote: "It releases the speaker's excitement rather than conveying new information.",
      dominantSentenceType: "exclamative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 3,
      gold: [
        {
          feature: "adverb-degree",
          spans: ["How"],
          note: "How opens the exclamative and scales the adjective that follows.",
        },
        { feature: "adjective", spans: ["good"], note: "The adjective being scaled to its extreme." },
        { feature: "verb-lexical", spans: ["is"], note: "The main verb of the clause, here a state rather than an action." },
      ],
      quiz: [
        {
          prompt: "Which sentence mood is this?",
          options: ["Exclamative", "Interrogative", "Imperative", "Declarative"],
          answer: 0,
          explain:
            "Starting with how or what plus an exclamation mark makes it exclamative, even though the word order looks like a question.",
        },
        {
          prompt: "Which function of language does this utterance most clearly serve?",
          options: ["Expressive", "Referential", "Metalinguistic", "Phatic"],
          answer: 0,
          explain:
            "It reveals the speaker's feelings. No new verifiable information is added to the broadcast.",
        },
      ],
      teach:
        "Exclamatives are one of the most reliable expressive markers. Look for what and how openings plus heavy punctuation.",
    },
    {
      id: "ladder-11",
      title: "Submit the form before Friday.",
      text: "Submit the form before Friday.",
      source: "Instruction from a school newsletter (constructed)",
      field: "Education",
      mode: 'written',
      setting: "Written, public, instructional",
      tenor: "School to families",
      register: "formal-register",
      registerNote: "Impersonal, unhurried and carefully punctuated.",
      dominantFunction: "conative",
      functionNote: "It exists to make the reader act before a deadline.",
      dominantSentenceType: "imperative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "verb-lexical",
          spans: ["Submit"],
          note: "The bare verb opens the imperative with no subject in front of it.",
        },
        { feature: "article-definite", spans: ["the"], note: "One specific form, already referred to." },
        { feature: "noun-common", spans: ["form"], note: "The object of the verb." },
        { feature: "preposition", spans: ["before"], note: "Shows a relationship of time." },
        { feature: "noun-proper", spans: ["Friday"], note: "A named day, capitalised in English." },
      ],
      quiz: [
        {
          prompt: "Which grammatical feature marks this as an imperative?",
          options: [
            "The bare verb with no subject",
            "The full stop",
            "The definite article",
            "The capital letter on Friday",
          ],
          answer: 0,
          explain:
            "Imperatives use the base form of the verb and leave the subject you understood but unspoken.",
        },
        {
          prompt: "Which word class is before in this sentence?",
          options: ["Preposition", "Adverb", "Conjunction", "Subordinating conjunction"],
          answer: 0,
          explain:
            "It is followed by the noun phrase Friday, so it is a preposition showing time.",
        },
      ],
      teach:
        "Imperatives are the strongest, bluntest marker of the conative function. Mixing them with modals softens the demand.",
    },
    {
      id: "ladder-12",
      title: "Big bold Bunnings bargains!",
      text: "Big bold Bunnings bargains!",
      source: "Catalogue headline from a hardware retailer (constructed)",
      field: "Retail advertising",
      mode: 'written',
      setting: "Written, public, commercial",
      tenor: "Brand to shopper",
      register: "informal-register",
      registerNote: "Punchy, punctuated and shaped for the ear rather than the eye.",
      dominantFunction: "poetic",
      functionNote:
        "The sound patterning is doing almost all the work, so the form of the language is foregrounded. On the shop floor it also persuades.",
      dominantSentenceType: "exclamative",
      sentenceStructure: "fragment",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "alliteration",
          spans: ["Big bold Bunnings bargains"],
          note: "Four words in a row start with the same consonant sound.",
        },
        { feature: "adjective", spans: ["Big"], note: "Describes the bargains on offer." },
        { feature: "adjective", spans: ["bold"], note: "A second modifier stacking up the emphasis." },
        {
          feature: "noun-proper",
          spans: ["Bunnings"],
          note: "The brand name does double duty, anchoring both the meaning and the sound pattern.",
        },
        { feature: "noun-common", spans: ["bargains"], note: "The head noun the adjectives describe." },
      ],
      quiz: [
        {
          prompt: "Which sound device is at work in Big bold Bunnings bargains?",
          options: ["Alliteration", "Assonance", "Onomatopoeia", "Rhyme"],
          answer: 0,
          explain:
            "Alliteration repeats the consonant sound at the start of stressed syllables and makes the line memorable.",
        },
        {
          prompt: "Why does the catalogue put the brand name in the middle of the alliteration?",
          options: [
            "So the brand becomes part of the pleasing sound pattern",
            "Because brands must be capitalised",
            "Because it is a proper noun",
            "To make the word shorter",
          ],
          answer: 0,
          explain:
            "Brands love alliteration for exactly this reason. The name is absorbed into the rhythm of the slogan.",
        },
      ],
      teach:
        "Alliteration and rhyme are hallmarks of the poetic function in advertising. Ask what the sound is doing that plain wording would not.",
    },
    {
      id: "ladder-13",
      title: "She let the cat out of the bag.",
      text: "She let the cat out of the bag.",
      source: "Sentence from a spoken anecdote (constructed)",
      field: "Personal anecdote",
      mode: 'spoken',
      setting: "Spoken, informal, conversational",
      tenor: "Friend to friend",
      register: "informal-register",
      registerNote: "Idiomatic and relaxed, without being slang.",
      dominantFunction: "referential",
      functionNote: "It reports that a secret was revealed. The idiom is figurative, but the information is real.",
      dominantSentenceType: "declarative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 3,
      gold: [
        {
          feature: "idiom",
          spans: ["let the cat out of the bag"],
          note: "No actual cat was involved. The whole expression means to reveal a secret.",
        },
        {
          feature: "pronoun",
          spans: ["She"],
          note: "A personal pronoun referring to someone the listener already knows, which is endophoric reference to the context.",
        },
        { feature: "article-definite", spans: ["the"], note: "A definite article supporting the fixed idiom." },
        { feature: "noun-common", spans: ["cat"], note: "The literal animal inside the figurative expression." },
      ],
      quiz: [
        {
          prompt: "What is the meaning of let the cat out of the bag?",
          options: ["Reveal a secret", "Free an animal", "Waste money", "Start a fight"],
          answer: 0,
          explain:
            "Idioms are fixed expressions whose meaning cannot be worked out word by word. That is exactly why they are hard for new speakers.",
        },
        {
          prompt: "What is the pronoun She doing in this sentence?",
          options: [
            "Referring to a person already known to the listener",
            "Naming a place",
            "Joining two clauses",
            "Replacing a verb",
          ],
          answer: 0,
          explain:
            "Pronouns stand in for noun phrases and keep texts cohesive by pointing back or out to the context.",
        },
      ],
      teach:
        "Idioms are a marker of in-group language. They are idiomatic, figurative and highly culturally bound, so they signal informal and familiar registers.",
    },
    {
      id: "ladder-14",
      title: "on the kitchen table",
      text: "on the kitchen table",
      source: "Prepositional phrase from a real estate listing (constructed)",
      field: "Housing",
      mode: 'written',
      setting: "Written, commercial, descriptive",
      tenor: "Seller to buyer",
      register: "neutral-register",
      registerNote: "Plain, concrete and descriptive, typical of property copy.",
      dominantFunction: "referential",
      functionNote: "It places an object in space so a buyer can picture the room.",
      dominantSentenceType: "declarative",
      sentenceStructure: "fragment",
      lengthTier: 1,
      difficulty: 2,
      gold: [
        {
          feature: "prepositional-phrase",
          spans: ["on the kitchen table"],
          note: "A preposition plus its noun phrase, here working adverbially.",
        },
        { feature: "preposition", spans: ["on"], note: "Shows a relationship of place." },
        { feature: "article-definite", spans: ["the"], note: "One specific table, definite for the reader." },
        {
          feature: "compounding",
          spans: ["kitchen table"],
          note: "Two nouns joined to name a single familiar object.",
        },
      ],
      quiz: [
        {
          prompt: "Which word class is on?",
          options: ["Preposition", "Adverb", "Conjunction", "Determiner"],
          answer: 0,
          explain:
            "It links the noun phrase the kitchen table to whatever the phrase attaches to: keys on the kitchen table.",
        },
        {
          prompt: "Why is kitchen table a compound noun?",
          options: [
            "Two words combine to name one specific object",
            "Kitchen is an adjective here",
            "It contains a preposition",
            "It is plural",
          ],
          answer: 0,
          explain:
            "The pair names a single familiar object, the table used for preparing and eating food, so it functions as one noun.",
        },
      ],
      teach:
        "Prepositional phrases pile up in property and marketing copy because they build a picture. Count them to see how a text creates atmosphere.",
    },
  ],
}
