import type { PassageBank } from "../../lib/passages"

export const bank11: PassageBank = {
  id: "institutional",
  label: "Institutional Registers",
  blurb:
    "Contracts, reports, procedures and letters: the dense, impersonal written registers where nominalisation and the passive run the show.",
  passages: [
    /* ----------------------------------------------------------- tier 1: word/phrase */
    {
      id: "institutional-01",
      title: "Library borrowing notice",
      text: "Borrowers must return all items before the due date.",
      source: "Notice displayed at a council library (constructed)",
      field: "Public administration",
      mode: 'written',
      setting: "Written, printed sign",
      tenor: "Distant: institution to anonymous public",
      register: "formal-register",
      registerNote:
        "One sentence, no contractions, full forms only, and the modal ‘must’ rather than the everyday ‘have to’. There is no addressee pronoun anywhere, which keeps the institution impersonal.",
      dominantFunction: "conative",
      functionNote:
        "The notice exists to make people act. It does not describe the world for its own sake — every choice pushes the reader towards returning a book.",
      dominantSentenceType: "declarative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 3,
      gold: [
        {
          feature: "verb-modal",
          spans: ["must"],
          note: "A modal of obligation. Stronger and more impersonal than ‘should’.",
        },
        {
          feature: "verb-lexical",
          spans: ["return"],
          note: "One main verb carries the whole instruction.",
        },
        {
          feature: "noun-common",
          spans: ["items", "date"],
          note: "Vague common nouns — the notice never names the specific loan.",
        },
        { feature: "determiner", spans: ["all", "the"] },
        { feature: "article-definite", spans: ["the"] },
        { feature: "preposition", spans: ["before"] },
        { feature: "adjective", spans: ["due"], note: "A classifying adjective in ‘the due date’." },
        {
          feature: "suffix",
          spans: ["Borrowers"],
          note: "borrow + -er (derivational, makes an agent noun) + -s (inflectional plural).",
        },
      ],
      quiz: [
        {
          prompt: "Which word rules out any choice for the borrower?",
          options: ["must", "return", "due", "before"],
          answer: 0,
          explain:
            "‘Must’ is a modal verb of obligation. ‘Should’ would leave the borrower a choice; ‘must’ does not. That single word is what makes the notice directive rather than informative.",
        },
        {
          prompt: "What is the dominant function of this notice?",
          options: ["referential", "conative", "expressive", "phatic"],
          answer: 1,
          explain:
            "The conative (directive) function aims to change the reader’s behaviour. Nothing here is offered as information about the world — it is a demand.",
        },
      ],
      teach:
        "Notice how much work ‘must’ does: it turns a flat statement of fact into an obligation. Remove it and the same sentence becomes referential.",
    },

    {
      id: "institutional-02",
      title: "Laboratory entry instruction",
      text: "Visitors must report to reception and sign in before entering the laboratory.",
      source: "Sign at the entrance to a university science laboratory (constructed)",
      field: "Science / workplace safety",
      mode: 'written',
      setting: "Written, printed sign",
      tenor: "Institutional authority to a stranger",
      register: "formal-register",
      registerNote:
        "‘Report to reception’ rather than ‘check in at the front desk’ is a Latinate, procedural idiom. No contractions and no second-person pronoun.",
      dominantFunction: "conative",
      functionNote: "A procedural instruction — pure directive language.",
      dominantSentenceType: "declarative",
      sentenceStructure: "simple-sentence",
      lengthTier: 1,
      difficulty: 3,
      gold: [
        { feature: "verb-modal", spans: ["must"] },
        {
          feature: "verb-lexical",
          spans: ["report", "sign", "entering"],
          note: "Three main verbs in one clause: report, sign (in), and the gerund ‘entering’.",
        },
        {
          feature: "verb-phrasal",
          spans: ["sign in"],
          note: "Verb + particle with a meaning you cannot guess from ‘sign’ alone.",
        },
        { feature: "noun-common", spans: ["Visitors", "reception", "laboratory"] },
        { feature: "conjunction-coordinating", spans: ["and"], note: "Joins two equal obligations." },
        { feature: "preposition", spans: ["before"] },
        { feature: "article-definite", spans: ["the"] },
        {
          feature: "suffix",
          spans: ["Visitors"],
          note: "visit + -or (derivational agent noun) + -s (inflectional plural).",
        },
        {
          feature: "noun-phrase",
          spans: ["the laboratory"],
          note: "A short noun phrase: determiner + head noun.",
        },
      ],
      quiz: [
        {
          prompt: "‘Sign in’ is best labelled as…",
          options: ["a verb-lexical", "a verb-phrasal", "a noun-phrase", "a preposition-complex"],
          answer: 1,
          explain:
            "A phrasal verb is a verb plus a particle creating an idiomatic meaning. ‘Sign in’ is not about signing; it is one unit of meaning that only works together.",
        },
        {
          prompt: "Which two items are joined by the coordinating conjunction ‘and’?",
          options: [
            "two equal obligations in one verb phrase",
            "a main clause and a dependent clause",
            "two contrasting ideas",
            "a noun and its modifier",
          ],
          answer: 0,
          explain:
            "‘Report to reception’ and ‘sign in’ are equally ranked obligations. Coordinating conjunctions always join things of the same grammatical rank, which is why this stays a simple sentence.",
        },
      ],
      teach:
        "This is a simple sentence, yet it loads three verbs onto one subject. Simple structure does not mean simple content.",
    },

    /* -------------------------------------------------- tier 2: phrase / short sentence */
    {
      id: "institutional-03",
      title: "Recipe method step",
      text: "Preheat the oven to 200 degrees. Whisk the eggs with a fork until they look pale, then fold through the flour — don’t overmix.",
      source: "Recipe card in a supermarket magazine (constructed)",
      field: "Cookery",
      mode: 'written',
      setting: "Written, instructional",
      tenor: "Friendly expert to home cook",
      register: "neutral-register",
      registerNote:
        "Mostly plain and procedural, but the contraction ‘don’t’ and the direct address of an implied reader pull it towards informal. It is a good example of a text sitting between registers.",
      dominantFunction: "conative",
      functionNote:
        "Recipe instructions always direct. The verbs are imperatives and the reader is told what to do at every step.",
      dominantSentenceType: "imperative",
      sentenceStructure: "compound-sentence",
      lengthTier: 2,
      difficulty: 3,
      gold: [
        {
          feature: "verb-lexical",
          spans: ["Preheat", "Whisk", "look", "fold"],
          note: "All bare imperatives plus the linking verb ‘look’. Recipe verbs carry the instruction.",
        },
        {
          feature: "prefix",
          spans: ["Preheat", "overmix"],
          note: "pre- (beforehand) and over- (too much) both change meaning without changing word class.",
        },
        {
          feature: "verb-phrasal",
          spans: ["fold through"],
          note: "A baking idiom: the particle changes a plain verb into a technique.",
        },
        { feature: "determiner", spans: ["200"], note: "An exact figure — numerals make procedural writing precise." },
        { feature: "noun-common", spans: ["oven", "degrees", "eggs", "fork", "flour"] },
        { feature: "article-definite", spans: ["the"] },
        { feature: "article-indefinite", spans: ["a"] },
        { feature: "preposition", spans: ["to", "with"] },
        {
          feature: "conjunction-subordinating",
          spans: ["until"],
          note: "Introduces a dependent clause, creating a complex sentence inside the instruction.",
        },
        {
          feature: "anaphora",
          spans: ["they"],
          note: "‘They’ points back to ‘the eggs’ — anaphoric reference keeps the writing economical.",
        },
        { feature: "adjective", spans: ["pale"] },
        {
          feature: "contraction",
          spans: ["don’t"],
          note: "The only contraction in the passage. It lowers the formality of the whole text.",
        },
      ],
      quiz: [
        {
          prompt: "What does the pronoun ‘they’ refer to?",
          options: ["the eggs", "the fork", "the degrees", "the flour"],
          answer: 0,
          explain:
            "This is anaphoric reference: the pronoun looks back to the nearest sensible noun phrase, ‘the eggs’. In recipes this is the main cohesion device.",
        },
        {
          prompt: "Which feature is the strongest evidence that this text is not fully formal?",
          options: ["the numeral ‘200’", "the contraction ‘don’t’", "the preposition ‘with’", "the imperative verbs"],
          answer: 1,
          explain:
            "Imperatives are neutral — instructions need them. A contraction, by contrast, imitates speech and is deliberately avoided in formal registers.",
        },
      ],
      teach:
        "Instructional writing is a great register test: the imperatives stay the same, but swapping ‘do not’ for ‘don’t’ moves the whole text down the formality scale.",
    },

    {
      id: "institutional-04",
      title: "School report comment",
      text: "Maya has grown into a thoughtful and curious student who asks excellent questions. She is a pleasure to teach, and I will miss her contributions next year.",
      source: "End-of-year report comment, Year 9 English (constructed)",
      field: "Education",
      mode: 'written',
      setting: "Written, semi-public",
      tenor: "Teacher to parent, mediated by an institution",
      register: "neutral-register",
      registerNote:
        "Careful, standard and polite, but personal: first person ‘I’, evaluative adjectives and warm nouns. It sits between the formality of a policy document and the informality of speech.",
      dominantFunction: "emotive",
      functionNote:
        "The comment reports on progress, but its real work is expressing the teacher’s attitude and building the relationship with the family.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 2,
      difficulty: 3,
      gold: [
        { feature: "noun-proper", spans: ["Maya"], note: "A person’s name — proper nouns pick out one referent." },
        {
          feature: "noun-abstract",
          spans: ["pleasure"],
          note: "An abstract noun used as an evaluation. You cannot measure a pleasure.",
        },
        {
          feature: "adjective",
          spans: ["thoughtful", "curious", "excellent"],
          note: "Three evaluative adjectives, all positive. This is where the teacher’s attitude lives.",
        },
        {
          feature: "pronoun",
          spans: ["She", "who"],
          note: "‘She’ is personal and anaphoric (pointing back to Maya); ‘who’ is a relative pronoun starting a dependent clause.",
        },
        { feature: "determiner", spans: ["her", "a"] },
        { feature: "verb-auxiliary", spans: ["has"], note: "Forms the perfect tense in ‘has grown’." },
        { feature: "verb-modal", spans: ["will"], note: "Future time, and a quiet personal commitment." },
        { feature: "verb-lexical", spans: ["grown", "asks", "miss"] },
        { feature: "conjunction-coordinating", spans: ["and"] },
        { feature: "noun-common", spans: ["student", "questions", "year"] },
        {
          feature: "noun-phrase",
          spans: ["a thoughtful and curious student who asks excellent questions"],
          note: "A heavily pre- and post-modified noun phrase — one head noun, seven words of modification. Typical of report writing.",
        },
      ],
      quiz: [
        {
          prompt: "Which word shows that the teacher’s own judgement is part of the message?",
          options: ["student", "pleasure", "year", "grown"],
          answer: 1,
          explain:
            "‘A pleasure to teach’ is an abstract noun used evaluatively. It tells you how the teacher feels, not simply what Maya did — that is the expressive function at work.",
        },
        {
          prompt: "Why is this text described as neutral rather than formal?",
          options: [
            "it uses heavy nominalisation and no pronouns",
            "it uses first person and warm evaluative lexis",
            "it uses contracted verb forms",
            "it uses imperatives",
          ],
          answer: 1,
          explain:
            "First person ‘I’ and evaluative adjectives would be out of place in a policy document. But there are no contractions or slang, so it is not informal either.",
        },
      ],
      teach:
        "Institutional texts are not automatically formal. A school report is institutionally written but personally addressed, and the metalanguage shows the tension.",
    },

    {
      id: "institutional-10",
      title: "University subject handbook entry",
      text: "This unit introduces students to the principal methods of linguistic analysis. Topics covered include phonetics, morphology, syntax, semantics and discourse, with particular attention given to Australian English. Students will complete two written assignments and one examination.",
      source: "Undergraduate subject handbook entry (constructed)",
      field: "Tertiary education",
      mode: 'written',
      setting: "Written, published reference text",
      tenor: "Institution to prospective students",
      register: "formal-register",
      registerNote:
        "Third person throughout, technical vocabulary, no contractions, and abstract nouns standing in for actions (‘analysis’, ‘attention’).",
      dominantFunction: "referential",
      functionNote:
        "The entry exists to state what the subject contains. It is verifiable information delivered impersonally.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 2,
      difficulty: 4,
      gold: [
        {
          feature: "noun-abstract",
          spans: ["attention", "analysis"],
          note: "Nouns naming fields and mental acts. ‘Analysis’ is a nominalisation of ‘analyse’.",
        },
        { feature: "verb-lexical", spans: ["introduces", "include", "given", "complete"] },
        { feature: "verb-modal", spans: ["will"], note: "Future obligation framed as fact." },
        { feature: "adjective", spans: ["principal", "particular", "written"] },
        { feature: "determiner", spans: ["two", "one"] },
        {
          feature: "jargon",
          spans: ["phonetics", "morphology", "syntax", "semantics", "discourse"],
          note: "Five technical terms in a row. Efficient for insiders, opaque for everyone else.",
        },
        { feature: "noun-common", spans: ["unit", "students", "methods", "Topics", "assignments", "examination"] },
        { feature: "preposition", spans: ["of", "to", "with"] },
        { feature: "determiner", spans: ["this"] },
        { feature: "conjunction-coordinating", spans: ["and"] },
        {
          feature: "noun-proper",
          spans: ["Australian English"],
          note: "A named variety of English — capitalised, and a single specific referent.",
        },
        {
          feature: "noun-phrase",
          spans: ["the principal methods of linguistic analysis"],
          note: "Determiner + adjective + head noun + prepositional phrase. Pre-modification plus post-modification in five words.",
        },
      ],
      quiz: [
        {
          prompt: "The list ‘phonetics, morphology, syntax, semantics and discourse’ is an example of…",
          options: ["jargon", "colloquialism", "euphemism", "hyperbole"],
          answer: 0,
          explain:
            "These are specialist terms for people studying language. The list is a compact, insider-only way to encode a lot of content — the classic trade-off of jargon.",
        },
        {
          prompt: "Which phrase packs the most information per word?",
          options: [
            "the principal methods of linguistic analysis",
            "students will complete",
            "two written assignments",
            "Topics covered include",
          ],
          answer: 0,
          explain:
            "A noun phrase with both pre-modification (‘principal’) and post-modification (‘of linguistic analysis’) compresses an entire idea into one unit. Nominal density is what makes academic prose heavy.",
        },
      ],
      teach:
        "Handbook entries are pure referential writing. Notice there is no reader being persuaded and no author feeling anything — just information stacked in noun phrases.",
    },

    /* ------------------------------------------------------------ tier 3: paragraph */
    {
      id: "institutional-05",
      title: "Terms and conditions clause",
      text: "Parkside Utilities may suspend or terminate the supply agreement immediately if the account holder fails to pay any amount due within fourteen days of the invoice date. In the event of suspension, the account holder remains liable for all outstanding charges and must reimburse the supplier for any reasonable costs incurred. The supplier is not required to give notice before exercising this right, unless a failure to do so would be unlawful. Nothing in this clause limits any other remedy available to the supplier.",
      source: "Clause 14 of a residential services agreement (constructed)",
      field: "Contract law",
      mode: 'written',
      setting: "Written, legally binding",
      tenor: "Corporate to customer, maximally unequal power",
      register: "formal-register",
      registerNote:
        "Nominalisation (‘suspension’, ‘failure’), the passive plus the agentless ‘is not required’, complex prepositions, and no pronouns at all. Power is expressed by never naming who acts.",
      dominantFunction: "referential",
      functionNote:
        "The clause states the legal position and the consequences. It is a set of conditions rather than an argument or a plea.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 5,
      gold: [
        { feature: "noun-proper", spans: ["Parkside Utilities"], note: "The contracting party, named." },
        {
          feature: "verb-modal",
          spans: ["may", "must", "would"],
          note: "‘May’ grants a right, ‘must’ imposes a duty, ‘would’ hedges a hypothetical. Three modals, three different legal weights.",
        },
        {
          feature: "verb-auxiliary",
          spans: ["is"],
          note: "Works with ‘required’ to build a passive (‘is not required’) that hides who does the requiring.",
        },
        {
          feature: "verb-lexical",
          spans: ["suspend", "terminate", "fails", "remains", "reimburse", "limits"],
          note: "Plain verbs doing the legal work. Legal English still needs its action words.",
        },
        {
          feature: "noun-abstract",
          spans: ["suspension", "failure"],
          note: "Nominalisations. ‘If the account holder fails’ became a noun phrase in ‘a failure to do so’.",
        },
        {
          feature: "compounding",
          spans: ["account holder"],
          note: "A compound noun naming the customer without ever calling them that.",
        },
        {
          feature: "noun-common",
          spans: ["agreement", "charges", "costs", "notice", "remedy", "clause"],
        },
        { feature: "preposition", spans: ["within", "for", "before"] },
        {
          feature: "preposition-complex",
          spans: ["in the event of"],
          note: "A three-word preposition doing the work of ‘if’. Its only purpose is to sound formal.",
        },
        { feature: "conjunction-subordinating", spans: ["if", "unless"] },
        {
          feature: "conjunction-coordinating",
          spans: ["or", "and"],
          note: "‘Suspend or terminate’ gives the supplier a choice; ‘and’ piles on an extra duty.",
        },
        {
          feature: "adjective",
          spans: ["outstanding", "reasonable", "unlawful"],
          note: "Each adjective carries a hidden judgement; ‘reasonable’ in particular is doing legal work.",
        },
      ],
      quiz: [
        {
          prompt: "Why does the clause say ‘the supply is not required to give notice’ style constructions rather than ‘we do not have to tell you’?",
          options: [
            "to make the obligation easier to understand",
            "to hide the agent and make the arrangement sound neutral",
            "to shorten the sentence",
            "to add new information about the supplier",
          ],
          answer: 1,
          explain:
            "The passive with no named agent is the classic institutional move: the requirement stops belonging to a person and starts sounding like a fact of nature.",
        },
        {
          prompt: "‘In the event of suspension’ is more formal than ‘If we suspend you’ mainly because of…",
          options: [
            "a complex preposition replacing a subordinating conjunction, plus a nominalisation",
            "the use of a modal verb",
            "the use of a proper noun",
            "the use of a contraction",
          ],
          answer: 0,
          explain:
            "‘In the event of’ is a multi-word preposition and ‘suspension’ is a nominalisation of ‘suspend’. Together they remove both the condition word ‘if’ and the people involved.",
        },
      ],
      teach:
        "Read the clause and count the nouns. When a text is all nouns and almost no people, that is nominalisation doing its work — and it is exactly why legal language feels impossible to argue with.",
    },

    {
      id: "institutional-06",
      title: "Academic journal abstract",
      text: "This study examines the extent to which social media use correlates with reported anxiety among adolescents in regional New South Wales. Drawing on survey data collected from 1,240 participants, the analysis identifies a modest positive relationship that strengthens markedly beyond three hours of daily use. The findings suggest that displacement of face-to-face interaction, rather than screen exposure itself, best accounts for the pattern. Although causation cannot be established from cross-sectional data, the results indicate a clear direction for further research.",
      source: "Abstract of a psychology research paper (constructed)",
      field: "Academic research",
      mode: 'written',
      setting: "Written, peer-reviewed",
      tenor: "Researcher to a community of peers",
      register: "formal-register",
      registerNote:
        "Latinate vocabulary, hedging modals, nominalisation, the agentless passive, and a complex sentence opening with a concessive subordinator. Nothing here is casual.",
      dominantFunction: "referential",
      functionNote:
        "The abstract reports method, findings and limitations. It is informative writing graded for precision.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 5,
      gold: [
        {
          feature: "noun-abstract",
          spans: ["extent", "anxiety", "relationship", "displacement", "causation"],
          note: "The core content is carried by abstract nouns; note that ‘displacement’ and ‘causation’ are nominalised verbs.",
        },
        {
          feature: "verb-lexical",
          spans: ["examines", "identifies", "strengthens", "suggest", "accounts", "indicate"],
          note: "Careful, hedged reporting verbs: ‘suggest’ and ‘indicate’ claim less than ‘prove’.",
        },
        {
          feature: "verb-modal",
          spans: ["cannot"],
          note: "A modal plus negation. It marks the limits of the study — a hedge, and a marker of academic caution.",
        },
        { feature: "noun-proper", spans: ["New South Wales"] },
        { feature: "determiner", spans: ["1,240", "three"], note: "Precision with figures is a marker of empirical writing." },
        {
          feature: "preposition-complex",
          spans: ["rather than"],
          note: "Two words doing the job of one preposition, used to set up a contrast.",
        },
        { feature: "preposition", spans: ["among", "beyond"] },
        {
          feature: "conjunction-subordinating",
          spans: ["Although"],
          note: "A concessive subordinator. It signals that a limitation is about to be admitted.",
        },
        { feature: "adjective", spans: ["modest", "positive", "cross-sectional"] },
        {
          feature: "adjective-comparative",
          spans: ["further"],
          note: "The comparative form of ‘far’. It implies more research beyond this one.",
        },
        { feature: "noun-common", spans: ["study", "participants", "hours", "results"] },
        {
          feature: "suffix",
          spans: ["displacement", "exposure"],
          note: "-ment and -ure turn verbs into nouns. Both words are nominalisations built with suffixes.",
        },
      ],
      quiz: [
        {
          prompt: "Which word limits how strong the researchers’ claim is?",
          options: ["suggest", "examines", "collected", "identifies"],
          answer: 0,
          explain:
            "‘Suggest’ is a hedged reporting verb. Compare ‘the findings prove’ — that would overclaim. Academic register relies heavily on verbs that calibrate certainty.",
        },
        {
          prompt: "‘Although causation cannot be established from cross-sectional data’ demonstrates…",
          options: [
            "a compound sentence",
            "a concessive subordinate clause, softening the claim",
            "a series of coordinate clauses",
            "an imperative structure",
          ],
          answer: 1,
          explain:
            "‘Although’ introduces a dependent clause that concedes a weakness before the main clause is delivered. It is the grammar of a careful argument.",
        },
      ],
      teach:
        "The abstract is a masterclass in hedging: ‘suggest’, ‘indicate’, ‘modest’, ‘cannot be established’. In academic writing, being less certain can make you more persuasive.",
    },

    {
      id: "institutional-07",
      title: "Tribunal decision extract",
      text: "On 14 March the applicant submitted that the notice had been served irregularly. The tribunal does not accept that submission. The relevant provision requires that notice be given in writing and delivered to the registered address of the tenant, and it is common ground that neither requirement was satisfied. In those circumstances the termination was of no effect, and the landlord must return the bond within 28 days. The tribunal is satisfied that no prejudice was suffered by either party. Costs are awarded against the landlord.",
      source: "Extract from the reasons of a residential tenancy tribunal (constructed)",
      field: "Law",
      mode: 'written',
      setting: "Written, published reasons for decision",
      tenor: "Decision-maker to the parties",
      register: "formal-register",
      registerNote:
        "Agentless passives (‘was satisfied’, ‘are awarded’), the impersonal subject ‘it is common ground that’, nominalisations, and the deliberate absence of any pronoun for the decision-maker.",
      dominantFunction: "referential",
      functionNote:
        "Reasons for decision state findings and their basis. The text informs the parties what was decided and why.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 5,
      gold: [
        { feature: "determiner", spans: ["14", "28"], note: "Exact dates and deadlines — numerals make the order enforceable." },
        {
          feature: "noun-abstract",
          spans: ["circumstances", "effect", "prejudice", "termination"],
          note: "‘Termination’ is a nominalisation of ‘terminate’. The action disappears and only the legal category survives.",
        },
        {
          feature: "noun-common",
          spans: ["notice", "provision", "address", "tenant", "bond", "days"],
        },
        {
          feature: "verb-lexical",
          spans: ["submitted", "accept", "requires", "return", "awarded"],
          note: "Note how few main verbs there are across six sentences: legal writing runs on nouns.",
        },
        {
          feature: "verb-auxiliary",
          spans: ["had", "been"],
          note: "Together with ‘served’, these build a passive: the server is never named.",
        },
        {
          feature: "verb-modal",
          spans: ["must"],
          note: "In the operative sentence, ‘must’ converts a finding into an order.",
        },
        { feature: "preposition", spans: ["within", "against", "by"] },
        { feature: "conjunction-coordinating", spans: ["and"], note: "Chains the findings into one long clause." },
        { feature: "adjective", spans: ["relevant"], note: "‘Relevant’ does implicit legal work: only this provision matters." },
        { feature: "pronoun-demonstrative", spans: ["those"], note: "Points back to the circumstances just described." },
        {
          feature: "determiner",
          spans: ["neither", "no", "either"],
          note: "‘Neither…no…either’ — negative determiners that tighten the scope of the finding.",
        },
        {
          feature: "cohesive-repetition",
          spans: ["landlord", "tribunal"],
          note: "Both nouns recur across the passage. Repetition in legal writing is deliberate: it removes all ambiguity that pronouns would create.",
        },
      ],
      quiz: [
        {
          prompt: "Why does legal writing repeat ‘the tribunal’ and ‘the landlord’ instead of using pronouns?",
          options: [
            "to show the writer’s feelings",
            "to avoid any possible ambiguity about who is meant",
            "to shorten the text",
            "to make it more informal",
          ],
          answer: 1,
          explain:
            "Pronouns need a clear referent; in an enforceable document, ambiguity is dangerous. Repetition is a cohesion choice made for precision rather than style.",
        },
        {
          prompt: "Which phrase hides who performed the action?",
          options: ["the notice had been served", "the tribunal does not accept", "the landlord must return", "the applicant submitted"],
          answer: 0,
          explain:
            "The passive with no agent phrase removes the doer entirely. Nobody is said to have served anything — only that it had been done. That is the agentless passive.",
        },
      ],
      teach:
        "Compare the two passive uses here. ‘Had been served’ hides the actor; ‘are awarded against the landlord’ keeps the target. The passive is a tool for choosing who gets mentioned.",
    },

    {
      id: "institutional-08",
      title: "Boundary umpire report",
      text: "About halfway through the third quarter I saw number 12 throw a decent left hook at the boundary umpire. Play had already stopped, so it wasn’t in play. I blew the whistle straight away and reported him, and I told the other umpires over the radio. He didn’t argue with me and he walked off without any fuss. That sort of thing doesn’t belong in the game. There was a bit of noise from the crowd but nothing you wouldn’t expect.",
      source: "Written report by a field umpire after a match (constructed)",
      field: "Sport",
      mode: 'written',
      setting: "Written, first person, informal procedural",
      tenor: "Umpire to a tribunal hearing",
      register: "informal-register",
      registerNote:
        "Four contractions, vague quantifiers (‘a bit of’), colloquialisms (‘decent’, ‘fuss’) and phrasal verbs. It is a formal occasion reported in informal language — the contrast is the point.",
      dominantFunction: "referential",
      functionNote:
        "Despite the chatty tone, the report’s job is to record what happened: a first-person witness account.",
      dominantSentenceType: "declarative",
      sentenceStructure: "compound-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "contraction",
          spans: ["wasn’t", "didn’t", "wouldn’t", "doesn’t"],
          note: "Four contractions in one short report. This single habit decides the register.",
        },
        {
          feature: "colloquialism",
          spans: ["decent", "straight away", "a bit of", "sort of thing", "fuss"],
          note: "Everyday spoken lexis in a written official document.",
        },
        {
          feature: "jargon",
          spans: ["left hook", "boundary umpire"],
          note: "Sporting terms only an insider decodes precisely — the report’s specialised vocabulary.",
        },
        {
          feature: "verb-lexical",
          spans: ["saw", "throw", "blew", "reported", "told", "argue", "belong"],
          note: "Short, physical verbs. Compare ‘I apprised the other umpires’ — the plain verb keeps it speech-like.",
        },
        { feature: "verb-phrasal", spans: ["walked off"], note: "A verb + particle standing in for ‘left the field’." },
        { feature: "verb-auxiliary", spans: ["had"], note: "‘Had stopped’ — the past perfect fixes the order of events." },
        {
          feature: "pronoun",
          spans: ["He", "he", "me", "him", "it"],
          note: "Heavy pronoun use is a spoken feature. It works here only because the referents are obvious.",
        },
        { feature: "pronoun-demonstrative", spans: ["That"], note: "Summing up everything just described in one word." },
        { feature: "adverb", spans: ["already", "halfway"], note: "Time and place adverbs doing the sequencing by hand." },
        { feature: "noun-common", spans: ["quarter", "whistle", "radio", "crowd", "noise", "game"] },
        { feature: "determiner", spans: ["12", "third"], note: "Cardinal for the player, ordinal for the quarter." },
        {
          feature: "preposition",
          spans: ["through", "at", "over", "without", "from"],
          note: "Five prepositional phrases in one short report: where, at whom, by what means, in what manner.",
        },
      ],
      quiz: [
        {
          prompt: "What makes this report look informal even though it is an official document?",
          options: [
            "its use of numerals",
            "its contractions and colloquial word choice",
            "its use of proper nouns",
            "its complex sentences",
          ],
          answer: 1,
          explain:
            "‘Wasn’t’, ‘didn’t’, ‘decent’ and ‘fuss’ all belong to speech. The register of a text is set by its lexis far more than by its purpose.",
        },
        {
          prompt: "Which noun phrase signals how imprecise the report is?",
          options: ["the third quarter", "a bit of noise", "the boundary umpire", "number 12"],
          answer: 1,
          explain:
            "‘A bit of’ is a vague quantifier — a hallmark of spoken language used where a formal report might say ‘a small amount of’. Numbers, by contrast, are the report’s claim to accuracy.",
        },
      ],
      teach:
        "This is the register contrast to keep in your pocket: the same event reported in formal language would use ‘apprehended’, ‘remonstrated’ and no contractions. Purpose is formal; style is not.",
    },

    {
      id: "institutional-09",
      title: "Revenue office letter",
      text: "We have reviewed your return for the year ended 30 June. Our records indicate that an amount of $4,820 was received from an employer and was not included in the income you declared. As a result of this discrepancy, an amended assessment will be issued and a penalty may apply. You are required to respond within 21 days of the date of this letter. If you believe this information is incorrect, please contact us on 13 28 61 so that the matter can be resolved without further action.",
      source: "Letter from a revenue assessment office (constructed)",
      field: "Government administration",
      mode: 'written',
      setting: "Written, transactional",
      tenor: "Agency to an individual, unequal and impersonal",
      register: "formal-register",
      registerNote:
        "Second person addressed but never personalised, agentless passives, a complex preposition, and a euphemistic ‘may apply’ standing in for a threat.",
      dominantFunction: "referential",
      functionNote:
        "The letter informs the recipient of a determination and the steps available. Its polite formula belongs to a highly standardised genre.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "verb-modal",
          spans: ["will", "may"],
          note: "‘Will be issued’ is certain; ‘may apply’ is hedged. The difference is a legal grey zone on purpose.",
        },
        {
          feature: "verb-auxiliary",
          spans: ["have", "was", "are"],
          note: "Auxiliaries build the perfect and passive verb phrases that let the agency avoid naming who acts.",
        },
        {
          feature: "verb-lexical",
          spans: [
            "reviewed",
            "indicate",
            "received",
            "included",
            "declared",
            "issued",
            "apply",
            "respond",
            "believe",
            "contact",
            "resolved",
          ],
          note: "Reporting verbs dominate: reviewed, indicate, declared. Most are Latinate and impersonal.",
        },
        {
          feature: "noun-abstract",
          spans: ["discrepancy", "assessment", "penalty", "action"],
          note: "Four abstract nouns carry the entire consequence: a review becomes an ‘assessment’, a fine becomes a ‘penalty’.",
        },
        {
          feature: "noun-common",
          spans: ["return", "records", "amount", "employer", "income", "date", "letter", "information", "matter", "days"],
        },
        {
          feature: "preposition-complex",
          spans: ["As a result of"],
          note: "Four words where ‘because of’ or ‘due to’ would do. Length here signals gravity.",
        },
        { feature: "preposition", spans: ["for", "from", "within", "on"] },
        {
          feature: "determiner",
          spans: ["30", "4,820", "21", "13 28 61"],
          note: "Exact figures — the amount, the date, the deadline, the phone line. Precision is the letter’s authority.",
        },
        { feature: "determiner", spans: ["Our", "this", "an"] },
        { feature: "adjective", spans: ["amended", "incorrect"] },
        {
          feature: "conjunction-subordinating",
          spans: ["If", "so that"],
          note: "‘If’ opens a condition; ‘so that’ opens a purpose clause. Both soften the demand into a pathway.",
        },
        {
          feature: "pronoun",
          spans: ["We", "you"],
          note: "The institutional ‘We’ versus the individual ‘you’. Only the citizen is named in second person.",
        },
      ],
      quiz: [
        {
          prompt: "‘An amended assessment will be issued and a penalty may apply.’ What does the shift from ‘will’ to ‘may’ achieve?",
          options: [
            "it makes the penalty sound certain",
            "it leaves the penalty uncertain while still warning of it",
            "it removes the need for a penalty",
            "it changes the sentence type",
          ],
          answer: 1,
          explain:
            "‘Will’ commits the agency; ‘may’ keeps its options open. Modal verbs let institutions sound definite about obligations while staying vague about consequences.",
        },
        {
          prompt: "Who performed the action in ‘an amount of $4,820 was received’?",
          options: ["the agency", "the employer, unnamed at that point", "the recipient", "nobody — the passive removes the actor"],
          answer: 1,
          explain:
            "‘From an employer’ does name a source, but not a specific actor: the passive plus a vague common noun keeps a real person out of the sentence. Compare ‘your employer paid you’.",
        },
      ],
      teach:
        "Count the passives in this letter and ask who is missing from each. Institutional letters hide agents not to deceive, but because the process, not the person, is treated as the subject.",
    },

    {
      id: "institutional-11",
      title: "Warehouse safety procedure",
      text: "Before commencing work in the warehouse, all personnel must complete the site induction and sign the attendance register. High-visibility clothing and steel-capped footwear are mandatory at all times. If a hazard is identified, stop work immediately and notify your supervisor. Do not attempt to remove a spill or repair equipment unless you have been trained to do so. Any incident resulting in injury or loss of life must be reported within 24 hours. Failure to comply with these procedures may result in disciplinary action.",
      source: "Workplace health and safety procedure, section 2 (constructed)",
      field: "Occupational health and safety",
      mode: 'written',
      setting: "Written, regulatory document",
      tenor: "Employer to all staff, impersonal but directive",
      register: "formal-register",
      registerNote:
        "Agentless passives (‘is identified’, ‘is reported’), the euphemism ‘loss of life’, abstract nouns of consequence, and no contractions anywhere.",
      dominantFunction: "conative",
      functionNote:
        "A procedure is a set of instructions. Every sentence either states an obligation or instructs an action.",
      dominantSentenceType: "imperative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "verb-modal",
          spans: ["must", "may"],
          note: "‘Must’ states the rule; ‘may’ warns of the consequence without promising it.",
        },
        {
          feature: "verb-lexical",
          spans: [
            "commencing",
            "complete",
            "sign",
            "stop",
            "notify",
            "attempt",
            "remove",
            "repair",
            "trained",
            "reported",
            "resulting",
            "comply",
          ],
          note: "Mostly bare imperatives — the grammar of instruction.",
        },
        {
          feature: "noun-abstract",
          spans: ["Failure", "action"],
          note: "‘Failure to comply’ and ‘disciplinary action’ are nominalisations: processes become things you can be penalised for.",
        },
        {
          feature: "noun-common",
          spans: [
            "personnel",
            "induction",
            "register",
            "clothing",
            "footwear",
            "times",
            "supervisor",
            "spill",
            "equipment",
            "hours",
            "procedures",
          ],
        },
        {
          feature: "compounding",
          spans: ["attendance register"],
          note: "Two nouns joined into a single new one — the everyday workhorse of workplace writing.",
        },
        {
          feature: "compounding",
          spans: ["warehouse"],
          note: "ware + house: an old compound where the second element has weakened into a general noun.",
        },
        {
          feature: "preposition",
          spans: ["Before", "at", "to", "within"],
          note: "Prepositions anchor every instruction in time or place.",
        },
        {
          feature: "conjunction-subordinating",
          spans: ["If", "unless"],
          note: "Conditions and exceptions: ‘if’ sets the rule, ‘unless’ carves out the escape hatch.",
        },
        {
          feature: "adjective",
          spans: ["mandatory", "High-visibility", "steel-capped", "disciplinary"],
          note: "Compounds and Latinate borrowings used as classifying adjectives.",
        },
        {
          feature: "determiner",
          spans: ["all", "Any", "your", "these"],
          note: "‘Any incident’ and ‘all personnel’ quantify with no hedging at all.",
        },
        {
          feature: "euphemism",
          spans: ["loss of life"],
          note: "A softened way of writing ‘death’. Institutional language uses euphemism to keep documents readable in grim circumstances.",
        },
        {
          feature: "pronoun",
          spans: ["your", "you"],
          note: "Only one employee is ever addressed, and only in the exceptions clause.",
        },
      ],
      quiz: [
        {
          prompt: "Why does the procedure say ‘loss of life’ rather than ‘death’?",
          options: [
            "it is a euphemism that softens a distressing idea",
            "it is jargon only safety officers understand",
            "it is a colloquialism",
            "it is a technical term with a legal definition",
          ],
          answer: 0,
          explain:
            "A euphemism substitutes a milder expression for a harsh one. Institutional writing uses them to stay usable in situations no one wants to describe bluntly.",
        },
        {
          prompt: "‘If a hazard is identified, stop work immediately and notify your supervisor.’ The passive here…",
          options: [
            "names the person who identifies the hazard",
            "removes the identifier and puts the emphasis on the hazard",
            "turns the sentence into a question",
            "makes the instruction optional",
          ],
          answer: 1,
          explain:
            "The agentless passive makes the condition impersonal. Anyone could identify the hazard — the sentence only cares that someone does, and that you then act.",
        },
      ],
      teach:
        "Safety documents need two things at once: impersonal authority and unmistakable action. Look at how modals and imperatives do the directing while passives and nominalisations do the authority.",
    },

    {
      id: "institutional-12",
      title: "Customer service email refusing a refund",
      text: "Thank you for contacting us about your recent purchase. We understand your frustration and we are sorry that the item did not meet your expectations. Unfortunately, our returns policy allows a refund only where goods are faulty or were not as described, and the photographs you provided do not establish a fault. On this occasion we are unable to offer a refund. We can, however, arrange a store credit or a repair at no cost to you. To proceed, please reply to this email before 5pm on Friday.",
      source: "Customer service email refusing a refund request (constructed)",
      field: "Retail customer service",
      mode: 'written',
      setting: "Written, direct address",
      tenor: "Company to a dissatisfied individual, managing conflict",
      register: "formal-register",
      registerNote:
        "Polite but strategically impersonal: no contractions, the corporate ‘we’, and abstract nouns of policy. Face-work is the whole design of the text.",
      dominantFunction: "conative",
      functionNote:
        "The email exists to redirect the customer’s behaviour — towards a store credit rather than a refund, and towards accepting the decision.",
      dominantSentenceType: "declarative",
      sentenceStructure: "complex-sentence",
      lengthTier: 3,
      difficulty: 4,
      gold: [
        {
          feature: "noun-abstract",
          spans: ["frustration", "expectations", "occasion", "cost"],
          note: "Abstract nouns let the writer name feelings and process obligations without ever getting personal.",
        },
        {
          feature: "noun-common",
          spans: ["purchase", "item", "refund", "goods", "photographs", "fault", "credit", "repair", "email", "Friday"],
        },
        {
          feature: "compounding",
          spans: ["returns policy"],
          note: "The policy is turned into a thing with its own agency: ‘our returns policy allows’.",
        },
        {
          feature: "verb-lexical",
          spans: ["understand", "meet", "allows", "establish", "offer", "arrange", "proceed", "reply"],
          note: "Softer alternatives everywhere: ‘arrange’ rather than ‘give’, ‘establish’ rather than ‘prove’.",
        },
        {
          feature: "verb-modal",
          spans: ["can"],
          note: "‘We can arrange a store credit’ — a modal of ability used to sound generous without conceding anything.",
        },
        {
          feature: "verb-auxiliary",
          spans: ["are", "were", "do", "did"],
          note: "‘Did not meet’ and ‘were not as described’: auxiliaries build the negative and passive forms that keep the sentence polite.",
        },
        {
          feature: "adjective",
          spans: ["recent", "faulty", "unable"],
          note: "‘Unable’ is a gentler alternative to ‘we will not’. Adjective choice is doing the refusal work.",
        },
        {
          feature: "preposition",
          spans: ["about", "for", "of", "to", "at", "On"],
          note: "A dense run of prepositional phrases, each one adding a polite condition.",
        },
        { feature: "conjunction-coordinating", spans: ["and", "or"], note: "‘Faulty or were not as described’ sets the only two paths to a refund." },
        {
          feature: "conjunction-subordinating",
          spans: ["where", "before", "that"],
          note: "‘Only where…’ narrows the policy; ‘before 5pm’ sets the deadline.",
        },
        { feature: "determiner", spans: ["this", "our", "your", "no"] },
        {
          feature: "discourse-marker",
          spans: ["however"],
          note: "Bracketed between commas, it pivots from refusal to offer. Without it, the alternative would look like an afterthought.",
        },
        {
          feature: "idiom",
          spans: ["We understand your frustration"],
          note: "A stock customer-service formula. It acknowledges feeling without conceding any ground — critics call it an empathy cliche.",
        },
      ],
      quiz: [
        {
          prompt: "Which phrase softens the refusal while changing nothing about it?",
          options: ["we are unable to offer a refund", "we will not give you a refund", "no refund", "your claim fails"],
          answer: 0,
          explain:
            "‘Unable’ frames the refusal as incapacity rather than unwillingness. The customer is refused either way, but the politeness strategy is doing real work on the relationship.",
        },
        {
          prompt: "‘We understand your frustration’ is best described as…",
          options: [
            "an idiom expressing sympathy",
            "a customer-service cliche that performs empathy without conceding",
            "a euphemism for ‘you are wrong’",
            "a discourse marker",
          ],
          answer: 1,
          explain:
            "The clause is a formula, repeated so often it has lost its force. It regulates the relationship — which is why it survives in corporate writing despite being so predictable.",
        },
      ],
      teach:
        "Compare this email with the tribunal extract. Both are formal and impersonal, but this one uses politeness strategies on purpose: softeners, an alternative, and a deadline presented as a favour.",
    },
  ],
}

export default bank11
