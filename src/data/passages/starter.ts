import type { PassageBank } from '../../lib/passages'

/** Short, contextual texts with deliberately focused teaching annotations. */
export const starter: PassageBank = {
  id: 'starter',
  label: 'Language in context',
  blurb: 'Short, realistic texts. Identify a feature, then connect it to purpose and audience.',
  passages: [
    {
      id: 'context-01', title: 'A library notice',
      text: 'Please return borrowed laptops to the service desk before closing time. You must save your work before returning a device. Staff can help you transfer files, but the library cannot recover files left on a returned laptop.',
      source: 'School library notice (constructed)',
      field: 'Returning school equipment', mode: 'written', setting: 'Notice beside a school library service desk',
      tenor: 'Library staff addressing student borrowers', register: 'formal-register',
      registerNote: 'Complete clauses, direct instructions and impersonal institutional wording establish a clear procedure. “Please” softens the initial directive.',
      dominantFunction: 'conative', functionNote: 'The notice aims to change borrowers’ behaviour: return equipment and save files. Information about staff support helps readers follow those instructions.',
      dominantSentenceType: 'declarative', sentenceStructure: 'complex-sentence', lengthTier: 2, difficulty: 1,
      gold: [
        { feature: 'verb-modal', spans: ['must', 'can', 'cannot'], note: '“Must” expresses obligation. “Can” offers staff assistance; “cannot” limits what the library is able to do.' },
        { feature: 'verb-lexical', spans: ['return', 'save', 'help', 'transfer', 'recover'], note: 'These verbs name the actions involved in borrowing and returning a laptop.' },
        { feature: 'pronoun', spans: ['You', 'you'], note: 'Second-person pronouns address the student directly.' },
        { feature: 'conjunction-coordinating', spans: ['but'], note: '“But” contrasts available assistance with a limit on recovery.' },
        { feature: 'noun-common', spans: ['laptops', 'desk', 'device', 'files', 'laptop'], note: 'These common nouns name the equipment, location and digital material involved.' },
      ],
      quiz: [
        { prompt: 'What does “must” contribute to “You must save your work”?', options: ['An obligation', 'A possibility', 'An account of a past event', 'A comparison'], answer: 0, explain: '“Must” expresses deontic modality: saving the work is presented as a requirement for the borrower.' },
        { prompt: 'Why does the notice use the second-person pronoun “you”?', options: ['To identify a previous speaker', 'To address the borrower directly', 'To distance staff from the reader', 'To introduce a new topic'], answer: 1, explain: '“You” makes the instruction directly relevant to the borrower reading the notice.' },
      ],
      teach: 'Use evidence at two levels: identify “must” as a modal verb, then explain how its obligation supports the notice’s directive purpose.',
    },
    {
      id: 'context-02', title: 'Changing the meeting time',
      text: 'Mia: Can we meet at four instead? My train is running late.\nNoah: Yeah, no worries. I’ll wait near the entrance.\nMia: Thanks! See you there.',
      source: 'Private messages between friends (constructed)',
      field: 'Rearranging a meeting', mode: 'written', transcript: true, setting: 'Private messaging app',
      tenor: 'Friends with a familiar, cooperative relationship', register: 'informal-register',
      registerNote: 'The conversational response “Yeah, no worries”, the contraction “I’ll” and short closing formula suit a private exchange between friends.',
      dominantFunction: 'conative', functionNote: 'Mia requests a change to the meeting time. The acknowledgements and thanks also maintain the friendship.',
      dominantSentenceType: 'declarative', sentenceStructure: 'simple-sentence', lengthTier: 2, difficulty: 2,
      gold: [
        { feature: 'contraction', spans: ['I’ll'], note: '“I’ll” contracts “I will”, fitting the conversational written exchange.' },
        { feature: 'colloquialism', spans: ['no worries'], note: 'This informal reassurance accepts the request and reduces concern about the delay.' },
        { feature: 'verb-modal', spans: ['Can', 'I’ll'], note: '“Can” introduces a request; the contracted “will” commits Noah to waiting.' },
        { feature: 'prepositional-phrase', spans: ['at four', 'near the entrance'], note: 'These phrases specify the proposed meeting time and the waiting location.' },
        { feature: 'interjection', spans: ['Yeah', 'Thanks'], note: 'Brief responses acknowledge the request and express gratitude.' },
      ],
      quiz: [
        { prompt: 'Why is the mode written even though this exchange sounds conversational?', options: ['All informal language is written', 'The participants type messages rather than speak', 'The exchange contains a question', 'The participants are friends'], answer: 1, explain: 'Mode concerns the medium. These are typed messages; conversational wording does not make the medium spoken.' },
        { prompt: 'What does “no worries” do in this exchange?', options: ['Rejects the request', 'Introduces technical information', 'Accepts the delay and reassures Mia', 'Creates a formal warning'], answer: 2, explain: 'The colloquial reassurance accepts Mia’s request without blame, helping preserve a cooperative relationship.' },
      ],
      teach: 'Keep mode and register separate. A written text can use conversational language, and speaker labels do not by themselves make a text spoken.',
    },
    {
      id: 'context-03', title: 'A report on the evening bus',
      text: 'The council will trial an evening bus service from July. The route will connect the station with the hospital every thirty minutes. A council spokesperson said the trial would run for six months before a review of passenger numbers.',
      source: 'Local news report (constructed)',
      field: 'A public transport trial', mode: 'written', setting: 'Local news website', tenor: 'Reporter informing local residents',
      register: 'neutral-register', registerNote: 'Standard vocabulary, complete sentences and attributed information present the announcement without slang or specialist detail.',
      dominantFunction: 'referential', functionNote: 'The report primarily supplies information about the service: its route, frequency, start date and trial period.',
      dominantSentenceType: 'declarative', sentenceStructure: 'complex-sentence', lengthTier: 2, difficulty: 2,
      gold: [
        { feature: 'verb-modal', spans: ['will', 'would'], note: '“Will” presents the planned service; “would” appears in the reported announcement.' },
        { feature: 'noun-proper', spans: ['July'], note: 'July names a specific month.' },
        { feature: 'verb-lexical', spans: ['connect', 'said', 'run'], note: 'These verbs name actions and reporting. Compare “will trial” with “the trial” elsewhere in the passage: the same spelling can function as a verb or a noun.' },
        { feature: 'article-definite', spans: ['The', 'the'], note: 'The definite article presents the council and local destinations as identifiable to readers.' },
      ],
      quiz: [
        { prompt: 'In “The council will trial”, what word class is “trial”?', options: ['Noun', 'Lexical verb', 'Adjective', 'Preposition'], answer: 1, explain: 'After the modal “will”, “trial” is the base form of a lexical verb. In “the trial”, it instead heads a noun phrase.' },
        { prompt: 'Why does the report attribute information to a council spokesperson?', options: ['To identify the source of the announcement', 'To create an informal greeting', 'To issue an order to the reader', 'To imitate a sound'], answer: 0, explain: 'Attribution identifies who supplied the information and separates the announcement from the reporter’s own claims.' },
      ],
      teach: 'A word list cannot settle word class. Compare “will trial” with “the trial”: the grammatical environment determines how the word functions.',
    },
  ],
}
