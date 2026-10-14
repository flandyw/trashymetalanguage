import { useMemo, useState } from 'react'
import { SUBSYSTEMS, FEATURES, type Subsystem } from '../lib/taxonomy'

interface Props {
  activeLayers: Set<string>
  onToggle: (featureId: string) => void
  onClear: () => void
  /** How many occurrences of each feature are in the current text. */
  counts: Map<string, number>
  source: 'auto' | 'gold'
  onSourceChange: (source: 'auto' | 'gold') => void
  hasCustomText: boolean
  onCustomText: (text: string) => void
  onClearCustomText: () => void
}

export default function ExplorePanel({
  activeLayers,
  onToggle,
  onClear,
  counts,
  source,
  onSourceChange,
  hasCustomText,
  onCustomText,
  onClearCustomText,
}: Props) {
  const [query, setQuery] = useState('')
  const [draft, setDraft] = useState('')
  const [collapsed, setCollapsed] = useState<Set<Subsystem>>(new Set())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FEATURES.filter((f) => (counts.get(f.id) ?? 0) > 0)
    return FEATURES.filter(
      (f) => f.scope === 'word' && (
        f.label.toLowerCase().includes(q) ||
        f.short.toLowerCase().includes(q) ||
        f.examples.some((e) => e.toLowerCase().includes(q))),
    )
  }, [query, counts])

  const byCategory = useMemo(() => {
    const map = new Map<Subsystem, typeof FEATURES>()
    for (const f of filtered) {
      const list = map.get(f.subsystem) ?? []
      list.push(f)
      map.set(f.subsystem, list)
    }
    return map
  }, [filtered])

  return (
    <aside className="explore">
      <div className="explore__modes">
        <button
          type="button"
          className={`seg${source === 'auto' ? ' seg--on' : ''}`}
          onClick={() => onSourceChange('auto')}
        >
          Suggestions
        </button>
        <button
          type="button"
          className={`seg${source === 'gold' ? ' seg--on' : ''}`}
          disabled={hasCustomText}
          onClick={() => onSourceChange('gold')}
        >
          Answer key
        </button>
      </div>
      <p className="explore__note">
        {source === 'auto'
          ? 'Automatic suggestions use word lists and local context. Check each suggestion against the sentence; they are not used to mark your practice.'
          : 'Selected teaching examples from the passage key. Choose a feature below to highlight it. Unmarked words may also carry language features.'}
      </p>

      <div className="explore__search">
        <input
          type="search"
          value={query}
          placeholder="Find a feature or example…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search features"
        />
        {activeLayers.size > 0 && (
          <button type="button" className="btn btn--ghost btn--tiny" onClick={onClear}>
            Clear {activeLayers.size}
          </button>
        )}
      </div>

      <p className="explore__note">{query ? "Search results across the feature glossary" : `${counts.size} features in this text · search to browse the glossary`}</p>
      <div className="palette">
        {SUBSYSTEMS.map((cat) => {
          const items = byCategory.get(cat.id)
          if (!items || items.length === 0) return null
          const isCollapsed = collapsed.has(cat.id)
          return (
            <section key={cat.id} className="palette__group">
              <button
                type="button"
                className="palette__head"
                onClick={() => {
                  const next = new Set(collapsed)
                  if (next.has(cat.id)) next.delete(cat.id)
                  else next.add(cat.id)
                  setCollapsed(next)
                }}
                aria-expanded={!isCollapsed}
              >
                <span className="swatch" style={{ background: `oklch(0.72 0.15 ${cat.hue})` }} />
                <span className="palette__label">{cat.label}</span>
                <span className="palette__count">{items.length}</span>
                <span className="palette__caret">{isCollapsed ? '▸' : '▾'}</span>
              </button>
              {!isCollapsed && (
                <>
                  <p className="palette__blurb">{cat.blurb}</p>
                  <ul className="palette__items">
                    {items.map((f) => {
                      const on = activeLayers.has(f.id)
                      const n = counts.get(f.id) ?? 0
                      return (
                        <li key={f.id}>
                          <button
                            type="button"
                            className={`fchip${on ? ' fchip--on' : ''}`}
                            style={{ '--hl': f.colour } as React.CSSProperties}
                            onClick={() => onToggle(f.id)}
                            aria-pressed={on}
                            title={f.detail}
                          >
                            <span>{f.label}</span>
                            {n > 0 && <span className="fchip__count">{n}</span>}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </section>
          )
        })}
        {filtered.length === 0 && <p className="palette__empty">No feature matches “{query}”.</p>}
      </div>

      <section className="own-text">
        <h3>Paste your own text</h3>
        <p className="own-text__note">
          Try a sentence or short paragraph. Suggestions appear when you select Analyse text.
        </p>
        <textarea
          value={draft}
          aria-label="Your text to analyse"
          maxLength={12000}
          rows={5}
          placeholder="Paste a paragraph from a news article, an ad, or your own writing…"
          onChange={(e) => setDraft(e.target.value)}
        />
        <div className="row">
          <button
            type="button"
            className="btn btn--primary btn--tiny"
            disabled={draft.trim().length < 3}
            onClick={() => onCustomText(draft.trim())}
          >
            Analyse text
          </button>
          {hasCustomText && (
            <button type="button" className="btn btn--ghost btn--tiny" onClick={onClearCustomText}>
              Back to curated text
            </button>
          )}
        </div>
      </section>
    </aside>
  )
}
