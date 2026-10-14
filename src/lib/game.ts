/**
 * Gamification: XP, ranks, combos, badges and per-feature mastery.
 *
 * All of it is pure functions over a `Profile` object so the UI can stay a thin
 * shell and the whole model is testable.
 */

export interface FeatureStat {
  found: number
  missed: number
  xp: number
}

export interface Profile {
  xp: number
  coins: number
  combo: number
  comboBest: number
  huntsCompleted: number
  perfectHunts: number
  quizzesCorrect: number
  quizzesAnswered: number
  totalRight: number
  totalWrong: number
  hintsUsed: number
  /** Feature ids mastered through accurate finds. */
  mastered: string[]
  /** Passage ids finished in Hunt mode. */
  passagesMastered: string[]
  badges: string[]
  featureStats: Record<string, FeatureStat>
  /** Keyed by YYYY-MM-DD, the XP earned that day. */
  dailyXp: Record<string, number>
}

export function emptyProfile(): Profile {
  return {
    xp: 0,
    coins: 0,
    combo: 0,
    comboBest: 0,
    huntsCompleted: 0,
    perfectHunts: 0,
    quizzesCorrect: 0,
    quizzesAnswered: 0,
    totalRight: 0,
    totalWrong: 0,
    hintsUsed: 0,
    mastered: [],
    passagesMastered: [],
    badges: [],
    featureStats: {},
    dailyXp: {},
  }
}

/* ------------------------------------------------------------------- ranks */

export interface Rank {
  minXp: number
  title: string
  blurb: string
}

export const RANKS: Rank[] = [
  { minXp: 0, title: 'Novice Annotator', blurb: 'You have picked up the highlighter.' },
  { minXp: 120, title: 'Word Spotter', blurb: 'Word classes are starting to click.' },
  { minXp: 320, title: 'Clause Cadet', blurb: 'You can find the verb phrase by eye.' },
  { minXp: 650, title: 'Syntax Scout', blurb: 'Phrases no longer hide from you.' },
  { minXp: 1100, title: 'Register Ranger', blurb: 'You hear formality shifts a mile off.' },
  { minXp: 1750, title: 'Discourse Detective', blurb: 'Cohesion is an open book.' },
  { minXp: 2600, title: 'Metalanguage Maestro', blurb: 'You name features as you read them.' },
  { minXp: 3800, title: 'Language Legend', blurb: 'Examiners would like a word.' },
]

export function rankFor(xp: number): Rank {
  let rank = RANKS[0]
  for (const r of RANKS) if (xp >= r.minXp) rank = r
  return rank
}

export function nextRank(xp: number): Rank | null {
  return RANKS.find((r) => r.minXp > xp) ?? null
}

export function rankProgress(xp: number): number {
  const current = rankFor(xp)
  const next = nextRank(xp)
  if (!next) return 1
  return (xp - current.minXp) / (next.minXp - current.minXp)
}

export function levelNumber(xp: number): number {
  return RANKS.filter((r) => r.minXp <= xp).length
}

/* ------------------------------------------------------------------- scoring */

export interface ScoreBreakdown {
  xp: number
  coins: number
  label: string
}

/** A correct hunt click. The combo reward is what makes streaks feel good. */
export function scoreHit(difficulty: number, combo: number, multiWord: boolean): ScoreBreakdown {
  const base = 8 + difficulty * 3
  const comboBonus = Math.min(combo * 2, 20)
  const spanBonus = multiWord ? 5 : 0
  return {
    xp: base + comboBonus + spanBonus,
    coins: 2 + Math.floor(comboBonus / 4),
    label: multiWord ? 'Multi-word unit found' : 'Target found',
  }
}

export function scoreMiss(): ScoreBreakdown {
  return { xp: 0, coins: 0, label: 'Wrong word — combo reset' }
}

export function scoreHint(): ScoreBreakdown {
  return { xp: -4, coins: 0, label: 'Hint used' }
}

export function scoreQuizCorrect(difficulty: number, combo: number): ScoreBreakdown {
  const base = 14 + difficulty * 4
  return {
    xp: base + Math.min(combo, 5),
    coins: 3,
    label: 'Correct analysis',
  }
}

export function scoreQuizWrong(): ScoreBreakdown {
  return { xp: 0, coins: 0, label: 'Not quite' }
}

export function scoreChallengeComplete(
  difficulty: number,
  perfect: boolean,
  hintsUsed: number,
): ScoreBreakdown {
  const base = 20 + difficulty * 6
  const perfectBonus = perfect ? 25 : 0
  const hintPenalty = hintsUsed * 4
  return {
    xp: Math.max(0, base + perfectBonus - hintPenalty),
    coins: perfect ? 8 : 3,
    label: perfect ? 'Flawless challenge' : 'Challenge complete',
  }
}

/* -------------------------------------------------------------------- badges */

export interface Badge {
  id: string
  label: string
  icon: string
  blurb: string
  earned: (p: Profile) => boolean
}

export const BADGES: Badge[] = [
  {
    id: 'first-blood',
    label: 'First Find',
    icon: '🎯',
    blurb: 'Find your first target.',
    earned: (p) => p.totalRight >= 1,
  },
  {
    id: 'combo-5',
    label: 'On a Roll',
    icon: '🔥',
    blurb: 'Reach a combo of 5.',
    earned: (p) => p.comboBest >= 5,
  },
  {
    id: 'combo-10',
    label: 'Unstoppable',
    icon: '⚡',
    blurb: 'Reach a combo of 10.',
    earned: (p) => p.comboBest >= 10,
  },
  {
    id: 'first-hunt',
    label: 'Hunt Complete',
    icon: '🏁',
    blurb: 'Finish your first hunt.',
    earned: (p) => p.huntsCompleted >= 1,
  },
  {
    id: 'perfect-1',
    label: 'Flawless',
    icon: '💎',
    blurb: 'Complete a hunt with no mistakes and no hints.',
    earned: (p) => p.perfectHunts >= 1,
  },
  {
    id: 'perfect-10',
    label: 'Diamond Hands',
    icon: '👑',
    blurb: 'Complete ten flawless hunts.',
    earned: (p) => p.perfectHunts >= 10,
  },
  {
    id: 'quiz-10',
    label: 'Analyst',
    icon: '🧠',
    blurb: 'Answer ten analysis questions correctly.',
    earned: (p) => p.quizzesCorrect >= 10,
  },
  {
    id: 'quiz-accuracy',
    label: 'Sharp Eye',
    icon: '🔍',
    blurb: 'Answer 20 questions with 80% accuracy or better.',
    earned: (p) => p.quizzesAnswered >= 20 && p.quizzesCorrect / p.quizzesAnswered >= 0.8,
  },
  {
    id: 'master-5',
    label: 'Feature Hunter',
    icon: '⭐',
    blurb: 'Master five different features.',
    earned: (p) => p.mastered.length >= 5,
  },
  {
    id: 'master-15',
    label: 'Taxonomist',
    icon: '📚',
    blurb: 'Master fifteen different features.',
    earned: (p) => p.mastered.length >= 15,
  },
  {
    id: 'xp-500',
    label: 'Five Hundred',
    icon: '🚀',
    blurb: 'Earn 500 XP.',
    earned: (p) => p.xp >= 500,
  },
  {
    id: 'xp-1500',
    label: 'Fifteen Hundred',
    icon: '🌟',
    blurb: 'Earn 1500 XP.',
    earned: (p) => p.xp >= 1500,
  },
  {
    id: 'daily-3',
    label: 'Regular',
    icon: '📅',
    blurb: 'Practise on three separate days.',
    earned: (p) => Object.keys(p.dailyXp).length >= 3,
  },
  {
    id: 'no-hints',
    label: 'Unaided',
    icon: '🙈',
    blurb: 'Complete a hunt without spending a single hint.',
    earned: (p) => p.perfectHunts >= 1,
  },
]

export function newlyEarned(profile: Profile): Badge[] {
  return BADGES.filter((b) => !profile.badges.includes(b.id) && b.earned(profile))
}

/* ------------------------------------------------------------------- mastery */

/** A feature counts as mastered once you have found enough of it accurately. */
export const MASTERY_HITS = 6

export function masteryPercent(stat: FeatureStat | undefined): number {
  if (!stat) return 0
  const attempts = stat.found + stat.missed
  const accuracy = attempts === 0 ? 0 : stat.found / attempts
  const volume = Math.min(1, stat.found / MASTERY_HITS)
  return Math.round(volume * (0.4 + 0.6 * accuracy) * 100)
}

export function isMastered(stat: FeatureStat | undefined): boolean {
  if (!stat) return false
  const attempts = stat.found + stat.missed
  return stat.found >= MASTERY_HITS && (attempts === 0 || stat.found / attempts >= 0.7)
}

export function accuracy(profile: Profile): number {
  const total = profile.totalRight + profile.totalWrong
  if (total === 0) return 0
  return profile.totalRight / total
}

export function todayKey(now = new Date()): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * Apply a score to the profile, returning the new profile plus what changed so
 * the UI can show a toast.
 */
export interface AppliedScore {
  profile: Profile
  xp: number
  coins: number
  newBadges: Badge[]
  rankedUp: Rank | null
  featureMastered: string | null
}

export function applyScore(
  profile: Profile,
  score: ScoreBreakdown,
  feature?: string,
  outcome?: 'hit' | 'miss',
): AppliedScore {
  const before = rankFor(profile.xp)
  const next: Profile = {
    ...profile,
    xp: Math.max(0, profile.xp + score.xp),
    coins: profile.coins + score.coins,
    featureStats: { ...profile.featureStats },
    dailyXp: { ...profile.dailyXp },
    badges: [...profile.badges],
    mastered: [...profile.mastered],
  }

  if (feature && outcome) {
    const stat: FeatureStat = next.featureStats[feature] ?? { found: 0, missed: 0, xp: 0 }
    if (outcome === 'hit') stat.found += 1
    else stat.missed += 1
    stat.xp += score.xp
    next.featureStats[feature] = stat
  }

  if (score.xp > 0) {
    const key = todayKey()
    next.dailyXp[key] = (next.dailyXp[key] ?? 0) + score.xp
  }

  const after = rankFor(next.xp)
  const earned = newlyEarned(next)
  next.badges.push(...earned.map((b) => b.id))

  let featureMastered: string | null = null
  if (feature && isMastered(next.featureStats[feature]) && !next.mastered.includes(feature)) {
    next.mastered.push(feature)
    featureMastered = feature
  }

  return {
    profile: next,
    xp: score.xp,
    coins: score.coins,
    newBadges: earned,
    rankedUp: after.minXp > before.minXp ? after : null,
    featureMastered,
  }
}

/** XP earned over the last `days` days, oldest first, for the activity strip. */
export function recentActivity(profile: Profile, days: number): { key: string; xp: number }[] {
  const out: { key: string; xp: number }[] = []
  const now = new Date()
  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const key = todayKey(d)
    out.push({ key, xp: profile.dailyXp[key] ?? 0 })
  }
  return out
}
