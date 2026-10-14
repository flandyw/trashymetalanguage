import { useEffect, useRef, useState } from 'react'
import type { Tag } from '../lib/tagger'
import { PREFIXES, SUFFIXES } from '../lib/lexicon'
import { feature, categoryMeta } from '../lib/taxonomy'
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
  anchor: Anchor
  onClose: () => void
  onToggleLayer: (featureId: string) => void
  paintGold: boolean
}

const CONFIDENCE_ORDER = { high: 0, medium: 1, low: 2 } as const

/** A rough morpheme split, only ever shown when both parts are real affixes. */
function morphology(word: string): { prefix?: string; suffix?: string; root: string } | null {
  const w = word.toLowerCase()
  if (w.length < 6) return null
  const prefix = PREFIXES.find((p) => w.startsWith(p) && w.length - p.length >= 3)
  const suffix = [...SUFFIXES]
    .sort((a, b) => b.length - a.length)
    .find((s) => w.endsWith(s) && w.length - s.length >= 3)
  if (!prefix && !suffix) return null
  const start = prefix ? prefix.length : 0
  const end = suffix ? w.length - suffix.length : w.length
  if (end <= start) return null
  return { prefix, suffix, root: w.slice(start, end) }
}

export default function WordPopover({
  token,
  tags,
  goldFeatures,
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const sorted = [...tags].sort(
    (a, b) => CONFIDENCE_ORDER[a.confidence] - CONFIDENCE_ORDER[b.confidence],
  )
  const morph = morphology(token.text)

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

      {morph && (
        <div className="popover__morph">
          <span className="chip chip--morph">morphemes</span>
          <code>
            {morph.prefix && <em className="m-prefix">{morph.prefix}</em>}
            <strong>{morph.root}</strong>
            {morph.suffix && <em className="m-suffix">{morph.suffix}</em>}
          </code>
        </div>
      )}

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
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {sorted.length === 0 ? (
        <p className="popover__empty">
          The auto-tagger found nothing it can name with confidence here. That is normal for
          unusual words — name it yourself and move on.
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
                  <p className="tag-card__cat">{categoryMeta(f.category).label}</p>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}
