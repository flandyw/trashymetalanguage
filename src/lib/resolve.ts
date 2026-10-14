/**
 * Turns the readable gold annotations in the data banks (lists of substrings)
 * into character spans and token sets that the UI can highlight.
 *
 * The unit of "something to find" is an *occurrence*: one resolved substring.
 * A multi-word gold span such as "in spite of" is a single occurrence that
 * covers four tokens, so clicking any word inside it counts as finding it.
 *
 * Also provides `validatePassages`, which `scripts/check-data.ts` runs.
 */

import type { GoldFeature, Passage } from './passages'
import { FUNCTION_IDS, feature } from './taxonomy'
import { AREAS, LANGUAGE_MODES, TEXT_TYPES } from './vce'
import { findOccurrences, tokenize, tokensInRange, type Tokenized } from './tokenize'

export interface GoldOccurrence {
  start: number
  end: number
  /** Token indices covered by this occurrence. */
  tokens: number[]
}

export interface ResolvedGold {
  feature: string
  occurrences: GoldOccurrence[]
  note?: string
}

export interface PreparedPassage {
  passage: Passage
  tok: Tokenized
  gold: ResolvedGold[]
  /** token index -> feature ids that the answer key assigns to it. */
  tokenFeatures: Map<number, string[]>
  /** Feature id -> every occurrence the learner must find. */
  targets: Map<string, GoldOccurrence[]>
  /** Gold strings that could NOT be found in the text. */
  problems: string[]
}

export function resolveGold(passage: Passage): ResolvedGold[] {
  const { tokens } = tokenize(passage.text, { transcript: passage.transcript })
  const out: ResolvedGold[] = []
  for (const g of passage.gold as GoldFeature[]) {
    const occurrences: GoldOccurrence[] = []
    const seen = new Set<number>()
    for (const span of g.spans) {
      for (const hit of findOccurrences(passage.text, span)) {
        if (seen.has(hit.start)) continue
        seen.add(hit.start)
        occurrences.push({
          start: hit.start,
          end: hit.end,
          tokens: tokensInRange(tokens, hit.start, hit.end),
        })
      }
    }
    occurrences.sort((a, b) => a.start - b.start)
    // A span that only matched a speaker label or punctuation has nothing to click.
    const clickable = occurrences.filter((o) => o.tokens.length > 0)
    occurrences.length = 0
    occurrences.push(...clickable)
    if (occurrences.length === 0) continue
    out.push({ feature: g.feature, occurrences, note: g.note })
  }
  return out
}

const cache = new Map<string, PreparedPassage>()

export function prepare(passage: Passage): PreparedPassage {
  const hit = cache.get(passage.id)
  if (hit) return hit

  const tok = tokenize(passage.text, { transcript: passage.transcript })
  const gold = resolveGold(passage)
  const tokenFeatures = new Map<number, string[]>()
  const targets = new Map<string, GoldOccurrence[]>()
  const problems: string[] = []

  for (const g of gold) {
    const list = targets.get(g.feature) ?? []
    targets.set(g.feature, list.concat(g.occurrences))
    for (const occ of g.occurrences) {
      for (const t of occ.tokens) {
        const feats = tokenFeatures.get(t) ?? []
        if (!feats.includes(g.feature)) feats.push(g.feature)
        tokenFeatures.set(t, feats)
      }
    }
  }

  for (const g of passage.gold) {
    for (const span of g.spans) {
      if (findOccurrences(passage.text, span).length === 0) {
        problems.push(`${passage.id}: gold span "${span}" (${g.feature}) not found in text`)
      }
    }
  }

  const prepared: PreparedPassage = {
    passage,
    tok,
    gold,
    tokenFeatures,
    targets,
    problems,
  }
  cache.set(passage.id, prepared)
  return prepared
}

export interface ValidationReport {
  passages: number
  errors: string[]
  warnings: string[]
}

export const MAX_HUNT_OCCURRENCES = 14

/** Cheap sanity pass over a whole bank. Used by `scripts/check-data.ts`. */
export function validatePassages(passages: Passage[]): ValidationReport {
  const errors: string[] = []
  const warnings: string[] = []
  const seen = new Set<string>()
  const seenText = new Map<string, string>()
  const textTypes = new Set<string>(TEXT_TYPES.map((t) => t.id))
  const modes = new Set<string>(LANGUAGE_MODES.map((m) => m.id))
  const functions = new Set<string>(FUNCTION_IDS)

  for (const p of passages) {
    if (seen.has(p.id)) errors.push(`duplicate passage id: ${p.id}`)
    seen.add(p.id)

    const twin = seenText.get(p.text)
    // Single-word exercises may revisit the same word with a different teaching focus.
    if (twin) warnings.push(`${p.id}: duplicate passage text (same as ${twin})`)
    else seenText.set(p.text, p.id)

    if (p.text.includes('`')) errors.push(`${p.id}: text contains a backtick`)
    if (/  /.test(p.text) || /\s$/.test(p.text) || /^\s/.test(p.text)) {
      warnings.push(`${p.id}: stray whitespace in text`)
    }

    /* ---- VCE classification ---- */
    if (p.unit !== undefined && ![1, 2, 3, 4].includes(p.unit)) errors.push(`${p.id}: unit must be 1, 2, 3 or 4`)
    const area = AREAS.find((a) => a.id === p.areaOfStudy)
    if (p.areaOfStudy !== undefined && !area) errors.push(`${p.id}: unknown areaOfStudy "${p.areaOfStudy}"`)
    else if (area && p.unit !== undefined && area.unit !== p.unit) {
      errors.push(`${p.id}: areaOfStudy ${p.areaOfStudy} belongs to unit ${area.unit}, not ${p.unit}`)
    }
    if (p.textType !== undefined && !textTypes.has(p.textType)) errors.push(`${p.id}: bad textType "${p.textType}"`)
    if (!modes.has(p.mode)) errors.push(`${p.id}: bad mode "${p.mode}"`)
    if (!p.field?.trim()) errors.push(`${p.id}: empty field`)
    if (!p.tenor?.trim()) errors.push(`${p.id}: empty tenor`)
    if (!p.setting?.trim()) errors.push(`${p.id}: empty setting`)
    if (!functions.has(p.dominantFunction)) {
      errors.push(`${p.id}: bad dominantFunction "${p.dominantFunction}"`)
    }
    for (const fn of p.secondaryFunctions ?? []) {
      if (!functions.has(fn)) errors.push(`${p.id}: bad secondary function "${fn}"`)
      if (fn === p.dominantFunction) {
        warnings.push(`${p.id}: secondary function repeats the dominant function`)
      }
    }
    if (p.transcript) {
      const labelled = p.text.split('\n').filter((l) => /^[\p{Lu}][\p{L}\p{N} .'’-]{0,24}:[ \t]+/u.test(l))
      if (labelled.length < 2) errors.push(`${p.id}: transcript needs at least two "Speaker: words" lines`)
      if (p.mode !== 'spoken' && p.textType !== 'personal-exchange' && p.textType !== 'social-media') {
        warnings.push(`${p.id}: transcript but mode is not spoken`)
      }
    } else if (p.text.includes('\n')) {
      warnings.push(`${p.id}: multi-line text without transcript: true`)
    }

    const prepared = prepare(p)
    errors.push(...prepared.problems)

    if (p.lengthTier >= 2 && p.gold.length < 4) {
      warnings.push(`${p.id}: only ${p.gold.length} gold feature groups`)
    }
    const groupsByFeature = new Map<string, number>()
    for (const g of p.gold) {
      groupsByFeature.set(g.feature, (groupsByFeature.get(g.feature) ?? 0) + 1)
      const feat = feature(g.feature)
      if (!feat) {
        errors.push(`${p.id}: unknown feature id "${g.feature}"`)
        continue
      }
      if (feat.scope === 'text') {
        errors.push(`${p.id}: "${g.feature}" is a whole-text feature and cannot be a gold span`)
      }
      if (p.unit !== undefined && !feat.units.includes(p.unit)) {
        warnings.push(`${p.id}: "${g.feature}" is not listed for unit ${p.unit} in the study design`)
      }
      const occs = prepared.targets.get(g.feature) ?? []
      if (occs.length === 0) {
        errors.push(`${p.id}: feature "${g.feature}" resolves to no occurrences`)
      } else if (occs.length > MAX_HUNT_OCCURRENCES) {
        warnings.push(
          `${p.id}: feature "${g.feature}" has ${occs.length} occurrences (Hunt will cap it)`,
        )
      }
      if (!g.note?.trim()) warnings.push(`${p.id}: gold "${g.feature}" has no note`)
    }
    for (const [id, n] of groupsByFeature) {
      if (n > 1) errors.push(`${p.id}: feature "${id}" appears in ${n} gold groups; merge their spans`)
    }

    if (p.quiz.length === 0) warnings.push(`${p.id}: no quiz questions`)
    for (const q of p.quiz) {
      if (q.answer < 0 || q.answer >= q.options.length) {
        errors.push(`${p.id}: quiz answer ${q.answer} out of range`)
      }
      if (q.options.length < 3 || q.options.length > 5) {
        errors.push(`${p.id}: quiz question needs 3-5 options`)
      }
      if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) {
        errors.push(`${p.id}: quiz has duplicate options`)
      }
      if (!q.explain?.trim()) errors.push(`${p.id}: quiz question has no explanation`)
    }
    if (
      p.register !== 'formal-register' &&
      p.register !== 'informal-register' &&
      p.register !== 'neutral-register'
    ) {
      errors.push(`${p.id}: bad register "${p.register}"`)
    }
  }

  return { passages: passages.length, errors, warnings }
}
