/**
 * Passage schema shared by every curated data bank.
 *
 * Gold annotations are written as *exact substrings* of the passage text so the
 * data files stay readable and reviewable by a human. They are resolved into
 * character spans at load time (see `resolve.ts`). Every occurrence of the
 * substring counts, which is exactly what we want for "find all the
 * prepositions" style challenges.
 */

import type { FunctionId, RegisterId, Unit } from './taxonomy'
import type { LanguageMode, TextTypeId } from './vce'

export interface GoldFeature {
  /** A feature id from taxonomy.ts. */
  feature: string
  /** Exact substrings of `text`. Case sensitive, punctuation excluded. */
  spans: string[]
  /** Shown when the learner reveals the answer. */
  note?: string
}

export interface QuizQuestion {
  prompt: string
  options: string[]
  /** Index into `options`. */
  answer: number
  explain: string
}

/**
 * 0 = single word, 1 = phrase or single short sentence, 2 = a few sentences,
 * 3 = a full paragraph. Drives the "ladder" progression.
 */
export type LengthTier = 0 | 1 | 2 | 3

export interface Passage {
  id: string
  title: string
  /**
   * The passage itself. Plain text. Use a straight apostrophe or a curly one,
   * never a backtick. Transcripts put one turn per line as `Speaker: words`.
   */
  text: string
  /** Where the text came from, in the style used in VCE exam papers. */
  source: string

  /* ---- VCE classification (study design 2024-2028) ---- */
  /** The unit this passage best serves, when reviewed for curriculum alignment. */
  unit?: Unit
  /** One of the area-of-study ids in vce.ts, belonging to `unit`. */
  areaOfStudy?: string
  /** One of the text forms the study design says students should meet. */
  textType?: TextTypeId
  /** Language mode: speaking, writing or multimodal. */
  mode: LanguageMode
  /** Short noun phrase: the subject matter or activity (situational context). */
  field: string
  /** Short phrase: relationship of participants, social distance, formality. */
  tenor: string
  /** Short phrase: time, place and medium of the exchange. */
  setting: string
  register: RegisterId
  registerNote: string
  dominantFunction: FunctionId
  /** Other Jakobson functions clearly at work (a text can serve several). */
  secondaryFunctions?: FunctionId[]
  functionNote: string
  dominantSentenceType: 'declarative' | 'interrogative' | 'imperative' | 'exclamative'
  sentenceStructure:
    | 'simple-sentence'
    | 'compound-sentence'
    | 'complex-sentence'
    | 'compound-complex-sentence'
    | 'fragment'
  /** Spoken transcript: shown with line numbers and speaker labels. */
  transcript?: boolean

  lengthTier: LengthTier
  difficulty: 1 | 2 | 3 | 4 | 5
  gold: GoldFeature[]
  quiz: QuizQuestion[]
  /** One or two sentences of teacherly takeaway. */
  teach: string
}

export interface PassageBank {
  id: string
  label: string
  blurb: string
  passages: Passage[]
}

export const TIER_META: {
  tier: LengthTier
  label: string
  blurb: string
  icon: string
}[] = [
  {
    tier: 0,
    label: 'Word',
    blurb: 'One word at a time. Name the word class and the morphology.',
    icon: '🔤',
  },
  {
    tier: 1,
    label: 'Phrase',
    blurb: 'A phrase or a single short sentence. Spot the unit, not the word.',
    icon: '🧩',
  },
  {
    tier: 2,
    label: 'Sentence',
    blurb: 'Two or three sentences. Track cohesion across clauses.',
    icon: '📝',
  },
  {
    tier: 3,
    label: 'Paragraph',
    blurb: 'A full paragraph of running text. Handle everything at once.',
    icon: '📄',
  },
]

export function resolveTier(tier: number): (typeof TIER_META)[number] {
  return TIER_META[Math.max(0, Math.min(3, Math.round(tier)))]
}

/** Rough word count, used for stats and tier sanity checks. */
export function wordCount(text: string): number {
  const m = text.match(/[A-Za-z\u2019']+/g)
  return m ? m.length : 0
}
