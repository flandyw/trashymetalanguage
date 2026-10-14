import { useEffect, useRef, useState } from 'react'
import type { Tag } from '../lib/tagger'
import { feature, subsystemMeta } from '../lib/taxonomy'
import type { Token } from '../lib/tokenize'

export interface Anchor {
  x: number
  y: number
  width: number
}

interface Props {
  token: Token
  tags: Tag[]
  goldFeatures: string[]
  goldNotes: Record<string, string | undefined>
  anchor: Anchor
  onClose: () => void
  onToggleLayer: (featureId: string) => void
  paintGold: boolean
}

const CONFIDENCE_ORDER = { high: 0, medium: 1, low: 2 } as const

export default function WordPopover({
  token,
  tags,
  goldFeatures,
  goldNotes,
  anchor,
  onClose,
  onToggleLayer,
  paintGold,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ left: anchor.x, top: anchor.y + 34 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const margin = 12
    let left = anchor.x + anchor.width / 2 - rect.width / 2
    left = Math.max(margin, Math.min(left, window.innerWidth - rect.width - margin))
    let top = anchor.y + 36
    if (top + rect.height > window.innerHeight - margin) {
      top = Math.max(margin, anchor.y - rect.height - 12)
    }
    setPos({ left, top })
  }, [anchor, tags.length, goldFeatures.length])

  useEffect(() => {
    const onOutside = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (!ref.current?.contains(target) && !target.closest('.word')) onClose()
    }
    document.addEventListener('pointerdown', onOutside)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onOutside) }
  }, [onClose])

  const sorted = [...tags].sort(
    (a, b) => CONFIDENCE_ORDER[a.confidence] - CONFIDENCE_ORDER[b.confidence],
  )

  return (
    <div
      ref={ref}
      className="popover"
      style={{ left: pos.left, top: pos.top }}
      role="dialog"
      aria-label={`Analysis of ${token.text}`}
    >
      <header className="popover__head">
        <div>
          <strong className="popover__word">{token.text}</strong>
          <span className="popover__meta">
            sentence {token.sentence + 1} · {token.text.length} letters
          </span>
        </div>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </header>

      {paintGold && goldFeatures.length === 0 && <p className="popover__empty">This word has no annotation in the passage key. The key selects teaching examples; it is not an exhaustive analysis.</p>}
      {paintGold && goldFeatures.length > 0 && (
        <section className="popover__section">
          <h4>
            <span className="dot dot--gold" /> In the answer key
          </h4>
          <ul className="popover__list">
            {goldFeatures.map((id) => {
              const f = feature(id)
              if (!f) return null
              return (
                <li key={id}>
                  <button
                    type="button"
                    className="tag-pill"
                    style={{ '--hl': f.colour } as React.CSSProperties}
                    onClick={() => onToggleLayer(id)}
                    title="Highlight every example of this feature"
                  >
                    {f.label}
                  </button>
                  <p className="tag-card__detail">{goldNotes[id] ?? f.short}</p>
                  {f.test && <p className="tag-card__test">Check: {f.test}</p>}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {!paintGold && (sorted.length === 0 ? (
        <p className="popover__empty">
          No automatic suggestion for this word. Read it in its sentence and use the feature definitions to test your interpretation.
        </p>
      ) : (
        <section className="popover__section">
          <h4>
            <span className="dot" /> Auto-tag guesses
          </h4>
          <ul className="popover__list popover__list--stacked">
            {sorted.map((tag) => {
              const f = feature(tag.feature)
              if (!f) return null
              return (
                <li key={tag.feature} className="tag-card" style={{ '--hl': f.colour } as React.CSSProperties}>
                  <div className="tag-card__top">
                    <button
                      type="button"
                      className="tag-pill"
                      style={{ '--hl': f.colour } as React.CSSProperties}
                      onClick={() => onToggleLayer(tag.feature)}
                    >
                      {f.label}
                    </button>
                    <span className={`conf conf--${tag.confidence}`}>{tag.confidence}</span>
                  </div>
                  <p className="tag-card__detail">{tag.note ?? f.short}</p>
                  <p className="tag-card__def">{f.detail}</p>
                  {f.test && <p className="tag-card__test">Test: {f.test}</p>}
                  <p className="tag-card__examples">
                    e.g. {f.examples.slice(0, 3).join(' · ')}
                  </p>
                  <p className="tag-card__cat">{subsystemMeta(f.subsystem).label}</p>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
