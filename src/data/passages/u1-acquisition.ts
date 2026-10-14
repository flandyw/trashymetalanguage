import type { PassageBank } from '../../lib/passages'

/**
 * Unit 1, Area of Study 2: language acquisition.
 *
 * Child-language transcripts at several ages, parent and caregiver texts,
 * an additional-language learner’s letter, a bilingual household, and
 * academic and public texts on universal grammar, usage-based accounts,
 * the critical period and consent for linguistic fieldwork.
 */
export const bankU1Acquisition: PassageBank = {
  id: 'u1-acquisition',
  label: 'Unit 1 · Language acquisition',
  blurb:
    'Child-language samples at different ages, caregiver speech, bilingual and additional-language talk, and academic and ethical texts on how language is acquired.',
  passages: [
    {
      id: 'u1a-01',
      title: 'Every animal is a doggie',
      text: 'At fourteen months, Ellie calls every four-legged animal “doggie”, including the cow in her picture book.',
      source: 'Constructed: parent’s diary entry about a 14-month-old',
      unit: 1,
      areaOfStudy: 'u1-acquisition',
      textType: 'personal-exchange',
      mode: 'written',
      field: 'a toddler’s early word meanings',
      tenor: 'parent writing privately about their child; affectionate and observational',
      setting: 'handwritten diary entry, at home, evening',
      register: 'neutral-register',
      registerNote:
        'Full sentences, standard grammar and a warm, observational tone with no slang or contractions.',
      dominantFunction: 'referential',
      functionNote:
        'The entry reports a fact about how Ellie uses a word and does not ask the reader to do anything.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 1,
      difficulty: 1,
      gold: [
        {
          feature: 'semantic-overgeneralisation',
          spans: ['doggie'],
          note: 'Ellie applies doggie to any four-legged animal, including a cow, so the word covers far more referents than adults would use it for.',
        },
        {
          feature: 'determiner',
          spans: ['every'],
          note: 'Every is a determiner that introduces the noun phrase and makes it refer to the whole class of animals.',
        },
        {
          feature: 'noun-concrete',
          spans: ['cow', 'book'],
          note: 'Concrete nouns name things the senses can perceive: the cow and the picture book.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['in her picture book'],
          note: 'A preposition followed by its noun phrase; the phrase postmodifies cow and says where it is.',
        },
      ],
      quiz: [
        {
          prompt: 'Ellie uses doggie for a cow. Which term best describes this?',
          options: [
            'Holophrase',
            'Morphological over-generalisation',
            'Semantic over-generalisation',
            'Child phonological process',
          ],
          answer: 2,
          explain:
            'Doggie is stretched to a cow, which adults would not call a dog, so the word is applied more widely than in adult use: a semantic over-generalisation. A morphological over-generalisation would apply a grammatical rule such as -ed, and a phonological process would change how the word sounds.',
        },
        {
          prompt: 'What is the dominant function of the sentence?',
          options: [
            'Referential, because it reports a fact about Ellie’s word use',
            'Conative, because it directs the parent to correct Ellie',
            'Emotive, because it expresses the parent’s delight',
            'Phatic, because it keeps up a social connection',
          ],
          answer: 0,
          explain:
            'The sentence informs the reader about what Ellie does with a word, so it is referential. It does not direct the reader to act (conative), and its main purpose is not feelings (emotive) or social contact (phatic).',
        },
      ],
      teach:
        'Over-generalisation can be semantic (a word stretched across referents) or morphological (a rule applied to an exception). Decide by asking whether the error is in meaning or in grammatical form.',
    },
    {
      id: 'u1a-02',
      title: 'Tar for star',
      text: 'Ellie’s first sentences were full of little simplifications. She still says “tar” for “star”, “nana” for “banana” and “wawa” for “water”. Her parents loved them, and nobody corrected her until she was nearly four.',
      source: 'Constructed: family memoir excerpt about a child’s early speech',
      unit: 1,
      areaOfStudy: 'u1-acquisition',
      textType: 'literature',
      mode: 'written',
      field: 'a child’s early speech sounds',
      tenor: 'retrospective memoir writer to family readers; warm and reflective',
      setting: 'printed family memoir, privately published',
      register: 'neutral-register',
      registerNote:
        'Standard grammar and plain, reflective sentences; the warmth comes from the anecdote rather than from slang or contractions.',
      dominantFunction: 'referential',
      secondaryFunctions: ['metalinguistic'],
      functionNote:
        'The passage describes a feature of Ellie’s speech and then comments on how the family responded to it, so it informs first and talks about language second.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'child-phonological-process',
          spans: ['tar', 'nana', 'wawa'],
          note: 'Three systematic simplifications: tar for star is cluster reduction (the s of the st- onset is lost); nana for banana is weak syllable deletion (the unstressed first syllable is dropped); wawa for water is reduplication (a syllable is copied).',
        },
        {
          feature: 'function-word',
          spans: ['for'],
          note: 'For is a preposition, a function word with grammatical rather than lexical meaning. The child simplifies the content words but the grammar around them stays.',
        },
        {
          feature: 'content-word',
          spans: ['star', 'banana', 'water'],
          note: 'These nouns carry the lexical meaning of each utterance, and they are the words the child simplifies.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'And joins items and clauses of equal rank: two word pairs in the list and two independent clauses.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['until'],
          note: 'Until introduces a dependent clause that says when the correcting stopped.',
        },
      ],
      quiz: [
        {
          prompt: 'Which process explains “tar” for “star”?',
          options: [
            'Weak syllable deletion',
            'Reduplication',
            'Cluster reduction',
            'Morphological over-generalisation',
          ],
          answer: 2,
          explain:
            'The two-consonant cluster st- at the start of star is reduced to a single consonant, which is cluster reduction. Weak syllable deletion would drop an unstressed syllable, as in nana for banana, and reduplication would copy one, as in wawa.',
        },
        {
          prompt: 'Which word class do the child’s simplified words belong to?',
          options: [
            'Interjections',
            'Function words such as prepositions',
            'Modal auxiliaries',
            'Content words such as nouns',
          ],
          answer: 3,
          explain:
            'The words simplified in the passage, star, banana and water, are nouns and so are content words. The function word for is not simplified, which is typical of child phonology targeting the lexical words.',
        },
      ],
      teach:
        'Child phonological processes are systematic. Name the process by comparing the child form with the adult target: what was dropped, doubled or simplified?',
    },
    {
      id: 'u1a-03',
      title: 'How grown-ups talk to babies',
      text: 'Adults who talk to babies and toddlers usually raise their pitch, slow down and keep their sentences short. Phrases such as “Look at the doggie!” and “Where’s the ball? There’s the ball!” give the child a clear model of the words in use.',
      source: 'Constructed: parenting leaflet on early language development',
      unit: 1,
      areaOfStudy: 'u1-acquisition',
      textType: 'public-document',
      mode: 'written',
      field: 'adult speech to toddlers',
      tenor: 'health-service writer to parents; informative and reassuring',
      setting: 'printed leaflet at a child health centre',
      register: 'neutral-register',
      registerNote:
        'Standard grammar and a plain, supportive tone suit a leaflet for a general readership; there is no slang and no technical jargon beyond child-directed speech.',
      dominantFunction: 'referential',
      secondaryFunctions: ['conative'],
      functionNote:
        'Most sentences describe how adults speak to children and inform parents, though the examples and the closing claim point the reader towards a way of speaking.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'child-directed-speech',
          spans: ['Look at the doggie', 'Where’s the ball', 'There’s the ball'],
          note: 'These short, repeated and simple examples are child-directed speech, which gives the child a clear and familiar model of the words.',
        },
        {
          feature: 'intonation',
          spans: ['raise their pitch'],
          note: 'Raising the pitch is a prosodic feature of intonation, and it marks the speech as addressed to a baby or toddler.',
        },
        {
          feature: 'adverb',
          spans: ['usually'],
          note: 'Usually is an adverb of frequency that modifies the verb raise, showing how typical the behaviour is.',
        },
        {
          feature: 'subordination',
          spans: ['who talk to babies and toddlers'],
          note: 'The relative pronoun who introduces a dependent clause that postmodifies the noun Adults.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['slow down'],
          note: 'Slow down is a phrasal verb: the verb and the particle form one unit of meaning.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the leaflet give short, repeated sentences as examples?',
          options: [
            'They show a formal register suited to public documents',
            'They give the child a clear, repeated model of words in use',
            'They are holophrases that the child has already learned',
            'They show that the adult has switched to another language',
          ],
          answer: 1,
          explain:
            'The leaflet presents the sentences as child-directed speech, whose repetition and simplicity help the child hear and learn the words. The register is neutral rather than formal, and the sentences are adult speech, not the child’s one-word holophrases.',
        },
        {
          prompt: 'Which word class is “usually”, and what does it modify?',
          options: [
            'Adjective, modifying the noun “adults”',
            'Adverb, modifying the verb “raise”',
            'Conjunction, linking the two sentences',
            'Pronoun, standing in for “adults”',
          ],
          answer: 1,
          explain:
            'Usually describes how often adults raise their pitch, so it is an adverb modifying the verb raise. It is not an adjective, because it does not describe a noun, and it is not a conjunction, because it links nothing.',
        },
      ],
      teach:
        'Child-directed speech is a register of care, not a language error. Name its features (pitch, length, repetition) and say how each one helps the child learn.',
    },
    {
      id: 'u1a-04',
      title: 'Toddler logic',
      text: 'Ellie (3) told me at breakfast that she “goed” to nursery on Friday and “bringed” her lunch in a bag shaped like a bus. She is also counting her two foots now, so we are making a point of saying feet. Anyone else have a toddler who thinks mouses is the plural?',
      source: 'Constructed: parent’s social media post about a 3-year-old’s speech',
      unit: 1,
      areaOfStudy: 'u1-acquisition',
      textType: 'social-media',
      mode: 'written',
      field: 'a 3-year-old’s over-regular past tenses and plurals',
      tenor: 'parent to followers; friendly, familiar and gently humorous',
      setting: 'public social media post, morning, shared with a wide audience',
      register: 'informal-register',
      registerNote:
        'Conversational lexis (Anyone else, thinks) and a direct question to followers show an informal, sociable tone.',
      dominantFunction: 'phatic',
      secondaryFunctions: ['emotive', 'conative'],
      functionNote:
        'The post mainly builds connection with other parents, and its final question invites them to reply.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'morphological-overgeneralisation',
          spans: ['goed', 'bringed', 'foots', 'mouses'],
          note: 'Goed and bringed add the regular past -ed to the irregular verbs go and bring. Foots and mouses add the regular plural -s to the irregular nouns feet and mice. Each is a regular rule applied to an exception.',
        },
        {
          feature: 'inflectional-morpheme',
          spans: ['counting'],
          note: 'The -ing ending is an inflectional morpheme: it marks the progressive on count without creating a new word.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['are'],
          note: 'Are is an auxiliary that works with the main verb making to form the present progressive.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['at breakfast', 'in a bag shaped like a bus'],
          note: 'Each is a preposition followed by its noun phrase. The second postmodifies bag and describes it.',
        },
        {
          feature: 'noun-proper',
          spans: ['Ellie'],
          note: 'Ellie is a proper noun naming one particular child.',
        },
      ],
      quiz: [
        {
          prompt: 'Ellie says “bringed”. Which type of child-language feature is this?',
          options: [
            'Holophrase',
            'Telegraphic speech',
            'Morphological over-generalisation',
            'Child phonological process',
          ],
          answer: 2,
          explain:
            'Bringed applies the regular past -ed to the irregular verb bring. It is a morphological over-generalisation. Telegraphic speech would omit the grammatical endings, and a phonological process would change the sounds rather than the grammar.',
        },
        {
          prompt: 'What is the dominant function of the post?',
          options: [
            'Referential, because it only reports facts about breakfast',
            'Phatic, because it builds connection with other parents',
            'Metalinguistic, because it defines the word mouses',
            'Conative, because it orders readers to share their own stories',
          ],
          answer: 1,
          explain:
            'The post shares a funny moment and asks other parents to join in, so it keeps up a social connection: phatic. Referential is the nearest distractor, but the post is not only informing. The final question invites a reply, which is conative only in a soft sense.',
        },
      ],
      teach:
        'Over-regularised forms show that a rule has been learned. Name the rule and the exception it is applied to, and say whether the child is extending grammar or ignoring it.',
    },
  ],
}
