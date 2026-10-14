import { useMemo, useState } from 'react'
import { BANKS } from '../data/passages'
import { TIER_META, wordCount, type Passage } from '../lib/passages'
import { feature } from '../lib/taxonomy'

interface Props {
  currentId: string
  onPick: (id: string) => void
  mastered: string[]
  onClose: () => void
}

const DIFFICULTY_LABEL = ['', 'Starter', 'Easy', 'Core', 'Tricky', 'Hard']

export default function LibraryPanel({ currentId, onPick, mastered, onClose }: Props) {
  const [tier, setTier] = useState<number | 'all'>('all')
  const [bank, setBank] = useState<string | 'all'>('all')
  const [query, setQuery] = useState('')

  const passages = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BANKS.filter((b) => bank === 'all' || b.id === bank).flatMap((b) =>
      b.passages
        .filter((p) => (tier === 'all' ? true : p.lengthTier === tier))
        .filter(
          (p) =>
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.source.toLowerCase().includes(q) ||
            p.text.toLowerCase().includes(q),
        )
        .map((p) => ({ p, bankLabel: b.label })),
    )
  }, [tier, bank, query])

  return (
    <div className="library">
      <header className="library__head">
        <div>
          <h2>Passage library</h2>
          <p className="library__sub">
            Climb the ladder: word → phrase → sentence → paragraph. Every passage is annotated
            by hand.
          </p>
        </div>
        <button type="button" className="btn btn--ghost btn--tiny" onClick={onClose}>
          Close
        </button>
      </header>

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
          placeholder="Search passages…"
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
