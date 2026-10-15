/**
 * Structure of the VCE English Language study design (implementation from 2024): units, areas
 * of study, text types and language modes. Passages are classified against
 * these so learners can practise exactly the part of the course they are on.
 */

import type { Unit } from './taxonomy'

export interface AreaOfStudy {
  id: string
  unit: Unit
  title: string
  blurb: string
}

export interface UnitMeta {
  id: Unit
  title: string
  short: string
  blurb: string
  areas: AreaOfStudy[]
  /** Units 3 and 4 are examinable; 1 and 2 are school-assessed only. */
  examinable: boolean
}

export const UNITS: UnitMeta[] = [
  {
    id: 1,
    title: 'Language and communication',
    short: 'Language & communication',
    blurb:
      'How language is organised as a system of signs and conventions, the functions it serves, and how children acquire it.',
    examinable: false,
    areas: [
      {
        id: 'u1-nature-functions',
        unit: 1,
        title: 'The nature and functions of language',
        blurb:
          'Language as a meaning-making system; Functions of language; register, tenor and context; speech versus writing.',
      },
      {
        id: 'u1-acquisition',
        unit: 1,
        title: 'Language acquisition',
        blurb:
          'Stages of first- and additional-language acquisition; universal grammar and usage-based accounts; the critical period; child language samples.',
      },
    ],
  },
  {
    id: 2,
    title: 'Language change',
    short: 'Language change',
    blurb:
      'How English has changed across time, how it spread around the world, and attitudes to change.',
    examinable: false,
    areas: [
      {
        id: 'u2-english-across-time',
        unit: 2,
        title: 'English across time',
        blurb:
          'Incursions (Vikings, Normans, religion, plagues) and Inventions (printing press, dictionaries, typewriters, the internet); prescriptivism and descriptivism.',
      },
      {
        id: 'u2-englishes-in-contact',
        unit: 2,
        title: 'Englishes in contact',
        blurb:
          'Global spread of English, pidgins and creoles, Aboriginal Australian Englishes, language maintenance, shift and reclamation.',
      },
    ],
  },
  {
    id: 3,
    title: 'Language variation and purpose',
    short: 'Variation & purpose',
    blurb: 'Formal and informal language in contemporary Australian settings. 25% of the study score, plus the exam.',
    examinable: true,
    areas: [
      {
        id: 'u3-informality',
        unit: 3,
        title: 'Informality',
        blurb:
          'Features of informal speech and writing: colloquial language, slang, taboo language, spoken discourse, rapport and in-group membership.',
      },
      {
        id: 'u3-formality',
        unit: 3,
        title: 'Formality',
        blurb:
          'Features of formal speech and writing: rhetoric, jargon, euphemism, double speak, non-discriminatory language, cohesion and public language.',
      },
    ],
  },
  {
    id: 4,
    title: 'Language variation and identity',
    short: 'Variation & identity',
    blurb:
      'Varieties of English in Australian society and how language reflects and constructs individual and group identities. 25% of the study score, plus the exam.',
    examinable: true,
    areas: [
      {
        id: 'u4-australian-society',
        unit: 4,
        title: 'Language variation in Australian society',
        blurb:
          'Standard Australian English and its prestige; Broad, General and Cultivated accents; Aboriginal Australian Englishes and migrant ethnolects; national identity.',
      },
      {
        id: 'u4-identity',
        unit: 4,
        title: 'Individual and group identities',
        blurb:
          'Sociolects and idiolects, overt and covert prestige, code switching, social attitudes and linguistic repertoires.',
      },
    ],
  },
]

export const UNIT_MAP: Record<Unit, UnitMeta> = Object.fromEntries(
  UNITS.map((u) => [u.id, u]),
) as Record<Unit, UnitMeta>

export const AREAS: AreaOfStudy[] = UNITS.flatMap((u) => u.areas)
export const AREA_IDS = AREAS.map((a) => a.id)

export function areaOfStudy(id: string): AreaOfStudy | undefined {
  return AREAS.find((a) => a.id === id)
}

/** The text forms the study design says students should meet. */
export const TEXT_TYPES = [
  { id: 'academic', label: 'Academic writing' },
  { id: 'public-document', label: 'Public document' },
  { id: 'personal-exchange', label: 'Personal exchange' },
  { id: 'interview', label: 'Interview' },
  { id: 'speech', label: 'Speech' },
  { id: 'spoken-exchange', label: 'Spoken exchange (transcript)' },
  { id: 'advertising', label: 'Advertising and marketing' },
  { id: 'literature', label: 'Literature and storytelling' },
  { id: 'manual', label: 'Manual or technical document' },
  { id: 'news', label: 'Newspaper report or opinion piece' },
  { id: 'social-media', label: 'Social media' },
] as const

export type TextTypeId = (typeof TEXT_TYPES)[number]['id']

export const TEXT_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  TEXT_TYPES.map((t) => [t.id, t.label]),
)

export const LANGUAGE_MODES = [
  { id: 'written', label: 'Written' },
  { id: 'spoken', label: 'Spoken' },
  { id: 'multimodal', label: 'Multimodal' },
] as const

export type LanguageMode = (typeof LANGUAGE_MODES)[number]['id']

export const MODE_LABELS: Record<string, string> = Object.fromEntries(
  LANGUAGE_MODES.map((m) => [m.id, m.label]),
)

/** Transcription conventions used in the app’s spoken texts (Unit 3 and 4). */
export const TRANSCRIPT_LEGEND: { symbol: string; meaning: string }[] = [
  { symbol: '(.)', meaning: 'micropause (under one second)' },
  { symbol: '(2.0)', meaning: 'pause timed in seconds' },
  { symbol: '[ ]', meaning: 'overlapping speech' },
  { symbol: '=', meaning: 'latching: no gap between turns' },
  { symbol: ':::', meaning: 'lengthened sound' },
  { symbol: '—', meaning: 'abrupt cut-off or false start' },
  { symbol: 'CAPS', meaning: 'louder speech or heavy stress' },
  { symbol: '°word°', meaning: 'quieter speech' },
  { symbol: '>word<', meaning: 'faster speech' },
  { symbol: '↑ ↓', meaning: 'rising or falling pitch' },
  { symbol: '(( ))', meaning: 'paralinguistic or non-verbal comment' },
  { symbol: '(word)', meaning: 'uncertain transcription' },
]
