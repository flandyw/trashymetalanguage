import { useMemo, useState } from 'react'
import { CATEGORIES, FEATURES, type FeatureCategory } from '../lib/taxonomy'

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
  const [collapsed, setCollapsed] = useState<Set<FeatureCategory>>(new Set())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FEATURES
    return FEATURES.filter(
      (f) =>
        f.label.toLowerCase().includes(q) ||
        f.short.toLowerCase().includes(q) ||
        f.examples.some((e) => e.toLowerCase().includes(q)),
    )
  }, [query])

  const byCategory = useMemo(() => {
    const map = new Map<FeatureCategory, typeof FEATURES>()
    for (const f of filtered) {
      const list = map.get(f.category) ?? []
      list.push(f)
      map.set(f.category, list)
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
          Auto-tag
        </button>
        <button
          type="button"
          className={`seg${source === 'gold' ? ' seg--on' : ''}`}
          onClick={() => onSourceChange('gold')}
        >
          Answer key
        </button>
      </div>
      <p className="explore__note">
        {source === 'auto'
          ? 'Rule-based guesses over the word lists. Handy anywhere, occasionally wrong — treat low confidence as a question, not an answer.'
          : 'The human-annotated key for this passage. Use it to check your own reading.'}
      </p>

      <div className="explore__search">
        <input
          type="search"
          value={query}
          placeholder="Search 60+ features…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search features"
        />
        {activeLayers.size > 0 && (
          <button type="button" className="btn btn--ghost btn--tiny" onClick={onClear}>
            Clear {activeLayers.size}
          </button>
        )}
      </div>

      <div className="palette">
        {CATEGORIES.map((cat) => {
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
                <span className="swatch" style={{ background: cat.colour }} />
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
          Any sentence, paragraph or full article. The auto-tagger runs on it immediately.
        </p>
        <textarea
          value={draft}
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
            Analyse it
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
