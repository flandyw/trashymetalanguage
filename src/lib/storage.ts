import { BADGES, emptyProfile, type Profile } from './game'

const KEY = 'metalang.profile.v1'

export function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProfile()
    const parsed = JSON.parse(raw) as Partial<Profile>
    const base = emptyProfile()
    const profile: Profile = {
      ...base,
      ...parsed,
      featureStats: parsed.featureStats ?? {},
      dailyXp: parsed.dailyXp ?? {},
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
      mastered: Array.isArray(parsed.mastered) ? parsed.mastered : [],
      passagesMastered: Array.isArray(parsed.passagesMastered) ? parsed.passagesMastered : [],
    }
    // Drop badge ids that no longer exist so old saves cannot break the UI.
    const known = new Set(BADGES.map((b) => b.id))
    profile.badges = profile.badges.filter((id) => known.has(id))
    return profile
  } catch {
    return emptyProfile()
  }
}

export function saveProfile(profile: Profile): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(profile))
  } catch {
    // Storage can be full or blocked; losing a save is not worth crashing over.
  }
}

export function resetProfile(): Profile {
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignore
  }
  return emptyProfile()
}

/** Remember the last passage a learner opened, so a reload resumes sensibly. */
const LAST_KEY = 'metalang.last.v1'

export function loadLastPassage(): string | null {
  try {
    return localStorage.getItem(LAST_KEY)
  } catch {
    return null
  }
}

export function saveLastPassage(id: string): void {
  try {
    localStorage.setItem(LAST_KEY, id)
  } catch {
    // ignore
  }
}
