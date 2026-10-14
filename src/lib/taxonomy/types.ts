/**
 * Shared types for the VCE English Language metalanguage taxonomy.
 *
 * The structure mirrors the VCAA study design (2024-2028): a feature belongs to
 * one subsystem of language (or to the contextual / variation strands the
 * study design treats separately) and is tagged with the units in which the
 * study design's "Metalanguage by subsystem of language and unit" table makes
 * it examinable.
 */

export type Unit = 1 | 2 | 3 | 4

export type Subsystem =
  | 'context'
  | 'phonetics'
  | 'morphology'
  | 'lexicology'
  | 'syntax'
  | 'discourse'
  | 'semantics'
  | 'variation'

/**
 * word  -> can be attached to a span of a passage (huntable, paintable)
 * text  -> describes a whole passage or sentence (classification questions,
 *          glossary only)
 */
export type FeatureScope = 'word' | 'text'

export interface Feature {
  id: string
  label: string
  subsystem: Subsystem
  /** The row heading inside the subsystem, e.g. "Word classes". */
  group: string
  scope: FeatureScope
  /** Units (1-4) in which the study design lists this metalanguage. */
  units: Unit[]
  /**
   * true  -> the term appears in the study design itself
   * false -> a supporting grammar term students routinely need to describe it
   */
  core: boolean
  /** One-line definition shown on chips and tooltips. */
  short: string
  /** Fuller teaching explanation shown in the popover and glossary. */
  detail: string
  /** Gentle nudge used by Hunt mode hints. */
  hint: string
  examples: string[]
  /** Optional test the learner can run on a word. */
  test?: string
  /** Assigned by the index from the subsystem + position. */
  colour: string
}

export type FeatureInput = Omit<Feature, 'colour' | 'core'> & { core?: boolean }

export interface SubsystemMeta {
  id: Subsystem
  label: string
  /** oklch hue angle used for this subsystem's highlighter colour. */
  hue: number
  blurb: string
}
