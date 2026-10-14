/**
 * The metalanguage taxonomy for VCE English Language (Units 1-4, 2024-2028
 * study design).
 *
 * Every feature belongs to a subsystem of language and carries the units in
 * which the study design lists it. Features of scope 'word' can be marked on a
 * span of a passage; features of scope 'text' describe a whole passage and
 * feed the classification questions and the glossary.
 */

import { CONTEXT_FEATURES } from './context'
import { DISCOURSE_FEATURES } from './discourse'
import { LEXICOLOGY_FEATURES } from './lexicology'
import { MORPHOLOGY_FEATURES } from './morphology'
import { PHONETICS_FEATURES } from './phonetics'
import { SEMANTICS_FEATURES } from './semantics'
import { SYNTAX_FEATURES } from './syntax'
import type { Feature, FeatureInput, Subsystem, SubsystemMeta, Unit } from './types'
import { VARIATION_FEATURES } from './variation'

export type { Feature, FeatureScope, Subsystem, SubsystemMeta, Unit } from './types'

export const SUBSYSTEMS: SubsystemMeta[] = [
  {
    id: 'context',
    label: 'Context & function',
    hue: 85,
    blurb:
      'Functions of language, register, tenor and the vocabulary of formality. The context that every language choice answers to.',
  },
  {
    id: 'phonetics',
    label: 'Phonetics & phonology',
    hue: 18,
    blurb: 'Speech sounds, prosody, connected speech and sound patterning.',
  },
  {
    id: 'morphology',
    label: 'Morphology',
    hue: 350,
    blurb: 'The internal structure of words: morphemes and word-formation processes.',
  },
  {
    id: 'lexicology',
    label: 'Lexicology',
    hue: 305,
    blurb: 'Words as the units of the lexicon: word classes, word formation and word loss.',
  },
  {
    id: 'syntax',
    label: 'Syntax',
    hue: 250,
    blurb: 'How words combine into phrases, clauses and sentences.',
  },
  {
    id: 'discourse',
    label: 'Discourse & pragmatics',
    hue: 195,
    blurb: 'Language in context: spoken discourse, politeness, cohesion and coherence.',
  },
  {
    id: 'semantics',
    label: 'Semantics',
    hue: 145,
    blurb: 'Meaning: sense relations, semantic change and figurative language.',
  },
  {
    id: 'variation',
    label: 'Change, variation & identity',
    hue: 55,
    blurb:
      'Attitudes to language, prestige, Australian Englishes, contact varieties and the identities they convey.',
  },
]

export const SUBSYSTEM_MAP: Record<Subsystem, SubsystemMeta> = Object.fromEntries(
  SUBSYSTEMS.map((s) => [s.id, s]),
) as Record<Subsystem, SubsystemMeta>

const RAW: FeatureInput[] = [
  ...CONTEXT_FEATURES,
  ...PHONETICS_FEATURES,
  ...MORPHOLOGY_FEATURES,
  ...LEXICOLOGY_FEATURES,
  ...SYNTAX_FEATURES,
  ...DISCOURSE_FEATURES,
  ...SEMANTICS_FEATURES,
  ...VARIATION_FEATURES,
]

/** Spread the features of one subsystem across a small hue band so layers stay distinguishable. */
function colourFor(subsystem: Subsystem, indexInSubsystem: number): string {
  const base = SUBSYSTEM_MAP[subsystem].hue
  const offset = ((indexInSubsystem * 17) % 44) - 22
  const lightness = 0.68 + ((indexInSubsystem * 7) % 5) * 0.025
  return `oklch(${lightness.toFixed(3)} 0.15 ${base + offset})`
}

const counters = new Map<Subsystem, number>()

export const FEATURES: Feature[] = RAW.map((input) => {
  const idx = counters.get(input.subsystem) ?? 0
  counters.set(input.subsystem, idx + 1)
  return {
    ...input,
    core: input.core ?? false,
    colour: colourFor(input.subsystem, idx),
  }
})

export const FEATURE_MAP: Record<string, Feature> = Object.fromEntries(
  FEATURES.map((f) => [f.id, f]),
)

export const FEATURE_IDS = FEATURES.map((f) => f.id)

export function feature(id: string): Feature | undefined {
  return FEATURE_MAP[id]
}

export function subsystemMeta(id: Subsystem): SubsystemMeta {
  return SUBSYSTEM_MAP[id]
}

export const WORD_FEATURES = FEATURES.filter((f) => f.scope === 'word')
export const TEXT_FEATURES = FEATURES.filter((f) => f.scope === 'text')

/** Features tested in a given unit. */
export function featuresForUnit(unit: Unit): Feature[] {
  return FEATURES.filter((f) => f.units.includes(unit))
}

/** Group a list of features by subsystem then by row heading, preserving file order. */
export function groupFeatures(
  features: Feature[],
): { subsystem: SubsystemMeta; groups: { name: string; features: Feature[] }[] }[] {
  const out: ReturnType<typeof groupFeatures> = []
  for (const meta of SUBSYSTEMS) {
    const inSub = features.filter((f) => f.subsystem === meta.id)
    if (inSub.length === 0) continue
    const groups: { name: string; features: Feature[] }[] = []
    for (const f of inSub) {
      let g = groups.find((x) => x.name === f.group)
      if (!g) {
        g = { name: f.group, features: [] }
        groups.push(g)
      }
      g.features.push(f)
    }
    out.push({ subsystem: meta, groups })
  }
  return out
}

/* ------------------------------------------------------- classification sets */

/** Jakobson's six functions, using the study design's names. */
export const FUNCTION_IDS = [
  'referential',
  'emotive',
  'conative',
  'phatic',
  'metalinguistic',
  'poetic',
] as const
export type FunctionId = (typeof FUNCTION_IDS)[number]

export const REGISTER_IDS = ['formal-register', 'informal-register', 'neutral-register'] as const
export type RegisterId = (typeof REGISTER_IDS)[number]

export const REGISTER_LABELS: Record<string, string> = {
  'formal-register': 'Formal',
  'informal-register': 'Informal',
  'neutral-register': 'Neutral',
}

export const SENTENCE_TYPE_IDS = [
  'declarative',
  'interrogative',
  'imperative',
  'exclamative',
] as const

export const SENTENCE_STRUCTURE_IDS = [
  'simple-sentence',
  'compound-sentence',
  'complex-sentence',
  'compound-complex-sentence',
  'fragment',
] as const

/** Features that are too noisy to make good Hunt targets on their own. */
export const HUNT_EXCLUDED = new Set<string>([
  'cohesive-repetition',
  'clause',
  'noun-phrase',
  'verb-phrase',
  'prepositional-phrase',
  'function-word',
  'content-word',
  'predicate',
])
