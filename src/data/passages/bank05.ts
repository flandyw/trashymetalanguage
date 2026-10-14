import type { PassageBank } from '../../lib/passages'

/** Tier 3 — advertising, marketing and persuasive writing. */
export const bank05: PassageBank = {
  id: 'ads',
  label: 'Advertising & persuasion',
  blurb:
    'Paragraphs of persuasive writing: ads, appeals, campaign copy and commercial voiceovers. Hunt the techniques that are doing the persuading — imperatives, modals, intensifiers, loaded language and figurative devices.',
  passages: [
    {
      id: 'a01',
      title: 'Fitness app advertisement',
      text: 'Don’t wait for motivation. Start moving. Our coaches will build a plan that fits your life, not the other way around. You could train in the park, at the gym, or in your own lounge room. Best of all, the first four weeks are absolutely free. Download the app today and join more than 250,000 Australians who have already changed the way they move. Your future self will thank you.',
      source: 'Fitness app advertisement, social media feed (constructed)',
      unit: 3,
      areaOfStudy: 'u3-informality',
      textType: 'advertising',
      field: 'Health and fitness',
      mode: 'written',
      setting: 'social media feed, present day',
      tenor: 'encouraging, brand to consumer',
      register: 'informal-register',
      registerNote:
        'Contractions, direct address and bare imperatives make a corporate product sound like a friend.',
      dominantFunction: 'conative',
      secondaryFunctions: ['emotive'],
      functionNote:
        'Nearly every sentence pushes the reader towards a download. Even the apparent facts are selected to persuade, and the closing line appeals to feeling.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'contraction',
          spans: ['Don’t'],
          note: 'The contraction imitates speech and drops the register instantly.',
        },
        {
          feature: 'verb-lexical',
          spans: ['wait', 'Start', 'Download', 'join'],
          note: 'All four main verbs are bare imperatives, so the verbs themselves carry the instructions.',
        },
        {
          feature: 'verb-modal',
          spans: ['will', 'could'],
          note: '"could" offers choice and possibility; "will" makes a confident promise. Both are persuasive.',
        },
        {
          feature: 'pronoun',
          spans: ['You', 'you'],
          note: 'Direct address puts the reader at the centre of the text.',
        },
        {
          feature: 'determiner',
          spans: ['Our', 'your', 'four', '250,000'],
          note: 'Possessives (our, your) and numerals (four, 250,000) are determiners: they sit before a noun and do not stand in for one. Precise figures feel factual, even inside a persuasive text.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['Best'],
          note: 'A superlative places one option at the top of a scale: "best of all" makes the free trial the most important point.',
        },
        {
          feature: 'adverb-degree',
          spans: ['absolutely'],
          note: 'The intensifier raises the claim beyond a simple "free".',
        },
        {
          feature: 'connotation',
          spans: ['free'],
          note: '"Free" carries strong positive connotations of generosity and no risk; the intensifier makes it unmissable.',
        },
        {
          feature: 'idiom',
          spans: ['the other way around'],
          note: 'A conversational idiom meaning "in reverse". Here it casts the brand as fitting the customer, which sounds reasonable rather than demanding.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['moving', 'move'],
          note: 'The word family moving/move links the opening command to the claim about changed habits, holding the paragraph together.',
        },
        {
          feature: 'listing',
          spans: ['in the park, at the gym, or in your own lounge room'],
          note: 'Three parallel prepositional phrases form a list of options, so the reader sees that the plan adapts to any setting.',
        },
      ],
      quiz: [
        {
          prompt: 'Which sentence mood dominates this advertisement?',
          options: ['Declarative', 'Imperative', 'Interrogative', 'Exclamative'],
          answer: 1,
          explain:
            'Start, Download and join are all bare imperatives with the subject omitted, so the reader is commanded directly.',
        },
        {
          prompt: 'What is the persuasive job of "more than 250,000 Australians"?',
          options: [
            'It gives the exact size of the company',
            'It provides social proof by implying that everyone else has already joined',
            'It replaces a proper noun',
            'It hedges the claim',
          ],
          answer: 1,
          explain:
            'Statistics in advertising rarely function as neutral information — they create the impression of a crowd the reader should join.',
        },
        {
          prompt: 'How does "could" differ persuasively from "will" in this text?',
          options: [
            'It is more forceful',
            'It offers possibility and choice, which feels less like an obligation',
            'It marks past time',
            'It makes the sentence interrogative',
          ],
          answer: 1,
          explain:
            'Modal choice scales pressure. "Will" promises; "could" merely permits, and permission is easier to accept.',
        },
      ],
      teach:
        'Advertising usually splits into two registers: conversational lexis wrapped around a firm imperative structure. Name both — the informality is doing as much work as the command.',
    },
    {
      id: 'a02',
      title: 'Home loan product disclosure',
      text: 'At Northbridge Bank, we understand that a home is more than an asset. Our variable rate loan offers a competitive interest rate, flexible repayment options and no ongoing fees for the life of the loan. Applications are assessed within five business days, and our lending specialists will guide you through every stage of the process. Terms and conditions apply. Consider whether this product suits your circumstances before applying.',
      source: 'Bank home-loan webpage (constructed)',
      field: 'Banking and finance',
      mode: 'written',
      setting: 'written, institutional',
      tenor: 'distant and formal, institution to customer',
      register: 'formal-register',
      registerNote:
        'Latinate vocabulary, nominalisation and no contractions. The single informal touch — "a home is more than an asset" — is carefully placed.',
      dominantFunction: 'referential',
      functionNote:
        'The surface function is informing: it lists terms. The persuasive work is covert, carried by positive adjective choice.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-abstract',
          spans: ['asset', 'interest', 'repayment', 'process'],
          note: 'Nominalisation turns processes into things, which is the signature of institutional prose.',
        },
        {
          feature: 'noun-proper',
          spans: ['Northbridge Bank'],
          note: 'Naming the institution early establishes the source of the promise.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'A single modal commits the bank to future action — a promise disguised as information.',
        },
        {
          feature: 'adjective',
          spans: ['competitive', 'flexible', 'ongoing'],
          note: 'All three are evaluative rather than descriptive. Notice how vague "competitive" is.',
        },
        {
          feature: 'determiner',
          spans: ['five'],
          note: 'A precise number reads as a guarantee, unlike "promptly".',
        },
        {
          feature: 'prepositional-phrase',
          spans: [
            'for the life of the loan',
            'within five business days',
            'through every stage of the process',
          ],
          note: 'Stacked prepositional phrases give the sentence its formal, information-dense rhythm.',
        },
        {
          feature: 'preposition',
          spans: ['within', 'through', 'before'],
          note: 'Prepositions carry the fine print: when, how long and under what conditions.',
        },
        {
          feature: 'jargon',
          spans: ['variable rate', 'repayment', 'lending specialists'],
          note: 'Industry vocabulary signals expertise and can also reduce a customer’s confidence to question.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'The repeated coordinated "and" builds a sense of abundance without asserting anything.',
        },
        {
          feature: 'collocation',
          spans: ['interest rate', 'business days'],
          note: 'Fixed word pairs are a clear marker of the financial register.',
        },
        {
          feature: 'verb-phrase',
          spans: ['will guide'],
          note: 'Modal plus main verb: the promise has no specified subject acting in a specified way.',
        },
      ],
      quiz: [
        {
          prompt: 'Which technique makes this text feel formal rather than friendly?',
          options: [
            'Contractions and slang',
            'Nominalisation and Latinate vocabulary',
            'Exclamations and imperatives',
            'Second-person pronouns',
          ],
          answer: 1,
          explain:
            'Words like "applications", "assessed" and "repayment" pack actions into abstract nouns, which is typical of institutional register.',
        },
        {
          prompt: 'Why is "competitive" a persuasive word even though it looks informative?',
          options: [
            'It is a technical term',
            'It sounds flattering but commits the bank to no specific rate',
            'It is a comparative adjective',
            'It is a proper noun',
          ],
          answer: 1,
          explain:
            'Vague positive evaluation gives the benefit of a superlative with none of the accountability.',
        },
        {
          prompt: 'What is the function of "Terms and conditions apply"?',
          options: [
            'To add new information',
            'To limit the promise while keeping it, legally, a promise',
            'To change the sentence mood',
            'To introduce a modal',
          ],
          answer: 1,
          explain:
            'An agentless passive removes the party responsible, which is a standard hedging device in corporate writing.',
        },
      ],
      teach:
        'Persuasion is not always loud. Formal texts persuade through selection and evaluation — which adjective, which number, which detail is left out.',
    },
    {
      id: 'a03',
      title: 'Car commercial voiceover',
      text: 'Some roads whisper. Others roar. The new Solaris GT answers both. With a whisper-quiet cabin, a roar of an engine and a shape that slices through the wind, it turns every commute into a country drive. Australia, this one was built for you. Book a test drive this weekend and feel the difference for yourself.',
      source: 'Television car commercial voiceover (constructed)',
      field: 'Automotive marketing',
      mode: 'spoken',
      setting: 'spoken, broadcast, scripted',
      tenor: 'intimate and aspirational, brand to viewer',
      register: 'informal-register',
      registerNote:
        'Short sentences and sensory adjectives create a hushed, confident voice that avoids the shoutiness of most car advertising.',
      dominantFunction: 'poetic',
      functionNote:
        'The sound and shape of the language is foregrounded. Contrast pairs and patterning matter more than the specifications.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'personification',
          spans: ['roads whisper', 'Others roar', 'answers'],
          note: 'Roads whisper, roads roar and a car answers — human qualities given to objects.',
        },
        {
          feature: 'alliteration',
          spans: ['whisper', 'wind', 'commute into a country'],
          note: 'Repeated /w/ and /k/ sounds bind the images together phonologically.',
        },
        {
          feature: 'antonym',
          spans: ['whisper', 'roar'],
          note: 'The opposed pair structures the whole first half of the advertisement.',
        },
        {
          feature: 'metaphor',
          spans: ['it turns every commute into a country drive'],
          note: 'Driving to work becomes a scenic escape — the transformation is the product.',
        },
        {
          feature: 'compounding',
          spans: ['whisper-quiet'],
          note: 'Created from two existing words to name a quality precisely and freshly.',
        },
        {
          feature: 'pronoun',
          spans: ['you', 'yourself'],
          note: 'Direct address closes the gap between the voiceover and the viewer.',
        },
        {
          feature: 'noun-concrete',
          spans: ['roads', 'cabin', 'engine', 'wind', 'test drive'],
          note: 'Sensory nouns make the abstraction of "performance" physically imaginable.',
        },
        {
          feature: 'adjective',
          spans: ['new', 'whisper-quiet'],
          note: 'Restrained adjectival modification — the ad shows rather than gushes.',
        },
        {
          feature: 'noun-proper',
          spans: ['Solaris GT', 'Australia'],
          note: 'Naming the model and the nation positions the car as both an object and a national fit.',
        },
        {
          feature: 'preposition',
          spans: ['With', 'of', 'through', 'into', 'for'],
          note: 'A dense run of prepositions drives the single long sensory sentence.',
        },
        {
          feature: 'verb-lexical',
          spans: ['whisper', 'roar', 'answers', 'turns', 'Book', 'feel'],
          note: 'Two of these are imperatives in the final sentence, where the ad finally asks for something.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of the antonym pair "whisper" and "roar"?',
          options: [
            'It creates alliteration',
            'It frames the car as resolving a contrast, which makes the product feel necessary',
            'It describes the engine size',
            'It is an example of conversion',
          ],
          answer: 1,
          explain:
            'Advertising loves to set up a tension and present the product as the answer to it.',
        },
        {
          prompt: 'Which is the clearest example of personification?',
          options: [
            '"Book a test drive"',
            '"Some roads whisper"',
            '"a whisper-quiet cabin"',
            '"The new Solaris GT"',
          ],
          answer: 1,
          explain: 'Whispering is a human act, so attributing it to a road is personification.',
        },
        {
          prompt: 'How does the register shift near the end of the text?',
          options: [
            'It becomes more poetic and slow',
            'It shifts to direct imperatives — "Book" and "feel" — which finally makes the function conative',
            'It becomes formal and technical',
            'It stops using pronouns',
          ],
          answer: 1,
          explain:
            'Texts often hold their persuasive ask until after they have built atmosphere. Track that shape when you analyse structure.',
        },
      ],
      teach:
        'Advertisements that avoid superlatives usually substitute sensory detail and patterning. Analyse what replaces the overt boast.',
    },
    {
      id: 'a04',
      title: 'Streaming service jingle',
      text: 'Binge it, sing it, bring it home. Streams so smooth you will never roam. One low price, endless shows and a couch that knows all your woes. Join today and you will see: the best telly is always free. New subscribers get thirty days on us. Cancel any time — no worries.',
      source: 'Streaming service radio jingle (constructed)',
      field: 'Entertainment subscription',
      mode: 'spoken',
      setting: 'spoken and sung, broadcast advertising',
      tenor: 'playful and matey, brand to household',
      register: 'informal-register',
      registerNote:
        'Rhyme, clipping and a relaxed Australian idiom turn a subscription contract into a singalong.',
      dominantFunction: 'poetic',
      functionNote:
        'The rhyme scheme is the whole point. The product information is thin; the patterning is what the listener remembers.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'rhyme',
          spans: ['home', 'roam', 'shows', 'woes', 'see', 'free'],
          note: 'Two rhyming couplets plus an internal pair. Map the scheme before you interpret it.',
        },
        {
          feature: 'verb-lexical',
          spans: ['Binge', 'sing', 'bring', 'Join', 'Cancel'],
          note: 'Bare verbs, three of them imperatives in a row.',
        },
        {
          feature: 'australian-english',
          spans: ['telly', 'no worries'],
          note: 'Both are distinctly Australian choices that signal a local, unpretentious brand voice.',
        },
        {
          feature: 'colloquialism',
          spans: ['telly', 'no worries'],
          note: 'Informal but not slang — perfectly standard in speech, marked in writing.',
        },
        {
          feature: 'idiom',
          spans: ['on us'],
          note: 'A figurative way of saying the company will pay, which hides the transaction.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'Both uses sit inside the rhyme, so grammar is shaped by sound here.',
        },
        {
          feature: 'hyperbole',
          spans: ['endless shows'],
          note: 'No catalogue is infinite. The exaggeration is the point.',
        },
        {
          feature: 'ellipsis',
          spans: ['Cancel any time'],
          note: 'The subject and modal have been dropped: "(You can) cancel any time".',
        },
        {
          feature: 'noun-abstract',
          spans: ['price', 'woes'],
          note: '"woes" is a deliberately bookish word placed for the rhyme — register clash for comic effect.',
        },
        {
          feature: 'assonance',
          spans: ['Streams so smooth'],
          note: 'Long vowel sounds repeated across the phrase, adding to the musical feel.',
        },
        {
          feature: 'determiner',
          spans: ['thirty'],
          note: 'A free-trial period is a classic low-risk call to action.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is the dominant function poetic rather than referential?',
          options: [
            'Because it is sung',
            'Because the listener is meant to notice the rhyme and rhythm, not the product detail',
            'Because it uses imperatives',
            'Because it is an advertisement',
          ],
          answer: 1,
          explain:
            'The poetic function foregrounds the form of the message. Here the rhyme is doing the memorability work.',
        },
        {
          prompt: 'What does "Cancel any time — no worries" achieve?',
          options: [
            'It adds a condition',
            'It pre-empts the reader’s main objection using relaxed, idiomatic language',
            'It changes the register to formal',
            'It introduces a modal verb',
          ],
          answer: 1,
          explain:
            'Objection handling is standard in advertising. Reducing formality is how this text makes the promise feel casual and safe.',
        },
      ],
      teach:
        'Rhyme forces unusual word choices, which is why jingles are full of register clashes. Spot the clash and you have found the technique.',
    },
    {
      id: 'a05',
      title: 'Supermarket catalogue blurb',
      text: 'Fresh starts here. This week, our growers have picked the sweetest strawberries, the crispest lettuce and the juiciest tomatoes in the state. Buy any two punnets and save twenty per cent. That is cheaper than last season, with almost five dollars a kilo saved. Every item is backed by our freshness promise: if you are not happy, we will refund it, no questions asked. Shop in store or online, and don’t forget to scan your rewards card.',
      source: 'Supermarket weekly catalogue (constructed)',
      field: 'Retail and groceries',
      mode: 'written',
      setting: 'written, commercial print',
      tenor: 'brisk and homely, retailer to shopper',
      register: 'informal-register',
      registerNote:
        'Prices, superlatives and a friendly guarantee sit together, held in place by imperatives.',
      dominantFunction: 'conative',
      functionNote:
        'The catalogue exists to move the reader into a shop. The freshness claims exist to make the prices trustworthy.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'adjective-superlative',
          spans: ['sweetest', 'crispest', 'juiciest'],
          note: 'Three superlatives in a list. Repetition of the -est pattern is itself a technique.',
        },
        {
          feature: 'adjective-comparative',
          spans: ['cheaper'],
          note: 'The comparative does the price comparison without naming a rival.',
        },
        {
          feature: 'determiner',
          spans: ['two', 'twenty', 'five'],
          note: 'Precise figures give a discount the authority of arithmetic.',
        },
        {
          feature: 'verb-lexical',
          spans: ['picked', 'Buy', 'save', 'Shop', 'scan', 'refund'],
          note: 'Three imperatives among the main verbs. Count them to test how directive the text is.',
        },
        {
          feature: 'pronoun',
          spans: ['our', 'you', 'we', 'your'],
          note: 'First person plural for the store, second person for the shopper — a two-party relationship built entirely with pronouns.',
        },
        {
          feature: 'idiom',
          spans: ['no questions asked'],
          note: 'A fixed expression that promises unconditional service without specifying any policy.',
        },
        {
          feature: 'connotation',
          spans: ['Fresh starts here'],
          note: '"Freshness" is loaded with health and virtue, which is why it appears in the opening and again as "freshness promise".',
        },
        {
          feature: 'collocation',
          spans: ['per cent', 'freshness promise', 'rewards card'],
          note: 'Fixed retail phrases that slot together without the writer having to build them.',
        },
        {
          feature: 'adverb',
          spans: ['almost'],
          note: 'A hedge that lets the saving sound larger than it exactly is.',
        },
        {
          feature: 'preposition',
          spans: ['in', 'with', 'by', 'to'],
          note: 'Each preposition does a specific task: place, price basis, agency, purpose.',
        },
        {
          feature: 'contraction',
          spans: ['don’t'],
          note: 'The only contraction in the text, placed in the final instruction so it sounds like a friendly nudge.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of the three superlatives in the second sentence?',
          options: [
            'They make the writing more formal',
            'They claim each product is at the extreme of a scale, so nothing sounds ordinary',
            'They show the writer is uncertain',
            'They introduce a metaphor',
          ],
          answer: 1,
          explain:
            'Superlatives are unevidenced claims by nature. Listing several builds an overall impression of exceptional quality.',
        },
        {
          prompt: 'Which word softens the price claim "five dollars a kilo saved"?',
          options: ['kilo', 'almost', 'saved', 'with'],
          answer: 1,
          explain: '"Almost" is a hedge: it allows a near-round figure while remaining technically accurate.',
        },
        {
          prompt: 'Why does the catalogue use both "our growers" and "your rewards card"?',
          options: [
            'To increase the word count',
            'To construct a relationship: the store acts for the shopper, who belongs to the loyalty scheme',
            'Because pronouns are formal',
            'To avoid using proper nouns',
          ],
          answer: 1,
          explain:
            'Pronoun choices build in-group identity. "Our" and "your" make the transaction feel personal rather than commercial.',
        },
      ],
      teach:
        'Retail writing is a dense test of quantification: numerals, superlatives, comparatives and hedges all cluster around the price.',
    },
    {
      id: 'a06',
      title: 'University open-day flyer',
      text: 'Ready to shape what comes next? At Western Institute of Technology, our degrees are built with industry, not just for it. You will work on real projects in our labs from first year, and you may even publish your results before you graduate. Eighty-four per cent of our graduates find work within six months. Places are limited, so register your interest today. WIT: where curiosity becomes a career.',
      source: 'University open-day flyer (constructed)',
      field: 'Higher education marketing',
      mode: 'written',
      setting: 'written, promotional print',
      tenor: 'aspirational and encouraging, institution to prospective student',
      register: 'formal-register',
      registerNote:
        'No contractions and Latinate nouns throughout, but the opening question and second person keep it inviting.',
      dominantFunction: 'conative',
      functionNote:
        'It reads as information about courses, but the question, the modals and the closing slogan all push the reader to register.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Western Institute of Technology', 'WIT'],
          note: 'The full name is given once, then compressed to an initialism so it can be repeated cheaply.',
        },
        {
          feature: 'initialism',
          spans: ['WIT'],
          note: 'Pronounced letter by letter, which distinguishes it from an acronym — and it makes a pun on "wit".',
        },
        {
          feature: 'verb-modal',
          spans: ['will', 'may'],
          note: '"Will" promises; "may" offers possibility. The hedging lets the institution claim both.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['are'],
          note: 'Both uses form passive constructions, which avoid naming who does the building.',
        },
        {
          feature: 'determiner',
          spans: ['Eighty-four', 'six'],
          note: 'Graduate employment statistics are the standard evidential move in education marketing.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['from first year', 'within six months'],
          note: 'Both answer the reader’s unspoken question: how soon?',
        },
        {
          feature: 'noun-abstract',
          spans: ['industry', 'curiosity', 'career', 'interest'],
          note: 'The text trades almost entirely in abstractions rather than concrete course names.',
        },
        {
          feature: 'noun-concrete',
          spans: ['labs', 'projects', 'results'],
          note: 'A few physical nouns keep the abstraction from floating away entirely.',
        },
        {
          feature: 'metaphor',
          spans: ['where curiosity becomes a career'],
          note: 'Becoming a career is figurative — curiosity is not literally transformed into employment.',
        },
        {
          feature: 'adverb',
          spans: ['just', 'even'],
          note: '"just" narrows the comparison and "even" raises the surprise — both are stance markers.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['before'],
          note: 'One subordinating conjunction is enough to make the sentence complex and to sound ambitious.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of opening with a question?',
          options: [
            'It makes the text a dialogue',
            'It involves the reader and makes the following statements feel like an answer to a personal concern',
            'It changes the register to informal',
            'It introduces a proper noun',
          ],
          answer: 1,
          explain:
            'Rhetorical questions are a conative device: they create the impression of a shared train of thought.',
        },
        {
          prompt: 'Why does the flyer use both "will" and "may"?',
          options: [
            'For variety',
            'So it can promise outcomes strongly while hedging the less certain ones',
            'Because one is past tense',
            'To rhyme',
          ],
          answer: 1,
          explain:
            'Careful modal scaling lets an institution sound confident without making promises it could be held to.',
        },
        {
          prompt: 'What does the closing colon suggest about the final sentence?',
          options: [
            'That it is a definition or a gloss of WIT',
            'That it is a question',
            'That it is a dependent clause',
            'That it is quoted speech',
          ],
          answer: 0,
          explain:
            'Colons set up explanation. Here the slogan defines the brand — a small metalinguistic gesture.',
        },
      ],
      teach:
        'Institutional advertising balances two audiences: students who read informality and parents or regulators who expect formality. Look for both registers on one page.',
    },
    {
      id: 'a07',
      title: 'Charity appeal letter',
      text: 'In the coldest months, thousands of older Australians go without heating. Many are forced to choose between warmth and food. You could change that today. For just forty dollars, we can deliver a warm meal and a friendly visit to someone who would otherwise spend the week alone. Your gift will not solve everything, but it will light a single, important fire. Please give generously.',
      source: 'Charity direct-mail appeal (constructed)',
      field: 'Community welfare',
      mode: 'written',
      setting: 'written, direct mail',
      tenor: 'compassionate and direct, charity to donor',
      register: 'formal-register',
      registerNote:
        'No contractions and careful politeness, but the second person and the concrete detail keep it emotionally close.',
      dominantFunction: 'conative',
      functionNote:
        'It is a request for money. The narrative and the imagery exist to make the request difficult to refuse.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'euphemism',
          spans: ['go without heating'],
          note: 'A softened way of saying they cannot afford to heat their homes, which protects the dignity of the people described.',
        },
        {
          feature: 'verb-modal',
          spans: ['could', 'can', 'would', 'will'],
          note: 'Four modals in one short text. "could" offers agency to the reader; "will" promises the outcome.',
        },
        {
          feature: 'hyperbole',
          spans: ['thousands of older Australians'],
          note: 'An unverifiable scale claim that turns a statistic into an impression of crisis.',
        },
        {
          feature: 'metaphor',
          spans: ['it will light a single, important fire'],
          note: 'A donation becomes a fire — warmth made literal and figurative at once.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['coldest'],
          note: 'The superlative fixes the problem at the extreme of the scale before any solution is offered.',
        },
        {
          feature: 'adjective',
          spans: ['warm', 'friendly', 'important'],
          note: 'All three are evaluative rather than measurable — they shape feeling, not fact.',
        },
        {
          feature: 'adverb',
          spans: ['otherwise', 'Please', 'today', 'generously'],
          note: '"today" creates urgency and "Please" softens the imperative that ends the letter.',
        },
        {
          feature: 'pronoun',
          spans: ['Many', 'You', 'we', 'Your', 'someone'],
          note: 'The pronoun shifts move from them (Many) to you (You, Your) to us (we) — a deliberate rhetorical arc.',
        },
        {
          feature: 'preposition',
          spans: ['In', 'of', 'between', 'For', 'to'],
          note: 'The prepositions set time, quantity, choice and direction, all within a couple of sentences.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['go without'],
          note: 'A phrasal verb that hides a harsh material reality behind everyday phrasing.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['warm', 'warmth'],
          note: 'The root word returns as a noun, linking the described problem to the proposed solution.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the letter use "could" in "You could change that today"?',
          options: [
            'To mark past time',
            'To hand agency to the reader without demanding anything yet',
            'To soften a request for permission',
            'To make the sentence interrogative',
          ],
          answer: 1,
          explain:
            '"Could" presents action as possible and chosen, which is more flattering to a donor than "you must".',
        },
        {
          prompt: 'Which phrase is the clearest euphemism in the passage?',
          options: [
            'between warmth and food',
            'go without heating',
            'Please give generously',
            'a single, important fire',
          ],
          answer: 1,
          explain:
            'It describes material hardship in softened terms, avoiding words like poverty or inability to pay.',
        },
        {
          prompt: 'What is the effect of "forty dollars" rather than "a small donation"?',
          options: [
            'It is more abstract',
            'It makes the request concrete, modest and easy to imagine giving',
            'It increases the formality',
            'It introduces jargon',
          ],
          answer: 1,
          explain:
            'Specifying a small amount lowers the psychological cost of agreeing — a standard donation technique.',
        },
      ],
      teach:
        'Charity appeals are built from paired opposites: distress and solution, distance and closeness, them and you. Map the pronouns first.',
    },
    {
      id: 'a08',
      title: 'Political text-message blast',
      text: 'Hey! It’s Sam from the campaign team. Big news: the new rail line is finally getting the funding it deserves. No more waiting at the bus stop in the rain. Full deets are on the website. Reply YES and we’ll send you a reminder to vote on Saturday 14 March. Prefer a call? Reply CALL. Don’t let this one slip. Authorised by S. Nguyen, Melbourne.',
      source: 'Political campaign SMS (constructed)',
      field: 'Politics and campaigning',
      mode: 'written',
      setting: 'written, digital, unsolicited message',
      tenor: 'familiar and urgent, campaign to voter',
      register: 'informal-register',
      registerNote:
        'Contractions, clipping and interjections imitate a personal message, but the authorisation line keeps it legally institutional.',
      dominantFunction: 'conative',
      functionNote:
        'Every sentence drives towards one action: replying YES. The informal tone is a delivery mechanism for a directive.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'contraction',
          spans: ['It’s', 'we’ll', 'Don’t'],
          note: 'Three contractions in a short message is a deliberate informality signal.',
        },
        {
          feature: 'interjection',
          spans: ['Hey'],
          note: 'An opening burst that performs friendliness before any content is given.',
        },
        {
          feature: 'determiner',
          spans: ['14'],
          note: 'A precise date makes the voting instruction feel concrete and urgent.',
        },
        {
          feature: 'shortening',
          spans: ['deets'],
          note: 'Shortened from "details" — youth-oriented clipping that signals an informal in-group.',
        },
        {
          feature: 'noun-proper',
          spans: ['Sam', 'Nguyen', 'Melbourne'],
          note: 'Named people and places give the message the texture of a real, personal, local source.',
        },
        {
          feature: 'verb-lexical',
          spans: ['deserves', 'Reply', 'send', 'vote', 'let'],
          note: 'Two imperatives stand out among the main verbs — the two actions the campaign wants.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Big news'],
          note: 'A topic-opening marker that signals importance before the reader knows anything.',
        },
        {
          feature: 'noun-abstract',
          spans: ['funding', 'news', 'reminder'],
          note: 'Abstractions keep the policy claim vague enough not to be checkable.',
        },
        {
          feature: 'ellipsis',
          spans: ['Prefer a call'],
          note: 'The subject and auxiliary have been dropped: "(If you) prefer a call".',
        },
        {
          feature: 'pronoun',
          spans: ["you","this"],
          note: 'Second person for the voter and first person plural for the campaign: two teams, one message.',
        },
        {
          feature: 'preposition',
          spans: ['from', 'at', 'in', 'on', 'by'],
          note: 'Five different prepositions in a very short text show how much grammatical work these small words do.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does a campaign message use contractions and clipping?',
          options: [
            'Because the writers are careless',
            'To simulate a personal message so the political request feels friendly rather than institutional',
            'To save storage space',
            'Because it is illegal to write formally in SMS',
          ],
          answer: 1,
          explain:
            'Register is a persuasive resource. Informality here is a strategy, not an accident — note the formal authorisation line that follows.',
        },
        {
          prompt: 'What is the function of "Authorised by S. Nguyen, Melbourne"?',
          options: [
            'To add a proper noun for interest',
            'To switch the text into a legal, institutional register and signal official status',
            'To make the sentence interrogative',
            'To introduce an idiom',
          ],
          answer: 1,
          explain:
            'The sudden register shift is revealing: the friendly voice is a wrapper around a formal, regulated communication.',
        },
      ],
      teach:
        'Look for register clashes in political texts. Where formality returns, the writer is usually making a different kind of claim.',
    },
    {
      id: 'a09',
      title: 'Influencer sponsored post',
      text: 'Okay so I am genuinely obsessed with these new running shoes. I have been wearing them for three weeks and my knees are literally thanking me. They are so comfy it is actually ridiculous, no cap. Use my code LUCY20 for twenty per cent off, and grab a pair before they’re gone. Not sponsored? I wish. Link in bio, besties.',
      source: 'Influencer social media post (constructed)',
      field: 'Influencer marketing',
      mode: 'written',
      setting: 'written, digital, personal brand',
      tenor: 'excited and peer-like, creator to followers',
      register: 'informal-register',
      registerNote:
        'Sustained informal lexis and intensifiers, with a disclaimer joke that undercuts the commercial relationship.',
      dominantFunction: 'emotive',
      functionNote:
        'It performs personal enthusiasm. The recommendation only works because the excitement feels spontaneous.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'slang',
          spans: ['no cap'],
          note: 'A very recent in-group expression meaning "I am not lying". Its function is to signal authenticity.',
        },
        {
          feature: 'adverb-degree',
          spans: ['genuinely', 'so', 'literally', 'actually'],
          note: 'Four intensifiers in a short post. Intensification is the dominant stylistic feature of influencer language.',
        },
        {
          feature: 'neologism',
          spans: ['besties'],
          note: 'A recently lexicalised term of address that treats followers as close friends.',
        },
        {
          feature: 'hyperbole',
          spans: ['my knees are literally thanking me'],
          note: 'Knees cannot thank anyone. "Literally" is being used to exaggerate, not to be literal.',
        },
        {
          feature: 'connotation',
          spans: ['genuinely obsessed'],
          note: 'Extreme positive evaluation borrowed from fandom language.',
        },
        {
          feature: 'contraction',
          spans: ['they’re'],
          note: 'Contractions are the baseline of digital personal writing.',
        },
        {
          feature: 'determiner',
          spans: ['three', 'twenty'],
          note: 'A duration and a discount — evidence and offer, side by side.',
        },
        {
          feature: 'collocation',
          spans: ['per cent', 'Link in bio'],
          note: 'Both are fixed phrases of the commercial-internet register.',
        },
        {
          feature: 'pronoun',
          spans: ['I', 'my', 'them'],
          note: 'The first person dominates because the genre is personal testimony, not product information.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Okay'],
          note: 'An opener that frames what follows as an unplanned thought rather than an advertisement.',
        },
        {
          feature: 'noun-concrete',
          spans: ['shoes', 'knees', 'code', 'pair', 'bio'],
          note: 'Concrete nouns keep the testimony specific, which makes the recommendation feel tested rather than scripted.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature most clearly marks this as influencer sociolect?',
          options: [
            'The use of numerals',
            'The cluster of degree adverbs such as genuinely, literally and actually',
            'The use of proper nouns',
            'The use of prepositions',
          ],
          answer: 1,
          explain:
            'Intensification is the signature of this register. Meaning is scaled up rather than made more precise.',
        },
        {
          prompt: 'What is the persuasive job of "no cap"?',
          options: [
            'It adds factual information',
            'It claims authenticity — it performs the speaker’s honesty',
            'It changes the sentence mood',
            'It is a euphemism',
          ],
          answer: 1,
          explain:
            'In-group slang builds solidarity with the audience, which is exactly what makes a recommendation persuasive.',
        },
      ],
      teach:
        'Sponsored content works by hiding the conative function inside the expressive one. The advertisement is dressed as a feeling.',
    },
    {
      id: 'a10',
      title: 'Fast-food radio script',
      text: 'Crunch. Sizzle. That is the sound of the Chomp Burger hitting the grill. Two beef patties, melted cheese and a sauce we are not allowed to explain. It is messy. It is glorious. It is seven dollars of pure, perfect joy. Swing by, don’t be shy, and grab one while the grill is hot. You deserve it. Chomp: bite loud.',
      source: 'Fast-food radio advertisement script (constructed)',
      field: 'Food and beverage marketing',
      mode: 'spoken',
      setting: 'spoken, broadcast advertising',
      tenor: 'loud and cheeky, brand to hungry listener',
      register: 'informal-register',
      registerNote:
        'Fragments, a contraction and a rhyming pair make the script sound like a mate rather than a company.',
      dominantFunction: 'conative',
      functionNote:
        'It exists to send the listener to the counter. Sound is used as the mechanism for that instruction.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'fragment',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'onomatopoeia',
          spans: ['Crunch', 'Sizzle'],
          note: 'Two opening sound words that force the listener to imagine the cooking.',
        },
        {
          feature: 'rhyme',
          spans: ['by', 'shy'],
          note: 'The rhyme sits on the imperative, which makes the instruction memorable.',
        },
        {
          feature: 'alliteration',
          spans: ['pure, perfect joy'],
          note: 'Repeated /p/ sounds make the claim sound polished and deliberate.',
        },
        {
          feature: 'hyperbole',
          spans: ['seven dollars of pure, perfect joy'],
          note: 'A budget price reframed as an emotional experience.',
        },
        {
          feature: 'verb-lexical',
          spans: ['hitting', 'Swing', 'grab', 'deserve', 'bite'],
          note: 'Three bare imperatives among the main verbs.',
        },
        {
          feature: 'pronoun',
          spans: ['That', 'It', 'we', 'You'],
          note: '"That" and "It" refer back to the sounds, forming a chain of anaphoric reference inside a 60-word text.',
        },
        {
          feature: 'determiner',
          spans: ['Two', 'seven'],
          note: 'Numbers used to make a cheap price feel precise and specific.',
        },
        {
          feature: 'adjective',
          spans: ['melted', 'messy', 'glorious', 'hot', 'loud'],
          note: 'Sensory and evaluative adjectives, chosen to trigger appetite and approval.',
        },
        {
          feature: 'collocation',
          spans: ['melted cheese', 'beef patties'],
          note: 'Fixed burger-menu phrases the listener already associates with the product.',
        },
        {
          feature: 'noun-proper',
          spans: ['Chomp Burger', 'Chomp'],
          note: 'The brand name is repeated three times, which is the whole job of a radio ad.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['grill'],
          note: '"grill" appears at the start and again in the final instruction, holding the script together.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the script open with "Crunch. Sizzle."?',
          options: [
            'To introduce the brand name early',
            'To use onomatopoeia so the listener imagines cooking before any claim is made',
            'To make the sentence complex',
            'To establish a formal register',
          ],
          answer: 1,
          explain:
            'Radio cannot show the product, so sound words do the sensory work that a visual advertisement would do with an image.',
        },
        {
          prompt: 'What is the effect of the fragment series "It is messy. It is glorious. It is seven dollars of pure, perfect joy."?',
          options: [
            'It slows the reader down and builds to the price as a punchline',
            'It makes the text more formal',
            'It introduces a subordinating conjunction',
            'It creates ellipsis',
          ],
          answer: 0,
          explain:
            'Parallel fragments create rhythm. Placing the price at the end makes it the climax rather than a cost.',
        },
      ],
      teach:
        'Spoken advertising depends on sound. Onomatopoeia, rhyme and alliteration are not decoration here — they are the delivery system.',
    },
    {
      id: 'a11',
      title: 'Luxury hotel description',
      text: 'Perched above the harbour, Aurora House offers twenty-two suites, each with a private terrace and an uninterrupted view of the water. Mornings here are slow and luminous. Guests wake to the smell of fresh bread and the city stretching below. Our concierge team will arrange anything, from a helicopter transfer to a table at the restaurant that everybody is talking about. This is not simply a place to stay. It is a place to be restored.',
      source: 'Luxury hotel brochure (constructed)',
      field: 'Hospitality and tourism',
      mode: 'written',
      setting: 'written, promotional print',
      tenor: 'serene and understated, hotel to prospective guest',
      register: 'formal-register',
      registerNote:
        'Careful, unhurried sentences and no contractions. Formality is how luxury is signalled here.',
      dominantFunction: 'referential',
      functionNote:
        'It describes. But every descriptive choice is evaluative, so the persuasion works through selection rather than assertion.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'personification',
          spans: ['the city stretching below'],
          note: 'A city cannot stretch. The image gives the view a living quality.',
        },
        {
          feature: 'adjective',
          spans: ['private', 'uninterrupted', 'slow', 'luminous', 'fresh'],
          note: 'Every adjective is positive. None is measurable, which is what makes the writing aspirational.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'A single promise of service, delivered late in the paragraph.',
        },
        {
          feature: 'pronoun',
          spans: ['each', 'anything', 'everybody', 'This', 'It', 'Our'],
          note: 'Indefinite pronouns (anything, everybody) imply unlimited choice and universal approval.',
        },
        {
          feature: 'determiner',
          spans: ['twenty-two'],
          note: 'A small, exact number implies exclusivity: there are only twenty-two.',
        },
        {
          feature: 'preposition',
          spans: ['above', 'with', 'from'],
          note: 'Elevation, accompaniment and provision — three prepositions doing the whole sales pitch.',
        },
        {
          feature: 'noun-concrete',
          spans: ['suites', 'terrace', 'water', 'bread', 'table', 'helicopter'],
          note: 'A curated list of concrete luxuries does the persuasive work without a single superlative.',
        },
        {
          feature: 'noun-proper',
          spans: ['Aurora House'],
          note: 'The name functions as a brand and carries its own metaphorical glow.',
        },
        {
          feature: 'metaphor',
          spans: ['Perched above the harbour'],
          note: 'The hotel is described as if it were a bird, which implies lightness, height and ease.',
        },
        {
          feature: 'prepositional-phrase',
          spans: ['with a private terrace', 'of the water'],
          note: 'Attached to nouns, these phrases let the writer add luxury without adding clauses.',
        },
        {
          feature: 'collocation',
          spans: ['uninterrupted view', 'fresh bread', 'concierge team'],
          note: 'Fixed phrases of the hospitality register that readers decode instantly as markers of quality.',
        },
      ],
      quiz: [
        {
          prompt: 'How does this text persuade if it contains almost no overt claims?',
          options: [
            'Through imperatives',
            'Through the selection and evaluation carried by its adjectives and concrete nouns',
            'Through statistics',
            'Through hyperbole and exclamations',
          ],
          answer: 1,
          explain:
            'Description is never neutral. Choosing "luminous" over "bright" is an evaluative act, and evaluation is persuasion.',
        },
        {
          prompt: 'What does "Perched above the harbour" suggest about Aurora House?',
          options: [
            'That it is a bird sanctuary',
            'Height, lightness and a privileged view — a metaphor for exclusivity',
            'That it is difficult to reach',
            'That it is old',
          ],
          answer: 1,
          explain:
            'Metaphor smuggles in a set of associations. Here the associations are all about elevation and ease.',
        },
        {
          prompt: 'What is the effect of the antithesis in the final two sentences?',
          options: [
            'It balances two equal ideas',
            'It rejects a minimal reading ("simply a place to stay") in order to offer a richer one ("a place to be restored")',
            'It introduces a subordinating conjunction',
            'It makes the text informal',
          ],
          answer: 1,
          explain:
            'The not-X-but-Y structure is a common rhetorical shape in advertising: deny the ordinary, then supply the ideal.',
        },
      ],
      teach:
        'In formal promotional writing, look at adjectival choice rather than slogans. Selection is the technique.',
    },
    {
      id: 'a12',
      title: 'Quit smoking campaign',
      text: 'Most Australians will never see the damage smoking does to a lung. That is why we are asking you to take two small steps this week: put down the packet, and ring the Quitline on 13 78 48. It will not be easy. Nicotine rewires the brain, and the cravings can be brutal for the first fortnight. But every person who stops adds years to their life, and almost all of them say the same thing afterwards: I wish I had done it sooner. Call today. Your future lungs will thank you.',
      source: 'Public health campaign advertisement (constructed)',
      field: 'Public health',
      mode: 'written',
      setting: 'written, campaign advertising',
      tenor: 'serious and encouraging, authority to smoker',
      register: 'neutral-register',
      registerNote:
        'Plain but serious vocabulary, with a small amount of colloquial phrasing and one direct quotation to keep it human.',
      dominantFunction: 'conative',
      functionNote:
        'It is trying to change behaviour. Even the physiological explanation exists to make the advice credible.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'verb-modal',
          spans: ['will', 'can'],
          note: '"will never see" is a certainty claim; "can be brutal" hedges. Public health writing scales modals to match evidence.',
        },
        {
          feature: 'connotation',
          spans: ['damage', 'brutal'],
          note: 'Both words carry strong negative evaluation and frame the habit as an assault.',
        },
        {
          feature: 'euphemism',
          spans: ['adds years to their life'],
          note: 'A softened way of saying it delays death — the reverse of a mortality statistic.',
        },
        {
          feature: 'determiner',
          spans: ['two', '13 78 48'],
          note: 'An exact phone number lowers the effort of acting, which is the point of the campaign.',
        },
        {
          feature: 'verb-lexical',
          spans: ['take', 'ring', 'rewires', 'stops', 'adds'],
          note: '"rewires" is a technical metaphor used as a main verb — the brain treated as a machine.',
        },
        {
          feature: 'pronoun',
          spans: ['we', 'you', 'It', 'them', 'I', 'Your'],
          note: 'Six pronouns. Notice how the text hands the final sentence entirely to the reader.',
        },
        {
          feature: 'noun-proper',
          spans: ['Australians', 'Quitline'],
          note: 'A national address and a named service give the appeal institutional weight.',
        },
        {
          feature: 'noun-abstract',
          spans: ['damage', 'cravings'],
          note: 'Abstractions allow a strong claim without committing to specifics.',
        },
        {
          feature: 'adverb',
          spans: ['never', 'almost', 'afterwards', 'sooner', 'today'],
          note: '"almost" hedges the testimonial claim, and "today" supplies urgency.',
        },
        {
          feature: 'colloquialism',
          spans: ['put down the packet', 'done it sooner'],
          note: 'Everyday phrasing keeps the text from sounding like a lecture.',
        },
        {
          feature: 'discourse-marker',
          spans: ['That is why', 'But'],
          note: 'Both markers make the argument’s logic explicit: therefore, and yet.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the text include the quotation "I wish I had done it sooner"?',
          options: [
            'To add a grammatical structure',
            'To switch from institutional voice to personal testimony, which is harder to dismiss',
            'To introduce jargon',
            'To increase the formality',
          ],
          answer: 1,
          explain:
            'Direct quotation changes the discourse type mid-text. It brings a real person into a public service message.',
        },
        {
          prompt: 'What is the effect of "It will not be easy"?',
          options: [
            'It discourages the reader',
            'It concedes difficulty, which makes the following advice more credible',
            'It is a euphemism for giving up',
            'It changes the sentence mood',
          ],
          answer: 1,
          explain:
            'Conceding an obvious objection is a persuasion technique: it signals honesty, which buys trust for the next claim.',
        },
        {
          prompt: 'Which pair of modals shows careful scaling of certainty?',
          options: [
            '"will never see" and "can be brutal"',
            '"take" and "ring"',
            '"adds" and "stops"',
            '"today" and "sooner"',
          ],
          answer: 0,
          explain:
            'Public health messaging distinguishes what is certain from what is likely. Modal choice is how that distinction is made.',
        },
      ],
      teach:
        'Campaign texts blend registers: institutional credibility plus everyday lexis plus a real voice. Find where each one takes over.',
    },
  ],
}
