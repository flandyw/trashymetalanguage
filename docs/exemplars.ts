/**
 * Two model passages showing the expected quality: a Unit 3 informal spoken
 * transcript and a Unit 2 attitudes-to-change text. Validate with
 *   bun scripts/check-bank.ts docs/exemplars.ts
 */
import type { PassageBank } from '../src/lib/passages'

export const exemplars: PassageBank = {
  id: 'exemplars',
  label: 'Exemplars',
  blurb: 'Model passages for authors.',
  passages: [
    {
      id: 'ex-transcript',
      title: 'Saturday that never happened',
      text: [
        'Mia: Did you (.) did you end up going to the thing on Saturday?',
        'Sam: Nah, nah. I was gonna— but then Jacko bailed on me, so [I just]',
        'Mia: [Oh] that’s classic.',
        'Sam: Yeah. ((laughs)) Spent the whole arvo on the couch, honestly.',
        'Mia: Mm. Sounds pretty good to me.',
        'Sam: It was bloody ace. Anyway, how’s uni going?',
      ].join('\n'),
      source: 'Constructed: face-to-face conversation between two university friends',
      unit: 3,
      areaOfStudy: 'u3-informality',
      textType: 'spoken-exchange',
      mode: 'spoken',
      field: 'weekend plans and study',
      tenor: 'close friends; low social distance, very informal',
      setting: 'casual face-to-face chat on campus, Monday morning',
      register: 'informal-register',
      registerNote:
        'Contractions, colloquial lexis (bailed, arvo, bloody ace) and non-fluency features show a relaxed, spontaneous exchange between friends.',
      dominantFunction: 'phatic',
      secondaryFunctions: ['referential', 'emotive'],
      functionNote:
        'The turns mostly maintain the friendship (catching up, sympathy, topic change) rather than convey essential information.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'simple-sentence',
      transcript: true,
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'pause',
          spans: ['(.)'],
          note: 'A micropause marks Mia planning her question.',
        },
        {
          feature: 'repetition-nonfluency',
          spans: ['did you'],
          note: 'Mia repeats "did you" while planning, a non-fluency feature of spontaneous speech.',
        },
        {
          feature: 'false-start',
          spans: ['I was gonna'],
          note: 'Sam begins an explanation and abandons it (marked with a dash) to restart.',
        },
        {
          feature: 'elision',
          spans: ['gonna'],
          note: 'Gonna is written to show the elision of sounds in going to.',
        },
        {
          feature: 'overlap',
          spans: ['[I just]', '[Oh]'],
          note: 'The square brackets show the two speakers talking at the same time; here Mia’s overlap is supportive, not an interruption.',
        },
        {
          feature: 'vocal-effect',
          spans: ['((laughs))'],
          note: 'A paralinguistic vocal effect that signals Sam’s amused attitude.',
        },
        {
          feature: 'minimal-response',
          spans: ['Mm'],
          note: 'A backchannel: Mia shows she is listening without taking a full turn.',
        },
        {
          feature: 'shortening',
          spans: ['arvo'],
          note: 'Arvo is a shortening of afternoon with an added -o, typical of informal Australian English.',
        },
        {
          feature: 'swearing',
          spans: ['bloody'],
          note: 'Mild swearing used as an intensifier; between friends it builds rapport rather than offends.',
        },
        {
          feature: 'discourse-marker',
          spans: ['Anyway'],
          note: 'Signals a shift of topic and closes off the previous one.',
        },
        {
          feature: 'contraction',
          spans: ['that’s', 'how’s'],
          note: 'Contractions are typical of informal speech and writing.',
        },
      ],
      quiz: [
        {
          prompt: 'What is the function of "Mm" at the start of Mia’s last turn?',
          options: [
            'A filled pause that holds the floor while she plans',
            'The first part of an adjacency pair',
            'A minimal response that shows she is listening',
            'A false start that she abandons',
          ],
          answer: 2,
          explain:
            'Mia has just heard Sam’s explanation; "Mm" supports Sam without claiming a full turn, so it is a minimal response (backchannel). A filled pause would be um or er inside her own planning.',
        },
        {
          prompt: 'How is Mia’s overlap with "[Oh]" best described?',
          options: [
            'An interruption that threatens Sam’s positive face',
            'Cooperative overlap that shows engagement',
            'A repair of something Sam said wrongly',
            'A topic shift managed with a discourse marker',
          ],
          answer: 1,
          explain:
            'Mia overlaps with agreement ("that’s classic") finishing Sam’s thought sympathetically, which builds rapport. It does not correct Sam (repair) or change topic.',
        },
      ],
      teach:
        'In a transcript, every symbol is evidence: (.) is a micropause, [ ] is overlap and ((laughs)) is a vocal effect. Name the feature, then say what it does for rapport.',
    },
    {
      id: 'ex-attitudes',
      title: 'Letter on the decline of English',
      text: 'It is with dismay that I observe the ongoing decline of our language. Young people now use "literally" to mean its opposite, and the word "text" has been shamelessly turned into a verb. Such sloppy usage must not be tolerated; schools should correct it at once.',
      source: 'Constructed: letter to the editor of a metropolitan newspaper',
      unit: 2,
      areaOfStudy: 'u2-english-across-time',
      textType: 'news',
      mode: 'written',
      field: 'standards of English usage',
      tenor: 'anonymous writer to a general readership; formal, authoritative',
      setting: 'published letters page, print and online, 2020s',
      register: 'formal-register',
      registerNote:
        'Formal lexis (dismay, observe), complete sentences, a semicolon and no contractions give an authoritative tone.',
      dominantFunction: 'conative',
      secondaryFunctions: ['emotive'],
      functionNote:
        'The letter tries to persuade readers and schools to act, using modal verbs of obligation and strongly evaluative words.',
      dominantSentenceType: 'declarative',
      sentenceStructure: 'compound-sentence',
      lengthTier: 3,
      difficulty: 3,
      gold: [
        {
          feature: 'prescriptivist-attitude',
          spans: [
            'the ongoing decline of our language',
            'Such sloppy usage must not be tolerated',
            'schools should correct it at once',
          ],
          note: 'The writer treats change as decline and insists on correction: a prescriptivist stance.',
        },
        {
          feature: 'connotation',
          spans: ['dismay', 'shamelessly', 'sloppy'],
          note: 'Negative connotations present change as a moral failing rather than a neutral development.',
        },
        {
          feature: 'verb-modal',
          spans: ['must', 'should'],
          note: 'Modal verbs of obligation make the demands strong and direct (conative function).',
        },
        {
          feature: 'passive-voice',
          spans: ['has been shamelessly turned into a verb', 'must not be tolerated'],
          note: 'The passive hides who is responsible and makes the judgement sound objective.',
        },
        {
          feature: 'conversion',
          spans: ['turned into a verb'],
          note: 'The writer is complaining about conversion of the noun text into a verb, a common process of language change.',
        },
        {
          feature: 'semantic-shift',
          spans: ['literally'],
          note: 'The writer objects to the shift in the meaning of literally, which now also works as an intensifier.',
        },
      ],
      quiz: [
        {
          prompt: 'Which approach to language change does the letter show?',
          options: [
            'Descriptivism, because it records how people use words',
            'Prescriptivism, because it insists on what is correct',
            'Etymology, because it traces the history of words',
            'Standardisation, because it codifies a dictionary',
          ],
          answer: 1,
          explain:
            'The writer judges change as decline and says it should be corrected. A descriptivist would report usage without judging it.',
        },
      ],
      teach:
        'Prescriptivism and descriptivism are attitudes, so find the evaluative words and modal verbs that reveal the stance. The same change can be framed as decline or as evolution.',
    },
  ],
}
