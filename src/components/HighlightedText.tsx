import { Fragment } from 'react'
import { feature } from '../lib/taxonomy'
import type { Tokenized } from '../lib/tokenize'

export type TokenState = 'found' | 'miss' | 'hint'

export interface Underline {
  feature: string
  tokens: number[]
}

interface Props {
  tok: Tokenized
  /** token index -> feature ids currently painted. */
  painted: Map<number, string[]>
  /** token index -> hunt feedback state. */
  states?: Map<number, TokenState>
  /** Multi-word units to bracket underneath. */
  underlines?: Underline[]
  selected?: number | null
  onWordClick?: (tokenIndex: number, rect: DOMRect) => void
  /** Highlights the whole occurrence when the learner hovers a found word. */
  interactive?: boolean
  size?: 'normal' | 'large'
}

function topColour(features: string[]): string | undefined {
  const first = features[0]
  return first ? feature(first)?.colour : undefined
}

export default function HighlightedText({
  tok,
  painted,
  states,
  underlines,
  selected,
  onWordClick,
  interactive = true,
  size = 'normal',
}: Props) {
  const underlineByToken = new Map<number, Underline[]>()
  for (const u of underlines ?? []) {
    for (const t of u.tokens) {
      const list = underlineByToken.get(t) ?? []
      list.push(u)
      underlineByToken.set(t, list)
    }
  }

  return (
    <p className={`passage passage-${size}`}>
      {tok.segments.map((seg, i) => {
        if (seg.kind !== 'word') {
          return <Fragment key={`t${i}`}>{seg.value}</Fragment>
        }
        const token = tok.tokens[seg.token]
        const feats = painted.get(seg.token) ?? []
        const state = states?.get(seg.token)
        const colour = topColour(feats)
        const underline = underlineByToken.get(seg.token)
        const classes = ['word']
        if (colour) classes.push('word--painted')
        if (state) classes.push(`word--${state}`)
        if (selected === seg.token) classes.push('word--selected')
        if (underline) classes.push('word--underlined')
        return (
          <button
            key={`w${seg.token}`}
            type="button"
            className={classes.join(' ')}
            style={
              colour
                ? ({ '--hl': colour } as React.CSSProperties)
                : underline
                  ? ({ '--hl': feature(underline[0].feature)?.colour } as React.CSSProperties)
                  : undefined
            }
            data-count={feats.length > 1 ? feats.length : undefined}
            aria-pressed={selected === seg.token}
            aria-label={
              feats.length
                ? `${token.text}: ${feats.map((f) => feature(f)?.label ?? f).join(', ')}`
                : token.text
            }
            onClick={(e) => {
              if (!interactive) return
              onWordClick?.(seg.token, e.currentTarget.getBoundingClientRect())
            }}
            disabled={!interactive}
          >
            {token.text}
          </button>
        )
      })}
    </p>
  )
}
