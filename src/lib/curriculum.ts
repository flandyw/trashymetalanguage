import type { Passage, PassageBank } from './passages'
import { areaOfStudy, type TextTypeId } from './vce'

/** Editorial teaching-focus mapping; never inferred from the passage's register. */
const BANK_FOCUS: Record<string, [string, TextTypeId]> = {
  'vce-focus': ['u3-informality', 'spoken-exchange'],
  starter: ['u1-nature-functions', 'public-document'],
  ladder: ['u1-nature-functions', 'personal-exchange'],
  words: ['u2-english-across-time', 'personal-exchange'],
  phrases: ['u1-nature-functions', 'personal-exchange'],
  sentences: ['u1-nature-functions', 'personal-exchange'],
  persuasion: ['u3-formality', 'advertising'],
  everyday: ['u3-informality', 'personal-exchange'],
  news: ['u3-formality', 'news'],
  media: ['u3-formality', 'news'],
  ads: ['u3-formality', 'advertising'],
  formal: ['u3-formality', 'public-document'],
  institutional: ['u3-formality', 'public-document'],
  aussie: ['u4-australian-society', 'spoken-exchange'],
  culture: ['u4-identity', 'literature'],
  digital: ['u3-informality', 'social-media'],
  'u1-acquisition': ['u1-acquisition', 'personal-exchange'],
}
const FOCUS: Record<string, string> = {
  'everyday-03': 'u3-formality',
  'context-01': 'u3-formality', 'context-02': 'u3-informality',
  'ladder-01': 'u2-english-across-time', 'ladder-02': 'u2-english-across-time',
  'ladder-07': 'u2-english-across-time', 'ladder-12': 'u3-formality',
  w06: 'u1-nature-functions', w07: 'u1-nature-functions', w09: 'u1-nature-functions',
  'culture-12': 'u4-australian-society', 'culture-11': 'u2-englishes-in-contact',
  p12: 'u4-australian-society',
}

/** Text forms reviewed against each constructed source description. */
const TYPE_GROUPS: Partial<Record<TextTypeId, string[]>> = {
  academic: ['f01','f02','institutional-06'],
  manual: ['f05','f11','institutional-02','institutional-03','institutional-11'],
  'personal-exchange': ['s01','s06','s12','everyday-01','everyday-02','f07','f08','f09','au04','au08','culture-10','institutional-12'],
  'social-media': ['s03','s04','s10','everyday-04','everyday-05','everyday-06','everyday-11','culture-02','culture-12','u1a-04'],
  'public-document': ['s07','media-04','au03','u1a-03','persuasion-05','persuasion-07'],
  speech: ['s02','s08','everyday-03','au09','d10'],
  interview: ['s05','media-08','au06','au10','culture-09'],
  'spoken-exchange': ['s09','s11','everyday-07','everyday-08','everyday-09','everyday-10','everyday-12','au01','au02','au05','au07','culture-04','culture-05'],
  news: ['au11','culture-07','culture-08'],
  literature: ['au12','u1a-02'],
}
const TEXT_FORMS = new Map(Object.entries(TYPE_GROUPS).flatMap(([type, ids]) => ids.map(id => [id,type as TextTypeId] as const)))

export function alignBank(bank: PassageBank): PassageBank {
  return { ...bank, passages: bank.passages.map(p => {
    const defaults = BANK_FOCUS[bank.id]
    const area = areaOfStudy(FOCUS[p.id] ?? p.areaOfStudy ?? defaults?.[0])
    if (!area) throw new Error(`Missing curriculum mapping: ${p.id}`)
    return { ...p, unit: area.unit, areaOfStudy: area.id, textType: TEXT_FORMS.get(p.id) ?? p.textType ?? defaults?.[1] ?? 'public-document' }
  }) }
}

export function courseLabel(p: Passage): string {
  const area = p.areaOfStudy && areaOfStudy(p.areaOfStudy)
  return area ? `Unit ${area.unit} · ${area.title}` : 'Foundation practice'
}
