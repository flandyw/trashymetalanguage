import { useState } from 'react'
import { AREAS, UNITS } from '../lib/vce'
import { FEATURES, type Unit } from '../lib/taxonomy'
import { ALL_PASSAGES } from '../data/passages'
import { AREA_GUIDES, UNIT_CONCEPTS } from '../data/course'
import { METALANGUAGE_ROWS, STUDY_DESIGN_SOURCE, metalanguageForUnit } from '../data/study-design'

interface Props { unit: Unit; onUnit: (unit: Unit) => void; reviewed: string[]; onReview: (id: string) => void; onTexts: (area: string) => void; onPractise: (id: string) => void }
export default function CoursePanel({ unit, onUnit, reviewed, onReview, onTexts, onPractise }: Props) {
  const [query, setQuery] = useState('')
  const selected = UNITS.find(u => u.id === unit)!
  const rows = METALANGUAGE_ROWS.filter(r => r.units.includes(unit) && `${r.subsystem} ${metalanguageForUnit(r,unit)}`.toLowerCase().includes(query.trim().toLowerCase()))
  const terms = FEATURES.filter(f => f.units.includes(unit) && `${f.label} ${f.short}`.toLowerCase().includes(query.trim().toLowerCase()))
  return <main className="course">
    <div className="unit-picker" aria-label="Select a VCE unit">{UNITS.map(u => <button key={u.id} className={`unit-option${unit === u.id ? ' unit-option--on' : ''}`} aria-pressed={unit === u.id} onClick={() => onUnit(u.id)}><span>UNIT {u.id}</span><strong>{u.short}</strong><small>{u.examinable ? 'SAC + examination' : 'School-based assessment'}</small></button>)}</div>
    <section className="course-banner"><div><span className="eyebrow">YOUR COURSE · UNIT {unit}</span><h2>{selected.title}</h2><p>{selected.blurb}</p></div><span className="course-status">{selected.areas.length} areas of study<br/>{ALL_PASSAGES.filter(p => p.unit === unit).length} practice texts</span></section>
    <div className="course-areas">{selected.areas.map((area, index) => {
      const guide = AREA_GUIDES[area.id]
      const texts = ALL_PASSAGES.filter(p => p.areaOfStudy === area.id)
      const completed = guide.focus.filter((_,i) => reviewed.includes(`${area.id}:${i}`)).length
      return <section className="course-card" key={area.id}>
        <span className="eyebrow">AREA OF STUDY {index + 1} · OUTCOME {index + 1}</span><h3>{area.title}</h3><p className="course-outcome">{guide.outcome}</p>
        <div className="course-review-head"><strong>Knowledge to revisit</strong><span>{completed}/{guide.focus.length} self-reviewed</span></div>
        <ul className="course-checks">{guide.focus.map((topic,i) => <li key={topic}><label><input type="checkbox" checked={reviewed.includes(`${area.id}:${i}`)} onChange={() => onReview(`${area.id}:${i}`)}/><span>{topic}</span></label></li>)}</ul>
        <details><summary>Apply the VCE skill</summary><p>{guide.task}</p><ol>{guide.planning.map(item=><li key={item}>{item}</li>)}</ol><p className="course-caution">{guide.caution}</p></details>
        <div className="course-actions"><button className="btn btn--primary" onClick={() => onTexts(area.id)}>Browse {texts.length} texts →</button><button className="btn" disabled={!texts.length} onClick={() => {if(texts[0]) onPractise(texts[0].id)}}>Write an analysis</button></div>
        <small className="source-note">Alignment: supplied study design, p. {guide.page}. Checklist records your review, not assessed mastery.</small>
      </section>
    })}</div>
    <section className="course-card"><span className="eyebrow">PRECISION IN YOUR ANALYSIS</span><h3>Distinctions that matter in Unit {unit}</h3><div className="concept-grid">{UNIT_CONCEPTS[unit].map(concept=><details key={concept.term}><summary>{concept.term}</summary><p>{concept.explanation}</p></details>)}</div><small className="source-note">App-authored explanations based on the supplied study design’s terminology and unit requirements.</small></section>
    <section className="course-card metalanguage-reference"><span className="eyebrow">SIX LANGUAGE SUBSYSTEMS</span><h3>Unit {unit} metalanguage reference</h3><p>The table below follows the inclusions in the supplied study design. Context, function and identity are course concepts alongside these six subsystems.</p>
      <label className="course-search">Find a term or subsystem<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try politeness, morphology or IPA…"/></label>
      <div className="reference-rows">{rows.map(row=><details key={row.id}><summary><span>{row.subsystem}</span><strong>{metalanguageForUnit(row,unit).split('\n')[0]}</strong></summary><p className="reference-description">{metalanguageForUnit(row,unit)}</p><small>Unit {unit} scope · source row includes {row.units.map(u=>`Unit ${u}`).join(', ')}</small></details>)}</div>
      {query && <div className="term-results"><h4>Definitions in the app glossary</h4>{terms.slice(0,30).map(f=><details key={f.id}><summary>{f.label}</summary><p>{f.detail}</p><p className="muted">Examples: {f.examples.join(' · ')}</p></details>)}{!terms.length && !rows.length && <p>No matching terms in Unit {unit}. Try another unit or a broader search.</p>}</div>}
    </section>
    <section className="course-card course-assessment"><h3>Practise the skills your assessment requires</h3><p>{unit < 3 ? 'Units 1 and 2 are assessed by your school. Use feature identification as preparation for explaining language data and investigating linguistic concepts.' : 'The supplied design assigns 25% to Unit 3 coursework, 25% to Unit 4 coursework and 50% to the end-of-year examination. All key knowledge and skills underpinning the Units 3 and 4 outcomes are examinable.'}</p><p>Use Identify for retrieval, Explore for evidence, then Write analysis for a short answer or commentary plan. Your school determines SAC arrangements; app checklists and model discussions do not award VCAA marks.</p></section>
    <footer className="source-note">Based on your supplied {STUDY_DESIGN_SOURCE.title}, version {STUDY_DESIGN_SOURCE.version} ({STUDY_DESIGN_SOURCE.date}), implementation from 2024. Original practice materials; not a VCAA assessment or endorsement. Source: {STUDY_DESIGN_SOURCE.filename}, pp. 10–22 and 23–38.</footer>
    <span className="sr-only">{AREAS.length} areas of study across the course</span>
  </main>
}
