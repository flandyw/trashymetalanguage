import type { Passage, PassageBank } from '../../lib/passages'
import { bank01 } from './bank01'
import { bank02 } from './bank02'
import { bank03 } from './bank03'
import { bank04 } from './bank04'
import { bank05 } from './bank05'
import { bank06 } from './bank06'
import { bank07 } from './bank07'
import { bank08 } from './bank08'
import { bank09 } from './everyday'
import { bank10 } from './media'
import { bank11 } from './institutional'
import { bank12 } from './culture'
import { bank13 } from './persuasion'
import { bank14 } from './ladder'

export const BANKS: PassageBank[] = [
  bank14,
  bank01,
  bank02,
  bank13,
  bank03,
  bank09,
  bank04,
  bank10,
  bank05,
  bank06,
  bank11,
  bank07,
  bank12,
  bank08,
]

export const ALL_PASSAGES: Passage[] = BANKS.flatMap((b) => b.passages)

const byId = new Map(ALL_PASSAGES.map((p) => [p.id, p]))

export function passageById(id: string): Passage | undefined {
  return byId.get(id)
}

export function passagesAtTier(tier: number): Passage[] {
  return ALL_PASSAGES.filter((p) => p.lengthTier === tier)
}

/** Passages that carry at least one gold span for this feature id. */
export function passagesForFeature(featureId: string): Passage[] {
  return ALL_PASSAGES.filter((p) => p.gold.some((g) => g.feature === featureId))
}

export const BANKS_BY_ID: Record<string, PassageBank> = Object.fromEntries(
  BANKS.map((b) => [b.id, b]),
)
