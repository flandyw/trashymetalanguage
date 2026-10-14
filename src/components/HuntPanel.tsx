import { categoryMeta, feature } from '../lib/taxonomy'
import type { Passage } from '../lib/passages'

export interface HuntInfo {
  feature: string
  total: number
  found: number
  misses: number
  hintsUsed: number
  done: boolean
  perfect: boolean
  revealed: boolean
  /** Token indices revealed by hints, drawn as a dashed outline. */
  hintedTokens: number[]
}

interface Props {
  passage: Passage
  hunt: HuntInfo
  onHint: () => void
  onRevealAll: () => void
  onNewTarget: () => void
  onNextPassage: () => void
  hintCost: number
}

export default function HuntPanel({
  passage,
  hunt,
  onHint,
  onRevealAll,
  onNewTarget,
  onNextPassage,
  hintCost,
}: Props) {
  const f = feature(hunt.feature)
  if (!f) return null
  const cat = categoryMeta(f.category)
  const pct = hunt.total === 0 ? 0 : Math.round((hunt.found / hunt.total) * 100)

  return (
    <section className="hunt" style={{ '--hl': f.colour } as React.CSSProperties}>
      <div className="hunt__prompt">
        <span className="hunt__cat">{cat.label}</span>
        <h2>
          Find every <em>{f.label.toLowerCase()}</em>
        </h2>
        <p className="hunt__def">{f.short}</p>
        <p className="hunt__hint-line">
          <strong>Hint:</strong> {f.hint}
        </p>
        {f.test && (
          <p className="hunt__test">
            <strong>Test:</strong> {f.test}
          </p>
        )}
      </div>

      <div className="hunt__progress">
        <div className="dots" role="img" aria-label={`${hunt.found} of ${hunt.total} found`}>
          {Array.from({ length: hunt.total }, (_, i) => (
            <span
              key={i}
              className={`dot-target${i < hunt.found ? ' dot-target--on' : ''}`}
              style={{ '--hl': f.colour } as React.CSSProperties}
            />
          ))}
        </div>
        <span className="hunt__count">
          {hunt.found} / {hunt.total} found
        </span>
        <span className="hunt__bar" aria-hidden="true">
          <span className="hunt__fill" style={{ width: `${pct}%` }} />
        </span>
      </div>

      {hunt.done ? (
        <div className={`hunt__result${hunt.perfect ? ' hunt__result--perfect' : ''}`}>
          <strong>{hunt.perfect ? 'Flawless run!' : hunt.revealed ? 'Revealed' : 'Target cleared'}</strong>
          <span>
            {hunt.misses} wrong click{hunt.misses === 1 ? '' : 's'} · {hunt.hintsUsed} hint
            {hunt.hintsUsed === 1 ? '' : 's'}
          </span>
          <div className="row">
            <button type="button" className="btn btn--primary" onClick={onNextPassage}>
              Next passage →
            </button>
            <button type="button" className="btn" onClick={onNewTarget}>
              New target in this passage
            </button>
          </div>
        </div>
      ) : (
        <div className="hunt__actions">
          <button type="button" className="btn" onClick={onHint} title={`Costs ${hintCost} XP`}>
            💡 Reveal one ({hintCost} XP)
          </button>
          <button type="button" className="btn" onClick={onRevealAll}>
            🏳️ Show me all
          </button>
          <button type="button" className="btn btn--ghost" onClick={onNewTarget}>
            🎲 Different feature
          </button>
          <button type="button" className="btn btn--ghost" onClick={onNextPassage}>
            Skip passage
          </button>
        </div>
      )}

      <p className="hunt__teach">{passage.teach}</p>
    </section>
  )
}
