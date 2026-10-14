import type { PassageBank } from '../../lib/passages'

export const bank10: PassageBank = {
  id: 'media',
  label: 'News & Media',
  blurb:
    'Hard news, tabloid copy, sport, weather, radio intros, current affairs and editorials. The register workhorse: nominalisation, passive voice, pre-modification and slant.',
  passages: [
    /* ---------------------------------------------------------------- 01 ---- */
    {
      id: 'media-01',
      title: 'Hard news lead — council approves tower',
      text: "A Melbourne council has approved a 40-storey apartment tower on the site of the former Fitzroy pool hall, despite more than two hundred objections. The decision follows eighteen months of consultation with residents and traders. Under the plan, the 1930s facade will be demolished and replaced with a glass entrance and a small public plaza. Councillor Meera Patel said the tower would ease a chronic shortage of rental housing in the area. Opponents argue that the building will overshadow the primary school next door and add nine hundred cars to already congested streets.",
      source: 'Broadsheet news story (constructed)',
      unit: 3,
      areaOfStudy: 'u3-formality',
      textType: 'news',
      field: 'Local government and urban planning',
      mode: 'written',
      setting: 'Print and online news story, Melbourne',
      tenor: 'Distant and impersonal; officials and institutions speak, residents are referred to in the third person',
      register: 'formal-register',
      registerNote:
        'Formal because of the nominalisations (decision, consultation), the agentless passive and the Latinate vocabulary. Nobody is saying "I" — the institutions do the acting.',
      dominantFunction: 'referential',
      functionNote:
        'Overwhelmingly referential: it reports verifiable facts about a planning decision. The only trace of evaluation sits in the verbs "argue" and "overshadow", which quietly attribute the opposition.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Melbourne', 'Fitzroy', 'Councillor Meera Patel'],
          note: 'Named only where a specific referent matters. "Councillor" is a title, the proper noun is "Meera Patel".',
        },
        {
          feature: 'noun-common',
          spans: [
            'council',
            'residents',
            'traders',
            'developer',
            'facade',
            'plaza',
            'Opponents',
            'cars',
            'streets',
            'objections',
          ],
        },
        { feature: 'noun-concrete', spans: ['tower', 'pool hall', 'primary school', 'glass'] },
        {
          feature: 'noun-abstract',
          spans: ['consultation', 'shortage'],
          note: '"consultation" is a nominalisation of the verb "consult" — the agent (who consulted?) disappears.',
        },
        {
          feature: 'verb-lexical',
          spans: ['approved', 'follows', 'demolish', 'replace', 'argue', 'overshadow', 'add'],
        },
        { feature: 'verb-modal', spans: ['would', 'will'], note: 'Marking prediction and future fact.' },
        { feature: 'verb-auxiliary', spans: ['has'], note: '"has approved" — the auxiliary carries the perfect tense.' },
        { feature: 'adjective', spans: ['former', 'chronic', 'congested', 'public', 'small'] },
        { feature: 'determiner', spans: ['40-storey', 'two hundred', '1930s', 'nine hundred'] },
        {
          feature: 'preposition',
          spans: ['on', 'of', 'with', 'to', 'in', 'Under', 'despite'],
          note: '"despite" introduces a concessive phrase with no concession to the opponents at all.',
        },
        { feature: 'conjunction-coordinating', spans: ['and'] },
        {
          feature: 'anaphora',
          spans: ['The decision'],
          note: '"The decision" points back to the approval in sentence one and converts a verb into a thing.',
        },
        {
          feature: 'noun-phrase',
          spans: ['the former Fitzroy pool hall', 'a chronic shortage of rental housing'],
          note: 'Heavily pre-modified noun phrases: a hallmark of formal news writing.',
        },
        { feature: 'cohesive-repetition', spans: ['tower'], note: '"tower" is repeated to keep the referent stable across the paragraph.' },
      ],
      quiz: [
        {
          prompt: 'In the second sentence, "consultation" is best described as a…',
          options: ['common noun', 'nominalised abstract noun', 'proper noun', 'main verb'],
          answer: 1,
          explain:
            'It names an abstract process, and it is built from the verb "consult" with the suffix -ation. Nominalisation removes the human agent.',
        },
        {
          prompt: 'Which feature of formality is most visible in "the decision follows eighteen months of consultation"?',
          options: [
            'Contractions and phrasal verbs',
            'Slang and colloquialisms',
            'An abstract noun as subject, with a passive-leaning structure',
            'Direct address to the reader',
          ],
          answer: 2,
          explain:
            'Nobody decides and nobody consults: the abstract nouns do the acting. This is the classic formal register strategy.',
        },
      ],
      teach:
        'Hard news looks neutral but chooses carefully. The agentless passive and nominalised subjects let the writer report a contested decision without ever naming who made it. Compare the loaded verb "overshadow" with the neutral "add".',
    },

    /* ---------------------------------------------------------------- 02 ---- */
    {
      id: 'media-02',
      title: 'Tabloid celebrity report (BIASED — contrast with media-06)',
      text: "A-lister Cassie Vane has sensationally walked out of tonight’s gala, and insiders say the meltdown was months in the making. Witnesses claim the singer stormed past stunned organisers after a producer allegedly criticised her set list. According to a source close to the star, the whole thing spiralled out of control within minutes. Fans are devastated. Critics, meanwhile, are already calling it the most chaotic red carpet in a decade, with dozens of photographers left fuming on the steps of the Regent Theatre. Vane’s team has refused to comment, but a carefully worded statement is expected within days.",
      source: 'Entertainment gossip column (constructed)',
      field: 'Celebrity and entertainment news',
      mode: 'written',
      setting: 'Written, mass-distributed, click-driven',
      tenor: 'Intimate and conspiratorial; the reader is invited behind the scenes as an insider',
      register: 'informal-register',
      registerNote:
        'Informal despite being a written news text: intensifiers (sensationally), idioms (spiralled out of control), direct address to the reader through gossip frames (insiders say).',
      dominantFunction: 'emotive',
      functionNote:
        'Expressive and poetic-leaning rather than referential: the point is the drama and the feeling, not the verifiable facts. Note the hedging "allegedly" and "claim" doing the legal work.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Cassie Vane', 'Regent Theatre'] },
        {
          feature: 'noun-common',
          spans: [
            'gala',
            'insiders',
            'Witnesses',
            'organisers',
            'producer',
            'source',
            'star',
            'Fans',
            'photographers',
            'steps',
            'statement',
          ],
        },
        { feature: 'noun-collective', spans: ['team'], note: 'Singular in form, group in meaning — Australian English agrees with the singular verb.' },
        { feature: 'compounding', spans: ['A-lister', 'red carpet'] },
        {
          feature: 'connotation',
          spans: ['sensationally', 'meltdown', 'fuming', 'stormed', 'devastated', 'chaotic'],
          note: 'Every one of these smuggles evaluation. A neutral report would say "left the event", "argument", "angry".',
        },
        { feature: 'adjective', spans: ['stunned', 'chaotic'] },
        { feature: 'adjective-superlative', spans: ['most chaotic'], note: 'Superlatives claim the extreme of a scale — pure hype.' },
        { feature: 'adverb', spans: ['allegedly', 'already'], note: '"allegedly" is the fig leaf of legal safety in tabloid copy.' },
        { feature: 'discourse-marker', spans: ['meanwhile'], note: 'Signals a topic shift without any real connection to what precedes it.' },
        {
          feature: 'verb-lexical',
          spans: ['walked out', 'spiralled', 'claim', 'say', 'calling', 'refused'],
        },
        { feature: 'verb-auxiliary', spans: ['has', 'was', 'are', 'is'] },
        {
          feature: 'idiom',
          spans: ['spiralled out of control', 'months in the making'],
          note: 'Fixed figurative expressions keep the tone conversational.',
        },
        {
          feature: 'hyperbole',
          spans: ['the most chaotic red carpet in a decade'],
          note: 'Unverifiable exaggeration presented as reportage.',
        },
        {
          feature: 'euphemism',
          spans: ['refused to comment'],
          note: 'Softens "the star will not answer questions".',
        },
        { feature: 'preposition', spans: ['of', 'in', 'on', 'within', 'past', 'after', 'to'] },
        { feature: 'determiner', spans: ['a', 'the', 'her'] },
      ],
      quiz: [
        {
          prompt: 'What is the strongest single indicator that this is NOT neutral reportage?',
          options: [
            'It uses full stops and commas',
            'It uses the hedge "allegedly"',
            'It piles up loaded, evaluative lexis such as "sensationally", "meltdown", "fuming"',
            'It names a theatre',
          ],
          answer: 2,
          explain:
            'The facts may even be accurate, but the word choice has already done the judging before the reader arrives.',
        },
        {
          prompt: 'Why does "the most chaotic red carpet in a decade" function as hyperbole?',
          options: [
            'It contains a numeral',
            'It claims an unverifiable extreme for rhetorical effect',
            'It is a direct quotation',
            'It uses the passive voice',
          ],
          answer: 1,
          explain: 'Nobody has measured "chaotic"; the superlative is doing emotional work, not informational work.',
        },
      ],
      teach:
        'This passage is included as the BIASED counterpart to media-06. Same kind of event, opposite lexical stance: here the modifiers and the intensifiers carry the evaluation, and the softening words "allegedly" and "claim" carry the legal risk.',
    },

    /* ---------------------------------------------------------------- 03 ---- */
    {
      id: 'media-03',
      title: 'Sports match report',
      text: "The Dockers snatched a two-point win over the Sharks at a packed Whitten Oval last night. Captain Ruby Ngo kicked the sealing goal with ninety seconds left on the clock. The result lifts the club to fourth on the ladder.",
      source: 'Weekend sports report (constructed)',
      field: 'Australian Rules football',
      mode: 'written',
      setting: 'Written, mass-distributed',
      tenor: 'Knowledgeable and in-group; written for people who already follow the competition',
      register: 'neutral-register',
      registerNote:
        'Neither stiff nor sloppy: standard vocabulary, ordinary sentence structure, but a dense layer of sporting jargon the outsider has to decode.',
      dominantFunction: 'referential',
      functionNote: 'Referential — it recounts what happened. Even so, the verbs "snatched" and "lifts" add a heroic gloss.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'simple-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Dockers', 'Sharks', 'Whitten Oval', 'Ruby Ngo'] },
        { feature: 'noun-common', spans: ['win', 'goal', 'clock', 'ladder', 'result', 'Captain'] },
        { feature: 'noun-collective', spans: ['club'] },
        { feature: 'jargon', spans: ['sealing goal', 'the ladder'], note: 'Only a follower of the sport reads these instantly.' },
        { feature: 'metaphor', spans: ['snatched'], note: 'A narrow win is described as if it were grabbed from someone else.' },
        { feature: 'verb-lexical', spans: ['snatched', 'kicked', 'lifts'] },
        { feature: 'adjective', spans: ['two-point', 'packed', 'sealing'] },
        { feature: 'determiner', spans: ['ninety'] },
        { feature: 'adverb', spans: ['last night'] },
        { feature: 'preposition', spans: ['over', 'at', 'with', 'on', 'to'] },
        { feature: 'determiner', spans: ['a', 'the'] },
        {
          feature: 'anaphora',
          spans: ['The result'],
          note: 'Refers back to the whole preceding win, not to a noun mentioned in the text.',
        },
      ],
      quiz: [
        {
          prompt: '"The result lifts the club to fourth on the ladder." Which feature of the register does "lifts" add?',
          options: [
            'It is a non-standard form',
            'It is a metaphor that frames a table position as physical movement',
            'It is a modal verb',
            'It is a contraction',
          ],
          answer: 1,
          explain: 'Sports reporting is full of small metaphors of motion and combat. "Lifts" is doing evaluative work in an otherwise factual sentence.',
        },
      ],
      teach:
        'Sports writing feels referential but is thick with jargon and metaphor. Watch how a single evaluative verb in a factual sentence steers the reader’s sense of the event.',
    },

    /* ---------------------------------------------------------------- 04 ---- */
    {
      id: 'media-04',
      title: 'Weather bulletin and emergency warning',
      text: "A severe weather warning remains in place for the Otway Ranges this evening. Damaging winds of up to 110 kilometres an hour are expected to batter the coast before dawn. The State Emergency Service has advised residents to secure loose items, charge their phones and stay clear of fallen powerlines. Overnight rainfall of between 60 and 90 millimetres may cause flash flooding on low-lying roads, and the service warns that travel through the ranges should be avoided if possible. Conditions are forecast to ease by mid-morning on Wednesday.",
      source: 'Public emergency bulletin (constructed)',
      field: 'Meteorology and public safety',
      mode: 'written',
      setting: 'Written and broadcast; public and impersonal',
      tenor: 'Institutional authority addressing a general public; no personal relationship at all',
      register: 'formal-register',
      registerNote:
        'Formal but deliberately plain — the audience is the whole public, so the vocabulary stays familiar while the structure stays impersonal.',
      dominantFunction: 'referential',
      functionNote:
        'Referential in its facts, but note the conative pull of "should be avoided" and "advised residents to secure" — the bulletin is also telling you what to do.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Otway Ranges', 'State Emergency Service', 'Wednesday'] },
        {
          feature: 'noun-common',
          spans: [
            'warning',
            'winds',
            'coast',
            'residents',
            'items',
            'phones',
            'powerlines',
            'rainfall',
            'flooding',
            'roads',
            'service',
            'travel',
          ],
        },
        { feature: 'noun-abstract', spans: ['Conditions'] },
        { feature: 'verb-modal', spans: ['should', 'may'], note: '"should be avoided" is an obligation; "may cause" is a possibility. Same sentence, two different strengths of claim.' },
        { feature: 'verb-auxiliary', spans: ['are', 'has', 'be'] },
        {
          feature: 'verb-lexical',
          spans: ['remains', 'batter', 'advised', 'secure', 'charge', 'stay', 'cause', 'warns', 'avoided', 'ease', 'forecast'],
        },
        { feature: 'adjective', spans: ['severe', 'Damaging', 'loose', 'fallen', 'flash', 'low-lying', 'possible'] },
        { feature: 'determiner', spans: ['110', '60', '90'] },
        { feature: 'preposition', spans: ['for', 'of', 'before', 'to', 'through', 'by', 'on', 'between'] },
        { feature: 'conjunction-coordinating', spans: ['and'] },
        { feature: 'conjunction-subordinating', spans: ['if'], note: 'Ambiguity of responsibility: "if possible" leaves the decision to the reader.' },
      ],
      quiz: [
        {
          prompt: '"The State Emergency Service has advised residents to secure loose items." The main verb phrase shows…',
          options: [
            'the service acting as the named agent of the advice',
            'an agentless passive',
            'a contraction',
            'an imperative sentence',
          ],
          answer: 0,
          explain:
            'Institutions are named as agents in safety bulletins, because authority is the point. Compare news copy, where the agent is often removed.',
        },
        {
          prompt: 'Which pair shows two different strengths of modal claim?',
          options: ['may / should', 'and / if', 'winds / roads', 'between / through'],
          answer: 0,
          explain: '"may" = possibility, "should" = obligation. Modals let a single bulletin hedge and instruct at once.',
        },
      ],
      teach:
        'Emergency language is a hybrid: referential content with conative force. Track the modals — they are where a warning becomes an instruction.',
    },

    /* ---------------------------------------------------------------- 05 ---- */
    {
      id: 'media-05',
      title: 'Radio news intro (spoken)',
      text: "Good morning, it’s seven o’clock. Coming up on the Morning Report: a teacher shortage leaves two Ballarat high schools without a maths department, and we ask whether the state government’s funding model is to blame.",
      source: 'Radio news bulletin, opening (constructed)',
      field: 'Education news',
      mode: 'spoken',
      setting: 'Spoken, broadcast, heard once and unrepeatable',
      tenor: 'Friendly and immediate: the presenter speaks directly to an audience they cannot see',
      register: 'neutral-register',
      registerNote:
        'Standard vocabulary, but the spoken mode shows through: a greeting, a contraction and a present-tense news frame ("leaves", "we ask").',
      dominantFunction: 'phatic',
      functionNote:
        'The first clause is pure phatic work — it establishes contact and warmth. The rest is referential framing of stories that have not been told yet.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Ballarat', 'Morning Report'] },
        { feature: 'noun-common', spans: ['teacher', 'schools', 'department', 'government', 'funding', 'model'] },
        { feature: 'contraction', spans: ['it’s'], note: 'One contraction is enough to signal speech rather than writing.' },
        { feature: 'determiner', spans: ['seven'] },
        { feature: 'adjective', spans: ['high'] },
        { feature: 'verb-lexical', spans: ['leaves', 'ask'] },
        {
          feature: 'verb-phrasal',
          spans: ['Coming up'],
          note: 'The participle + particle forms a fixed broadcast formula with its own intonation.',
        },
        { feature: 'conjunction-coordinating', spans: ['and'] },
        { feature: 'conjunction-subordinating', spans: ['whether'] },
        { feature: 'preposition', spans: ['on', 'without', 'to'] },
        { feature: 'determiner', spans: ['a', 'the'] },
        {
          feature: 'noun-abstract',
          spans: ['shortage'],
          note: 'A nominalised condition: "schools have a shortage" becomes "a teacher shortage leaves two schools without a department".',
        },
      ],
      quiz: [
        {
          prompt: 'What work is "Good morning, it’s seven o’clock" doing, in functional terms?',
          options: [
            'Referential — it reports the time',
            'Largely phatic — it opens and maintains the social channel with the audience',
            'Metalinguistic — it comments on words',
            'Conative — it orders the audience to act',
          ],
          answer: 1,
          explain:
            'The time is available on any phone. The greeting-and-time formula is about contact and routine, which is the phatic function at work.',
        },
      ],
      teach:
        'Spoken news keeps its phatic openings even when the content is serious. Contractions and the present tense are your fastest evidence that a text is written for the ear.',
    },

    /* ---------------------------------------------------------------- 06 ---- */
    {
      id: 'media-06',
      title: 'Current affairs feature (CONTROLLED — contrast with media-02)',
      text: "For six years the Northbridge Community Kitchen has served a free evening meal from the hall of a disused church. The service began after the local textile mill closed, when volunteers noticed that families were skipping dinner to pay rent. Today the kitchen prepares roughly 240 meals a night and depends on 38 regular volunteers. According to coordinator Helen Ashworth, demand has grown slowly but steadily since 2019. The kitchen receives no government funding and is financed entirely by donations from local businesses.",
      source: 'Magazine feature article (constructed)',
      field: 'Community welfare and local economy',
      mode: 'written',
      setting: 'Written, public and published for a general readership',
      tenor: 'Respectful and measured; the participants are named and given their own voices',
      register: 'formal-register',
      registerNote:
        'Formal by structure rather than by decoration: complex sentences, no contractions, and attribution to a named source rather than to "insiders".',
      dominantFunction: 'referential',
      functionNote:
        'Referential and carefully attributed. Where an opinion would go, the article quotes a name instead. That is the register choice this passage is demonstrating.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Northbridge Community Kitchen', 'Helen Ashworth'] },
        {
          feature: 'noun-common',
          spans: [
            'hall',
            'church',
            'service',
            'mill',
            'volunteers',
            'families',
            'dinner',
            'kitchen',
            'meals',
            'coordinator',
            'funding',
            'donations',
            'businesses',
          ],
        },
        { feature: 'noun-abstract', spans: ['demand'], note: 'An abstraction, but one that is immediately evidenced by the numbers that follow.' },
        { feature: 'verb-lexical', spans: ['served', 'began', 'noticed', 'prepares', 'depends', 'grown', 'receives'] },
        { feature: 'verb-auxiliary', spans: ['has', 'is', 'were'] },
        {
          feature: 'preposition',
          spans: ['from', 'of', 'to', 'on', 'by'],
          note: 'Prepositional phrases carry the circumstantial detail: where, since when, paid by whom.',
        },
        { feature: 'conjunction-subordinating', spans: ['after', 'when', 'since'] },
        { feature: 'conjunction-coordinating', spans: ['and', 'but'] },
        { feature: 'determiner', spans: ['six', '240', '38', '2019'] },
        { feature: 'adjective', spans: ['free', 'disused', 'local', 'regular'] },
        { feature: 'adverb', spans: ['roughly', 'slowly', 'steadily', 'entirely', 'Today'] },
        { feature: 'suffix', spans: ['donations'] },
        {
          feature: 'anaphora',
          spans: ['The service'],
          note: 'Points back to the meal served in sentence one, and then becomes the subject of the whole paragraph.',
        },
      ],
      quiz: [
        {
          prompt: 'How does this passage handle evaluation compared with media-02?',
          options: [
            'It uses more loaded adjectives',
            'It attributes statements to a named coordinator instead of to anonymous insiders',
            'It uses no numerals at all',
            'It uses imperatives to persuade',
          ],
          answer: 1,
          explain:
            'Attribution is a register and credibility strategy. "According to coordinator Helen Ashworth" is verifiable; "insiders say" is not.',
        },
        {
          prompt: 'Which pair of forms is the clearest evidence of the formal register here?',
          options: [
            'Contractions and slang',
            'Nominalisations and complex sentences with subordinating conjunctions',
            'Interjections and imperatives',
            'Phrasal verbs and ellipsis',
          ],
          answer: 1,
          explain:
            'The passage never contracts and repeatedly nests clauses with "after", "when" and "since". That structural density is what formality looks like from the inside.',
        },
      ],
      teach:
        'This is the CONTROLLED counterpart to media-02. Same kind of human-interest content, no loaded language: quantification, named attribution and subordination do the work instead.',
    },

    /* ---------------------------------------------------------------- 07 ---- */
    {
      id: 'media-07',
      title: 'Opinion column against a development',
      text: "Enough. If the council genuinely believed in a liveable city, it would stop bulldozing the last patch of public green space in Keller Street. Instead we are offered another glass tower and a shrug. Our kids will inherit the concrete, and the traffic, and the noise. So write to your councillor today, turn up to the meeting on Tuesday, and make them explain why a ficus tree is worth less than a parking spot.",
      source: 'Local newspaper opinion column (constructed)',
      field: 'Urban planning and community activism',
      mode: 'written',
      setting: 'Written and public; argumentative rather than descriptive',
      tenor: 'Solidarity with the reader ("our kids"), hostility towards a third party (the council)',
      register: 'neutral-register',
      registerNote:
        'A deliberately mixed register: formal political abstraction ("a liveable city") sits beside colloquial lexis ("kids", "a shrug") and direct imperatives.',
      dominantFunction: 'conative',
      functionNote:
        'Conative throughout. The final sentence abandons description altogether and issues three imperatives plus a rhetorical challenge.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Keller Street', 'Tuesday'] },
        {
          feature: 'noun-common',
          spans: [
            'council',
            'city',
            'patch',
            'space',
            'tower',
            'shrug',
            'concrete',
            'traffic',
            'noise',
            'councillor',
            'meeting',
            'ficus tree',
            'parking spot',
          ],
        },
        {
          feature: 'interjection',
          spans: ['Enough'],
          note: 'A one-word outburst before the argument even begins. Note the full stop rather than an exclamation mark.',
        },
        { feature: 'verb-modal', spans: ['would', 'will'], note: '"would stop" is a counterfactual — the council does not believe it.' },
        {
          feature: 'verb-lexical',
          spans: ['believed', 'stop', 'bulldozing', 'offered', 'inherit', 'write', 'make', 'explain'],
        },
        { feature: 'verb-phrasal', spans: ['turn up'], note: 'Informal idiom where a formal column would say "attend".' },
        { feature: 'verb-auxiliary', spans: ['are'] },
        { feature: 'colloquialism', spans: ['kids'], note: 'Plainly informal, and the most revealing word about who the column is written for.' },
        { feature: 'metaphor', spans: ['bulldozing'], note: 'Used figuratively: nothing is physically bulldozed, the policy is.' },
        { feature: 'adjective', spans: ['liveable', 'public', 'glass', 'last'] },
        { feature: 'adverb', spans: ['genuinely', 'today'] },
        { feature: 'preposition', spans: ['in', 'to', 'on', 'of'] },
        { feature: 'conjunction-coordinating', spans: ['and'], note: 'In "the concrete, and the traffic, and the noise" the polysyndeton slows the sentence into a list of grievances.' },
        { feature: 'discourse-marker', spans: ['So'], note: 'Signals the practical conclusion of the argument.' },
      ],
      quiz: [
        {
          prompt: 'The final sentence carries the strongest evidence of which function?',
          options: [
            'Metalinguistic — it discusses a word',
            'Conative — three imperatives direct the reader to act',
            'Phatic — it maintains social contact',
            'Referential — it reports facts',
          ],
          answer: 1,
          explain: '"write", "turn up", "make them explain" all address the reader as an agent. Grammatically, imperative mood is the strongest marker of the conative function.',
        },
        {
          prompt: 'What does the single word "Enough." achieve structurally?',
          options: [
            'It creates a sentence fragment that opens the piece at full emotional volume',
            'It introduces the topic of the paragraph',
            'It is a subordinating conjunction',
            'It signals quotation',
          ],
          answer: 0,
          explain: 'A deliberate fragment at the very start sets the tone before a single fact is given.',
        },
      ],
      teach:
        'Opinion writing mixes registers on purpose. Colloquial lexis buys solidarity, abstraction buys authority, and imperatives translate feeling into action. Track the shift across the paragraph.',
    },

    /* ---------------------------------------------------------------- 08 ---- */
    {
      id: 'media-08',
      title: 'Television current affairs interview',
      text: "SARAH LIN: Minister, thank you for joining us. Your department knew about the mould in those classrooms for eleven months before parents were told. Why did nothing happen? MINISTER OATES: Well, look, I think that’s a bit of an unfair characterisation. As soon as the reports landed on my desk we acted. SARAH LIN: Two schools were closed for a fortnight. That is not acting quickly.",
      source: 'Television current affairs interview transcript (constructed)',
      field: 'Public education and government accountability',
      mode: 'spoken',
      setting: 'Spoken dialogue, broadcast, with overlapping turns',
      tenor: 'Adversarial but formally polite; both speakers are on record',
      register: 'neutral-register',
      registerNote:
        'The interviewer is close to formal written style ("thank you for joining us"), while the Minister shifts towards spoken informality ("Well, look, I think that’s a bit of…").',
      dominantFunction: 'conative',
      functionNote:
        'Both speakers are trying to move the audience. The questions are designed to force a concession, and the answers are designed to absorb one.',
      dominantSentenceType: 'interrogative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['SARAH LIN', 'MINISTER OATES'] },
        {
          feature: 'noun-common',
          spans: [
            'department',
            'mould',
            'classrooms',
            'parents',
            'reports',
            'desk',
            'schools',
            'fortnight',
            'Minister',
          ],
        },
        {
          feature: 'noun-abstract',
          spans: ['characterisation'],
          note: 'A nominalisation of "characterise" — and the Minister’s chosen word for reframing the accusation as a rhetorical act.',
        },
        { feature: 'contraction', spans: ['that’s'], note: 'Instant evidence of the spoken mode inside a formal setting.' },
        {
          feature: 'interjection',
          spans: ['Well'],
          note: 'A stall and a softener. In a hostile interview, "well" buys two seconds of thinking time.',
        },
        { feature: 'discourse-marker', spans: ['look'], note: 'An attention-getter that also signals "I am about to reframe this".' },
        { feature: 'determiner', spans: ['eleven', 'Two'] },
        { feature: 'verb-lexical', spans: ['knew', 'happen', 'think', 'landed', 'acted', 'acting', 'closed'] },
        { feature: 'verb-auxiliary', spans: ['were', 'is'] },
        { feature: 'adjective', spans: ['unfair'] },
        { feature: 'adverb', spans: ['quickly'], note: 'Placed at the end for emphasis: "That is not acting quickly."' },
        { feature: 'preposition', spans: ['for', 'in', 'on', 'about'] },
        { feature: 'conjunction-subordinating', spans: ['before', 'As soon as'] },
        {
          feature: 'cohesive-repetition',
          spans: ['acted', 'acting'],
          note: 'The interviewer echoes the Minister’s own verb back at him. Repetition used as an attack.',
        },
      ],
      quiz: [
        {
          prompt: '"Two schools were closed for a fortnight." Which grammatical choice removes responsibility for the closure?',
          options: [
            'The passive voice leaves the agent unnamed',
            'The numeral "two"',
            'The preposition "for"',
            'The past tense',
          ],
          answer: 0,
          explain:
            'Nobody closed the schools in this clause. The interviewer may be steering blame, but the grammar itself attributes to no one.',
        },
        {
          prompt: 'What does the Minister’s "Well, look, I think that’s a bit of an unfair characterisation" do?',
          options: [
            'Answers the question with evidence',
            'Uses hedges and a nominalisation to reframe the accusation instead of answering it',
            'Asks a question back',
            'Uses an imperative',
          ],
          answer: 1,
          explain:
            '"I think", "a bit of" and "characterisation" all soften and shift the topic from the mould to the interviewer’s framing.',
        },
      ],
      teach:
        'Interviews are a duet of functions. Questions do conative work through interrogation, and answers do conative work through reframing. Hedges and nominalisations are the tools of the political answer.',
    },

    /* ---------------------------------------------------------------- 09 ---- */
    {
      id: 'media-09',
      title: 'Science news explainer',
      text: "Researchers at a Queensland university have found that a common soil fungus can break down a widely used industrial plastic in under three weeks. The team grew the fungus on samples of polyethylene and measured a 14 per cent loss of mass. According to the lead researcher, the enzyme responsible is unusually stable at high temperatures, which makes large-scale composting potentially viable. Further trials are planned at three landfill sites.",
      source: 'Science news explainer (constructed)',
      field: 'Environmental science and materials',
      mode: 'written',
      setting: 'Written, public, aimed at an educated non-specialist',
      tenor: 'Knowledgeable but collegial: the writer explains rather than excludes',
      register: 'formal-register',
      registerNote:
        'Formal through hedging and technical vocabulary, yet readable: the technical terms are embedded in ordinary sentence structure rather than in research-article syntax.',
      dominantFunction: 'referential',
      functionNote:
        'Referential. Note how the hedges ("can", "potentially") keep the referential claims honest rather than overstated.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Queensland'] },
        {
          feature: 'noun-common',
          spans: [
            'Researchers',
            'university',
            'fungus',
            'plastic',
            'samples',
            'loss',
            'mass',
            'temperatures',
            'trials',
            'landfill sites',
          ],
        },
        { feature: 'noun-collective', spans: ['team'] },
        { feature: 'noun-abstract', spans: ['loss'] },
        {
          feature: 'jargon',
          spans: ['polyethylene', 'enzyme', 'composting'],
          note: 'Technical terms used without apology — but each one is a single item, not a wall of them.',
        },
        { feature: 'verb-modal', spans: ['can'], note: 'A modal of capability, not certainty. In science writing, "can" is much safer than "will".' },
        { feature: 'verb-lexical', spans: ['break down', 'grew', 'measured', 'makes', 'planned'] },
        { feature: 'verb-auxiliary', spans: ['have', 'are'] },
        { feature: 'adjective', spans: ['common', 'industrial', 'unusual', 'stable', 'large-scale', 'viable'] },
        { feature: 'adverb', spans: ['widely', 'unusually', 'potentially'], note: '"potentially" is a hedge that protects the scientist and informs the reader.' },
        { feature: 'determiner', spans: ['14', 'three'] },
        { feature: 'preposition', spans: ['at', 'in', 'on', 'of', 'under'] },
        {
          feature: 'anaphora',
          spans: ['The team'],
          note: 'The collective noun summarises "Researchers at a Queensland university" and then becomes the subject.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the writer say "can break down" rather than "breaks down"?',
          options: [
            'To sound informal',
            'To hedge a claim that the evidence supports only as a capability',
            'Because it is passive voice',
            'To create an imperative',
          ],
          answer: 1,
          explain:
            'Modal choice is where scientific caution lives. "Can" commits the writer to far less than a simple present tense claim.',
        },
        {
          prompt: 'Which single sentence uses a collective noun as its subject?',
          options: [
            '"Researchers at a Queensland university have found…"',
            '"The team grew the fungus on samples of polyethylene…"',
            '"Further trials are planned at three landfill sites."',
            '"According to the lead researcher, the enzyme responsible is unusually stable…"',
          ],
          answer: 1,
          explain: '"The team" is grammatically singular and refers to a group — the definition of a collective noun.',
        },
      ],
      teach:
        'Explainer journalism translates technical register for a general audience. Jargon is retained where it is unavoidable, and modal hedges carry the professional caution.',
    },

    /* ---------------------------------------------------------------- 10 ---- */
    {
      id: 'media-10',
      title: 'Obituary',
      text: "Dora Mensah, who has died aged 88, arrived in Australia in 1961 with a suitcase and a nursing certificate. She spent thirty-one years at the Ballarat Base Hospital, where she trained hundreds of graduates and quietly refused to accept the poor conditions endured by the night staff. Her work led to the first formal industrial agreement for regional nurses. She is survived by two daughters and six grandchildren.",
      source: 'Newspaper obituary (constructed)',
      field: 'Nursing and industrial history',
      mode: 'written',
      setting: 'Written, public, commemorative',
      tenor: 'Respectful and formal; the subject is honoured rather than addressed',
      register: 'formal-register',
      registerNote:
        'Formal and somewhat elevated: "endured by", "is survived by", "led to the first formal industrial agreement". No contractions, no colloquial lexis.',
      dominantFunction: 'emotive',
      functionNote:
        'Ostensibly referential, but every fact is selected to express admiration. Choosing to report the refusal to accept poor conditions is an act of evaluation.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Dora Mensah', 'Australia', 'Ballarat Base Hospital'] },
        {
          feature: 'noun-common',
          spans: [
            'suitcase',
            'nursing certificate',
            'years',
            'graduates',
            'staff',
            'work',
            'agreement',
            'nurses',
            'daughters',
            'grandchildren',
          ],
        },
        { feature: 'noun-abstract', spans: ['conditions'] },
        { feature: 'verb-lexical', spans: ['died', 'arrived', 'spent', 'trained', 'refused', 'endured', 'led', 'survived'] },
        { feature: 'verb-auxiliary', spans: ['has', 'is'] },
        { feature: 'determiner', spans: ['88', 'thirty-one', 'hundreds'] },
        {
          feature: 'adjective',
          spans: ['nursing', 'poor', 'first', 'formal', 'industrial', 'regional'],
          note: '"first", "formal" and "industrial" are all doing quiet evaluation: this is a legacy, not just a job.',
        },
        { feature: 'adverb', spans: ['quietly'], note: 'A single adverb of manner supplies the entire character portrait.' },
        { feature: 'preposition', spans: ['in', 'with', 'at', 'by', 'to'] },
        {
          feature: 'anaphora',
          spans: ['She', 'Her'],
          note: 'The repeated pronouns keep the paragraph focused on the subject rather than on the institutions.',
        },
        {
          feature: 'euphemism',
          spans: ['is survived by'],
          note: 'A conventional obituary formula that softens bereavement into a grammatical relationship.',
        },
      ],
      quiz: [
        {
          prompt: '"She is survived by two daughters and six grandchildren." The phrase "is survived by" is best described as…',
          options: [
            'a euphemism conventional to the obituary genre',
            'a modal verb construction',
            'an imperative',
            'a non-standard form',
          ],
          answer: 0,
          explain:
            'Genres carry their own formulaic language. "Is survived by" is a fixed euphemistic frame for bereavement.',
        },
        {
          prompt: 'Why does the passage read as evaluative even though it states facts?',
          options: [
            'It uses imperatives',
            'It selects and frames facts — "quietly refused", "first formal industrial agreement" — so that they build admiration',
            'It uses contractions',
            'It asks rhetorical questions',
          ],
          answer: 1,
          explain: 'Selection and framing are evaluation. The adjectives and the single adverb do the commemorative work.',
        },
      ],
      teach:
        'Obituaries are a masterclass in evaluation through selection. Notice how one adverb ("quietly") and a numeral ("first") do more persuasive work than any emotional vocabulary.',
    },

    /* ---------------------------------------------------------------- 11 ---- */
    {
      id: 'media-11',
      title: 'Newspaper editorial',
      text: "The state government’s refusal to release the full audit is indefensible. Voters paid for that report, and they are entitled to read it. By withholding the document, the Premier has invited the very suspicion she claims to reject. Transparency is not a courtesy; it is the price of office. The government should publish the audit in full this week, and it should explain why it did not do so a month ago.",
      source: 'Newspaper editorial (constructed)',
      field: 'Governance and public accountability',
      mode: 'written',
      setting: 'Written, public, institutional voice without a named author',
      tenor: 'Authoritative and impersonal: the paper speaks as an institution, not as an individual',
      register: 'formal-register',
      registerNote:
        'Formal, Latinate and abstract: "refusal", "transparency", "courtesy", "the price of office". The register itself is part of the authority claim.',
      dominantFunction: 'conative',
      functionNote:
        'Conative. The editorial exists to make the government act, and every sentence is built to support the two "should" clauses that close it.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'noun-abstract',
          spans: ['refusal', 'suspicion', 'Transparency', 'courtesy'],
          note: 'Four abstractions in five sentences. This density is a deliberate marker of editorial authority.',
        },
        { feature: 'noun-common', spans: ['government', 'report', 'document', 'office', 'audit', 'week', 'month', 'Voters', 'Premier'] },
        { feature: 'verb-modal', spans: ['should'], note: 'The editorial’s only demand, grammatically a modal of obligation rather than an imperative.' },
        { feature: 'verb-lexical', spans: ['release', 'paid', 'withholding', 'invited', 'claims', 'reject', 'publish', 'explain', 'do'] },
        { feature: 'verb-auxiliary', spans: ['is', 'are', 'has', 'did'] },
        { feature: 'adjective', spans: ['indefensible', 'full', 'entitled'], note: '"indefensible" is the evaluative claim that the rest of the passage must earn.' },
        { feature: 'determiner', spans: ['the', 'that'] },
        { feature: 'pronoun', spans: ['it', 'they', 'she'], note: 'Mixed reference: "they" is the voters, "it" swings between report, government and audit.' },
        { feature: 'preposition', spans: ['to', 'for', 'By', 'of', 'in'] },
        {
          feature: 'metaphor',
          spans: ['the price of office'],
          note: 'Turns a civic duty into a transactional cost — and makes the government look like a bad payer.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['audit'],
          note: 'Repeating the concrete noun keeps attention on the document rather than on the person withholding it.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the editorial use "should publish" rather than "Publish it now"?',
          options: [
            'Because imperatives are ungrammatical in editorials',
            'Because the modal of obligation sounds institutional and authoritative rather than personal',
            'Because it makes the sentence passive',
            'Because it avoids a proper noun',
          ],
          answer: 1,
          explain:
            'An editorial speaks as an institution. "Should" delivers the demand with the weight of a reasoned position instead of the heat of a command.',
        },
        {
          prompt: 'What is the effect of "Transparency is not a courtesy; it is the price of office"?',
          options: [
            'It defines a term for the reader',
            'It reframes a courtesy as an obligation through a metaphor',
            'It reports a fact about the government',
            'It introduces a subordinate clause',
          ],
          answer: 1,
          explain: 'The metaphor of a price turns a voluntary nicety into a compulsory payment. That is argument by reframing.',
        },
      ],
      teach:
        'Editorials are persuasive writing wearing formal clothes. Abstract nouns build authority, modals deliver the demand, and a single metaphor can reframe the whole issue.',
    },

    /* ---------------------------------------------------------------- 12 ---- */
    {
      id: 'media-12',
      title: 'Live blog update',
      text: "3.42pm: Still no sign of the tram replacement buses on Lygon Street, and the crowd on the platform is getting restless. We’ve asked the operator for an update. One commuter tells us she has been waiting forty minutes.",
      source: 'Live traffic and transport blog (constructed)',
      field: 'Public transport',
      mode: 'written',
      setting: 'Written and published in real time; read while the event continues',
      tenor: 'Immediate and inclusive: the blog uses "we" and "us" to align with its readers',
      register: 'informal-register',
      registerNote:
        'Informal because of the contraction, the present tense and the reader-alignment of "we’ve". The timestamp does the structuring that paragraphs normally do.',
      dominantFunction: 'referential',
      functionNote:
        'Referential, but the "we’ve asked" and "tells us" frames import the newsroom into the text as a participant. That is a digital-media convention.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: 'noun-proper', spans: ['Lygon Street'] },
        { feature: 'noun-common', spans: ['sign', 'buses', 'crowd', 'platform', 'operator', 'commuter', 'minutes'] },
        { feature: 'noun-abstract', spans: ['update'] },
        { feature: 'contraction', spans: ['We’ve'], note: 'The blog speaks in contractions because it is imitating a spoken update.' },
        { feature: 'verb-lexical', spans: ['tells', 'asked', 'getting'] },
        { feature: 'verb-auxiliary', spans: ['is', 'has'] },
        {
          feature: 'verb-phrase',
          spans: ['has been waiting'],
          note: 'Auxiliary + auxiliary + main verb: the present perfect progressive, which frames the wait as ongoing.',
        },
        { feature: 'determiner', spans: ['3.42pm', 'forty'] },
        { feature: 'adjective', spans: ['restless'] },
        { feature: 'discourse-marker', spans: ['Still'], note: 'Organises the update against the previous post rather than within the sentence.' },
        { feature: 'conjunction-coordinating', spans: ['and'] },
        { feature: 'preposition', spans: ['of', 'on', 'for'] },
      ],
      quiz: [
        {
          prompt: 'The timestamp "3.42pm" repeated at the start of each update is an example of…',
          options: [
            'a discourse-organising device that does the work paragraphs normally do',
            'a subordinating conjunction',
            'an adverb of manner',
            'a nominalisation',
          ],
          answer: 0,
          explain:
            'Live blogs structure themselves by time stamp rather than by paragraphing or topic sentences. Form follows the medium.',
        },
        {
          prompt: 'What does "We’ve asked the operator" add to an otherwise referential text?',
          options: [
            'A nominalisation',
            'The newsroom as a named participant, aligning itself with the waiting reader',
            'An imperative',
            'A superlative',
          ],
          answer: 1,
          explain:
            'It is an answer to "what are you doing about it?" — a credibility move that live blogs use constantly.',
        },
      ],
      teach:
        'Digital media has its own conventions: timestamps as structure, contractions as immediacy, and the "we" of the outlet as a character in the story.',
    },
  ],
}
