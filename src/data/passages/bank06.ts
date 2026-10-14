import type { PassageBank } from '../../lib/passages'

/**
 * Tier 3 — formal, academic, institutional and workplace registers.
 *
 * Every paragraph here is deliberately saturated with the markers that signal
 * social distance and public purpose: nominalisation, complex prepositions,
 * subordination, passive constructions, jargon and hedged evaluative language.
 */
export const bank06: PassageBank = {
  id: 'formal',
  label: 'Formal & academic',
  blurb:
    'Long paragraphs of academic, legal, corporate and institutional writing. This is where formality markers cluster: nominalisation, complex prepositions, jargon and layered subordination.',
  passages: [
    {
      id: 'f01',
      title: 'University essay introduction',
      text: 'Since the emergence of mass social media, public debate about the regulation of digital speech has intensified considerably. Although Australian legislatures have amended their statutes several times, existing provisions remain inadequate, because they protect vulnerable users only where harm can be demonstrated beyond doubt. While such caution is defensible, it leaves platforms largely unpoliced. This essay contends, therefore, that carefully targeted reform, rather than blanket prohibition, offers the most workable pathway forward.',
      source: 'Opening paragraph of an undergraduate politics essay (constructed)',
      field: 'Politics and media law',
      mode: 'written',
      setting: 'written, academic',
      tenor: 'distant, writer to an academic audience',
      register: 'formal-register',
      registerNote:
        'Nominalisation, subordination and hedging all pull in the same formal direction.',
      dominantFunction: 'referential',
      functionNote:
        'The paragraph advances a verifiable argument. Its evaluations are delivered as analysis rather than feeling.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'preposition',
          spans: ['Since', 'of', 'about', 'beyond'],
          note: 'Ordinary prepositions keep the argument anchored in time and relation.',
        },
        {
          feature: 'preposition-complex',
          spans: ['rather than'],
          note: 'A multi-word preposition marking a contrast between two options.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['Although', 'because', 'While'],
          note: 'Each one opens a dependent clause, which is what makes the sentences complex.',
        },
        {
          feature: 'noun-abstract',
          spans: ['emergence', 'debate', 'regulation', 'reform', 'prohibition'],
          note: 'Processes turned into things — the signature of academic prose.',
        },
        {
          feature: 'noun-common',
          spans: ['media', 'legislatures', 'statutes', 'provisions', 'users', 'platforms'],
          note: 'Concrete and institutional participants in the debate.',
        },
        {
          feature: 'adverb',
          spans: ['considerably', 'largely'],
          note: 'Degree adverbs modifying the verbs rather than describing anything.',
        },
        {
          feature: 'adjective',
          spans: ['vulnerable', 'targeted', 'workable'],
          note: 'Evaluative adjectives doing quiet persuasive work.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['have', 'has', 'be', 'is'],
          note: 'Auxiliaries carry tense and voice, and "be" forms the passive "be demonstrated".',
        },
        {
          feature: 'verb-lexical',
          spans: ['intensified', 'amended', 'protect', 'demonstrated', 'contends', 'offers', 'leaves'],
          note: 'Note how many of these are Latinate — a reliable formality marker.',
        },
        {
          feature: 'discourse-marker',
          spans: ['therefore'],
          note: 'Signals the logical conclusion the writer wants the reader to accept.',
        },
        {
          feature: 'anaphora',
          spans: ['they', 'it', 'their'],
          note: 'Pronouns reaching back to already mentioned referents, tying the clauses together.',
        },
        {
          feature: 'noun-phrase',
          spans: ['the regulation of digital speech'],
          note: 'A long, pre- and post-modified noun phrase packing a whole clause of meaning.',
        },
        {
          feature: 'clause',
          spans: ['Although Australian legislatures have amended their statutes several times'],
          note: 'A dependent clause: it has a subject and verb but cannot stand alone.',
        },
        {
          feature: 'connotation',
          spans: ['inadequate', 'unpoliced'],
          note: 'Evaluation smuggled in as description — a very common academic move.',
        },
      ],
      quiz: [
        {
          prompt: 'Which feature most clearly signals the formality of this paragraph?',
          options: [
            'The use of prepositions',
            'Heavy nominalisation such as "the regulation of digital speech"',
            'The use of pronouns',
            'The length of the sentences',
          ],
          answer: 1,
          explain:
            'Nominalisation compresses processes into abstract nouns, which raises density and formality together.',
        },
        {
          prompt: 'What job does "therefore" do in the final sentence?',
          options: [
            'It introduces a contrast',
            'It marks an inference the writer draws from the preceding evidence',
            'It softens a command',
            'It signals a new topic',
          ],
          answer: 1,
          explain:
            'Discourse markers such as therefore, consequently and thus organise a claim and its support.',
        },
        {
          prompt: 'Why is "Although Australian legislatures have amended their statutes" not a sentence?',
          options: [
            'It has no verb',
            'It has no subject',
            'It begins with a subordinating conjunction, so it is a dependent clause',
            'It is too short',
          ],
          answer: 2,
          explain:
            'Subordinating conjunctions create dependent clauses. Remove the conjunction and it could stand alone.',
        },
      ],
      teach:
        'Formal academic writing hides its evaluation inside abstractions and subordination. To analyse it, undo the nominalisation: who does what to whom?',
    },
    {
      id: 'f02',
      title: 'Scientific abstract',
      text: 'Background: COPD (chronic obstructive pulmonary disease) is a leading cause of hospital admission among Australians over sixty-five. This study investigated whether a structured pulmonary rehabilitation programme, delivered in the community, reduces readmission rates. Methods: Two hundred and forty participants were recruited between March and November and were randomised into intervention and control groups. Results: Readmission within ninety days fell by twenty-two per cent among participants who completed the programme, although the effect diminished in patients with severe comorbidities. Conclusion: Community-based rehabilitation appears effective, and further trials should evaluate cost-effectiveness.',
      source: 'Abstract of a clinical research paper (constructed)',
      field: 'Health and medicine',
      mode: 'written',
      setting: 'written, scientific',
      tenor: 'impersonal, researchers to researchers',
      register: 'formal-register',
      registerNote:
        'Compressed, impersonal and jargon-dense, with headings doing the structural work.',
      dominantFunction: 'referential',
      functionNote:
        'Every clause is a reportable finding. Even the recommendation is framed as an evidence claim.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'initialism',
          spans: ['COPD'],
          note: 'Read letter by letter: see-oh-pee-dee, so it is an initialism, not an acronym.',
        },
        {
          feature: 'jargon',
          spans: [
            'chronic obstructive pulmonary disease',
            'pulmonary rehabilitation',
            'readmission rates',
            'comorbidities',
            'cost-effectiveness',
          ],
          note: 'Technical lexis that only a specialist discourse community would recognise.',
        },
        {
          feature: 'noun-abstract',
          spans: ['rehabilitation', 'effect', 'cost-effectiveness'],
          note: 'Abstract process and quality nouns, typical of scientific reporting.',
        },
        {
          feature: 'noun-common',
          spans: ['study', 'participants', 'groups', 'patients', 'trials', 'community'],
          note: 'The concrete participants and instruments of the study.',
        },
        {
          feature: 'adjective',
          spans: ['structured', 'severe', 'effective', 'leading'],
          note: 'Clinical classification adjectives.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'were'],
          note: '"were recruited" and "were randomised" are passives — the agent is deliberately removed.',
        },
        {
          feature: 'verb-modal',
          spans: ['should'],
          note: 'A modest, hedged recommendation rather than an instruction.',
        },
        {
          feature: 'verb-lexical',
          spans: [
            'investigated',
            'reduces',
            'recruited',
            'randomised',
            'fell',
            'completed',
            'diminished',
            'appears',
            'evaluate',
          ],
          note: 'Most of these are Latinate verbs in the past tense — the grammar of completed research.',
        },
        {
          feature: 'determiner',
          spans: ['Two hundred and forty', 'twenty-two', 'ninety', 'sixty-five'],
          note: 'Precision is part of the referential claim: numbers make the writing verifiable.',
        },
        {
          feature: 'noun-phrase',
          spans: ['a structured pulmonary rehabilitation programme'],
          note: 'A heavily pre-modified noun phrase — three modifiers before the head noun.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['programme'],
          note: 'Repeating the key term avoids ambiguity where a pronoun would be unclear.',
        },
        {
          feature: 'preposition',
          spans: ['among', 'between', 'into', 'within', 'over'],
          note: 'Prepositions carry the methodological detail of when, where and among whom.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['whether', 'although', 'who'],
          note: '"whether" and "although" build the complex sentences that frame the hypothesis and the caveat.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Background', 'Methods', 'Results', 'Conclusion'],
          note: 'Structural labels that signpost the shape of the argument for a scanning reader.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the abstract use passive constructions such as "were recruited"?',
          options: [
            'Because the researchers are unknown',
            'Because it shifts attention from the researchers to the method, which suits scientific objectivity',
            'Because it is shorter',
            'Because it sounds more friendly',
          ],
          answer: 1,
          explain:
            'The passive removes the agent, which is exactly what an impersonal scientific register wants.',
        },
        {
          prompt: 'Why is COPD an initialism rather than an acronym?',
          options: [
            'Because it is in capitals',
            'Because it is pronounced letter by letter rather than as a word',
            'Because it describes a disease',
            'Because it has four letters',
          ],
          answer: 1,
          explain:
            'Compare NAPLAN (an acronym, said as a word) with COPD (an initialism, said as letters).',
        },
        {
          prompt: 'Which term best describes the language in "chronic obstructive pulmonary disease"?',
          options: ['Slang', 'Jargon', 'Colloquialism', 'Euphemism'],
          answer: 1,
          explain:
            'Jargon is the specialised lexis of a discourse community — efficient inside it, excluding outside it.',
        },
      ],
      teach:
        'Academic abstracts are engineered for referential function: passive voice, Latinate verbs, precise numerals and technical lexis all work to make the claim sound objective.',
    },
    {
      id: 'f03',
      title: 'Legal contract clause',
      text: 'The Tenant must maintain the premises in a reasonable state of repair throughout the term of this agreement. In the event of damage caused by the Tenant, the Tenant shall, within fourteen days of written notice, either rectify the damage or reimburse the Landlord for the reasonable cost of rectification. Notwithstanding the foregoing, the Tenant shall not be liable for fair wear and tear, nor for damage arising from any defect that the Landlord was obliged to repair but did not.',
      source: 'Residential tenancy agreement (constructed)',
      field: 'Law and housing',
      mode: 'written',
      setting: 'written, legal',
      tenor: 'distant and binding, contract to signatory',
      register: 'formal-register',
      registerNote:
        'Archaic modals, defined terms repeated in full instead of pronouns, and stacked qualifying phrases.',
      dominantFunction: 'referential',
      functionNote:
        'The clause exists to fix obligations precisely, so it states rather than persuades.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'verb-modal',
          spans: ['must', 'shall'],
          note: '"shall" is the archaic legal modal of binding obligation — its only surviving stronghold.',
        },
        {
          feature: 'preposition-complex',
          spans: ['In the event of', 'Notwithstanding'],
          note: 'Formal, multi-word and slightly archaic — exactly the register legal drafting prefers.',
        },
        {
          feature: 'preposition',
          spans: ['throughout', 'within', 'by', 'from'],
          note: 'Prepositions fix timescales and causal chains with no room for interpretation.',
        },
        {
          feature: 'noun-abstract',
          spans: ['repair', 'agreement', 'notice', 'rectification'],
          note: '"rectification" is the nominalised form of "rectify" — nominalisation in legal dress.',
        },
        {
          feature: 'noun-common',
          spans: ['Tenant', 'Landlord', 'premises', 'defect'],
          note: 'Defined terms, each capitalised and repeated in full to remove all ambiguity.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['be', 'was'],
          note: '"be liable" and "was obliged" build a passive and a past obligation.',
        },
        {
          feature: 'verb-lexical',
          spans: ['maintain', 'rectify', 'reimburse', 'arising'],
          note: 'Latinate verbs of obligation — Germanic "help out" would be unthinkable here.',
        },
        {
          feature: 'adjective',
          spans: ['reasonable', 'written', 'liable'],
          note: '"reasonable" is a deliberately elastic legal adjective that leaves room for argument.',
        },
        {
          feature: 'adverb',
          spans: ['not'],
          note: 'Negation is doing heavy lifting: it limits the obligation being created.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['either', 'or', 'nor', 'but'],
          note: 'Options and carve-outs are joined with coordinating conjunctions.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that'],
          note: 'Introduces the restrictive clause that limits which defect counts.',
        },
        {
          feature: 'idiom',
          spans: ['fair wear and tear'],
          note: 'A fixed legal idiom — you cannot substitute "normal damage" and keep the meaning.',
        },
        {
          feature: 'jargon',
          spans: ['rectification', 'liable', 'premises'],
          note: 'Legal lexis that carries a precise technical sense in court.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['damage'],
          note: 'The repeated key term keeps the chain of liability unbroken.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the clause repeat "the Tenant" instead of using "they"?',
          options: [
            'Because pronouns did not exist',
            'Because repeating the defined term removes any chance of ambiguity about who is bound',
            'Because it is shorter',
            'Because it is more polite',
          ],
          answer: 1,
          explain:
            'Legal drafting sacrifices cohesion devices such as pronouns in favour of absolute reference.',
        },
        {
          prompt: 'What register work is "shall" doing?',
          options: [
            'It marks a polite suggestion',
            'It marks a binding legal obligation',
            'It marks future time only',
            'It marks uncertainty',
          ],
          answer: 1,
          explain:
            'In legal usage "shall" creates obligation, which is why it survives against ordinary contemporary usage.',
        },
        {
          prompt: 'What is the effect of "Notwithstanding the foregoing"?',
          options: [
            'It introduces an example',
            'It signals that what follows overrides what came before',
            'It marks a question',
            'It softens the obligation',
          ],
          answer: 1,
          explain:
            'It is a formal override marker — a very useful phrase to recognise in legal and political texts.',
        },
      ],
      teach:
        'Legal language trades cohesion and brevity for precision. Repetition, archaic modals and nominalisation are all consequences of that trade.',
    },
    {
      id: 'f04',
      title: 'Government policy statement',
      text: 'Notwithstanding recent improvements in national employment figures, the Government acknowledges that cost-of-living pressures continue to affect many households across the state. Accordingly, additional relief will be provided, although the precise form of that assistance is still under consideration. Consultation with community organisations, industry bodies and local councils has already commenced, and findings are expected to inform the final design of the package. Further details, including eligibility criteria and timelines, will be released in the coming months.',
      source: 'Ministerial media release (constructed)',
      field: 'Government and social policy',
      mode: 'written',
      setting: 'written, public affairs',
      tenor: 'distant but reassuring, government to public',
      register: 'formal-register',
      registerNote:
        'Abstraction and hedging let the writer promise action without committing to detail.',
      dominantFunction: 'referential',
      functionNote:
        'It reports decisions. The persuasive work is done by what is left vague rather than by loaded language.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'preposition-complex',
          spans: ['Notwithstanding'],
          note: 'A single-word but distinctly formal preposition meaning "in spite of".',
        },
        {
          feature: 'preposition',
          spans: ['in', 'across', 'under', 'with', 'including'],
          note: '"in", "with" and "across" chain the policy details together.',
        },
        {
          feature: 'noun-abstract',
          spans: ['improvements', 'pressures', 'relief', 'assistance', 'consideration', 'eligibility'],
          note: 'Abstract nouns let the statement sound substantive while staying unspecific.',
        },
        {
          feature: 'noun-common',
          spans: ['figures', 'households', 'organisations', 'councils', 'criteria', 'timelines'],
          note: 'Concrete nouns that make the policy sound grounded and consultative.',
        },
        {
          feature: 'compounding',
          spans: ['cost-of-living'],
          note: 'A hyphenated compound whose hyphen survives from the original phrase "cost of living".',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'A bare promise of future action — stronger than "may" without being an instruction.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'has', 'are', 'be'],
          note: '"is still under consideration" is a passive that hides who is doing the considering.',
        },
        {
          feature: 'verb-lexical',
          spans: ['acknowledges', 'continue', 'affect', 'commenced', 'inform', 'released'],
          note: 'Mostly Latinate formal verbs; "affect" in particular replaces a dozen possible concrete verbs.',
        },
        {
          feature: 'adjective',
          spans: ['recent', 'national', 'precise', 'final'],
          note: 'Classifying adjectives that add texture without adding commitment.',
        },
        {
          feature: 'adverb',
          spans: ['already', 'still'],
          note: 'Time and aspect adverbs that suggest momentum without evidence.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Accordingly', 'Further'],
          note: 'Signposts that make the statement read as a structured argument.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['although'],
          note: 'Concedes a limitation while the main clause keeps the promise intact.',
        },
        {
          feature: 'synonym',
          spans: ['assistance', 'relief'],
          note: 'Near-synonyms create a lexical chain, tying the second sentence to the first.',
        },
      ],
      quiz: [
        {
          prompt: 'What effect does hedging have in this statement?',
          options: [
            'It makes the writing more casual',
            'It lets the writer sound responsive while avoiding any specific commitment',
            'It adds factual detail',
            'It signals a change of topic',
          ],
          answer: 1,
          explain:
            '"Under consideration", "expected to" and "in the coming months" all defer actual accountability.',
        },
        {
          prompt: 'Why does the statement favour abstract nouns such as "assistance"?',
          options: [
            'Because they are shorter',
            'Because they name a benefit without specifying its size or form',
            'Because they are informal',
            'Because they avoid subordination',
          ],
          answer: 1,
          explain:
            'Abstraction is a common strategy in institutional language: it sounds positive and commits to nothing.',
        },
        {
          prompt: 'The phrase "is still under consideration" is an example of which construction?',
          options: ['Imperative', 'Passive voice', 'Cleft sentence', 'Minor clause'],
          answer: 1,
          explain:
            'The agent is deleted, so no one has to be accountable for the delay. Rewrite it as "the Government is still considering" to see the difference.',
        },
      ],
      teach:
        'Institutional language often persuades by omission. Track what is abstracted, what is passivised and what is deferred.',
    },
    {
      id: 'f05',
      title: 'Medical information leaflet',
      text: 'Metformin is commonly prescribed to manage type 2 diabetes. The tablets should be taken with food, usually once or twice a day, because taking them on an empty stomach may cause nausea. If you experience unusual muscle pain, difficulty breathing or persistent fatigue, contact your doctor immediately, as these symptoms may indicate a rare but serious complication. Do not stop taking this medicine without medical advice. Most people tolerate metformin well, and any side effects are usually mild and temporary.',
      source: 'Consumer medicine information leaflet (constructed)',
      field: 'Health information',
      mode: 'written',
      setting: 'written, instructional',
      tenor: 'supportive but impersonal, health service to patient',
      register: 'formal-register',
      registerNote:
        'Informative but carefully impersonal: the patient is addressed directly without familiarity.',
      dominantFunction: 'referential',
      functionNote:
        'It supplies instructions and risk information. The polite tone is a matter of tenor, not function.',
      dominantSentenceType: 'imperative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'verb-modal',
          spans: ['should', 'may'],
          note: 'Modals of recommendation and possibility, kept deliberately provisional.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'be', 'are'],
          note: '"is prescribed" and "be taken" are passives that keep the medicine, not the doctor, as the subject.',
        },
        {
          feature: 'verb-lexical',
          spans: [
            'prescribed',
            'manage',
            'taken',
            'cause',
            'experience',
            'contact',
            'indicate',
            'stop',
            'tolerate',
          ],
          note: 'Latinate clinical verbs, except "stop" and "tolerate", which are the plainer Germanic choice.',
        },
        {
          feature: 'noun-proper',
          spans: ['Metformin'],
          note: 'A brand or drug name: capitalised where it is legally defined, lower case thereafter.',
        },
        {
          feature: 'noun-abstract',
          spans: ['nausea', 'fatigue', 'advice', 'complication'],
          note: 'Medical states named as abstract nouns so they can be listed and ranked by severity.',
        },
        {
          feature: 'noun-concrete',
          spans: ['tablets', 'food', 'stomach', 'muscle'],
          note: 'Concrete nouns keep the instructions vivid and easy to picture.',
        },
        {
          feature: 'adjective',
          spans: ['unusual', 'persistent', 'serious', 'mild', 'temporary', 'rare'],
          note: 'Severity and frequency adjectives that help the reader triage a symptom.',
        },
        {
          feature: 'adverb',
          spans: ['commonly', 'immediately', 'well'],
          note: 'Frequency and manner adverbs — a leaflet must be precise about how often and how urgently.',
        },
        {
          feature: 'suffix',
          spans: ["commonly"],
          note: 'The -ly suffix is the most productive adverb-forming morpheme in English.',
        },
        {
          feature: 'determiner',
          spans: ['2'],
          note: 'A figure used inside an established medical term: "type 2 diabetes".',
        },
        {
          feature: 'euphemism',
          spans: ['complication'],
          note: 'A softened clinical term that avoids naming something frightening outright.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['because', 'If', 'as'],
          note: 'Each introduces the condition or reason behind the instruction.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['metformin'],
          note: 'English normally uses pronouns here — "taking it" — so the repetition is functionally necessary.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the leaflet use passive constructions such as "is prescribed"?',
          options: [
            'To hide mistakes',
            'To focus on the medicine and the action rather than on the prescriber',
            'To sound friendlier',
            'Because it is shorter',
          ],
          answer: 1,
          explain:
            'Passive voice promotes the object of the action to subject position, which suits impersonal instructions.',
        },
        {
          prompt: 'Which best describes the word "complication" in this context?',
          options: [
            'A dysphemism',
            'A euphemism that softens a serious medical risk',
            'Slang',
            'A neologism',
          ],
          answer: 1,
          explain:
            'Institutional language manages discomfort with euphemism. "Complication" is far gentler than the reality it names.',
        },
        {
          prompt: 'Which grammatical mood appears in "Do not stop taking this medicine"?',
          options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamative'],
          answer: 2,
          explain:
            'It is an imperative — the only sentence type that issues a direct instruction, and therefore the conative function in grammatical form.',
        },
      ],
      teach:
        'Institutional texts balance two jobs at once: they must be accurate enough to be safe and warm enough to be reassuring. Watch the modal verbs and euphemisms.',
    },
    {
      id: 'f06',
      title: 'Corporate annual report summary',
      text: 'During the reporting period, the Group delivered a solid operational performance notwithstanding challenging trading conditions in the retail sector. Revenue increased by 4.2 per cent, higher than the prior corresponding period, while underlying earnings remained broadly flat. Management has continued to invest in supply chain resilience, with capital expenditure of ninety million dollars committed across three distribution centres. Although margins are expected to remain under pressure, the Board remains confident that the transformation programme will deliver sustainable returns over the medium term.',
      source: 'Annual report summary to shareholders (constructed)',
      field: 'Business and finance',
      mode: 'written',
      setting: 'written, corporate',
      tenor: 'distant and promotional, company to shareholder',
      register: 'formal-register',
      registerNote:
        'Corporate jargon and confident hedging, engineered to sound positive under any conditions.',
      dominantFunction: 'referential',
      functionNote:
        'It reports performance, though the choice of factual framing is itself persuasive.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'noun-collective',
          spans: ['Group', 'Management', 'Board'],
          note: 'Collective nouns let the company act without naming any individual.',
        },
        {
          feature: 'noun-abstract',
          spans: [
            'performance',
            'conditions',
            'resilience',
            'expenditure',
            'margins',
            'pressure',
            'returns',
            'transformation',
          ],
          note: 'Abstract business nouns carry the whole report — this is nominalisation at scale.',
        },
        {
          feature: 'noun-common',
          spans: ['Revenue', 'earnings', 'capital', 'dollars', 'centres', 'period'],
          note: 'The countable terms that give the report its factual feel.',
        },
        {
          feature: 'adjective',
          spans: ['solid', 'challenging', 'underlying', 'flat', 'sustainable'],
          note: '"underlying" is corporate jargon: it signals which numbers the company would prefer you to count.',
        },
        {
          feature: 'adjective-comparative',
          spans: ['higher'],
          note: 'A comparative that invites the reader to make a favourable comparison.',
        },
        {
          feature: 'verb-lexical',
          spans: ['delivered', 'increased', 'remained', 'invest', 'committed', 'deliver'],
          note: 'Action verbs chosen for positive connotation: no one "spent" or "lost" anything here.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'are'],
          note: '"has continued" builds the perfect; "are expected" removes the agent entirely.',
        },
        {
          feature: 'verb-modal',
          spans: ['will'],
          note: 'Projects confidence about the future without any guarantee.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['while', 'Although', 'that'],
          note: 'Subordination lets the bad news sit inside a dependent clause while the main clause reassures.',
        },
        {
          feature: 'preposition',
          spans: ['During', 'across', 'under'],
          note: 'Time, scope and circumstance: three prepositional phrases doing the report’s framing.',
        },
        {
          feature: 'jargon',
          spans: [
            'underlying earnings',
            'capital expenditure',
            'supply chain resilience',
            'medium term',
          ],
          note: 'Insider business phrases that sound precise but resist plain-English translation.',
        },
        {
          feature: 'determiner',
          spans: ['4.2', 'ninety million dollars', 'three'],
          note: 'Numbers lend the referential function its authority.',
        },
        {
          feature: 'adverb',
          spans: ['broadly'],
          note: 'A hedging adverb: "broadly flat" avoids committing to an exact figure.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['period'],
          note: '"the reporting period" and "the prior corresponding period" are linked by repetition.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the persuasive effect of "although margins are expected to remain under pressure"?',
          options: [
            'It makes the failure explicit',
            'It buries the bad news in a dependent clause and then pivots to reassurance',
            'It removes the modality',
            'It repeats the previous sentence',
          ],
          answer: 1,
          explain:
            'Subordination is a subtler persuasive tool than loaded language. The main clause always carries the message the writer wants remembered.',
        },
        {
          prompt: 'What kind of hedging does "broadly flat" perform?',
          options: [
            'It exaggerates the result',
            'It avoids stating an exact figure that could be contrasted unfavourably',
            'It introduces jargon',
            'It changes the tense',
          ],
          answer: 1,
          explain:
            'Vague quantifiers let a writer sound factual while leaving the number unstated.',
        },
        {
          prompt: 'Why is "underlying earnings" more than an ordinary adjective plus noun?',
          options: [
            'Because it is a compound',
            'Because it is jargon: it signals a specific accounting measure that suits the company’s preferred story',
            'Because it is a proper noun',
            'Because it is a modal phrase',
          ],
          answer: 1,
          explain:
            'Jargon is efficient inside a discourse community and opaque outside it — which is precisely its persuasive value here.',
        },
      ],
      teach:
        'Corporate writing is a masterclass in modality and subordination. Ask every time: what is the main clause, and what has been pushed into the dependent one?',
    },
    {
      id: 'f07',
      title: 'Business email rejecting a request',
      text: "Dear Priya, thank you for your proposal regarding the Northern Rivers pilot. After careful consideration, we have decided not to proceed at this stage. Although the concept aligns closely with our strategic priorities, the current budget cycle does not allow for additional commitments beyond those already approved. I appreciate the considerable work that's gone into the submission. We would be glad to revisit the proposal in the next financial year, and I will keep your details on file. Kind regards, Daniel.",
      source: 'Email from a program manager declining a funding request (constructed)',
      field: 'Workplace communication',
      mode: 'written',
      setting: 'written, professional',
      tenor: 'distant but courteous, manager to applicant',
      register: 'formal-register',
      registerNote:
        'Formal politeness, with one deliberate contraction that softens an otherwise distant register.',
      dominantFunction: 'referential',
      functionNote:
        'It delivers a decision. The courtesy work is about maintaining the professional relationship.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Priya', 'Northern Rivers'],
          note: 'Names of a person and a place — they personalise an otherwise impersonal genre.',
        },
        {
          feature: 'noun-abstract',
          spans: ['proposal', 'consideration', 'commitments', 'submission'],
          note: '"consideration" nominalises "we considered" and so does not claim any particular effort.',
        },
        {
          feature: 'verb-modal',
          spans: ['would', 'will'],
          note: '"would be glad" is carefully hypothetical; "will keep" is the only firm promise offered.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['have', 'does', 'be'],
          note: '"have decided" is perfect tense, presenting the decision as complete and closed.',
        },
        {
          feature: 'verb-lexical',
          spans: ['aligns', 'appreciate', 'revisit', 'keep'],
          note: 'Mild, positive verbs throughout — nothing here names a conflict directly.',
        },
        {
          feature: 'adverb',
          spans: ['closely', 'already'],
          note: '"already approved" quietly shifts responsibility onto an earlier decision.',
        },
        {
          feature: 'adjective',
          spans: ['careful', 'strategic', 'current', 'glad', 'considerable', 'additional'],
          note: 'Positive adjectives used as face-saving devices: the rejection is framed as a timing problem.',
        },
        {
          feature: 'preposition',
          spans: ['regarding', 'beyond', 'at', 'on'],
          note: '"regarding" is a participial preposition — common in professional correspondence.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['After', 'Although'],
          note: 'Both introduce the concessions that cushion the refusal.',
        },
        {
          feature: 'interjection',
          spans: ['thank you'],
          note: 'A formulaic phatic expression — it carries social meaning, not information.',
        },
        {
          feature: 'contraction',
          spans: ["that's"],
          note: 'The only contraction in the email, and it lands on the most personal sentence.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['proposal'],
          note: 'Repeating the applicant’s own term shows the proposal was actually read.',
        },
        {
          feature: 'jargon',
          spans: ['budget cycle', 'strategic priorities'],
          note: 'Institutional lexis that makes an internal decision sound principled rather than personal.',
        },
        {
          feature: 'ellipsis',
          spans: ['Kind regards'],
          note: 'A sign-off that drops "with" — conventional ellipsis in emails and letters.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of "Although the concept aligns closely with our strategic priorities"?',
          options: [
            'It accepts the proposal',
            'It concedes value first, which makes the refusal seem reasonable rather than personal',
            'It criticises the applicant',
            'It changes the subject',
          ],
          answer: 1,
          explain:
            'Concession before refusal is a standard face-saving move: the grounds for refusal are shifted onto circumstances, not the applicant.',
        },
        {
          prompt: 'Why does the writer choose "does not allow for" rather than "we will not fund"?',
          options: [
            'It is more accurate',
            'It removes human agency, so no one is refusing',
            'It is shorter',
            'It is more formal',
          ],
          answer: 1,
          explain:
            '"The budget cycle does not allow" makes the refusal structural. Removing the agent is a very common politeness strategy.',
        },
        {
          prompt: 'What register effect does "that\'s" create in this email?',
          options: [
            'It makes the whole email informal',
            'It creates a single moment of warmth that reduces social distance',
            'It is a spelling error',
            'It increases the distance',
          ],
          answer: 1,
          explain:
            'Register is not all-or-nothing. One contraction in an otherwise formal email can signal sincerity — and exam answers love pointing this out.',
        },
      ],
      teach:
        'Politeness in professional writing is usually grammatical: passives, modals, concessions and nominalisation all reduce the force of a refusal without ever naming it.',
    },
    {
      id: 'f08',
      title: 'Formal complaint letter',
      text: 'I am writing to express my considerable dissatisfaction with the service I received at your Chadstone store on 14 June. Despite having paid in full for the installation, I was informed on arrival that no technician had been scheduled, and I was left waiting for more than two hours without explanation. When I finally spoke with a supervisor, I was told that nothing could be done. Such treatment is unacceptable, and I believe your customers deserve considerably better. I therefore request a full refund, together with a written apology, within fourteen days.',
      source: 'Letter of complaint to a retailer (constructed)',
      field: 'Consumer affairs',
      mode: 'written',
      setting: 'written, formal correspondence',
      tenor: 'distant and firm, customer to company',
      register: 'formal-register',
      registerNote:
        'Formal syntax and Latinate lexis carry a complaint that could easily have been shouted.',
      dominantFunction: 'conative',
      functionNote:
        'The letter has one overriding purpose: to make the company act. Everything else supports that demand.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'pronoun',
          spans: ['my', 'your'],
          note: 'First and second person possession turns the complaint into a personal claim against the reader.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['am', 'was', 'had', 'been'],
          note: 'Four passives in a row: "I was informed", "had been scheduled", "I was left", "I was told".',
        },
        {
          feature: 'verb-modal',
          spans: ['could'],
          note: 'Past-form modal reporting what staff claimed was impossible.',
        },
        {
          feature: 'verb-lexical',
          spans: [
            'express',
            'received',
            'informed',
            'scheduled',
            'waiting',
            'spoke',
            'told',
            'request',
          ],
          note: 'Note how many are Latinate: "express" and "informed" both raise the register.',
        },
        {
          feature: 'noun-proper',
          spans: ['Chadstone'],
          note: 'Naming the specific store makes the complaint verifiable and hard to deflect.',
        },
        {
          feature: 'noun-abstract',
          spans: ['dissatisfaction', 'installation', 'explanation', 'treatment', 'apology'],
          note: '"dissatisfaction" is far more formal than "I am angry" — nominalisation as self-control.',
        },
        {
          feature: 'noun-common',
          spans: ['service', 'store', 'technician', 'supervisor', 'customers', 'refund'],
          note: 'Concrete participants and remedies that anchor the complaint in fact.',
        },
        {
          feature: 'adjective',
          spans: ['considerable', 'full', 'unacceptable', 'written'],
          note: '"unacceptable" is the strongest evaluative word in the letter — and it is an adjective, not a verb.',
        },
        {
          feature: 'adverb',
          spans: ['considerably', 'finally'],
          note: 'Understatement through degree adverbs keeps the tone controlled.',
        },
        {
          feature: 'connotation',
          spans: [
            'considerable dissatisfaction',
            'nothing could be done',
            'unacceptable',
            'deserve considerably better',
          ],
          note: 'Evaluation is present, but delivered through noun and adjective choice rather than exclamation.',
        },
        {
          feature: 'discourse-marker',
          spans: ['therefore'],
          note: 'Marks the pivot from complaint to demand.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['When', 'that'],
          note: '"When I finally spoke..." sets up the climax; "that" introduces the reported refusal.',
        },
        {
          feature: 'preposition',
          spans: ['at', 'in', 'without', 'within', 'Despite'],
          note: '"Despite" opens the sentence with a concession, which makes the complaint seem measured.',
        },
        {
          feature: 'preposition-complex',
          spans: ['together with'],
          note: 'A formal multi-word preposition turning one demand into two.',
        },
        {
          feature: 'determiner',
          spans: ['14', 'two', 'fourteen'],
          note: 'Exact figures give the complaint an evidence-like authority.',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the writer use four passive constructions in a row?',
          options: [
            'Because passives are more formal',
            'Because each one records what was done to the customer by unnamed staff, which builds the case for unfair treatment',
            'Because it is shorter',
            'Because it hides the writer’s identity',
          ],
          answer: 1,
          explain:
            'The passive foregrounds the customer as the recipient of poor service — rhetorically very effective in a complaint.',
        },
        {
          prompt: 'Which phrase carries the strongest evaluation in this letter?',
          options: ['"I am writing"', '"Such treatment is unacceptable"', '"a supervisor"', '"fourteen days"'],
          answer: 1,
          explain:
            'Note that the strongest judgement is delivered as a declarative statement rather than an exclamation, which is a marker of formal register.',
        },
        {
          prompt: 'What is the function of "I therefore request a full refund"?',
          options: [
            'Referential',
            'Conative',
            'Phatic',
            'Metalinguistic',
          ],
          answer: 1,
          explain:
            'It attempts to make the reader act, which is the conative function. The rest of the letter exists to make this request hard to refuse.',
        },
        {
          prompt: 'How does the letter create cohesion between the complaint and the demand?',
          options: [
            'By repeating the word "service"',
            'By using the discourse marker "therefore" to signal that the demand follows from the evidence',
            'By using the past tense',
            'By using numerals',
          ],
          answer: 1,
          explain:
            'Discourse markers connect an argument’s parts. Without "therefore", the demand would look like a non sequitur.',
        },
      ],
      teach:
        'Formal complaint letters are a superb case study in combining functions: the referential evidence exists to serve a conative demand, all wrapped in the politeness markers of a distant register.',
    },
    {
      id: 'f09',
      title: 'Reference letter',
      text: 'Emily has been an outstanding member of our faculty since 2021. She is, without question, the most conscientious teacher I have supervised in fifteen years. Her classroom management is exceptionally strong, and she communicates complex ideas with remarkable clarity. Colleagues describe her as generous with her time and unfailingly reliable when deadlines approach. I have no hesitation in recommending her for the position, and I am confident that she would make a significant contribution to your department. Please contact me if you require further information.',
      source: 'Professional reference for a teaching position (constructed)',
      field: 'Employment and education',
      mode: 'written',
      setting: 'written, professional',
      tenor: 'warm but formal, former supervisor to selection panel',
      register: 'formal-register',
      registerNote:
        'Evaluative lexis stacked densely, but delivered in fully controlled formal syntax.',
      dominantFunction: 'emotive',
      functionNote:
        'The letter exists to convey the writer’s judgement and confidence in a person, so attitude is the content.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Emily'],
          note: 'The subject of the reference, named repeatedly rather than pronominalised.',
        },
        {
          feature: 'adjective-superlative',
          spans: ['most conscientious'],
          note: 'A superlative claim: nothing in fifteen years has been better — a strong but deliberate evaluation.',
        },
        {
          feature: 'adjective',
          spans: ['outstanding', 'complex', 'remarkable', 'generous', 'reliable', 'strong', 'significant'],
          note: 'Positive evaluative adjectives are the engine of a reference letter.',
        },
        {
          feature: 'adverb',
          spans: ['exceptionally', 'unfailingly', 'further'],
          note: '"unfailingly" is an absolute degree adverb: it admits no exceptions.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'been', 'is', 'am'],
          note: '"has been" presents a state continuing from 2021 to the present.',
        },
        {
          feature: 'verb-modal',
          spans: ['would'],
          note: 'A hypothetical modal used to make a prediction about future performance.',
        },
        {
          feature: 'verb-lexical',
          spans: [
            'supervised',
            'communicates',
            'describe',
            'recommending',
            'make',
            'contact',
            'require',
          ],
          note: 'Process verbs from the world of teaching and employment.',
        },
        {
          feature: 'pronoun',
          spans: ['her', 'me'],
          note: 'Object pronouns keep the focus on Emily while the writer stays faintly present.',
        },
        {
          feature: 'preposition',
          spans: ['since', 'without', 'of', 'with', 'in', 'as'],
          note: 'Ordinary prepositions hold together a text with no unusual vocabulary.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['when', 'that', 'if'],
          note: '"that" introduces the key claim; "if" opens the polite closing offer.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Repeated "and" creates the co-ordinated, accumulating rhythm of praise.',
        },
        {
          feature: 'noun-abstract',
          spans: [
            'question',
            'management',
            'clarity',
            'hesitation',
            'contribution',
            'information',
          ],
          note: '"no hesitation" is an abstract way of saying "I am certain" — the same self-effacement seen throughout.',
        },
        {
          feature: 'noun-common',
          spans: ['member', 'faculty', 'teacher', 'years', 'ideas', 'deadlines', 'position', 'department'],
          note: 'Concrete institutional nouns that make the praise seem specific and evidenced.',
        },
        {
          feature: 'determiner',
          spans: ['2021', 'fifteen'],
          note: 'Dates and durations convert subjective praise into a measurable track record.',
        },
        {
          feature: 'connotation',
          spans: [
            'outstanding',
            'exceptionally strong',
            'unfailingly reliable',
            'significant contribution',
          ],
          note: 'In a reference letter, loaded language is not a flaw — it is the entire point.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['she'],
          note: 'Repeating the pronoun keeps Emily as the consistent topic across every sentence.',
        },
      ],
      quiz: [
        {
          prompt: 'Why is this letter’s dominant function expressive rather than referential?',
          options: [
            'Because it contains facts',
            'Because its content is the writer’s judgement and confidence about a person',
            'Because it is formal',
            'Because it uses a superlative',
          ],
          answer: 1,
          explain:
            'Ask what the text is for. Facts here exist to support an attitude — the attitude is the message.',
        },
        {
          prompt: 'What is the effect of "unfailingly" in "unfailingly reliable"?',
          options: [
            'It hedges the claim',
            'It makes the claim absolute and exception-free',
            'It makes the sentence informal',
            'It nominalises the adjective',
          ],
          answer: 1,
          explain:
            'Degree adverbs can strengthen as well as soften. This one removes any room for doubt.',
        },
        {
          prompt: 'How does the writer keep such dense praise from sounding gushing?',
          options: [
            'By avoiding adjectives',
            'By delivering the evaluation in fully formal syntax and abstract nouns such as "no hesitation"',
            'By using contractions',
            'By asking rhetorical questions',
          ],
          answer: 1,
          explain:
            'Formal syntax acts as a container for strong evaluation. That tension between warm lexis and cool grammar is worth noticing in essays.',
        },
      ],
      teach:
        'Evaluation lives in adjectives, adverbs and loaded language — but register lives in syntax. A reference letter shows how the two can be separated.',
    },
    {
      id: 'f10',
      title: 'School mobile phone policy',
      text: "Students must not use mobile phones during scheduled classes unless a teacher has granted explicit permission for an educational purpose. Where a device is used without authorisation, it will be confiscated and returned only to a parent or guardian. The College recognises that phones can support learning when they are managed purposefully; however, the disruption caused by unrestricted use has been well documented. Parents are encouraged to discuss these expectations at home. Repeated breaches may result in further consequences in accordance with the College's behaviour policy.",
      source: 'School policy document issued to families (constructed)',
      field: 'Education policy',
      mode: 'written',
      setting: 'written, institutional',
      tenor: 'authoritative, institution to families',
      register: 'formal-register',
      registerNote:
        'Modal verbs of obligation sit beside abstract justifications and passive sanctions.',
      dominantFunction: 'referential',
      functionNote:
        'It states rules and consequences. The rule itself is a directive, but the document’s job is to inform.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'verb-modal',
          spans: ['must', 'can', 'may'],
          note: 'The obligation scale is on display: must (prohibited) > may (possible consequence) > can (acknowledged capability).',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['has', 'is', 'will', 'be', 'are', 'been'],
          note: '"is used", "be confiscated", "are encouraged" — three passives that keep the policy impersonal.',
        },
        {
          feature: 'verb-lexical',
          spans: [
            'granted',
            'used',
            'confiscated',
            'recognises',
            'support',
            'managed',
            'caused',
            'encouraged',
            'discuss',
            'result',
          ],
          note: 'Institutional verbs: the policy acts on students rather than with them.',
        },
        {
          feature: 'noun-abstract',
          spans: ['permission', 'authorisation', 'disruption', 'consequences', 'expectations'],
          note: 'Abstract nouns let the school describe sanctions without naming them.',
        },
        {
          feature: 'noun-common',
          spans: ['Students', 'teacher', 'phones', 'device', 'guardian', 'breaches', 'policy'],
          note: 'The key participants and objects, all made generic rather than specific.',
        },
        {
          feature: 'noun-collective',
          spans: ['College', 'Parents', 'parent'],
          note: 'The institution and the family group, each referred to as a single body.',
        },
        {
          feature: 'adjective',
          spans: ['mobile', 'explicit', 'educational', 'unrestricted', 'further'],
          note: '"explicit" and "unrestricted" are doing the restricting work of the policy.',
        },
        {
          feature: 'adverb',
          spans: ['purposefully', 'well', 'only'],
          note: '"only" is remarkably powerful here — it narrows the conditions of return.',
        },
        {
          feature: 'discourse-marker',
          spans: ['however'],
          note: 'Signals a concession turned back into justification.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['unless', 'Where', 'that', 'when'],
          note: 'Every rule is qualified by a dependent clause — this is how policy creates conditions.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and', 'or'],
          note: 'Small connecting words that determine who can collect a confiscated phone.',
        },
        {
          feature: 'preposition-complex',
          spans: ['in accordance with'],
          note: 'A formal complex preposition that hands authority to another document.',
        },
        {
          feature: 'preposition',
          spans: ['during', 'for', 'without', 'to', 'by', 'at'],
          note: 'Prepositions specify the exact circumstances in which the rule applies.',
        },
        {
          feature: 'connotation',
          spans: ['must not', 'confiscated', 'Repeated breaches', 'further consequences'],
          note: 'Threatening lexis softened by institutional abstraction — the sanction is never named.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['College'],
          note: 'Naming the institution repeatedly asserts its authority rather than using "we".',
        },
      ],
      quiz: [
        {
          prompt: 'What is the effect of the three passive constructions in this policy?',
          options: [
            'They make the policy friendlier',
            'They remove the person responsible, so the institution issues rules rather than the principal',
            'They make the sentences shorter',
            'They add factual detail',
          ],
          answer: 1,
          explain:
            'A policy that says "the principal will confiscate it" sounds personal; "it will be confiscated" sounds like a natural consequence.',
        },
        {
          prompt: 'Which modal verb carries the strongest obligation in this passage?',
          options: ['can', 'may', 'must', 'will'],
          answer: 2,
          explain:
            'Modal verbs sit on a scale. Recognising the scale is one of the highest-value skills in analysing institutional texts.',
        },
        {
          prompt: 'Why does the policy use "further consequences" instead of naming a detention?',
          options: [
            'Because it is illegal to name a sanction',
            'Because abstraction preserves flexibility for the school and softens the threat for the reader',
            'Because it is a euphemism for expulsion',
            'Because "consequences" is a jargon term',
          ],
          answer: 1,
          explain:
            'Vagueness in policy is usually functional, not careless. It keeps options open and reduces resistance.',
        },
      ],
      teach:
        'Institutional policy writing combines all the markers of formality at once: modal obligation, passive sanctions, abstract nouns and conditional subordination.',
    },
    {
      id: 'f11',
      title: 'Style guide note on usage',
      text: 'Writers frequently ask whether the word ‘data’ takes a singular or a plural verb. In formal Australian usage, ‘data’ is traditionally treated as a plural noun, so one writes that the data are incomplete rather than that the data is incomplete. However, the singular construction has become common, particularly in journalism and in everyday speech. Because our house style values consistency above all else, contributors should treat ‘data’ as plural throughout a single document. Where a count is genuinely singular, prefer ‘data point’ or ‘dataset’, which avoids the ambiguity altogether.',
      source: 'Editorial style guide entry (constructed)',
      field: 'Language and style',
      mode: 'written',
      setting: 'written, editorial',
      tenor: 'instructive, editors to contributors',
      register: 'formal-register',
      registerNote:
        'A formal document whose subject matter is language itself — so it does metalinguistic work throughout.',
      dominantFunction: 'metalinguistic',
      functionNote:
        'The entire paragraph is a comment on the code: which form to use, and why. It talks about language rather than through it.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: 'adjective',
          spans: ['singular', 'plural', 'formal', 'Australian'],
          note: 'Grammatical terminology used as adjectives — the vocabulary of metalinguistic comment.',
        },
        {
          feature: 'noun-abstract',
          spans: ['usage', 'construction', 'consistency', 'ambiguity'],
          note: 'Abstract nouns abstracted from the very processes under discussion.',
        },
        {
          feature: 'noun-common',
          spans: [
            'Writers',
            'verb',
            'noun',
            'journalism',
            'speech',
            'contributors',
            'document',
            'count',
            'style',
          ],
          note: 'Includes technical grammatical nouns such as "verb" and "noun" — these are metalanguage terms.',
        },
        {
          feature: 'verb-auxiliary',
          spans: ['is', 'has', 'are'],
          note: '"is treated" and "has become" both present the usage conclusion as an established fact.',
        },
        {
          feature: 'verb-modal',
          spans: ['should'],
          note: 'A directive modal: the style guide gives instructions, not suggestions.',
        },
        {
          feature: 'verb-lexical',
          spans: ['ask', 'takes', 'writes', 'treated', 'become', 'values', 'treat', 'prefer', 'avoids'],
          note: 'Verbs of writing, naming and preferring — exactly the semantics a style guide needs.',
        },
        {
          feature: 'adverb',
          spans: ['frequently', 'traditionally', 'particularly', 'genuinely'],
          note: 'Frequency and stance adverbs calibrate how strongly each claim is being made.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['whether', 'Because', 'Where'],
          note: 'Subordination builds the qualifications that make editorial advice defensible.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['or', 'so', 'and'],
          note: '"so" here introduces the practical consequence — a useful reminder that "so" coordinates clauses.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['data'],
          note: 'The very word under discussion is repeated as a lexical chain — the guide practises what it preaches.',
        },
        {
          feature: 'discourse-marker',
          spans: ['However'],
          note: 'Signals the shift from the traditional rule to current usage.',
        },
        {
          feature: 'preposition',
          spans: ['In', 'as', 'throughout', 'above'],
          note: '"above all else" is a fixed prepositional phrase doing emphatic work.',
        },
        {
          feature: 'preposition-complex',
          spans: ['rather than'],
          note: 'A contrastive multi-word preposition linking the traditional form to the modern one.',
        },
        {
          feature: 'antonym',
          spans: ['singular', 'plural'],
          note: 'The grammatical opposition on which the whole entry turns.',
        },
        {
          feature: 'idiom',
          spans: ['above all else'],
          note: 'A slightly worn formula, common in editorial and prescriptive writing.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the dominant function of this paragraph?',
          options: [
            'Referential, because it reports usage',
            'Metalinguistic, because it is a comment on the language itself',
            'Conative, because it tells contributors what to do',
            'Phatic, because it maintains contact with contributors',
          ],
          answer: 1,
          explain:
            'The subject matter is the code, not the world. Any text about words, meanings, spellings or grammar is doing metalinguistic work.',
        },
        {
          prompt: 'Which word class does the paragraph use in an unusually technical way?',
          options: ['Prepositions', 'Adjectives such as "singular", "plural" and "formal"', 'Interjections', 'Numerals'],
          answer: 1,
          explain:
            'Grammatical terminology enters texts as ordinary adjectives and nouns — a reliable sign you are reading metalanguage.',
        },
        {
          prompt: 'Why does the final sentence offer an alternative such as "data point"?',
          options: [
            'To make the sentence longer',
            'To resolve the grammatical ambiguity by changing the noun instead of arguing about the verb',
            'To introduce jargon',
            'To appeal to authority',
          ],
          answer: 1,
          explain:
            'Recognising a pragmatic escape route is characteristic of careful editorial writing — and of strong analytical writing about it.',
        },
      ],
      teach:
        'Metalinguistic texts are invaluable in VCE English Language because they contain metalanguage terms in their natural habitat. Get used to spotting grammatical vocabulary used as everyday words.',
    },
    {
      id: 'f12',
      title: 'Grant application rationale',
      text: 'Australian secondary schools report growing difficulty in recruiting qualified science teachers, particularly in regional and remote communities. Our programme addresses this shortage by pairing early-career graduates with experienced mentors for a full academic year. Evaluation of a comparable pilot in Queensland found that participating schools filled ninety per cent of vacancies within six weeks, compared with sixty per cent in matched control schools. We therefore seek funding of two hundred thousand dollars over three years to expand the model to forty schools across Victoria and New South Wales, which we believe could reshape science staffing nationally.',
      source: 'Grant application to a philanthropic foundation (constructed)',
      field: 'Education funding',
      mode: 'written',
      setting: 'written, persuasive formal',
      tenor: 'distant but earnest, applicant to funder',
      register: 'formal-register',
      registerNote:
        'Evidence and evaluation language used to support a request for money.',
      dominantFunction: 'conative',
      functionNote:
        'The paragraph is built to move a funder to act. The evidence is referential, but the purpose is a decision.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'complex-sentence',
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: 'noun-proper',
          spans: ['Queensland', 'Victoria', 'New South Wales'],
          note: 'Named jurisdictions make the proposal specific and verifiable on the public record.',
        },
        {
          feature: 'noun-abstract',
          spans: ['difficulty', 'shortage', 'Evaluation', 'funding'],
          note: '"shortage" and "difficulty" name the problem abstractly so it can be quantified.',
        },
        {
          feature: 'noun-common',
          spans: ['teachers', 'communities', 'programme', 'graduates', 'mentors', 'vacancies'],
          note: 'The countable participants and roles the programme will involve.',
        },
        {
          feature: 'adjective',
          spans: ['qualified', 'regional', 'remote', 'comparable', 'experienced', 'early-career', 'academic'],
          note: 'Classification adjectives that make the target group sound precisely defined.',
        },
        {
          feature: 'verb-lexical',
          spans: ['report', 'recruiting', 'addresses', 'pairing', 'found', 'filled', 'seek', 'expand'],
          note: '"seek" is the formal application verb — nobody "wants" money in a grant application.',
        },
        {
          feature: 'verb-modal',
          spans: ['could'],
          note: 'A single carefully hedged modal: the claim is a possibility, not a promise.',
        },
        {
          feature: 'determiner',
          spans: [
            'ninety per cent',
            'six',
            'sixty per cent',
            'two hundred thousand dollars',
            'three',
            'forty',
          ],
          note: 'Six precise figures do the persuasive work. Numbers make ambition sound like planning.',
        },
        {
          feature: 'adverb',
          spans: ['particularly'],
          note: 'A focusing adverb that directs attention to the neediest communities.',
        },
        {
          feature: 'discourse-marker',
          spans: ['therefore'],
          note: 'Signals that the request logically follows from the evidence just presented.',
        },
        {
          feature: 'conjunction-subordinating',
          spans: ['that'],
          note: 'Introduces the pilot findings — the evidence base for the request.',
        },
        {
          feature: 'conjunction-coordinating',
          spans: ['and'],
          note: 'Joins the two target states into one scope.',
        },
        {
          feature: 'preposition-complex',
          spans: ['compared with'],
          note: 'A comparative preposition that makes the pilot’s results look strong.',
        },
        {
          feature: 'preposition',
          spans: ['by', 'for', 'within', 'over', 'across'],
          note: 'Prepositions carry the mechanics of the programme and the budget.',
        },
        {
          feature: 'cohesive-repetition',
          spans: ['schools'],
          note: 'Repeating "schools" keeps the beneficiaries in view across four sentences.',
        },
        {
          feature: 'synonym',
          spans: ['shortage', 'difficulty'],
          note: 'Near-synonyms that quietly equate a staffing problem with national urgency.',
        },
        {
          feature: 'hyperbole',
          spans: ['reshape science staffing nationally'],
          note: 'A grand outcome claim, softer than it looks because of the hedge "could".',
        },
      ],
      quiz: [
        {
          prompt: 'Why does the writer hedge with "could" rather than "will"?',
          options: [
            'Because the programme is imaginary',
            'Because funders distrust absolute promises, so a hedged claim is more credible',
            'Because "could" is more formal',
            'Because the sentence is long',
          ],
          answer: 1,
          explain:
            'Hedging in persuasive formal writing is a credibility strategy — overclaiming damages trust.',
        },
        {
          prompt: 'What is the rhetorical function of the numerical comparison between pilot and control schools?',
          options: [
            'To complicate the argument',
            'To convert a hopeful idea into an evidenced one',
            'To introduce jargon',
            'To create cohesion',
          ],
          answer: 1,
          explain:
            'Statistics are the conative function in referential clothing: they persuade precisely because they look like information.',
        },
        {
          prompt: 'Which function best describes this paragraph overall?',
          options: [
            'Referential, because it reports statistics',
            'Conative, because it is designed to make a funder act',
            'Expressive, because it conveys the applicant’s hopes',
            'Poetic, because of its structure',
          ],
          answer: 1,
          explain:
            'Texts mix functions, but one dominates. Ask what the writer most needs the reader to do, know or feel.',
        },
      ],
      teach:
        'Persuasive formal writing rarely looks persuasive. Numerals, comparative prepositions, hedged modals and named jurisdictions do the work that loaded adjectives would do in an advertisement.',
    },
  ],
}
