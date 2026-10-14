/**
 * Hunt rules: choosing a target feature, building a challenge, and deciding
 * whether a clicked word belongs to the answer set.
 *
 * Kept out of the component so `scripts/check-app.ts` can simulate thousands of
 * hunts against the real code path.
 */

import { ALL_PASSAGES } from '../data/passages'
import { masteryPercent, type Profile } from './game'
import type { Passage } from './passages'
import { prepare, type GoldOccurrence } from './resolve'
import { HUNT_EXCLUDED, feature } from './taxonomy'

export const HINT_COST = 4

/** A feature with more than this many occurrences makes a tedious hunt. */
export const HUNT_MAX_OCCURRENCES = 10

export interface Hunt {
  passageId: string
  feature: string
  occurrences: GoldOccurrence[]
  foundIdx: number[]
  /** Occurrence indices shown by a hint but not yet claimed. */
  hinted: number[]
  misses: number
  hintsUsed: number
  revealed: boolean
  done: boolean
  wrongToken: number | null
}

/** Features in this passage that make reasonable hunt targets. */
export function huntCandidates(passage: Passage): { id: string; occs: number }[] {
  const prepared = prepare(passage)
  const seen = new Set<string>()
  const out: { id: string; occs: number }[] = []
  for (const g of passage.gold) {
    if (seen.has(g.feature)) continue
    seen.add(g.feature)
    if (HUNT_EXCLUDED.has(g.feature) || !feature(g.feature)) continue
    const occs = prepared.targets.get(g.feature)?.length ?? 0
    if (occs >= 1 && occs <= HUNT_MAX_OCCURRENCES) out.push({ id: g.feature, occs })
  }
  return out
}

export function pickHuntTarget(passage: Passage, profile: Profile, prefer?: string): string {
  const candidates = huntCandidates(passage)
  if (candidates.length === 0) {
    const fallback = passage.gold.find((g) => feature(g.feature))
    return fallback ? fallback.feature : passage.gold[0].feature
  }
  if (prefer && candidates.some((c) => c.id === prefer)) return prefer
  // Weight towards features the learner is weakest at, so practice is targeted.
  const scored = candidates.map((c) => ({
    ...c,
    score: 100 - masteryPercent(profile.featureStats[c.id]),
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored[0].id
}

export function makeHunt(passage: Passage, profile: Profile, prefer?: string): Hunt {
  const featureId = pickHuntTarget(passage, profile, prefer)
  const prepared = prepare(passage)
  return {
    passageId: passage.id,
    feature: featureId,
    occurrences: prepared.targets.get(featureId) ?? [],
    foundIdx: [],
    hinted: [],
    misses: 0,
    hintsUsed: 0,
    revealed: false,
    done: false,
    wrongToken: null,
  }
}

/** Index of the occurrence containing a token, or -1. */
export function occurrenceFor(hunt: Hunt, tokenIndex: number): number {
  return hunt.occurrences.findIndex((occ) => occ.tokens.includes(tokenIndex))
}

export function nextPassageId(id: string, dir = 1): string {
  const i = ALL_PASSAGES.findIndex((p) => p.id === id)
  if (i === -1) return ALL_PASSAGES[0].id
  return ALL_PASSAGES[(i + dir + ALL_PASSAGES.length) % ALL_PASSAGES.length].id
}
