import type { PassageBank } from '../../lib/passages'

/** Tier 3 — news and media paragraphs. */
export const bank04: PassageBank = {
  id: 'news',
  label: 'News & media',
  blurb:
    'Full paragraphs of published journalism. News register leans on nominalisation, the passive voice, statistics and carefully hedged attribution — this is where those habits are easiest to see.',
  passages: [
    {
      id: 'n01',
      title: 'Bushfire emergency coverage',
      text: 'Emergency services were deployed across the state’s far east overnight as authorities confirmed that at least forty properties had been destroyed. The Premier described the fire front as catastrophic and warned that difficult conditions would persist for several days. Residents of Mallacoota were advised to shelter in place in spite of the deteriorating air quality. A relief centre has been established at the local football ground, however, access remains restricted while the fire service assesses the damage.',
      source: 'Breaking news report (constructed)',
      unit: 3,
      areaOfStudy: 'u3-formality',
      textType: 'news',
      field: 'Emergency and disaster reporting',
      mode: 'written',
      setting: 'overnight, eastern Victoria, online breaking-news report',
      tenor: 'distant, newsroom to general public',
      register: 'formal-register',
      registerNote:
        'Impersonal, event-focused prose. The people affected appear as grammatical patients rather than as agents.',
      dominantFunction: 'referential',
      secondaryFunctions: ['conative'],
      functionNote:
        'The paragraph exists to inform: it reports events, numbers and official statements.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-collective',
          spans: ["authorities"],
          note: 'Singular in form, standing for an unspecified group of people.',
        },
        {
          feature: 'noun-proper',
          spans: ['Mallacoota', 'Premier'],
          note: 'A place name and a title used as a name.',
        },
        {
          feature: 'noun-abstract',
          spans: ['conditions', 'access', 'damage'],
          note: 'Nominalised states rather than things you could photograph.',
        },
        {
          feature: 'preposition-complex',
          spans: ['in spite of'],
          note: 'A three-word preposition; "despite" would have done the same job more briskly.',
        },
        {
          feature: 'preposition',
          spans: ['across', 'at'],
          note: '"at" occurs twice — once in the approximation "at least", once for place.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['were', 'had been', 'has been'],
          note: 'The passive voice needs auxiliaries. "were" appears twice, once per passive clause.',
        },
        {
          feature: 'adjective',
          spans: ['catastrophic', 'difficult', 'deteriorating'],
          note: 'Only "catastrophic" is evaluative; the others look neutral.',
        },
        {
          feature: 'discourse-marker',
          spans: ['however'],
          note: 'Signals a contrast and keeps the paragraph moving between facts.',
        },
        { feature: 'determiner', spans: ['forty'], note: 'Statistics are the backbone of news authority.' },
        {
          feature: 'connotation',
          spans: ['catastrophic'],
          note: 'Reported speech lets the outlet quote evaluation it would not assert itself.',
        },
        {
          feature: 'verb-modal',
          spans: ['would'],
          note: 'Marks a prediction attributed to the Premier, not to the reporter.',
        },
      ],
      quiz: [
        {
          prompt: 'Which grammatical feature dominates the reporting of actions here?',
          options: ['Imperatives', 'Passive voice', 'Exclamatives', 'Direct address'],
          answer: 1,
          explain:
            'were deployed, were advised, had been destroyed and has been established are all passive. The events are foregrounded and the agents disappear.',
        },
        {
          prompt: 'Why does the report attribute "catastrophic" to the Premier rather than stating it?',
          options: [
            'Because the reporter does not know the word',
            'Because official attribution lets the outlet convey emotion while appearing objective',
            'Because adjectives are banned in news writing',
            'Because it shortens the sentence',
          ],
          answer: 1,
          explain:
            'Reported speech is a hedging device: the evaluation is sourced, so the newsroom is not accountable for it.',
        },
        {
          prompt: 'What does "authorities" and "crews" exemplify?',
          options: [
            'Proper nouns',
            'Collective nouns that diffuse responsibility across unnamed people',
            'Abstract nouns',
            'Numerals',
          ],
          answer: 1,
          explain:
            'Collective nouns let a writer refer to institutions and groups without committing to who exactly acted.',
        },
      ],
      teach:
        'Emergency reporting is built on the passive voice, collective nouns and statistics. Together they produce a tone that is authoritative, impersonal and hard to argue with.',
    },
    {
      id: 'n02',
      title: 'Federal budget reporting',
      text: 'Treasury has revised its forecast for wage growth, downgrading the expected increase to 2.4 per cent for the coming financial year. According to the Treasurer, the budget will deliver a modest surplus despite weaker-than-expected revenue. Economists have raised concerns that the projections rely on optimistic assumptions about commodity prices. Nevertheless, the government maintains that its fiscal strategy remains responsible.',
      source: 'Political and economic news report (constructed)',
      field: 'Economics and politics',
      mode: 'written',
      setting: 'written, journalism',
      tenor: 'neutral, political reporter to informed public',
      register: 'formal-register',
      registerNote:
        'Dense, Latinate economics vocabulary with every claim attributed to an institution.',
      dominantFunction: 'referential',
      functionNote:
        'It reports figures and the competing interpretations of those figures.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Treasury', 'Treasurer'],
          note: 'Institution and office-holder, both capitalised as names.',
        },
        {
          feature: 'noun-collective',
          spans: ['government'],
          note: 'A single noun for a body of many people.',
        },
        {
          feature: 'noun-abstract',
          spans: ['wage growth', 'surplus', 'revenue'],
          note: 'Economic abstractions that cannot be perceived directly.',
        },
        {
          feature: 'determiner',
          spans: ['2.4 per cent'],
          note: 'Precision to one decimal place signals statistical authority.',
        },
        {
          feature: 'jargon',
          spans: ['fiscal strategy', 'commodity prices'],
          note: 'Terms of the economics discourse community.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'have'],
          note: 'One forms the present perfect, one a perfect of reported concern.',
        },
        {
          feature: 'preposition',
          spans: ['despite', 'about', 'for'],
          note: '"for" occurs twice, each time introducing a time frame.',
        },
        {
          feature: 'discourse-marker',
          spans: ['According to', 'Nevertheless'],
          note: 'One sources a claim, the other signals concession.',
        },
        {
          feature: 'adjective',
          spans: ['optimistic', 'modest', 'responsible'],
          note: 'Notice "optimistic" — it quietly casts doubt on the forecast.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'Certainty about a future that has not happened yet.',
        },
        {
          feature: 'noun-phrase',
          spans: ['a modest surplus'],
          note: 'A pre-modified noun phrase that compresses a whole judgement.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of the adjective "optimistic" in "optimistic assumptions"?',
          options: [
            'It praises the government’s work',
            'It implies, without asserting, that the forecast may be too hopeful',
            'It is a technical term',
            'It is an intensifier',
          ],
          answer: 1,
          explain:
            'Attributing optimism to the projections lets the reporter cast doubt while claiming to describe rather than judge.',
        },
        {
          prompt: '"Nevertheless, the government maintains that…" — what does "maintains" imply that "says" would not?',
          options: [
            'That the claim is uncontested',
            'That the claim is being upheld against disagreement',
            'That the claim is untrue',
            'That the speaker is a woman',
          ],
          answer: 1,
          explain:
            '"Maintain" frames a statement as contested. Reporting verbs carry evaluation in their choice alone.',
        },
        {
          prompt: 'Which feature signals concession in this paragraph?',
          options: ['and', 'despite', 'that', 'its'],
          answer: 1,
          explain: '"despite" concedes one fact while insisting on the main claim.',
        },
      ],
      teach:
        'In political reporting, evaluation hides in adjective choice and reporting verbs. Compare "economists have raised concerns" with "economists have complained" — the connotation shifts entirely.',
    },
    {
      id: 'n03',
      title: 'AFL trade story',
      text: 'Collingwood has secured the services of the competition’s most sought-after midfielder, ending weeks of speculation. The 24-year-old requested a trade after failing to agree terms on a new contract. In exchange, the Magpies have parted with two first-round draft picks and a future second-round selection. Club officials described the outcome as a win for both parties, although rival recruiters questioned the price.',
      source: 'Sport news report (constructed)',
      field: 'Australian Rules football',
      mode: 'written',
      setting: 'written, sport media',
      tenor: 'knowledgeable, sporting press to fans',
      register: 'neutral-register',
      registerNote:
        'Standard written English carried by a dense layer of football jargon and club nicknames.',
      dominantFunction: 'referential',
      functionNote:
        'It reports a transaction, though the closing clause adds evaluation.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Collingwood', 'Magpies'],
          note: 'Club name and nickname both function as proper nouns.',
        },
        {
          feature: 'compounding',
          spans: ['midfielder', '24-year-old'],
          note: 'A noun-noun compound and a number-noun compound.',
        },
        {
          feature: 'jargon',
          spans: ['draft picks', 'second-round selection', 'recruiters'],
          note: 'Insider lexis that assumes the reader already follows the sport.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'have'],
          note: 'Both build present perfects of recent completed action.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['parted with'],
          note: 'A verb plus particle combination meaning to give away.',
        },
        { feature: 'determiner', spans: ['two'], note: 'Quantifying the price of the trade.' },
        {
          feature: 'adjective-superlative',
          spans: ['most sought-after'],
          note: 'The "most" superlative raises the stakes and the drama.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['although'],
          note: 'Introduces the dissenting dependent clause that ends the paragraph.',
        },
        {
          feature: 'noun-abstract',
          spans: ['speculation', 'terms'],
          note: 'Abstract nouns that keep the reporting general rather than detailed.',
        },
        {
          feature: 'idiom',
          spans: ['a win for both parties'],
          note: 'A predictable phrase standing in for actual analysis.',
        },
        {
          feature: 'preposition',
          spans: ['with', 'for'],
          note: '"with" here completes the phrasal verb; "for" assigns the benefit.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is "The 24-year-old" an example of ellipsis?',
          options: [
            'Because it is hyphenated',
            'Because the head noun, "player", has been left out',
            'Because it is a numeral',
            'Because it omits a verb',
          ],
          answer: 1,
          explain:
            'The subject has been reduced to a modifying phrase. Sport writing does this constantly because the reader can supply the noun.',
        },
        {
          prompt: 'What does the jargon do for readers who do not follow football?',
          options: [
            'It explains the sport clearly',
            'It marks them as outsiders to the discourse community',
            'It makes the article shorter',
            'It removes bias',
          ],
          answer: 1,
          explain:
            'Jargon is efficient inside a community and excluding outside it — both effects at once.',
        },
        {
          prompt: 'What is the effect of the final clause, "although rival recruiters questioned the price"?',
          options: [
            'It confirms the trade was fair',
            'It introduces a counter-voice that makes the report look balanced',
            'It changes the subject entirely',
            'It is a sentence fragment',
          ],
          answer: 1,
          explain:
            'Ending on a dissenting view is a standard objectivity move: the writer avoids endorsing either side.',
        },
      ],
      teach:
        'Sports journalism is mass-market writing that still depends on in-group jargon. Notice how the one evaluative adjective in the whole passage — "most sought-after" — does an enormous amount of work.',
    },
    {
      id: 'n04',
      title: 'Climate protest report',
      text: 'Hundreds of school students walked out of classrooms on Friday, carrying placards that demanded stronger action on climate change. Organisers estimated the crowd at three thousand, making it the largest demonstration the city has seen this year. Police reported no arrests, describing the event as peaceful and well organised. Critics argued that the protest disrupted learning, however participants insisted that the stakes justified the disruption.',
      source: 'News report on a public demonstration (constructed)',
      field: 'Environment and civic action',
      mode: 'written',
      setting: 'written, journalism',
      tenor: 'neutral, reporter to general public',
      register: 'neutral-register',
      registerNote:
        'Balanced structure with named groups on both sides of the dispute.',
      dominantFunction: 'referential',
      functionNote:
        'It reports what happened, who was there, and what each side said.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        { feature: 'noun-collective', spans: ['Police'], note: 'One noun for an entire institution.' },
        {
          feature: 'noun-abstract',
          spans: ['climate change', 'action'],
          note: 'Abstract nouns that make a political demand sound uncontroversial.',
        },
        {
          feature: 'determiner',
          spans: ['Hundreds', 'three thousand'],
          note: 'A vague numeral first, then the organiser’s precise estimate — note who supplies the figure.',
        },
        {
          feature: 'verb-phrasal',
          spans: ['walked out of'],
          note: 'The phrasal verb makes the action sound concrete and physical.',
        },
        {
          feature: 'adjective-comparative',
          spans: ['stronger'],
          note: 'The comparative implies a scale, and therefore a standard that has not yet been met.',
        },
        { feature: 'adjective-superlative', spans: ['largest'], note: 'Places this event above all others this year.' },
        {
          feature: 'preposition',
          spans: ['at', 'on'],
          note: '"on" appears twice, once for time and once for topic.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that'],
          note: 'Three subordinating uses of “that” carry the reported speech of each side.',
        },
        {
          feature: 'discourse-marker',
          spans: ['however'],
          note: 'Follows the comma to signal a counter-position.',
        },
        {
          feature: 'connotation',
          spans: ['disrupted', 'disruption'],
          note: 'The repetition of a negatively loaded verb and its nominalisation.',
        },
        {
          feature: 'noun-phrase',
          spans: ['the largest demonstration the city has seen this year'],
          note: 'A noun phrase with a full clause tucked inside it as a post-modifier.',
        },
      ],
      quiz: [
        {
          prompt: 'Which word choice reveals the writer’s stance most clearly?',
          options: ['walked out', 'disrupted', 'peaceful', 'estimated'],
          answer: 1,
          explain:
            '"Disrupted" is a loaded verb. "Delayed lessons" would describe the same fact with less judgement.',
        },
        {
          prompt: 'What does the structure "Critics argued … however participants insisted …" achieve?',
          options: [
            'It shows the writer’s opinion',
            'It creates apparent balance by giving both sides a reporting verb',
            'It confuses the reader',
            'It removes cohesion',
          ],
          answer: 1,
          explain:
            'Giving each side a speaking role is a cohesion and objectivity device, even when the wording is not perfectly even-handed.',
        },
        {
          prompt: 'What kind of noun phrase is "the largest demonstration the city has seen this year"?',
          options: [
            'A simple noun phrase with no modifiers',
            'A noun phrase with a comparative',
            'A noun phrase post-modified by an entire clause',
            'A prepositional phrase',
          ],
          answer: 2,
          explain:
            '"the city has seen this year" is a dependent clause doing the work of an adjective. This is characteristic of dense written English.',
        },
      ],
      teach:
        'Protest reporting is where news language is most carefully managed. Every reporting verb — reported, estimated, argued, insisted — assigns a different amount of credibility.',
    },
    {
      id: 'n05',
      title: 'Council rates decision',
      text: 'Ratepayers in the outer suburbs will face an average increase of 4.1 per cent next financial year after the council approved its annual budget on Tuesday. The Mayor said the rise was necessary to fund road maintenance and overdue upgrades to local sporting facilities. Several residents addressed the meeting, arguing that the increase would place additional pressure on households already struggling with rising costs. The council has committed to reviewing the rating strategy in twelve months.',
      source: 'Local government news report (constructed)',
      field: 'Local government and rates',
      mode: 'written',
      setting: 'written, local news',
      tenor: 'neutral, council reporter to ratepayers',
      register: 'formal-register',
      registerNote:
        'Civic prose: institutional subjects, abstract process nouns and a reassuring close.',
      dominantFunction: 'referential',
      functionNote:
        'It reports a decision, a justification and the objections to it.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-collective',
          spans: ['council'],
          note: 'Appears twice, each time as an institutional subject.',
        },
        {
          feature: 'noun-proper',
          spans: ['Mayor', 'Tuesday'],
          note: 'A capitalised title and a day of the week.',
        },
        {
          feature: 'noun-abstract',
          spans: ['pressure', 'increase'],
          note: '"increase" appears twice, carrying the financial argument.',
        },
        {
          feature: 'compounding',
          spans: ['Ratepayers', 'road maintenance'],
          note: 'A noun-noun compound and a compound name for a service.',
        },
        {
          feature: 'determiner',
          spans: ['4.1 per cent', 'twelve'],
          note: 'Precise figures give the report its authority.',
        },
        {
          feature: 'adjective',
          spans: ['overdue', 'additional', 'annual'],
          note: '"overdue" quietly supports the council’s case.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['was', 'has'],
          note: 'One passive, one present perfect of commitment.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'A modal of certainty about an obligation the reader cannot avoid.',
        },
        {
          feature: 'preposition',
          spans: ['after', 'of'],
          note: '"after" orders the events in time; "of" chains the percentage to the increase.',
        },
        {
          feature: 'jargon',
          spans: ['rating strategy', 'annual budget'],
          note: 'The technical vocabulary of local government finance.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the report use "overdue upgrades" rather than "upgrades"?',
          options: [
            'To fill space',
            'Because "overdue" pre-empts the objection that the council is wasting money',
            'Because it is jargon',
            'Because upgrades are countable',
          ],
          answer: 1,
          explain:
            'One adjective supplies the council’s justification. This is how reporting quietly aligns itself with one side.',
        },
        {
          prompt: '"The council has committed to reviewing the rating strategy" — what is the effect of this closing sentence?',
          options: [
            'It criticises the council',
            'It offers reassurance, giving the paragraph a mollified ending',
            'It introduces new evidence',
            'It states the writer’s opinion directly',
          ],
          answer: 1,
          explain:
            'Structure carries meaning: ending on a commitment rather than on the objection shapes how the reader feels about the decision.',
        },
        {
          prompt: 'Which two features together mark this as institutional register?',
          options: [
            'Collective nouns and abstract process nouns',
            'Interjections and contractions',
            'Slang and taboos',
            'Exclamatives and fragments',
          ],
          answer: 0,
          explain:
            'Institutions speak through collective subjects ("the council") and nominalised processes ("rating strategy", "increase").',
        },
      ],
      teach:
        'Civic reporting looks neutral but is organised. Watch the order of clauses: the justification is usually placed before the objection, and reassurance comes last.',
    },
    {
      id: 'n06',
      title: 'Tech company announces job cuts',
      text: 'Global software firm Vertex has announced it will cut approximately six hundred roles across its Australian operations. In a statement, chief executive Dana Whitmore attributed the decision to a prolonged decline in enterprise spending and a shift towards automated support tools. Affected staff were informed by email on Wednesday morning and offered a redundancy package that includes eight weeks of pay. The company has declined to comment on whether further reductions are planned.',
      source: 'Business news report (constructed)',
      field: 'Technology and business',
      mode: 'written',
      setting: 'written, business news',
      tenor: 'neutral, business press to readers and investors',
      register: 'formal-register',
      registerNote:
        'Corporate register reported from outside: passive constructions and softened nouns.',
      dominantFunction: 'referential',
      functionNote:
        'It reports a corporate decision and its consequences for staff.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Vertex', 'Dana Whitmore'],
          note: 'A company name and a full personal name, both capitalised.',
        },
        {
          feature: 'euphemism',
          spans: ['cut approximately six hundred roles', 'redundancy package'],
          note: '"Roles" and "package" soften the fact that people lose their incomes.',
        },
        {
          feature: 'jargon',
          spans: ['enterprise spending', 'automated support tools'],
          note: 'Corporate and technical terms that make the cause sound structural.',
        },
        { feature: 'determiner', spans: ['eight weeks'], note: 'The only concrete number given for the human cost.' },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'were'],
          note: '"has" forms two present perfects; "were" forms a passive.',
        },
        { feature: 'verb-modal', spans: ['will'], note: 'Certainty about a future the reader cannot influence.' },
        {
          feature: 'preposition',
          spans: ['across', 'on'],
          note: '"on" appears twice, once for time and once after "comment".',
        },
        {
          feature: 'noun-abstract',
          spans: ['decline', 'shift', 'reductions'],
          note: 'Economic abstractions that remove any individual agent.',
        },
        {
          feature: 'idiom',
          spans: ['declined to comment'],
          note: 'A formula the press uses so often that it has become a genre marker.',
        },
        {
          feature: 'discourse-marker',
          spans: ['In a statement'],
          note: 'Frames the following material as quoted corporate positioning.',
        },
      ],
      quiz: [
        {
          prompt: 'Why might a report use "roles" instead of "jobs"?',
          options: [
            'Because roles is more precise',
            'Because it is a euphemism that makes job losses sound like structural adjustment',
            'Because jobs is a technical term',
            'Because roles is an abstract noun',
          ],
          answer: 1,
          explain:
            'Euphemism protects the powerful party. Notice that the affected people are described as "affected staff" — patients, not agents.',
        },
        {
          prompt: 'In "Affected staff were informed by email", what does the passive voice achieve?',
          options: [
            'It names the person who sent the email',
            'It keeps the focus on the staff who are affected, and hides the agent',
            'It makes the sentence informal',
            'It turns the verb into a noun',
          ],
          answer: 1,
          explain:
            'The passive is standard when the agent is unknown, unimportant or inconvenient to name.',
        },
        {
          prompt: 'What does the reporting verb "attributed" signal?',
          options: [
            'That the reporter endorses the explanation',
            'That the explanation is the company’s claim, not an established fact',
            'That the company refused to speak',
            'That the cause is unknown',
          ],
          answer: 1,
          explain:
            'Attribution verbs (attributed, claimed, insisted, argued) distance the reporter from the content.',
        },
      ],
      teach:
        'Corporate news reporting translates company language for a public audience but rarely strips out its euphemisms. Comparing "roles" with "jobs" is a two-second register analysis.',
    },
    {
      id: 'n07',
      title: 'Vaccine program announcement',
      text: 'From next month, Australians aged over sixty-five will be eligible for a subsidised shingles vaccine under an expanded national immunisation program. Health authorities estimate that the change will prevent roughly two thousand hospital admissions each year. The scheme is expected to cost $180 million over four years. Pharmacists have welcomed the announcement, although some GPs have raised questions about who will administer the doses.',
      source: 'Health policy news report (constructed)',
      field: 'Public health policy',
      mode: 'written',
      setting: 'written, health reporting',
      tenor: 'neutral, health reporter to general public',
      register: 'formal-register',
      registerNote:
        'Policy prose built from numbers, institutional actors and hedged predictions.',
      dominantFunction: 'referential',
      functionNote:
        'It sets out eligibility, estimated benefit, cost and disagreement.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        { feature: 'noun-proper', spans: ['Australians'], note: 'A demonym used as a proper noun.' },
        {
          feature: 'determiner',
          spans: ['sixty-five', 'two thousand', '180 million'],
          note: 'Age, projected benefit and cost — all expressed as figures.',
        },
        {
          feature: 'jargon',
          spans: ['subsidised', 'immunisation program', 'hospital admissions'],
          note: 'Public health terminology that presupposes a policy-literate reader.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'Occurs three times: eligibility, prevention and administration.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is'],
          note: 'Forms the passive "is expected", which is how the costing is hedged.',
        },
        {
          feature: 'noun-abstract',
          spans: ['change', 'cost'],
          note: 'Processes turned into nouns so they can be measured.',
        },
        {
          feature: 'preposition',
          spans: ['From', 'under', 'over', 'about'],
          note: '"over" appears twice, once for age and once for time.',
        },
        {
          feature: 'noun-collective',
          spans: ['authorities'],
          note: 'Names no one in particular, which makes the estimate sound official.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['although'],
          note: 'Introduces the professional disagreement that closes the paragraph.',
        },
        {
          feature: 'adjective',
          spans: ['eligible', 'national', 'expanded'],
          note: 'Also note the compound "subsidised", and the superlative flavour of "expanded".',
        },
        {
          feature: 'initialism',
          spans: ['GPs'],
          note: 'Said letter by letter, not as a word.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the report say "will be eligible for" rather than "can get"?',
          options: [
            'Because it is shorter',
            'Because the Latinate phrasing matches the formal, bureaucratic register of policy',
            'Because it is a euphemism',
            'Because it avoids the passive',
          ],
          answer: 1,
          explain:
            'Word origin and nominal phrasing are the fastest way to detect register. Policy documents sound Latinate.',
        },
        {
          prompt: 'What does "The scheme is expected to cost" reveal?',
          options: [
            'That the cost is fixed',
            'That the projection is hedged by the passive plus the participle "expected"',
            'That the scheme has no cost',
            'That the writer opposes the scheme',
          ],
          answer: 1,
          explain:
            'Passive plus "expected" lets the reporter report a figure without owning it. Compare "will cost".',
        },
        {
          prompt: 'Which feature makes the estimate sound official rather than personal?',
          options: [
            'The adjective "national"',
            'The collective noun "authorities"',
            'The initialism GPs',
            'The preposition "under"',
          ],
          answer: 1,
          explain:
            'Attributing a figure to an unnamed collective gives it institutional weight.',
        },
      ],
      teach:
        'Health and policy reporting runs on numbers and hedges. Whenever you see a passive plus a participle of estimation, you are looking at a hedge.',
    },
    {
      id: 'n08',
      title: 'Court report',
      text: 'A 34-year-old man has been charged following an alleged assault at a shopping centre in Frankston on Saturday evening. Police allege that the incident began after an argument over a parking space. The accused appeared briefly in the Magistrates Court on Monday, where he was granted bail on condition that he report to a local station weekly. The matter has been adjourned until March.',
      source: 'Court report (constructed)',
      field: 'Courts and crime reporting',
      mode: 'written',
      setting: 'written, journalism',
      tenor: 'distant, court reporter to general public',
      register: 'formal-register',
      registerNote:
        'Legally cautious prose: hedges, abstractions and the passive voice throughout.',
      dominantFunction: 'referential',
      functionNote:
        'It reports charges and procedural steps, claiming nothing that is not on the court record.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Frankston', 'Saturday', 'Monday', 'March', 'Magistrates Court'],
          note: 'Place, times and the name of the court.',
        },
        {
          feature: 'euphemism',
          spans: ['the incident', 'the matter'],
          note: 'Neutral abstractions standing in for a serious allegation.',
        },
        { feature: 'jargon', spans: ['alleged', 'bail', 'adjourned'], note: 'Legal terminology of the court process.' },
        {
          feature: 'verb-auxiliary',
          spans: ['was', 'has', 'been'],
          note: 'Building the passive voice that carries the whole report.',
        },
        {
          feature: 'preposition',
          spans: ['at', 'following', 'after', 'over', 'until'],
          note: 'Five different relations of time and place.',
        },
        {
          feature: 'noun-abstract',
          spans: ['condition'],
          note: 'A legal abstraction that sounds milder than "requirement".',
        },
        { feature: 'determiner', spans: ['34-year-old'], note: 'Identifying detail without naming the person.' },
        {
          feature: 'conjunction-subordinating',
          spans: ['that', 'where'],
          note: '"that" appears twice, each time introducing a reported claim.',
        },
        {
          feature: 'adjective',
          spans: ['local', 'weekly'],
          note: 'Also "alleged", which is doing a great deal of legal work.',
        },
        { feature: 'noun-collective', spans: ['Police'], note: 'The institution that makes the allegation.' },
      ],
      quiz: [
        {
          prompt: 'Why does the report repeatedly use "alleged" and "allege"?',
          options: [
            'To make the report longer',
            'To preserve the presumption of innocence and protect the outlet legally',
            'Because it is a euphemism',
            'Because the events are fictional',
          ],
          answer: 1,
          explain:
            'Legal caution produces a specific register: hedge verbs, attribution and the passive voice.',
        },
        {
          prompt: '"the incident" and "the matter" are examples of which feature?',
          options: ['Hyperbole', 'Euphemism', 'Metonymy', 'Jargon'],
          answer: 1,
          explain:
            'Both are deliberately vague, neutral nouns used in place of a confronting description.',
        },
        {
          prompt: 'What does "he was granted bail" demonstrate?',
          options: [
            'Active voice with a clear agent',
            'Passive voice with the agent suppressed',
            'An imperative',
            'A phrasal verb',
          ],
          answer: 1,
          explain:
            'The court is the agent but goes unmentioned, which keeps the focus on the accused.',
        },
      ],
      teach:
        'Court reporting shows how legal caution shapes grammar. Hedges, passives and abstractions are not vagueness here — they are a professional obligation.',
    },
    {
      id: 'n09',
      title: 'How interest rates work',
      text: 'When the Reserve Bank lifts the cash rate, borrowers on variable mortgages typically pay more each month, while savers with term deposits may earn slightly more. The bank raises or lowers the rate to influence inflation, which it aims to keep between two and three per cent over the medium term. Increases tend to slow spending because households have less money available after their repayments. The effect is rarely immediate, however, since most lenders pass on changes within a few weeks.',
      source: 'Explanatory finance article (constructed)',
      field: 'Personal finance',
      mode: 'written',
      setting: 'written, explainer journalism',
      tenor: 'helpful, specialist journalist to general reader',
      register: 'neutral-register',
      registerNote:
        'Explainer prose: technical terms, but short clauses and hedges keep it digestible.',
      dominantFunction: 'referential',
      functionNote:
        'It explains a cause-and-effect mechanism so the reader understands it.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        { feature: 'noun-proper', spans: ['Reserve Bank'], note: 'The institution, named in full.' },
        {
          feature: 'jargon',
          spans: ['cash rate', 'variable mortgages', 'inflation'],
          note: 'Technical terms that the rest of the paragraph works to explain.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['When', 'while', 'because', 'since'],
          note: 'Four subordinators, each signalling a different relationship.',
        },
        {
          feature: 'discourse-marker',
          spans: ['however'],
          note: 'Flags the qualification that stops the explanation being too simple.',
        },
        {
          feature: 'adjective-comparative',
          spans: ['more', 'less'],
          note: 'Comparatives are the natural grammar of economic trade-offs.',
        },
        {
          feature: 'adverb',
          spans: ['typically', 'slightly', 'rarely'],
          note: 'All three are hedges that keep the generalisation honest.',
        },
        {
          feature: 'determiner',
          spans: ['two and three per cent'],
          note: 'The target range, given in the official formula.',
        },
        {
          feature: 'verb-lexical',
          spans: ['lifts', 'raises', 'lowers', 'slow', 'pass'],
          note: 'Concrete process verbs carrying the mechanism.',
        },
        {
          feature: 'antonym',
          spans: ['raises or lowers'],
          note: 'Matching opposites used to define the full range of the bank’s options.',
        },
        { feature: 'verb-modal', spans: ['may'], note: 'Possibility, not guarantee, for savers.' },
      ],
      quiz: [
        {
          prompt: 'Why does the explainer use "typically", "tend to" and "rarely"?',
          options: [
            'To sound uncertain and weak',
            'To hedge claims so that general statements remain defensible',
            'Because they are jargon',
            'To make the sentences longer',
          ],
          answer: 1,
          explain:
            'Good explanation is careful. Hedges protect the writer from overgeneralising while keeping the mechanism clear.',
        },
        {
          prompt: 'What is the function of the pair "raises or lowers"?',
          options: [
            'It is an oxymoron',
            'It uses antonyms to define both directions of a single mechanism',
            'It is a phrasal verb',
            'It is a euphemism',
          ],
          answer: 1,
          explain:
            'Antonym pairs are an efficient way to describe a scale — and they create lexical cohesion too.',
        },
        {
          prompt: 'Which word class is doing the most explanatory work here?',
          options: ['Interjections', 'Subordinating conjunctions', 'Pronouns', 'Numerals'],
          answer: 1,
          explain:
            'When, while, because and since each spell out a different logical link. Cause and effect in writing is mostly conjunction work.',
        },
      ],
      teach:
        'Explainers are a hybrid register: technical lexis from the field, but short clauses, hedges and second-person-free clarity borrowed from speech.',
    },
    {
      id: 'n10',
      title: 'Actor interview write-up',
      text: 'Sitting in a hotel room in Sydney, 29-year-old actor Maya Chen admits she nearly turned down the role that made her famous. She says she was terrified at the time, and laughs while recalling it. Since then she has appeared in three feature films and a critically acclaimed television series. She describes fame as exhausting but insists that the work itself keeps her grounded. Her latest film opens nationally next Thursday.',
      source: 'Celebrity profile (constructed)',
      field: 'Arts and entertainment',
      mode: 'written',
      setting: 'written, feature journalism',
      tenor: 'warm, profile writer to lifestyle reader',
      register: 'neutral-register',
      registerNote:
        'Feature prose: standard grammar with a long anaphoric pronoun chain and vivid verbs.',
      dominantFunction: 'referential',
      functionNote:
        'It reports a person’s account of her career, with expressive colour from her own words.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 2,
      gold: [
        { feature: 'noun-proper', spans: ['Sydney', 'Maya Chen'], note: 'Place name and full personal name.' },
        { feature: 'determiner', spans: ['29-year-old', 'three'], note: 'Age and count as identifying detail.' },
        { feature: 'hyperbole', spans: ['terrified'], note: 'Emphatic exaggeration inside reported speech.' },
        { feature: 'verb-phrasal', spans: ['turned down'], note: 'A phrasal verb of refusal.' },
        {
          feature: 'verb-lexical',
          spans: ['admits', 'insists', 'describes', 'laughs'],
          note: 'Reporting verbs — note that "admits" presupposes reluctance.',
        },
        {
          feature: 'adjective',
          spans: ['acclaimed', 'exhausting', 'grounded'],
          note: 'Evaluative adjectives, most of them inside her own quoted opinion.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and', 'but'],
          note: 'Balancing clauses and contrasting them, which is what profiles do.',
        },
        { feature: 'preposition', spans: ['Since', 'as'], note: 'Time and role: "as exhausting".' },
        { feature: 'noun-abstract', spans: ['fame'], note: 'The abstraction the story is really about.' },
        { feature: 'adverb', spans: ['nearly', 'nationally'], note: 'One hedges, one widens the scope.' },
        {
          feature: 'anaphora',
          spans: ['Her'],
          note: 'The pronoun chain she…she…Her binds the paragraph together.',
        },
      ],
      quiz: [
        {
          prompt: 'What does the anaphoric pronoun chain (she…she…Her) achieve?',
          options: [
            'It introduces new participants',
            'It creates cohesion by keeping the reader anchored to one person',
            'It makes the register formal',
            'It replaces the need for verbs',
          ],
          answer: 1,
          explain:
            'Anaphora is the default means of textual cohesion: pronouns point back rather than repeating names.',
        },
        {
          prompt: 'Why does the writer choose "admits" rather than "says"?',
          options: [
            'Because it is shorter',
            'Because it presupposes reluctance, which makes the story more human',
            'Because it is a modal verb',
            'Because "says" is informal',
          ],
          answer: 1,
          explain:
            'Reporting verbs carry presuppositions. "Admits" implies she might not have wanted to tell us.',
        },
        {
          prompt: 'Which sentence is least referential?',
          options: [
            'Her latest film opens nationally next Thursday.',
            'She describes fame as exhausting but insists that the work itself keeps her grounded.',
            'Since then she has appeared in three feature films and a critically acclaimed television series.',
            'Sitting in a hotel room in Sydney, 29-year-old actor Maya Chen admits she nearly turned down the role.',
          ],
          answer: 1,
          explain:
            'It reports feelings and attitudes, which shades towards the expressive. The rest report facts and events.',
        },
      ],
      teach:
        'Profiles combine referential reporting with expressive material borrowed from the subject. The reporting verb you choose decides how much of that colour you endorse.',
    },
    {
      id: 'n11',
      title: 'Opinion column on housing',
      text: 'Nobody under forty can buy a house in this city any more, and pretending otherwise is a luxury only homeowners can afford. Successive governments have tinkered at the edges while prices doubled. What we need is not another inquiry but a serious commitment to building homes that ordinary people can actually live in. Until that happens, an entire generation will keep paying rent to a landlord who bought the same house for a third of the price.',
      source: 'Opinion column (constructed)',
      field: 'Housing policy and social commentary',
      mode: 'written',
      setting: 'written, opinion journalism',
      tenor: 'argumentative, columnist to engaged public',
      register: 'neutral-register',
      registerNote:
        'Columnists use standard English but with figurative, evaluative and direct language.',
      dominantFunction: 'conative',
      functionNote:
        'It argues. Every sentence is designed to move the reader towards a position.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'hyperbole',
          spans: ['Nobody under forty can buy a house'],
          note: 'Strictly untrue, and the exaggeration is the point.',
        },
        {
          feature: 'connotation',
          spans: ['luxury', 'ordinary people'],
          note: 'One word accuses, the other claims solidarity.',
        },
        {
          feature: 'verb-modal',
          spans: ['can', 'will'],
          note: '"can" appears twice: once in the hyperbolic claim, once in the proposed solution.',
        },
        {
          feature: 'antonym',
          spans: ['not another inquiry but a serious commitment'],
          note: 'Opposites in a corrective contrast: what is being rejected against what is demanded.',
        },
        {
          feature: 'pronoun',
          spans: ['Nobody', 'we'],
          note: 'One excludes the comfortable, the other recruits the reader.',
        },
        { feature: 'determiner', spans: ['forty', 'a third'], note: 'Both used rhetorically rather than precisely.' },
        {
          feature: 'conjunction-subordinating',
          spans: ['while', 'Until', 'that'],
          note: '"that" appears twice, introducing the homes described and the moment named.',
        },
        {
          feature: 'noun-abstract',
          spans: ['commitment', 'generation'],
          note: 'Abstract nouns that make the demand sound like a moral principle.',
        },
        {
          feature: 'verb-lexical',
          spans: ['tinkered', 'doubled', 'building', 'live', 'paying'],
          note: 'Action verbs carrying the argument’s momentum.',
        },
        {
          feature: 'metaphor',
          spans: ['tinkered at the edges'],
          note: 'Policy as small repairs to a broken machine — the metaphor does the criticising.',
        },
        {
          feature: 'irony',
          spans: ['a landlord who bought the same house'],
          note: 'The flat statement of an unfair fact is more cutting than complaint would be.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is this paragraph conative rather than referential?',
          options: [
            'Because it contains numbers',
            'Because it argues for a position and works to change the reader’s mind',
            'Because it uses the past tense',
            'Because it is published in a newspaper',
          ],
          answer: 1,
          explain:
            'Columns use the same grammar as news but the purpose is persuasion. Function is about what an utterance is doing, not what it looks like.',
        },
        {
          prompt: 'What is "tinkered at the edges" an example of?',
          options: [
            'Onomatopoeia',
            'A metaphor implying that the reforms were trivial and superficial',
            'Jargon',
            'A euphemism',
          ],
          answer: 1,
          explain:
            'Figurative verb choice can carry more criticism than an explicit accusation, which is useful when you want to sound reasonable.',
        },
        {
          prompt: 'Which pronoun choices build solidarity with the reader?',
          options: [
            'Nobody and we',
            'it and that',
            'a and the',
            'while and until',
          ],
          answer: 0,
          explain:
            '"Nobody" identifies an out-group, "we" invites the reader into the writer’s position. Pronouns are persuasive tools.',
        },
      ],
      teach:
        'Opinion writing is where the full toolkit appears at once: hyperbole, loaded language, metaphor, irony and pronouns of solidarity. Learn to name them, and any column becomes analysable.',
    },
    {
      id: 'n12',
      title: 'Battery breakthrough report',
      text: 'Researchers at Monash University have developed a battery that can be charged in under five minutes without losing capacity over repeated cycles. According to the team’s paper, published in Nature, the design replaces a lithium component with a cheaper sodium-based alternative. Independent experts have described the findings as promising, although they caution that scaling the process for commercial manufacturing remains untested. The team expects to begin pilot production within two years.',
      source: 'Science news report (constructed)',
      field: 'Science and technology',
      mode: 'written',
      setting: 'written, science journalism',
      tenor: 'neutral, science reporter to general public',
      register: 'formal-register',
      registerNote:
        'Science reporting: technical lexis, authoritative sourcing and careful hedging.',
      dominantFunction: 'referential',
      functionNote:
        'It reports a finding, its source and the caveats attached to it.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Monash University', 'Nature'],
          note: 'An institution and a journal, both named as authority.',
        },
        {
          feature: 'jargon',
          spans: ['lithium', 'sodium-based', 'capacity'],
          note: 'Chemistry and engineering terms the reader is trusted to follow.',
        },
        {
          feature: 'determiner',
          spans: ['five minutes', 'two years'],
          note: 'One performance claim and one timeline.',
        },
        { feature: 'adjective-comparative', spans: ['cheaper'], note: 'The commercial advantage in one word.' },
        { feature: 'verb-modal', spans: ['can'], note: 'Possibility established by the test data.' },
        {
          feature: 'verb-auxiliary',
          spans: ['have', 'be'],
          note: '"have" builds two present perfects; "be" forms the passive "can be charged".',
        },
        { feature: 'preposition', spans: ['over', 'within'], note: 'Duration and deadline.' },
        {
          feature: 'discourse-marker',
          spans: ['According to'],
          note: 'Sources the claim to the published paper.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that', 'although'],
          note: '"that" appears twice — one relative clause, one reported caution.',
        },
        {
          feature: 'adjective',
          spans: ['promising', 'independent', 'untested'],
          note: '"independent" and "untested" together perform the hedging.',
        },
        {
          feature: 'noun-abstract',
          spans: ['findings', 'production'],
          note: 'Processes and results packed into nouns.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the report attribute the assessment to "Independent experts"?',
          options: [
            'Because the researchers refused to comment',
            'Because unattached expert endorsement is a strong credibility appeal',
            'Because experts are always right',
            'Because it is a euphemism',
          ],
          answer: 1,
          explain:
            'Attribution to independent authority is one of the most effective persuasion strategies in science reporting — and it also hedges the claim.',
        },
        {
          prompt: 'What do "can be charged" and "remains untested" have in common?',
          options: [
            'Both are imperatives',
            'Both withhold certainty: a modal of possibility and a hedge verb',
            'Both are numerals',
            'Both are informal',
          ],
          answer: 1,
          explain:
            'Science writing balances the exciting claim (can be charged in five minutes) against the honest caveat (untested at scale).',
        },
        {
          prompt: 'Which feature signals that the paragraph is concessive at the end?',
          options: ['According to', 'although', 'can', 'team’s'],
          answer: 1,
          explain:
            '"although" structures the whole closing sentence as claim plus qualification.',
        },
      ],
      teach:
        'Science reporting is the clearest case of hedging as professional practice. Every striking claim is paired with an attribution and a caveat.',
    },
  ],
}
