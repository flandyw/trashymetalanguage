import type { Unit } from './taxonomy'

export interface StudyState {
  unit: Unit
  evidence: EvidenceEntry[]
  reviewed: string[]
  drafts: Record<string, string>
  checked: Record<string, string[]>
}
const KEY = 'metalang.study.v1'
export function loadStudy(): StudyState {
  const base: StudyState = {unit: 3, evidence: [], reviewed: [], drafts: {}, checked: {}}
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (!data || typeof data !== 'object') return base
    const evidence: EvidenceEntry[] = Array.isArray(data.evidence) ? data.evidence.filter((entry: EvidenceEntry) => entry && typeof entry.id === 'string' && [1,2,3,4].includes(entry.unit) && ['source','date','url','quotation','analysis'].every(key=>typeof entry[key as keyof EvidenceEntry] === 'string') && (!entry.url || /^https?:\/\//i.test(entry.url))) : []
    return {unit: [1,2,3,4].includes(data.unit) ? data.unit : 3, evidence,
      reviewed: Array.isArray(data.reviewed) ? data.reviewed.filter((s: unknown) => typeof s === 'string') : [],
      drafts: Object.fromEntries(Object.entries(data.drafts ?? {}).filter(([,v]) => typeof v === 'string')) as Record<string,string>,
      checked: Object.fromEntries(Object.entries(data.checked ?? {}).filter(([,v]) => Array.isArray(v) && v.every(x=>typeof x==='string'))) as Record<string,string[]>}
  } catch {return base}
}
export function saveStudy(state: StudyState) {
  try {localStorage.setItem(KEY, JSON.stringify(state))} catch { /* Practice stays usable without storage. */ }
}

export interface EvidenceEntry {
  id: string
  unit: Unit
  source: string
  date: string
  url: string
  quotation: string
  analysis: string
}
