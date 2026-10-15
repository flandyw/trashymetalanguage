import { useMemo, useState } from 'react'
import { BANKS } from '../data/passages'
import { TIER_META, wordCount, type Passage } from '../lib/passages'
import { UNITS, AREAS, LANGUAGE_MODES, TEXT_TYPES } from '../lib/vce'
import { courseLabel } from '../lib/curriculum'
import { feature, type Unit } from '../lib/taxonomy'

interface Props {
  initialUnit: Unit | 'all'
  initialArea: string
  currentId: string
  onPick: (id: string) => void
  mastered: string[]
  onClose: () => void
}

const DIFFICULTY_LABEL = ['', 'Starter', 'Easy', 'Core', 'Tricky', 'Hard']

export default function LibraryPanel({ initialUnit, initialArea, currentId, onPick, mastered, onClose }: Props) {
  const [unit, setUnit] = useState<Unit | 'all'>(initialUnit)
  const [area, setArea] = useState(initialArea)
  const [mode, setMode] = useState('all')
  const [textType, setTextType] = useState('all')
  const [tier, setTier] = useState<number | 'all'>('all')
  const [bank, setBank] = useState<string | 'all'>('all')
  const [query, setQuery] = useState('')

  const passages = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BANKS.filter((b) => bank === 'all' || b.id === bank).flatMap((b) =>
      b.passages
        .filter(p => (unit === 'all' || p.unit === unit) && (area === 'all' || p.areaOfStudy === area) && (mode === 'all' || p.mode === mode) && (textType === 'all' || p.textType === textType))
        .filter((p) => (tier === 'all' ? true : p.lengthTier === tier))
        .filter(
          (p) =>
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.source.toLowerCase().includes(q) ||
            p.text.toLowerCase().includes(q) ||
            p.gold.some(g => feature(g.feature)?.label.toLowerCase().includes(q)),
        )
        .map((p) => ({ p, bankLabel: b.label })),
    )
  }, [tier, bank, query, unit, area, mode, textType])

  return (
    <div className="library">
      <header className="library__head">
        <div>
          <h2>Passage library</h2>
          <p className="library__sub">
            Start with a text in context, or focus on a word, phrase or short extract. Each text includes a teaching key.
          </p>
        </div>
        <button type="button" className="btn btn--ghost btn--tiny" onClick={onClose}>
          Close
        </button>
      </header>

      <div className="curriculum-filters">
        <label>Unit<select aria-label="Filter by unit" value={unit} onChange={e=>{setUnit(e.target.value === 'all' ? 'all' : Number(e.target.value) as Unit);setArea('all')}}><option value="all">All four units</option>{UNITS.map(u=><option key={u.id} value={u.id}>Unit {u.id}: {u.title}</option>)}</select></label>
        <label>Area of study<select aria-label="Filter by area of study" value={area} onChange={e=>setArea(e.target.value)}><option value="all">All areas</option>{AREAS.filter(a=>unit==='all'||a.unit===unit).map(a=><option key={a.id} value={a.id}>{a.title}</option>)}</select></label>
        <label>Mode<select aria-label="Filter by mode" value={mode} onChange={e=>setMode(e.target.value)}><option value="all">All modes</option>{LANGUAGE_MODES.map(m=><option key={m.id} value={m.id}>{m.label}</option>)}</select></label>
        <label>Text type<select aria-label="Filter by text type" value={textType} onChange={e=>setTextType(e.target.value)}><option value="all">All text types</option>{TEXT_TYPES.map(t=><option key={t.id} value={t.id}>{t.label}</option>)}</select></label>
        <button className="btn btn--tiny" onClick={()=>{setUnit('all');setArea('all');setMode('all');setTextType('all');setTier('all');setBank('all');setQuery('')}}>Clear all filters</button>
      </div>
      <div className="library__tiers">
        <button
          type="button"
          className={`tier${tier === 'all' ? ' tier--on' : ''}`}
          onClick={() => setTier('all')}
        >
          <span className="tier__icon">🗂️</span>
          <span className="tier__label">Everything</span>
          <span className="tier__blurb">{BANKS.reduce((n, b) => n + b.passages.length, 0)} passages</span>
        </button>
        {TIER_META.map((t) => {
          const count = BANKS.reduce(
            (n, b) => n + b.passages.filter((p) => p.lengthTier === t.tier).length,
            0,
          )
          return (
            <button
              key={t.tier}
              type="button"
              className={`tier${tier === t.tier ? ' tier--on' : ''}`}
              onClick={() => setTier(t.tier)}
            >
              <span className="tier__icon">{t.icon}</span>
              <span className="tier__label">{t.label}</span>
              <span className="tier__blurb">
                {count} passages · {t.blurb}
              </span>
            </button>
          )
        })}
      </div>

      <div className="library__filters">
        <input
          type="search"
          value={query}
          placeholder="Search a passage, topic or feature…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search passages"
        />
        <select
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          aria-label="Filter by bank"
        >
          <option value="all">All {BANKS.length} banks</option>
          {BANKS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.label} ({b.passages.length})
            </option>
          ))}
        </select>
        <span className="library__count">{passages.length} shown</span>
      </div>

      <ul className="library__list">
        {passages.map(({ p, bankLabel }) => (
          <PassageRow
            key={p.id}
            passage={p}
            bankLabel={bankLabel}
            active={p.id === currentId}
            mastered={mastered.includes(p.id)}
            onPick={() => onPick(p.id)}
          />
        ))}
      </ul>
      {passages.length === 0 && <p className="library__empty">Nothing matches that filter.</p>}
    </div>
  )
}

function PassageRow({
  passage,
  bankLabel,
  active,
  mastered,
  onPick,
}: {
  passage: Passage
  bankLabel: string
  active: boolean
  mastered: boolean
  onPick: () => void
}) {
  const features = passage.gold.map((g) => g.feature)
  return (
    <li>
      <button
        type="button"
        className={`prow${active ? ' prow--active' : ''}`}
        onClick={onPick}
      >
        <span className="prow__main">
          <span className="prow__title">
            {mastered && <span className="prow__tick" title="Mastered">✓</span>}
            {passage.title}
          </span>
          <span className="prow__course">{courseLabel(passage)}</span>
          <span className="prow__text">{passage.text.slice(0, 130)}{passage.text.length > 130 ? '…' : ''}</span>
        </span>
        <span className="prow__side">
          <span className="pill pill--tier">T{passage.lengthTier}</span>
          <span className={`pill pill--d${passage.difficulty}`}>
            {DIFFICULTY_LABEL[passage.difficulty]}
          </span>
          <span className="prow__meta">
            {wordCount(passage.text)} words · {bankLabel}
          </span>
          <span className="prow__features">
            {features.slice(0, 4).map((id) => {
              const f = feature(id)
              if (!f) return null
              return (
                <span
                  key={id}
                  className="dot-feature"
                  style={{ background: f.colour }}
                  title={f.label}
                />
              )
            })}
            {features.length > 4 && <span className="prow__more">+{features.length - 4}</span>}
          </span>
        </span>
      </button>
    </li>
  )
}
