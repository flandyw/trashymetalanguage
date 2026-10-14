/**
 * Barrel for the word lists. `lexiconCore.ts` holds closed-class and
 * high-frequency words; `lexiconLexis.ts` holds lexis, register and
 * word-formation material. This module re-exports them and builds the O(1)
 * lookup sets the tagger uses.
 */

export * from './lexiconCore'
export * from './lexiconLexis'

import * as core from './lexiconCore'
import * as lexis from './lexiconLexis'

export type Confidence = 'high' | 'medium' | 'low'

const set = (xs: string[]) => new Set(xs)

export const SET = {
  prepositions: set(core.PREPOSITIONS),
  complexPrepositions: set(core.COMPLEX_PREPOSITIONS),
  modalVerbs: set(core.MODAL_VERBS),
  semiModals: set(core.SEMI_MODALS),
  auxiliaries: set(core.AUXILIARIES),
  pronouns: set(core.PRONOUNS),
  demonstratives: set(core.DEMONSTRATIVES),
  determiners: set(core.DETERMINERS),
  coordinators: set(core.COORDINATORS),
  subordinators: set(core.SUBORDINATORS),
  interjections: set(core.INTERJECTIONS),
  degreeAdverbs: set(core.DEGREE_ADVERBS),
  adverbs: set(core.COMMON_ADVERBS),
  adjectives: set(core.COMMON_ADJECTIVES),
  irregularComparatives: set(core.IRREGULAR_COMPARATIVES),
  irregularSuperlatives: set(core.IRREGULAR_SUPERLATIVES),
  abstractNounSuffixes: set(core.ABSTRACT_NOUN_SUFFIXES),
  abstractNouns: set(core.COMMON_ABSTRACT_NOUNS),
  collectiveNouns: set(core.COLLECTIVE_NOUNS),
  nouns: set(core.COMMON_NOUNS),
  verbs: set(core.COMMON_VERBS),

  jargon: set(lexis.JARGON),
  slang: set(lexis.SLANG),
  colloquialisms: set(lexis.COLLOQUIALISMS),
  euphemisms: set(lexis.EUPHEMISMS),
  dysphemisms: set(lexis.DYSPHEMISMS),
  idioms: set(lexis.IDIOMS),
  cliches: set(lexis.CLICHES),
  loaded: set(lexis.LOADED_WORDS),
  taboo: set(lexis.TABOO_WORDS),
  contractions: set(lexis.CONTRACTIONS),
  australian: set(lexis.AUSTRALIAN_ENGLISH),
  nonStandard: set(lexis.NON_STANDARD),
  acronyms: set(lexis.ACRONYMS),
  initialisms: set(lexis.INITIALISMS),
  clippings: set(lexis.CLIPPINGS),
  neologisms: set(lexis.NEOLOGISMS),
  discourseMarkers: set(lexis.DISCOURSE_MARKERS),
  onomatopoeia: set(lexis.ONOMATOPOEIA),
}

/** Every word that belongs to a homophone group. */
export const HOMOPHONES = new Map<string, string[]>()
for (const group of lexis.HOMOPHONE_GROUPS) {
  for (const word of group) HOMOPHONES.set(word.toLowerCase(), group)
}

/**
 * Multi-word entries, longest first, so a greedy match prefers
 * "as a result of" over "as".
 *
 * Each entry maps a phrase to the feature ids it represents, with the
 * confidence for each. Ordered lists matter: the first match wins.
 */
export interface PhraseEntry {
  phrase: string
  words: number
  tags: { feature: string; confidence: Confidence; note?: string }[]
}

function buildPhrases(): PhraseEntry[] {
  const out: PhraseEntry[] = []
  const add = (
    phrase: string,
    tags: { feature: string; confidence: Confidence; note?: string }[],
  ) => {
    const words = phrase.split(/\s+/).length
    if (words < 2) return
    out.push({ phrase, words, tags })
  }

  for (const p of core.COMPLEX_PREPOSITIONS) {
    add(p, [
      { feature: 'preposition-complex', confidence: 'high' },
      { feature: 'preposition', confidence: 'medium' },
    ])
  }
  for (const p of core.SEMI_MODALS) {
    add(p, [{ feature: 'verb-semi-modal', confidence: 'high' }])
  }
  for (const p of lexis.IDIOMS) {
    add(p, [{ feature: 'idiom', confidence: 'high' }])
  }
  for (const p of lexis.CLICHES) {
    add(p, [{ feature: 'idiom', confidence: 'high' }])
  }
  for (const p of lexis.EUPHEMISMS) {
    add(p, [{ feature: 'euphemism', confidence: 'high' }])
  }
  for (const p of lexis.DYSPHEMISMS) {
    add(p, [{ feature: 'dysphemism', confidence: 'medium' }])
  }
  for (const p of lexis.DISCOURSE_MARKERS) {
    add(p, [{ feature: 'discourse-marker', confidence: 'high' }])
  }
  for (const p of lexis.AUSTRALIAN_ENGLISH) {
    add(p, [
      { feature: 'australian-english', confidence: 'high' },
    ])
  }
  for (const p of lexis.SLANG) {
    add(p, [{ feature: 'slang', confidence: 'high' }])
  }
  for (const p of lexis.COLLOQUIALISMS) {
    add(p, [{ feature: 'colloquialism', confidence: 'medium' }])
  }
  for (const p of lexis.JARGON) {
    add(p, [{ feature: 'jargon', confidence: 'medium' }])
  }
  for (const p of lexis.LOADED_WORDS) {
    add(p, [{ feature: 'connotation', confidence: 'low' }])
  }
  for (const p of lexis.NON_STANDARD) {
    add(p, [{ feature: 'non-standard', confidence: 'medium' }])
  }

  // Longest phrases first so the greedy scan prefers the specific match.
  out.sort((a, b) => b.words - a.words || b.phrase.length - a.phrase.length)
  return out
}

export const PHRASES = buildPhrases()

/** Index of first word -> candidate phrases that start with it. */
export const PHRASES_BY_FIRST: Map<string, PhraseEntry[]> = (() => {
  const map = new Map<string, PhraseEntry[]>()
  for (const entry of PHRASES) {
    const first = entry.phrase.split(/\s+/)[0]
    const list = map.get(first) ?? []
    list.push(entry)
    map.set(first, list)
  }
  return map
})()

/** Affixes worth pointing at, with the word-class change they usually cause. */
export const PREFIXES = [
  'un',
  're',
  'dis',
  'pre',
  'mis',
  'non',
  'anti',
  'over',
  'under',
  'sub',
  'super',
  'inter',
  'trans',
  'co',
  'de',
  'ex',
  'in',
  'im',
  'ir',
  'il',
  'post',
  'semi',
  'multi',
  'auto',
  'micro',
  'macro',
  'hyper',
  'ultra',
  'counter',
  'fore',
  'mid',
  'out',
  'bi',
  'tri',
  'mono',
  'poly',
  'pre',
  'pro',
  'para',
]

export const SUFFIXES = [
  'ly',
  'ness',
  'ity',
  'ty',
  'tion',
  'sion',
  'ment',
  'ance',
  'ence',
  'ship',
  'hood',
  'dom',
  'ism',
  'able',
  'ible',
  'ful',
  'less',
  'ous',
  'ive',
  'ist',
  'ise',
  'ize',
  'ify',
  'ing',
  'ed',
  'er',
  'est',
  'age',
  'ure',
  'ary',
  'ory',
  'al',
  'ic',
  'ate',
]
