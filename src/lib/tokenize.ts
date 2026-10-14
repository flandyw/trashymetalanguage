/**
 * A minimal tokeniser. English word tokens are runs of letters, digits,
 * apostrophes and internal hyphens. Everything else (spaces, punctuation) is
 * kept as literal text so the passage can be re-rendered byte-for-byte.
 */

export interface Token {
  /** Index in the token list (word tokens only). */
  index: number
  /** The word, normalised for lookup (lowercased). */
  lower: string
  /** The word exactly as it appeared. */
  text: string
  /** Character offset of the first character. */
  start: number
  /** Character offset one past the last character. */
  end: number
  /** Index of the sentence this token belongs to. */
  sentence: number
}

export type Segment =
  | { kind: 'word'; token: number }
  | { kind: 'text'; value: string }
  /** A transcript speaker label such as "Mia: ". Shown but never clickable. */
  | { kind: 'label'; value: string }

export interface TokenizeOptions {
  /** Treat the text as a spoken transcript: speaker labels, pause markers. */
  transcript?: boolean
}

export interface Tokenized {
  tokens: Token[]
  segments: Segment[]
  sentences: { start: number; end: number }[]
}

const WORD = /[\p{L}\p{N}]+(?:[’'][\p{L}]+)*(?:-[\p{L}\p{N}]+)*/gu

/**
 * Transcript mode also treats ((comments)) and pause markers such as (.) and
 * (2.0) as single clickable tokens, so paralinguistic features and pauses can
 * be found like any other feature.
 */
const TRANSCRIPT_WORD =
  /\(\([^()\n]*\)\)|\(\d*\.?\d*\)|[\p{L}\p{N}]+(?:[’'][\p{L}]+)*(?:-[\p{L}\p{N}]+)*/gu

/** A speaker label at the start of a line: "Mia: ", "Interviewer: ", "Speaker 2: ". */
const SPEAKER_LABEL = /^[\p{Lu}][\p{L}\p{N} .'’-]{0,24}:[ \t]+/u

/** True when the text looks like a multi-turn transcript. */
export function looksLikeTranscript(text: string): boolean {
  const lines = text.split('\n').filter((l) => l.trim())
  return lines.length >= 2 && lines.filter((l) => SPEAKER_LABEL.test(l)).length >= 2
}

export function tokenize(text: string, options: TokenizeOptions = {}): Tokenized {
  const tokens: Token[] = []
  const segments: Segment[] = []
  const sentences: { start: number; end: number }[] = []

  let sentence = 0
  let cursor = 0
  let sentenceStart = 0

  // Speaker labels (transcripts only): remember where each one sits so the
  // word scanner can skip over it.
  const labels = new Map<number, number>()
  if (options.transcript) {
    let lineStart = 0
    for (const line of text.split('\n')) {
      const m = line.match(SPEAKER_LABEL)
      if (m) labels.set(lineStart, m[0].length)
      lineStart += line.length + 1
    }
  }

  const pushGap = (upTo: number) => {
    // Emit plain text (and any speaker labels inside it) up to `upTo`.
    while (cursor < upTo) {
      const labelLen = labels.get(cursor)
      if (labelLen !== undefined && cursor + labelLen <= upTo) {
        segments.push({ kind: 'label', value: text.slice(cursor, cursor + labelLen) })
        cursor += labelLen
        continue
      }
      let next = upTo
      for (const at of labels.keys()) if (at > cursor && at < next) next = at
      segments.push({ kind: 'text', value: text.slice(cursor, next) })
      cursor = next
    }
  }

  const pattern = options.transcript ? TRANSCRIPT_WORD : WORD
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0
    // A match that begins inside a speaker label belongs to the label.
    const inLabel = [...labels].some(([at, len]) => start >= at && start < at + len)
    if (inLabel) continue
    pushGap(start)
    const raw = match[0]
    const token: Token = {
      index: tokens.length,
      lower: raw.toLowerCase().replace(/[’']/g, "'"),
      text: raw,
      start,
      end: start + raw.length,
      sentence,
    }
    tokens.push(token)
    segments.push({ kind: 'word', token: token.index })
    cursor = start + raw.length

    // A sentence ends when we see terminal punctuation followed by a break.
    const tail = text.slice(token.end)
    if (/^\s*[.!?…]/.test(tail) || /^[.!?…]$/.test(text.slice(-1))) {
      const stopMatch = tail.match(/^\s*([.!?…]+)/)
      if (stopMatch) {
        const endOfStop = token.end + stopMatch[0].length
        // Only break if nothing more comes before the next word's start.
        const rest = text.slice(endOfStop)
        if (rest === '' || /^\s/.test(rest)) {
          sentences.push({ start: sentenceStart, end: endOfStop })
          sentenceStart = endOfStop
          sentence += 1
        }
      }
    }
  }

  pushGap(text.length)
  if (sentenceStart < text.length) {
    sentences.push({ start: sentenceStart, end: text.length })
  }
  if (sentences.length === 0) {
    sentences.push({ start: 0, end: text.length })
  }

  return { tokens, segments, sentences }
}

/** Find every occurrence of a substring, reporting character ranges. */
export function findOccurrences(
  text: string,
  needle: string,
): { start: number; end: number }[] {
  if (!needle) return []
  const target = needle.toLowerCase().replace(/[’']/g, "'").toLowerCase()
  const normalisedHay = text.toLowerCase().replace(/[’']/g, "'").toLowerCase()
  const out: { start: number; end: number }[] = []
  let from = 0
  while (from <= normalisedHay.length) {
    const at = normalisedHay.indexOf(target, from)
    if (at === -1) break
    // Word-boundary-ish check so "he" does not match inside "the".
    const before = at === 0 ? '' : normalisedHay[at - 1]
    const after = normalisedHay[at + target.length] ?? ''
    const boundary = /[^a-z0-9'’-]/
    if ((at === 0 || boundary.test(before)) && (after === '' || boundary.test(after))) {
      out.push({ start: at, end: at + target.length })
    }
    from = at + 1
  }
  return out
}

/** Token indices whose character span overlaps [start, end). */
export function tokensInRange(
  tokens: Token[],
  start: number,
  end: number,
): number[] {
  const out: number[] = []
  for (const t of tokens) {
    if (t.end <= start) continue
    if (t.start >= end) break
    out.push(t.index)
  }
  return out
}
