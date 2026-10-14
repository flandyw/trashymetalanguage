import type { PassageBank } from '../../lib/passages'

/** Tier 2 — two or three sentences. */
export const bank03: PassageBank = {
  id: 'sentences',
  label: 'Sentence bank',
  blurb:
    'Two or three sentences at a time. Now the interesting work begins: tracking a referent across sentences, watching register shift, and separating the grammar from the attitude.',
  passages: [
    {
      id: 's01',
      title: 'Text messages between friends',
      text: 'Hey, are you coming tonight? I’ve got the tickets sorted, so just meet me at the station. Don’t be late again, yeah?',
      source: 'Constructed: SMS exchange between two seventeen-year-olds',
      unit: 3,
      areaOfStudy: 'u3-informality',
      textType: 'personal-exchange',
      mode: 'written',
      field: 'Social arrangement',
      tenor: 'very close, friend to friend',
      setting: 'private text message, same day, mobile phone',
      register: 'informal-register',
      registerNote:
        'Contractions, dropped subjects in imperatives and a tag-like "yeah?" all pull the register down.',
      dominantFunction: 'conative',
      functionNote:
        'The question and the two imperatives are all aimed at getting the other person to turn up.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['Hey'],
          note: 'An opening attention signal: it greets rather than informs.',
        },
        {
          feature: 'contraction',
          spans: ['I’ve', 'Don’t'],
          note: 'Both compress two words into one, imitating speech.',
        },
        {
          feature: 'pronoun',
          spans: ['you', 'me'],
          note: 'Second person "you" and first person "me" make the message a direct exchange between two people.',
        },
        {
          feature: 'verb-lexical',
          spans: ['coming', 'meet'],
          note: 'Main verbs carrying the real actions of the message.',
        },
        {
          feature: 'noun-concrete',
          spans: ['tickets', 'station'],
          note: 'Physical things you could point to.',
        },
        {
          feature: 'article-definite',
          spans: ['the'],
          note: 'Definite because both friends already know which tickets and which station are meant.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['so'],
          note: 'Joins two independent clauses, "I’ve got the tickets sorted" and "just meet me", into a compound sentence.',
        },
        {
          feature: 'adverb',
          spans: ['again'],
          note: 'A frequency adverb: the lateness has happened before, which is why the warning is pointed.',
        },
        {
          feature: 'adjective',
          spans: ['late'],
          note: 'A predicative adjective after "be": it describes the friend, not an action.',
        },
        {
          feature: 'discourse-marker',
          spans: ['yeah'],
          note: 'The tag "yeah?" seeks agreement and keeps the tone casual rather than bossy.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature most clearly signals the informal register of this message?',
          options: [
            'The noun "station"',
            'The adverb "again"',
            'The contractions "I’ve" and "Don’t"',
            'The conjunction "so"',
          ],
          answer: 2,
          explain:
            'Contractions imitate speech, and their density is one of the fastest register indicators in English. "Station" is a common noun and says nothing about register.',
        },
        {
          prompt: 'Why is "the station" definite rather than indefinite?',
          options: [
            'Because it is a proper noun',
            'Because it is singular',
            'Because it follows a verb',
            'Because both participants already know which station is meant',
          ],
          answer: 3,
          explain:
            'Definite reference marks a referent the writer treats as shared knowledge. "Station" is a common noun, so being a proper noun is the nearest distractor and does not explain the article.',
        },
      ],
      teach:
        'Digital messages are a goldmine for informal features. Compare this with a formal email and you can write a full register comparison from four lines of text.',
    },
    {
      id: 's02',
      title: 'School captain welcomes the swim carnival',
      text: 'Good morning everyone, and welcome to the 2026 swimming carnival. We have been training for weeks, and I honestly believe this will be our best year yet.',
      source: 'School captain’s opening address, transcript (constructed)',
      field: 'School ceremony',
      mode: 'spoken',
      setting: 'spoken, prepared',
      tenor: 'warm but public, student leader to whole school',
      register: 'neutral-register',
      registerNote:
        'Friendly address words sit alongside a loftier idea and a formal opening greeting.',
      dominantFunction: 'phatic',
      functionNote:
        'The greeting and welcome establish goodwill with the audience before any information is exchanged.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: 'adjective-superlative',
          spans: ['best'],
          note: 'Claims the extreme of the scale — a persuasive move.',
        },
        { feature: 'determiner', spans: ['2026'], note: 'Gives the occasion an exact, verifiable setting.' },
        {
          feature: 'verb-auxiliary',
          spans: ['have', 'been', 'will'],
          note: 'Three auxiliaries build the perfect continuous and the future.',
        },
        {
          feature: 'adverb',
          spans: ['honestly'],
          note: 'A stance adverb: it comments on the speaker’s sincerity rather than on the verb.',
        },
        { feature: 'pronoun', spans: ['We', 'I', 'our'], note: 'Shifts between collective and personal voice.' },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Appears twice, giving the address a co-ordinated, rhythmic flow.',
        },
        {
          feature: 'adverb-degree',
          spans: ['yet'],
          note: 'Scales the superlative "best": this year beats every previous one.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of the pronoun shift from "We" to "I"?',
          options: [
            'It confuses the audience',
            'It moves from collective identity to a personal, sincere claim',
            'It makes the speech more formal',
            'It avoids repeating a noun',
          ],
          answer: 1,
          explain:
            'Inclusive "we" builds solidarity; "I honestly believe" then adds personal investment. The two work together.',
        },
        {
          prompt: 'Which feature would you quote to show the speech is persuasive?',
          options: [
            'The numeral 2026',
            'The superlative "best"',
            'The conjunction "and"',
            'The proper noun-less opening',
          ],
          answer: 1,
          explain: 'Superlatives make an unverifiable claim sound like a fact, which is classic persuasive lexis.',
        },
      ],
      teach:
        'Speeches mix functions. A single address can be phatic in its greeting, referential in its facts and expressive in its belief — say which dominates and why.',
    },
    {
      id: 's03',
      title: 'Comment on a viral video',
      text: 'omg this is literally the funniest thing I have seen all week. no cap, I was crying laughing at 2am.',
      source: 'Comment posted under a short video (constructed)',
      field: 'Online entertainment',
      mode: 'written',
      setting: 'written, online',
      tenor: 'very close to peers, broadcast to strangers',
      register: 'informal-register',
      registerNote:
        'Lowercase throughout, an abbreviation, contemporary slang and hyperbole — the register is unmistakably casual.',
      dominantFunction: 'emotive',
      functionNote: 'The comment exists to release and share a reaction, not to inform anyone.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: 'initialism',
          spans: ['omg'],
          note: 'Read letter by letter, and now used as a whole utterance in its own right.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['funniest'],
          note: 'The -est suffix puts the video above every other thing seen that week.',
        },
        {
          feature: 'adverb-degree',
          spans: ['literally'],
          note: 'An intensifier that has drifted away from its literal meaning.',
        },
        {
          feature: 'slang',
          spans: ['no cap'],
          note: 'A recent in-group expression meaning "I am not lying".',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'have', 'was'],
          note: 'Auxiliaries carry the tense while the main verbs carry the meaning.',
        },
        { feature: 'determiner', spans: ['2am'], note: 'A digit-and-letters abbreviation, typical of digital writing.' },
        {
          feature: 'hyperbole',
          spans: ['crying laughing'],
          note: 'Exaggerated to the point of impossibility — the point is intensity, not accuracy.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is "omg" an initialism rather than an acronym?',
          options: [
            'Because it is written in lowercase',
            'Because speakers say each letter separately rather than as one word',
            'Because it is a slang term',
            'Because it comes from a longer phrase',
          ],
          answer: 1,
          explain:
            'Acronyms are pronounced as words (NASA, ATAR); initialisms are pronounced letter by letter (omg, FYI).',
        },
        {
          prompt: 'What does "literally" contribute here?',
          options: [
            'Precise factual accuracy',
            'Intensity — it works as an intensifier rather than a literal claim',
            'Formality',
            'A comparison',
          ],
          answer: 1,
          explain:
            'Semantic bleaching means "literally" now often just means "very", which is worth noting as language change.',
        },
      ],
      teach:
        'Online comments combine word-formation processes, slang and hyperbole in a couple of lines. They are the fastest way to show language change in an essay.',
    },
    {
      id: 's04',
      title: 'Short cafe review',
      text: 'The coffee here is decent, but the service was painfully slow. I would not recommend it on a weekend.',
      source: 'Online review of a suburban cafe (constructed)',
      field: 'Hospitality review',
      mode: 'written',
      setting: 'written, public',
      tenor: 'stranger to a general readership',
      register: 'informal-register',
      registerNote:
        'Evaluative, first person and conversational, even though it is published publicly.',
      dominantFunction: 'emotive',
      functionNote:
        'The review is built around the writer’s judgement of the experience rather than neutral description.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        { feature: 'article-definite', spans: ['The', 'the'], note: 'Definite because the writer assumes shared knowledge of the place.' },
        {
          feature: 'conjunction-coordinating',
          spans: ['but'],
          note: 'Signals contrast: one positive, one negative.',
        },
        {
          feature: 'verb-modal',
          spans: ['would'],
          note: 'Hypothetical modality: the recommendation applies to a possible future visit.',
        },
        { feature: 'adverb', spans: ['not'], note: 'Negates the recommendation.' },
        { feature: 'adjective', spans: ['decent', 'slow'], note: 'Both are gradable evaluative adjectives.' },
        { feature: 'pronoun', spans: ['I', 'it'], note: 'First person judgement plus anaphoric "it".' },
        {
          feature: 'connotation',
          spans: ['painfully slow'],
          note: '"Painfully" smuggles bodily discomfort into a comment about waiting time.',
        },
      ],
      quiz: [
        {
          prompt: 'What does "painfully slow" add that "slow" does not?',
          options: [
            'Grammatical information',
            'An emotional and physical intensity that strengthens the criticism',
            'More formality',
            'A comparison with another cafe',
          ],
          answer: 1,
          explain:
            'Loaded modifiers carry evaluation. "Painfully" converts a factual observation into a complaint.',
        },
        {
          prompt: 'How does the modal "would" change the force of the recommendation?',
          options: [
            'It makes it past tense',
            'It frames it as a hypothetical about future visits',
            'It makes it an order',
            'It makes it a question',
          ],
          answer: 1,
          explain:
            'Modal verbs of likelihood and hypothetical meaning let writers evaluate without making absolute claims.',
        },
      ],
      teach:
        'Reviews look referential but are usually expressive. The adjectives and loaded verbs are the giveaway.',
    },
    {
      id: 's05',
      title: 'Radio interview question',
      text: 'So, tell us about the album. How long did it take you to write, and which track means the most to you?',
      source: 'Interviewer’s questions, radio transcript (constructed)',
      field: 'Music interview',
      mode: 'spoken',
      setting: 'spoken, broadcast',
      tenor: 'professional but friendly, host to guest',
      register: 'neutral-register',
      registerNote:
        'A conversational opener followed by two carefully built questions keeps it friendly without slang.',
      dominantFunction: 'conative',
      functionNote:
        'Every clause here is designed to make the guest produce a particular answer.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: 'discourse-marker',
          spans: ['So'],
          note: 'Signals a new phase of the interview — it steers the conversation rather than adding information.',
        },
        {
          feature: 'verb-lexical',
          spans: ['tell', 'write', 'means'],
          note: 'Main verbs naming the actions the guest is invited to talk about.',
        },
        { feature: 'pronoun', spans: ['us', 'you'], note: 'Directly names both parties to the talk.' },
        { feature: 'noun-concrete', spans: ['album', 'track'], note: 'Physical products and a physical part of one.' },
        { feature: 'conjunction-coordinating', spans: ['and'], note: 'Joins the two questions into one turn.' },
        { feature: 'preposition', spans: ['about'], note: 'Sets the topic of the first request.' },
        { feature: 'verb-auxiliary', spans: ['did'], note: 'Auxiliary carrying past tense in the interrogative.' },
      ],
      quiz: [
        {
          prompt: 'What job does "So" do at the start of the turn?',
          options: [
            'It states the topic',
            'It marks a transition in the conversation',
            'It shows obligation',
            'It replaces a noun',
          ],
          answer: 1,
          explain:
            'Discourse markers manage the structure and flow of talk. They are central to interactive spoken language.',
        },
        {
          prompt: 'How is the second question more complex than the first?',
          options: [
            'It is longer',
            'It contains two interrogatives joined by a coordinating conjunction',
            'It uses a modal verb',
            'It has no verb',
          ],
          answer: 1,
          explain:
            'Compound sentences let interviewers stack questions, which puts more work on the interviewee in one turn.',
        },
      ],
      teach:
        'Interviews are conative texts disguised as conversation. Notice how questions are built to control what the guest has to do.',
    },
    {
      id: 's06',
      title: 'Group chat plan',
      text: 'ok so who is bringing the snags on saturday? I can grab the bread and sauce if someone else gets the drinks.',
      source: 'Group chat organising a barbecue (constructed)',
      field: 'Social planning',
      mode: 'written',
      setting: 'written, digital, multi-party',
      tenor: 'very close, peers',
      register: 'informal-register',
      registerNote:
        'No capitals, no full formality, and a distinctly Australian piece of slang carry the register.',
      dominantFunction: 'conative',
      functionNote:
        'The whole message divides up jobs — it exists to make other people commit to tasks.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        { feature: 'interjection', spans: ['ok'], note: 'Opens the turn and signals a shift to the business at hand.' },
        { feature: 'discourse-marker', spans: ['so'], note: 'Pivots from nothing into the main point.' },
        {
          feature: 'australian-english',
          spans: ['snags'],
          note: 'A distinctly Australian word for sausages, especially on a barbecue.',
        },
        {
          feature: 'verb-modal',
          spans: ['can'],
          note: 'Expresses willingness and ability: the speaker volunteers.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['if'],
          note: 'Introduces a conditional dependent clause, creating a complex sentence.',
        },
        {
          feature: 'noun-concrete',
          spans: ['bread', 'sauce', 'drinks'],
          note: 'The physical items being allocated.',
        },
        { feature: 'pronoun', spans: ['who', 'someone'], note: 'Indefinite and interrogative pronouns leave the task open for anyone to claim.' },
      ],
      quiz: [
        {
          prompt: 'Why is this a complex rather than a compound sentence?',
          options: [
            'It contains an if-clause, which is dependent',
            'It is longer than one line',
            'It contains a modal verb',
            'It asks a question',
          ],
          answer: 0,
          explain:
            'A dependent clause introduced by "if" makes the sentence complex, even though it also has two main clauses.',
        },
        {
          prompt: 'What does the choice of "snags" reveal?',
          options: [
            'That the writer is being deliberately formal',
            'That the group shares an Australian cultural context and informal norms',
            'That the writer is unsure of the word for sausages',
            'That the text is written for a public audience',
          ],
          answer: 1,
          explain:
            'Lexical choice signals membership. In-group vocabulary builds solidarity and marks who belongs.',
        },
      ],
      teach:
        'Sounding Australian is not neutral — it is a register effect. Words like snags, arvo and servo do cultural work in a text.',
    },
    {
      id: 's07',
      title: 'Footy club notice',
      text: 'All players must arrive by 7am for the warm-up. Anyone who is unavailable needs to text the coach before Friday.',
      source: 'Notice on a local football club noticeboard (constructed)',
      field: 'Community sport and administration',
      mode: 'written',
      setting: 'written, institutional',
      tenor: 'asymmetrical, club to members',
      register: 'formal-register',
      registerNote:
        'Modal obligation, an exact time and a pronoun that avoids naming individuals all raise the formality.',
      dominantFunction: 'conative',
      functionNote:
        'The notice directs members to act, and backs the direction with obligation.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: 'verb-modal',
          spans: ['must'],
          note: 'The strongest modal of obligation available in English.',
        },
        {
          feature: 'verb-semi-modal',
          spans: ['needs to'],
          note: 'Multi-word but modal in meaning: it obliges the reader to act.',
        },
        { feature: 'determiner', spans: ['7am'], note: 'Precise time increases the formality and the accountability.' },
        { feature: 'noun-proper', spans: ['Friday'], note: 'A named day functions as a proper noun and sets a deadline.' },
        {
          feature: 'compounding',
          spans: ['warm-up'],
          note: 'Built from two words plus a hyphen, referring to a specific training routine.',
        },
        {
          feature: 'preposition',
          spans: ['by', 'for', 'before'],
          note: 'Three prepositions pin down time and purpose precisely.',
        },
        {
          feature: 'pronoun',
          spans: ['Anyone', 'who'],
          note: '"Anyone" is indefinite and "who" is relative, so no individual is named.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the difference in meaning between "must" and "needs to" here?',
          options: [
            'None at all — they are identical in every context',
            'Both oblige the reader, but "must" is more absolute and impersonal',
            '"needs to" is a past tense form',
            '"must" expresses possibility',
          ],
          answer: 1,
          explain:
            'Semi-modals are meaning-dense but grammatically ordinary verbs; modals are blunter and more institutional in tone.',
        },
        {
          prompt: 'Why does the notice use "Anyone who" instead of naming the people concerned?',
          options: [
            'To make the notice friendlier',
            'To make it apply to all members impersonally, which suits institutional registers',
            'To avoid a taboo word',
            'To create a metaphor',
          ],
          answer: 1,
          explain:
            'Impersonal reference is a hallmark of formal, rule-setting texts, because the rule is meant to apply to everyone.',
        },
      ],
      teach:
        'Notices are pure conative texts. Obligation modals, exact times and impersonal pronouns are the standard toolkit.',
    },
    {
      id: 's08',
      title: 'Podcast introduction',
      text: 'Welcome back to the show. Today we are talking about why we all doomscroll at midnight, and what we can do about it.',
      source: 'Opening lines of a podcast episode (constructed)',
      field: 'Digital media and wellbeing',
      mode: 'spoken',
      setting: 'spoken, scripted',
      tenor: 'friendly and direct, host to loyal audience',
      register: 'informal-register',
      registerNote:
        'Chatty address and a brand-new compound verb keep the tone relaxed while a serious topic is introduced.',
      dominantFunction: 'referential',
      functionNote:
        'Once the welcome is done, the message is doing the informative work of setting out the episode’s topic.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'adverb', spans: ['Today'], note: 'A time adverb framing the episode.' },
        {
          feature: 'neologism',
          spans: ['doomscroll'],
          note: 'Coined to name a behaviour created by social media feeds.',
        },
        {
          feature: 'compounding',
          spans: ['doomscroll'],
          note: '"doom" plus "scroll" — two free morphemes, no affixes needed.',
        },
        { feature: 'verb-modal', spans: ['can'], note: 'Expresses possibility and agency, which sets up the hopeful half of the episode.' },
        {
          feature: 'pronoun',
          spans: ['we'],
          note: 'Repeated inclusive "we" builds a shared identity between host and listener.',
        },
        {
          feature: 'preposition',
          spans: ['about', 'at'],
          note: '"about" marks the topic twice, "at" marks the time of the behaviour.',
        },
        {
          feature: 'clause',
          spans: ['why we all doomscroll at midnight'],
          note: 'A dependent clause working as the object of "about".',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the host repeat the pronoun "we"?',
          options: [
            'To save space',
            'To create a shared identity with the audience rather than talking down to them',
            'Because English has no singular pronouns',
            'To make the sentence longer',
          ],
          answer: 1,
          explain:
            'Inclusive first person plural is a powerful solidarity device in broadcast language.',
        },
        {
          prompt: 'What is the effect of putting a neologism in a formal-sounding clause?',
          options: [
            'It makes the topic sound obscure',
            'It shows that serious problems can be described in very new vocabulary',
            'It breaks the sentence',
            'It makes the text metalinguistic',
          ],
          answer: 1,
          explain:
            'Neologisms are evidence of language change keeping pace with social change — a strong point for an analytical essay.',
        },
      ],
      teach:
        'Podcasts sit between speech and writing. They borrow informal address but are usually scripted and structured, so both register sides are visible.',
    },
    {
      id: 's09',
      title: 'Bus stop conversation',
      text: 'Excuse me, does this bus go past the hospital? Oh, right, thanks. I haven’t caught it before.',
      source: 'Recorded conversation between strangers at a bus stop (constructed)',
      field: 'Public transport',
      mode: 'spoken',
      setting: 'spoken',
      tenor: 'polite, stranger to stranger',
      register: 'neutral-register',
      registerNote:
        'Careful politeness markers, a contraction and everyday vocabulary — think of it as standard but relaxed speech.',
      dominantFunction: 'conative',
      functionNote:
        'The central utterance asks a stranger to supply information, which is a direct request.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'interjection',
          spans: ['Oh'],
          note: 'Marks the receipt of new information in unplanned speech.',
        },
        {
          feature: 'determiner',
          spans: ['this', 'the'],
          note: '"this" points to the bus present in context; "the" picks out a known hospital.',
        },
        { feature: 'pronoun', spans: ['me', 'I', 'it'], note: 'Thin reference to the speaker and the bus.' },
        {
          feature: 'contraction',
          spans: ['haven’t'],
          note: 'A spoken contraction inside an otherwise careful exchange.',
        },
        {
          feature: 'preposition',
          spans: ['past'],
          note: 'A preposition of movement and place.',
        },
        {
          feature: 'noun-concrete',
          spans: ['bus', 'hospital'],
          note: 'Both referents are physical and visible or locatable.',
        },
        {
          feature: 'adverb',
          spans: ['before'],
          note: 'A time adverb that avoids repeating the whole verb phrase.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is "Excuse me" at the start of the exchange?',
          options: [
            'To apologise for a mistake',
            'To open a conversation politely with a stranger and lower the social risk of the request',
            'To introduce a new topic',
            'To show the speaker was wrong',
          ],
          answer: 1,
          explain:
            'Politeness formulae like "excuse me" and "thanks" manage the face of both participants.',
        },
        {
          prompt: 'Spoken conversation like this is usually dominated by which function?',
          options: [
            'Poetic — it plays with sound',
            'Conative or phatic — it gets someone to act or maintains social contact',
            'Metalinguistic — it analyses language',
            'None at all',
          ],
          answer: 1,
          explain:
            'Interactive talk is overwhelmingly about directing others and maintaining social relations rather than stating facts.',
        },
      ],
      teach:
        'Unplanned speech is full of repair, discourse markers and politeness formulae. Compare it with the written notice in the same collection for a register contrast.',
    },
    {
      id: 's10',
      title: 'Snapchat caption',
      text: 'golden hour at the beach 🌅 wish you were here, bestie. salty hair, sandy toes and no filter needed.',
      source: 'Snapchat story caption (constructed)',
      field: 'Digital social sharing',
      mode: 'written',
      setting: 'written, digital, ephemeral',
      tenor: 'very close, friend to friend',
      register: 'informal-register',
      registerNote:
        'Lowercase, a clipped affectionate noun, a pictograph and no full sentence anywhere in sight.',
      dominantFunction: 'phatic',
      functionNote:
        'Nobody learns anything new here. The caption is a social gesture that keeps a friendship warm.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'fragment',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'alliteration',
          spans: ['salty', 'sandy'],
          note: 'Both words begin with the same /s/ sound, which makes the line pleasing to say.',
        },
        {
          feature: 'shortening',
          spans: ['bestie'],
          note: '"best friend" shortened with the -ie suffix, a productive Australian pattern.',
        },
        { feature: 'adjective', spans: ['golden'], note: 'Describes the light rather than the noun’s usual sense.' },
        {
          feature: 'noun-concrete',
          spans: ['beach', 'hair', 'toes'],
          note: 'All sensory, all immediately imaginable.',
        },
        {
          feature: 'ellipsis',
          spans: ['wish you were here'],
          note: 'The subject "I" has been dropped entirely.',
        },
        { feature: 'determiner', spans: ['the', 'no'], note: '"no" is a negative quantifier determiner.' },
        { feature: 'preposition', spans: ['at'], note: 'Locates the whole scene.' },
      ],
      quiz: [
        {
          prompt: 'What makes "wish you were here" an example of ellipsis?',
          options: [
            'It is written in lowercase',
            'The subject "I" has been left out but is perfectly recoverable',
            'It has no punctuation',
            'It rhymes',
          ],
          answer: 1,
          explain:
            'Ellipsis removes words the reader can reconstruct. Digital writing uses it constantly to save effort.',
        },
        {
          prompt: 'Why is the alliteration in "salty hair, sandy toes" effective?',
          options: [
            'It makes the sentence formal',
            'It binds the two images together sonically, which makes the line memorable and pleasant',
            'It adds factual information',
            'It introduces a new referent',
          ],
          answer: 1,
          explain:
            'Sound patterning is a poetic device: it draws attention to form rather than to content.',
        },
      ],
      teach:
        'Social captions blur functions. A single line can be expressive, phatic and poetic at once — argue for the dominant one with evidence.',
    },
    {
      id: 's11',
      title: 'Family dinner table exchange',
      text: 'How was your day? Mine was hectic. I had to run between three meetings before lunch, honestly.',
      source: 'Recorded conversation at a family dinner table (constructed)',
      field: 'Family life and work',
      mode: 'spoken',
      setting: 'spoken',
      tenor: 'close, family members',
      register: 'informal-register',
      registerNote:
        'Contractions, an informal evaluative adjective and a trailing sentence adverb make this unmistakably casual talk.',
      dominantFunction: 'phatic',
      functionNote:
        'The question and the answer are a ritual of care. The detail matters less than the exchange itself.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 2,
      difficulty: 2,
      gold: [
        {
          feature: 'verb-semi-modal',
          spans: ['had to'],
          note: 'Multi-word obligation, and here inflected for past tense.',
        },
        { feature: 'determiner', spans: ['three'], note: 'Gives the complaint a countable figure.' },
        {
          feature: 'preposition',
          spans: ['between', 'before'],
          note: 'One shows a relationship between things, the other a time boundary.',
        },
        { feature: 'verb-auxiliary', spans: ['was'], note: 'Carries the tense for the adjective "hectic".' },
        { feature: 'pronoun', spans: ['your', 'Mine', 'I'], note: 'Possessives and a personal pronoun bounce the turn back and forth.' },
        {
          feature: 'noun-concrete',
          spans: ['meetings', 'lunch'],
          note: 'Everyday countable events and objects.',
        },
        {
          feature: 'colloquialism',
          spans: ['hectic'],
          note: 'Casual, idiomatic evaluation of a busy day.',
        },
      ],
      quiz: [
        {
          prompt: 'How does "Mine" work as a pronoun here?',
          options: [
            'It replaces the noun "day" and avoids repeating the whole question',
            'It is an adjective',
            'It is an interjection',
            'It is a determiner',
          ],
          answer: 0,
          explain:
            'Possessive pronouns stand in for a whole noun phrase: "Mine was hectic" = "My day was hectic".',
        },
        {
          prompt: 'Which function best describes this exchange as a whole?',
          options: [
            'Metalinguistic — they discuss grammar',
            'Phatic — the talk maintains a family relationship',
            'Referential — it records facts about the day',
            'Conative — it orders someone to do something',
          ],
          answer: 1,
          explain:
            'Small talk about the day is a care ritual. The referential content is minimal compared with the social work.',
        },
      ],
      teach:
        'Not everything spoken is informative. Much of everyday talk is phatic, and identifying that is a sophisticated analytical move.',
    },
    {
      id: 's12',
      title: 'Reflective journal entry',
      text: 'I used to think that grammar was just a set of rules to memorise. Now I realise that every choice I make changes how my reader feels.',
      source: 'Student’s English Language reflective journal (constructed)',
      field: 'Language study and reflection',
      mode: 'written',
      setting: 'written, reflective',
      tenor: 'self-directed and thoughtful',
      register: 'neutral-register',
      registerNote:
        'Precise, abstract vocabulary and full forms make this careful writing without being stiff.',
      dominantFunction: 'metalinguistic',
      functionNote:
        'The entry is language about language: it evaluates the writer’s own understanding of how language works.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 2,
      difficulty: 4,
      gold: [
        {
          feature: 'verb-semi-modal',
          spans: ['used to'],
          note: 'Marks a habit that has now stopped — note "use" here is not the ordinary verb.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that'],
          note: 'Introduces a dependent clause, twice in a row.',
        },
        { feature: 'verb-auxiliary', spans: ['was'], note: 'Carries the tense for the noun phrase complement.' },
        {
          feature: 'determiner',
          spans: ['a', 'every', 'my'],
          note: 'One indefinite, one universal quantifier and one possessive.',
        },
        {
          feature: 'noun-abstract',
          spans: ['grammar', 'rules', 'choice'],
          note: 'Nothing here can be touched, which is what makes the entry feel academic.',
        },
        {
          feature: 'preposition',
          spans: ['to'],
          note: 'Marks the infinitive of purpose in "to memorise".',
        },
        {
          feature: 'pronoun',
          spans: ['I'],
          note: 'The reflective genre is built on first person reference.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is this passage metalinguistic?',
          options: [
            'Because it is written in first person',
            'Because it talks about language itself — rules, choices and their effects',
            'Because it uses abstract nouns',
            'Because it contains a modal verb',
          ],
          answer: 1,
          explain:
            'Metalinguistic writing comments on the code rather than using it simply to report. Reflective journals about language are inherently metalinguistic.',
        },
        {
          prompt: 'What does the semi-modal "used to" tell you about the writer?',
          options: [
            'That the belief described belongs to the past and no longer applies',
            'That the writer is obliged to do something',
            'That the writer is uncertain',
            'That the sentence is a question',
          ],
          answer: 0,
          explain:
            'Semi-modals can express habit or state in the past. The contrast with "Now" makes the change of view clear.',
        },
      ],
      teach:
        'Reflective writing about language is metalinguistic by definition. Spotting that lets you quote a passage where a student is doing both analysis and self-examination.',
    },
  ],
}
