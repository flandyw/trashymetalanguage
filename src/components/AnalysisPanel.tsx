import { useState } from 'react'
import type { Passage } from '../lib/passages'
import { feature, subsystemMeta } from '../lib/taxonomy'
import { prepare } from '../lib/resolve'
import { AREA_GUIDES, ANALYSIS_CHECKS } from '../data/course'
import { courseLabel } from '../lib/curriculum'

interface Props { passage: Passage; drafts: Record<string,string>; checked: Record<string,string[]>; onDraft: (id: string, text: string) => void; onCheck: (id: string, item: string) => void }
export default function AnalysisPanel({passage, drafts, checked, onDraft, onCheck}: Props) {
  const [task, setTask] = useState<'short'|'commentary'>('short')
  const [model, setModel] = useState(false)
  const guide = AREA_GUIDES[passage.areaOfStudy ?? 'u1-nature-functions']
  const prepared = prepare(passage)
  const id = `${passage.id}:${task}`
  const draft = drafts[id] ?? ''
  const checks = checked[id] ?? []
  const count = draft.trim() ? draft.trim().split(/\s+/).length : 0
  const evidence = prepared.gold.slice(0,6).map(g => {
    const occ = g.occurrences[0]
    const quote = passage.text.slice(occ.start,occ.end)
    const line = passage.text.slice(0,occ.start).split('\n').length
    return {feature:feature(g.feature)!, quote, line, note:g.note}
  }).filter(e=>e.feature)
  return <section className="analysis-workspace">
    <div className="analysis-workspace__head"><span className="eyebrow">{courseLabel(passage)}</span><h2>Evidence → feature → explanation</h2><p>Develop an objective linguistic analysis. Explain what choices do in this context; identifying a technique is only the starting point.</p></div>
    <div className="analysis-task-picker" aria-label="Writing task"><button className={`seg${task==='short'?' seg--on':''}`} aria-pressed={task==='short'} onClick={()=>{setTask('short');setModel(false)}}>Short answer</button><button className={`seg${task==='commentary'?' seg--on':''}`} aria-pressed={task==='commentary'} onClick={()=>{setTask('commentary');setModel(false)}}>Commentary plan</button></div>
    <div className="analysis-question"><strong>{task==='short'?'Your task':'Plan a connected analysis'}</strong><p>{task==='short'?guide.task:'Organise a commentary around context, purpose and relationships, drawing on evidence across relevant subsystems. Group related choices and explain how they work together.'}</p><span>Practice prompt · no automated marking or official mark allocation</span></div>
    <details className="analysis-planning"><summary>Planning guide for this area of study</summary><ol>{guide.planning.map(p=><li key={p}>{p}</li>)}</ol><p>{guide.caution}</p></details>
    <div className="evidence-grid">{evidence.map(e=><article key={e.feature.id}><span className="eyebrow">{subsystemMeta(e.feature.subsystem).label}</span><h4>{e.feature.label}</h4><blockquote>“{e.quote}”{passage.transcript && <small> (line {e.line})</small>}</blockquote><p>{e.feature.short}</p><button className="btn btn--tiny" onClick={()=>onDraft(id, `${draft}${draft?'\n\n':''}${e.feature.label}: “${e.quote}”${passage.transcript?` (line ${e.line})`:''}. In this context, `)}>Add evidence to draft</button></article>)}</div>
    <label className="response-label" htmlFor={`response-${passage.id}`}>{task==='short'?'Your response':'Your commentary plan'}</label>
    <textarea id={`response-${passage.id}`} className="analysis-response" rows={10} maxLength={20000} value={draft} onChange={e=>onDraft(id,e.target.value)} placeholder={task==='short'?'Name the feature, quote the evidence, then connect it to this text’s context and purpose…':'Context and register\nPurpose and audience\nParagraph focus 1: evidence across subsystems\nParagraph focus 2: relationships, cohesion or identity\nQualified overall interpretation'}/>
    <div className="response-status"><span>{count} word{count===1?'':'s'} · saved on this device when browser storage is available</span><span>{checks.length}/{ANALYSIS_CHECKS.length} self-review checks</span></div>
    <fieldset className="analysis-checklist"><legend>Review your reasoning</legend>{ANALYSIS_CHECKS.map(([key,label])=><label key={key}><input type="checkbox" checked={checks.includes(key)} onChange={()=>onCheck(id,key)}/><span>{label}</span></label>)}</fieldset>
    <button className="btn" aria-expanded={model} onClick={()=>setModel(!model)}>{model?'Hide':'Compare with'} teaching discussion</button>
    {model && <div className="model-discussion"><span className="eyebrow">ONE POSSIBLE READING · NOT A MARKING SCHEME</span>{passage.analysisModel?<p>{passage.analysisModel}</p>:<><p>{passage.functionNote}</p><p>{passage.registerNote}</p><ul>{evidence.filter(e=>e.note).map(e=><li key={e.feature.id}><strong>{e.feature.label} — “{e.quote}”:</strong> {e.note}</li>)}</ul></>}<p className="course-caution">Compare the evidence and reasoning, not the wording. Other interpretations can be valid when supported. A self-review checklist does not measure exam readiness.</p></div>}
  </section>
}
