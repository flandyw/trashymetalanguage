import { useState, type FormEvent } from 'react'
import type { Unit } from '../lib/taxonomy'
import type { EvidenceEntry } from '../lib/study'

interface Props { unit: Unit; entries: EvidenceEntry[]; onAdd: (entry: EvidenceEntry) => void; onRemove: (id: string) => void }
export default function EvidenceNotebook({unit,entries,onAdd,onRemove}: Props) {
  const [source,setSource]=useState(''), [date,setDate]=useState(''), [url,setUrl]=useState(''), [quotation,setQuotation]=useState(''), [analysis,setAnalysis]=useState('')
  const [notice,setNotice]=useState('')
  function save(e: FormEvent) {
    e.preventDefault()
    if(!source.trim() || !quotation.trim()) return
    onAdd({id:crypto.randomUUID(),unit,source:source.trim(),date,url:url.trim(),quotation:quotation.trim(),analysis:analysis.trim()})
    setSource('');setDate('');setUrl('');setQuotation('');setAnalysis('');setNotice('Evidence saved on this device.')
  }
  const selected = entries.filter(e=>e.unit===unit)
  return <section className="course-card evidence-notebook">
    <span className="eyebrow">AUTHENTIC LANGUAGE DATA · UNIT {unit}</span><h3>Your real-world evidence notebook</h3>
    <p>The study design requires contemporary and historical language data. The app’s constructed texts are practice material. Bring in a real, dated example and record where it came from before using it in an argument or investigation.</p>
    <details><summary>Add a sourced example</summary><form onSubmit={save}>
      <div className="notebook-fields"><label>Publication, speaker or source<input required maxLength={250} value={source} onChange={e=>setSource(e.target.value)} placeholder="Name the publication, speaker and text"/></label><label>Publication or recording date, if known<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label></div>
      <label>Source link, if available<input type="url" pattern="https?://.+" value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://…"/></label>
      <label>Exact quotation or transcribed language<textarea required rows={3} maxLength={6000} value={quotation} onChange={e=>setQuotation(e.target.value)} placeholder="Preserve the original wording. Include line references or a timestamp when available."/></label>
      <label>Your linguistic analysis<textarea rows={3} maxLength={6000} value={analysis} onChange={e=>setAnalysis(e.target.value)} placeholder="Feature and subsystem → context → function, purpose, attitudes or identity. Separate observation from inference."/></label>
      <button className="btn btn--primary" type="submit">Save evidence</button><small className="source-note">Use appropriately sourced public material or data collected with consent. The notebook stores your notes locally; it does not verify the source or award marks.</small>
    </form></details>
    <p role="status" className="source-note">{notice}</p>
    <div className="notebook-entries">{selected.map(entry=><article key={entry.id}><div><strong>{entry.source}</strong><span>{entry.date || 'Date not recorded'}</span></div>{entry.url && <a href={entry.url} target="_blank" rel="noreferrer">Open source ↗</a>}<blockquote>{entry.quotation}</blockquote>{entry.analysis && <p>{entry.analysis}</p>}<button className="btn btn--ghost btn--tiny" onClick={()=>onRemove(entry.id)} aria-label={`Remove evidence from ${entry.source}`}>Remove entry</button></article>)}</div>
    {!selected.length && <p className="source-note">No sourced examples saved for Unit {unit} yet.</p>}
  </section>
}
