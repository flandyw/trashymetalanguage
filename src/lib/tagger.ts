/**
 * A deterministic, rule-based linguistic annotator.
 *
 * This is deliberately honest about its limits: it is pattern matching over
 * word lists plus affix and context heuristics, not a statistical tagger. Every
 * tag therefore carries a confidence, and the UI labels the whole layer as an
 * auto-guess rather than a mark scheme.
 *
 * The curated passages in `src/data/passages` carry human gold annotations
 * instead, and those are what the challenges are graded against.
 */

import {
  PHRASES_BY_FIRST,
  PREFIXES,
  SET,
  SUFFIXES,
  type Confidence,
} from './lexicon'
import { tokenize, looksLikeTranscript, type TokenizeOptions, type Token, type Tokenized } from './tokenize'

export interface Tag {
  feature: string
  confidence: Confidence
  note?: string
}

export interface FeatureGroup {
  feature: string
  confidence: Confidence
  tokens: number[]
  note?: string
}

export interface Analysed {
  tok: Tokenized
  /** token index -> tags found on that token. */
  tags: Map<number, Tag[]>
  /** Multi-word matches: phrase lexicon hits, phrase structures, sound runs. */
  groups: FeatureGroup[]
  /** feature id -> every token that carries it, for layer highlighting. */
  featureTokens: Map<string, number[]>
}

const PARTICLES = new Set([
  'up',
  'down',
  'out',
  'off',
  'on',
  'in',
  'over',
  'through',
  'around',
  'about',
  'along',
  'away',
  'back',
  'forward',
  'into',
  'at',
  'by',
  'for',
  'to',
  'with',
  'after',
  'against',
])

const STOP_FOR_SOUND = new Set([
  'the',
  'a',
  'an',
  'and',
  'or',
  'but',
  'of',
  'to',
  'in',
  'on',
  'at',
  'is',
  'are',
  'was',
  'were',
  'be',
  'it',
  'its',
  'as',
  'so',
  'that',
  'this',
  'i',
  'you',
  'we',
  'they',
  'he',
  'she',
  'my',
  'your',
])

/** Known proper names, so the heuristic has something to lean on. */
const PROPER_HINTS = new Set([
  ...['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  ...[
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ],
  ...[
    'australia',
    'australian',
    'victoria',
    'nsw',
    'queensland',
    'tasmania',
    'melbourne',
    'sydney',
    'brisbane',
    'perth',
    'adelaide',
    'canberra',
    'hobart',
    'darwin',
    'geelong',
    'ballarat',
    'bendigo',
    'newcastle',
    'wollongong',
    'cairns',
    'townsville',
    'england',
    'britain',
    'america',
    'china',
    'india',
    'japan',
    'france',
    'germany',
    'italy',
    'canada',
    'europe',
    'asia',
    'africa',
    'nsw',
  ],
  ...[
    'google',
    'microsoft',
    'apple',
    'facebook',
    'instagram',
    'tiktok',
    'snapchat',
    'twitter',
    'youtube',
    'netflix',
    'spotify',
    'amazon',
    'bunnings',
    'woolworths',
    'coles',
    'maccas',
    'qantas',
    'telstra',
    'optus',
    'afl',
    'nrl',
    'atar',
    'naplan',
    'centrelink',
    'medicare',
    'myki',
  ],
  ...[
    'priya',
    'daniel',
    'sarah',
    'james',
    'emma',
    'liam',
    'noah',
    'mia',
    'jack',
    'chloe',
    'ethan',
    'ruby',
    'max',
    'zoe',
    'luke',
    'ella',
  ],
])

const APOSTROPHE = /[’']/

/** Negative and clitic contractions whose stem is not a modal verb by itself. */
const CONTRACTED_MODALS: Record<string, string> = {
  won: 'will',
  would: 'would',
  could: 'could',
  should: 'should',
  must: 'must',
  shan: 'shall',
  might: 'might',
  need: 'need',
  ought: 'ought',
  can: 'can',
}

function isCapitalised(word: string): boolean {
  return /^[A-Z]/.test(word)
}

function stripApostrophe(word: string): string {
  return word.replace(/[’']/g, "'")
}

const ABSTRACT_HINTS = new Set([
  'time',
  'life',
  'love',
  'work',
  'help',
  'need',
  'idea',
  'hope',
  'care',
  'mind',
  'trust',
  'change',
  'power',
  'sense',
  'truth',
  'value',
  'peace',
  'order',
  'sense',
])

function inflectedVerbForm(w: string): string | null {
  const candidates: string[] = []
  if (w.endsWith('ing')) candidates.push(w.slice(0, -3), w.slice(0, -3) + 'e')
  if (w.endsWith('ed')) candidates.push(w.slice(0, -2), w.slice(0, -1), w.slice(0, -2) + 'e')
  if (w.endsWith('s')) candidates.push(w.slice(0, -1))
  if (w.endsWith('ies')) candidates.push(w.slice(0, -3) + 'y')
  for (const c of candidates) {
    if (c.length >= 2 && SET.verbs.has(c)) return c
  }
  return null
}

function inflectedNounForm(w: string): string | null {
  const candidates: string[] = []
  if (w.endsWith('ies')) candidates.push(w.slice(0, -3) + 'y')
  if (w.endsWith('es')) candidates.push(w.slice(0, -2), w.slice(0, -1))
  if (w.endsWith('s')) candidates.push(w.slice(0, -1))
  for (const c of candidates) {
    if (
      c.length >= 3 &&
      (SET.nouns.has(c) || SET.abstractNouns.has(c) || SET.collectiveNouns.has(c))
    ) {
      return c
    }
  }
  return null
}

function splitCompound(w: string): [string, string] | null {
  if (w.length < 7) return null
  const known = (part: string) =>
    SET.nouns.has(part) ||
    SET.verbs.has(part) ||
    SET.adjectives.has(part) ||
    SET.abstractNouns.has(part)
  for (let i = 3; i <= w.length - 3; i += 1) {
    const left = w.slice(0, i)
    const right = w.slice(i)
    if (known(left) && known(right)) return [left, right]
  }
  return null
}

function initialOf(word: string): string | null {
  const m = word.match(/[a-z]/i)
  return m ? m[0].toLowerCase() : null
}

interface Ctx {
  tokens: Token[]
  i: number
}

function tagWord(ctx: Ctx): Tag[] {
  const { tokens, i } = ctx
  const token = tokens[i]
  const raw = token.text
  const w = stripApostrophe(token.lower)
  const nextToken = tokens[i + 1]
  const next = nextToken?.sentence === token.sentence ? stripApostrophe(nextToken.lower) : ''
  const previous = tokens[i - 1]?.sentence === token.sentence ? stripApostrophe(tokens[i - 1].lower) : ''
  const nextNoun = SET.nouns.has(next) || SET.abstractNouns.has(next) || !!inflectedNounForm(next)
  const nextVerb = SET.verbs.has(next) || SET.auxiliaries.has(next) || SET.modalVerbs.has(next)
  const demonstrativeDeterminer = SET.demonstratives.has(w) && (nextNoun || SET.adjectives.has(next))
  const complementiser = w === 'that' && !demonstrativeDeterminer &&
    (SET.pronouns.has(next) || SET.determiners.has(next))
  const nounContext = SET.determiners.has(previous) && !SET.pronouns.has(previous)
  const verbContext = SET.pronouns.has(previous) || SET.modalVerbs.has(previous) || previous === 'to'
  const monthMay = w === 'may' && isCapitalised(raw) && (SET.prepositions.has(previous) || !nextVerb)
  const marginalMainVerb = (w === 'need' || w === 'dare') && !nextVerb
  const participle = (word: string) => !!word && (word.endsWith('ing') || word.endsWith('ed') || ['gone', 'seen', 'been', 'done', 'known', 'taken', 'written', 'found', 'made', 'given', 'told', 'built', 'left', 'read', 'bought', 'brought'].includes(word))
  const auxiliaryComplement = next === 'not' ? stripApostrophe(tokens[i + 2]?.lower ?? '') : next
  const tags: Tag[] = []
  const push = (feature: string, confidence: Confidence, note?: string) => {
    if (!tags.some((t) => t.feature === feature)) tags.push({ feature, confidence, note })
  }

  /* ---------------------------------------------------------------- contract */
  if (APOSTROPHE.test(raw)) {
    const isContraction = SET.contractions.has(w)
    if (isContraction) {
      push('contraction', 'high', 'A shortened grammatical form, with an apostrophe marking omitted letters.')
    }
    const tail = w.slice(w.indexOf("'") + 1)
    // Only read the clitic as an auxiliary when the whole word is a genuine
    // contraction; otherwise a possessive like "crowd's" would look like "crowd is".
    if (isContraction && SET.auxiliaries.has(tail)) {
      push('verb-auxiliary', 'high', `The clitic '${tail} contracts an auxiliary verb.`)
    }
    const base = w.slice(0, w.indexOf("'"))
    const modal = CONTRACTED_MODALS[base] ?? base
    if (isContraction && (SET.modalVerbs.has(modal) || tail === 'll')) {
      push('verb-modal', 'medium', `Contracts the modal verb "${modal}".`)
    }
  }

  /* ------------------------------------------------------------------ closed */
  if (SET.interjections.has(w)) {
    push('interjection', 'high', 'A grammatically independent word carrying feeling.')
  }
  if (SET.modalVerbs.has(w) && !marginalMainVerb && !monthMay && !(w === 'can' && nounContext)) {
    push(
      'verb-modal',
      'high',
      'A modal verb. Decide whether it expresses obligation (deontic) or likelihood (epistemic).',
    )
    push('verb-auxiliary', 'medium')
  }
  if (SET.auxiliaries.has(w) && !SET.modalVerbs.has(w)) {
    if (participle(auxiliaryComplement) || (['do', 'does', 'did'].includes(w) && SET.verbs.has(auxiliaryComplement))) {
      push('verb-auxiliary', 'medium', 'Supports another verb to express tense, aspect, voice or a question.')
    } else if (['be', 'am', 'is', 'are', 'was', 'were', 'been', 'being'].includes(w) && (SET.adjectives.has(next) || SET.determiners.has(next) || SET.prepositions.has(next))) {
      push('verb-lexical', 'medium', 'Main verb: links the subject to a description, identity or location.')
    } else {
      push('verb-auxiliary', 'low', 'This form can be an auxiliary or a main verb. Check whether it supports another verb in this clause.')
    }
  }

  if (w === 'the') {
    push('article-definite', 'high', 'The only definite article in English.')
    push('determiner', 'high')
  } else if (w === 'a' || w === 'an') {
    push('article-indefinite', 'high', 'Introduces a referent not yet identified.')
    push('determiner', 'high')
  } else if (SET.determiners.has(w) && (!SET.demonstratives.has(w) || demonstrativeDeterminer)) {
    push('determiner', 'high', 'Introduces and limits a noun phrase.')
  }

  if (SET.demonstratives.has(w) && !demonstrativeDeterminer && !complementiser) {
    push('pronoun-demonstrative', 'high', 'A pointing word: it locates its referent.')
  }
  if (SET.pronouns.has(w) && !demonstrativeDeterminer && !complementiser) {
    push('pronoun', 'high', 'Stands in for a noun phrase; often a cohesion link.')
  }

  if (SET.coordinators.has(w)) {
    push('conjunction-coordinating', 'high', 'Joins two items of equal grammatical rank.')
  }
  if (SET.subordinators.has(w) && (!SET.demonstratives.has(w) || complementiser)) {
    push('conjunction-subordinating', 'medium', 'Introduces a dependent clause; check the following subject and verb.')
  }
  if (SET.prepositions.has(w) && !(w === 'to' && (SET.verbs.has(next) || SET.auxiliaries.has(next)))) {
    push('preposition', SET.subordinators.has(w) ? 'low' : 'high', 'Shows a relationship of place, time or manner.')
  }

  /* --------------------------------------------------------------- modifiers */
  if (SET.degreeAdverbs.has(w)) {
    push('adverb-degree', 'high', 'Scales the word it modifies — an intensifier or a hedge.')
    push('adverb', 'medium')
  } else if (SET.adverbs.has(w) && !SET.nouns.has(w) && !SET.adjectives.has(w) && !SET.collectiveNouns.has(w) && !SET.abstractNouns.has(w)) {
    push('adverb', 'high', 'Modifies a verb, adjective or another adverb.')
  } else if (w.endsWith('ly') && w.length > 4 && !SET.adjectives.has(w) && !SET.nouns.has(w) && !SET.collectiveNouns.has(w) && !SET.abstractNouns.has(w)) {
    push('adverb', 'medium', 'The -ly suffix usually builds an adverb from an adjective.')
  }

  if (SET.irregularComparatives.has(w)) {
    push('adjective-comparative', 'high', 'An irregular comparative.')
  }
  if (SET.irregularSuperlatives.has(w)) {
    push('adjective-superlative', 'high', 'An irregular superlative.')
  }
  if (SET.adjectives.has(w)) {
    push('adjective', 'high', 'Describes or classifies a noun.')
  } else {
    if (w.endsWith('er') && SET.adjectives.has(w.slice(0, -2))) {
      push('adjective-comparative', 'medium', 'The -er ending compares two things.')
    }
    if (w.endsWith('est') && SET.adjectives.has(w.slice(0, -3))) {
      push('adjective-superlative', 'medium', 'The -est ending places one thing above the rest.')
    }
  }

  /* ------------------------------------------------------------------- nouns */
  if (SET.collectiveNouns.has(w)) {
    push('noun-collective', 'high', 'Singular in form, but names a group.')
    push('noun-common', 'medium')
  }
  if ((SET.abstractNouns.has(w) || ABSTRACT_HINTS.has(w)) && !(w === 'need' && verbContext)) {
    push('noun-abstract', 'high', 'Names a concept, quality or state rather than a physical thing.')
    push('noun-common', 'medium')
  }
  const nounBase = inflectedNounForm(w)
  if ((SET.nouns.has(w) || nounBase) && !(SET.verbs.has(w) && verbContext)) {
    const base = nounBase ?? w
    push('noun-common', 'high', 'A general name for a class of thing.')
    if (!SET.abstractNouns.has(base)) {
      push('noun-concrete', 'medium', 'Something you could perceive with the senses.')
    }
  }

  if (w === 'can' && nounContext) push('noun-common', 'medium', 'After a determiner, can names a container.')
  if (marginalMainVerb && verbContext) push('verb-lexical', 'medium', 'Here this is a main verb taking a complement, rather than a core modal auxiliary.')

  /* ------------------------------------------------------------------- verbs */
  const verbBase = inflectedVerbForm(w)
  const afterDeterminer =
    i > 0 &&
    (SET.determiners.has(stripApostrophe(tokens[i - 1].lower)) ||
      SET.adjectives.has(stripApostrophe(tokens[i - 1].lower)))
  if (SET.verbs.has(w) && !nounContext && !SET.modalVerbs.has(w) && !SET.auxiliaries.has(w)) {
    push(
      'verb-lexical',
      afterDeterminer ? 'low' : 'high',
      afterDeterminer
        ? 'A common verb — but a determiner or adjective before it suggests this instance is a noun.'
        : 'Carries the main meaning of the clause.',
    )
  } else if (verbBase) {
    push('verb-lexical', 'medium', `An inflected form of "${verbBase}".`)
  } else if (
    (w.endsWith('ing') || w.endsWith('ed')) &&
    w.length >= 5 &&
    !SET.nouns.has(w) &&
    !SET.adjectives.has(w)
  ) {
    push(
      'verb-lexical',
      'low',
      `Ends in -${w.endsWith('ing') ? 'ing' : 'ed'}, so it is probably a verb form of an unfamiliar root.`,
    )
  }

  /* --------------------------------------------------------- proper noun rule */
  const knownProper = PROPER_HINTS.has(w) && isCapitalised(raw) && !SET.pronouns.has(w) && !SET.adjectives.has(w)
  const looksProper =
    w.length > 1 &&
    isCapitalised(raw) &&
    !APOSTROPHE.test(raw) &&
    !SET.contractions.has(w) &&
    !SET.pronouns.has(w) &&
    !SET.interjections.has(w) &&
    !SET.nouns.has(w) &&
    !SET.adjectives.has(w) &&
    !SET.adverbs.has(w) &&
    !SET.verbs.has(w) &&
    !SET.determiners.has(w)
  if (knownProper) {
    push('noun-proper', 'high', 'The name of one specific person, place, brand or event.')
  } else if (looksProper) {
    const sentenceInitial = i === 0 || tokens[i - 1].sentence !== token.sentence
    push(
      'noun-proper',
      sentenceInitial ? 'low' : 'medium',
      sentenceInitial
        ? 'Capitalised, but at the start of a sentence — check whether it is really a name.'
        : 'Capitalised mid-sentence, so it is probably a name.',
    )
  }

  /* -------------------------------------------------------------- morphology */
  if (raw.length >= 4) {
    for (const prefix of PREFIXES) {
      if (w.startsWith(prefix) && w.length - prefix.length >= 3) {
        const rest = w.slice(prefix.length)
        if (SET.nouns.has(rest) || SET.verbs.has(rest) || SET.adjectives.has(rest) || SET.adverbs.has(rest)) {
          push('prefix', 'high', `The prefix "${prefix}-" attaches to the root "${rest}".`)
          break
        }
      }
    }
  }
  if (raw.length >= 5) {
    for (const suffix of SUFFIXES) {
      if (w.endsWith(suffix) && w.length - suffix.length >= 3) {
        const stem = w.slice(0, -suffix.length)
        const candidates = [stem, stem + 'e', stem.replace(/i$/, 'y'), stem.replace(/(.)\1$/, '$1')]
        const knownStem = candidates.some(root => SET.nouns.has(root) || SET.abstractNouns.has(root) || SET.verbs.has(root) || SET.adjectives.has(root))
        if (!knownStem) continue
        push('suffix', 'medium', `Possible suffix “-${suffix}”; the remaining stem matches a known word. Check the formation and meaning.`)
        if (
          (suffix === 'tion' || suffix === 'sion' || suffix === 'ment' || suffix === 'ness' ||
            suffix === 'ity' || suffix === 'ance' || suffix === 'ence' || suffix === 'ship' ||
            suffix === 'hood' || suffix === 'dom' || suffix === 'ism') &&
          !SET.abstractNouns.has(w)
        ) {
          push(
            'noun-abstract',
            'medium',
            `The "-${suffix}" suffix is a reliable maker of abstract nouns.`,
          )
        }
        break
      }
    }
  }
  if (tags.length <= 3) {
    const parts = splitCompound(w)
    if (parts) {
      push('compounding', 'medium', `Looks like a compound of "${parts[0]}" + "${parts[1]}".`)
    }
  }

  /* ---------------------------------------------- capitalised abbreviations */
  if (/^[A-Z]{2,}$/.test(raw) && !knownProper) {
    if (SET.acronyms.has(w)) {
      push('acronym', 'high', 'Pronounced as a word rather than letter by letter.')
    } else if (SET.initialisms.has(w)) {
      push('initialism', 'high', 'Read out letter by letter.')
    } else if (/[aeiou]/i.test(raw)) {
      push('acronym', 'low', 'All capitals with vowels — possibly pronounced as a word.')
    } else {
      push('initialism', 'low', 'All capitals with no vowels — probably read letter by letter.')
    }
    push('noun-proper', 'medium')
  }

  /* ------------------------------------------------------------------- lexis */
  if (SET.slang.has(w)) push('slang', 'medium', 'Very informal, in-group vocabulary.')
  if (SET.colloquialisms.has(w)) push('colloquialism', 'medium', 'Everyday, conversational wording.')
  if (SET.jargon.has(w)) {
    push(
      'jargon',
      'low',
      'Specialised vocabulary of a professional field — check the sense here, since many terms double as ordinary words.',
    )
  }
  if (SET.euphemisms.has(w)) push('euphemism', 'high', 'A softened way of naming something uncomfortable.')
  if (SET.dysphemisms.has(w)) push('dysphemism', 'low', 'A deliberately blunt expression. Check the context.')
  if (SET.loaded.has(w)) push('connotation', 'low', 'This word carries strong judgement.')
  if (SET.taboo.has(w)) push('taboo-language', 'medium', 'Restricted language — its force depends on the audience.')
  if (SET.australian.has(w)) push('australian-english', 'high', 'A distinctively Australian word or form.')
  if (SET.nonStandard.has(w)) push('non-standard', 'medium', 'Not part of the standard variety.')
  if (SET.clippings.has(w)) push('shortening', 'high', 'A shortened form of a longer word.')
  if (SET.neologisms.has(w)) push('neologism', 'high', 'A recent coinage.')
  if (SET.onomatopoeia.has(w)) push('onomatopoeia', 'high', 'The word imitates the sound it names.')
  if (SET.discourseMarkers.has(w)) {
    push('discourse-marker', 'high', 'Organises the text or manages the conversation.')
  }

  /* -------------------------------------------------------- phrasal verb rule */
  if ((SET.verbs.has(w) || verbBase) && PARTICLES.has(next)) {
    push('verb-phrasal', 'low', `"${w} ${next}" may be a phrasal verb — check the meaning is idiomatic.`)
  }

  /* ---------------------------------------------------------- anaphoric hook */
  if (SET.pronouns.has(w) && token.sentence > 0) {
    push('anaphora', 'low', 'A pronoun in a later sentence points back to an earlier referent.')
  }

  return tags
}


export function analyse(text: string, options: TokenizeOptions = {}): Analysed {
  const tok = tokenize(text, { transcript: options.transcript ?? looksLikeTranscript(text) })
  const { tokens } = tok
  const tags = new Map<number, Tag[]>()
  const groups: FeatureGroup[] = []
  const consumed = new Set<number>()

  /* ------------------------------------------------------ multi-word phrases */
  for (let i = 0; i < tokens.length; i += 1) {
    if (consumed.has(i)) continue
    const candidates = PHRASES_BY_FIRST.get(tokens[i].lower)
    if (!candidates) continue
    for (const entry of candidates) {
      const words = entry.phrase.split(/\s+/)
      if (i + words.length > tokens.length) continue
      let ok = true
      for (let k = 0; k < words.length; k += 1) {
        if (tokens[i + k].sentence !== tokens[i].sentence || (k > 0 && /[^\s]/.test(text.slice(tokens[i + k - 1].end, tokens[i + k].start))) || stripApostrophe(tokens[i + k].lower) !== stripApostrophe(words[k])) {
          ok = false
          break
        }
      }
      if (!ok) continue
      const span: number[] = []
      for (let k = 0; k < words.length; k += 1) span.push(i + k)
      for (const t of entry.tags) {
        groups.push({
          feature: t.feature,
          confidence: t.confidence,
          tokens: span,
          note: `"${entry.phrase}" is a recognised ${t.feature.replace(/-/g, ' ')}.`,
        })
      }
      for (const s of span) consumed.add(s)
      i += words.length - 1
      break
    }
  }

  /* ------------------------------------------------------------ single words */
  for (let i = 0; i < tokens.length; i += 1) {
    const found = tagWord({ tokens, i })
    if (found.length) tags.set(i, found)
  }

  /* --------------------------------------------------- prepositional phrases */
  for (let i = 0; i < tokens.length; i += 1) {
    const isPrep = tags.get(i)?.some((tag) => tag.feature === 'preposition')
    if (!isPrep) continue
    const span = [i]
    for (let k = i + 1; k < tokens.length && span.length < 6; k += 1) {
      // A phrase cannot cross a sentence boundary.
      if (tokens[k].sentence !== tokens[i].sentence) break
      const nw = stripApostrophe(tokens[k].lower)
      if (SET.verbs.has(nw) && !SET.auxiliaries.has(nw)) break
      if (SET.coordinators.has(nw) || SET.subordinators.has(nw)) break
      span.push(k)
      if (SET.determiners.has(nw) || SET.adjectives.has(nw) || SET.nouns.has(nw)) continue
      if (SET.prepositions.has(nw)) continue
      break
    }
    if (span.length >= 2) {
      groups.push({
        feature: 'prepositional-phrase',
        confidence: 'medium',
        tokens: span,
        note: 'A preposition plus its noun phrase, doing the work of an adverb or an adjective.',
      })
    }
  }

  /* -------------------------------------------------------------- sound runs */
  const bySentence = new Map<number, Token[]>()
  for (const t of tokens) {
    const list = bySentence.get(t.sentence) ?? []
    list.push(t)
    bySentence.set(t.sentence, list)
  }
  for (const sentence of bySentence.values()) {
    let run: Token[] = []
    const flush = () => {
      if (run.length >= 3) {
        groups.push({
          feature: 'alliteration',
          confidence: 'low',
          tokens: run.map((t) => t.index),
          note: `${run.length} nearby words begin with the same letter. Check their pronunciation before identifying alliteration.`,
        })
      }
      run = []
    }
    for (const t of sentence) {
      const w = stripApostrophe(t.lower)
      if (STOP_FOR_SOUND.has(w) || w.length < 3) {
        flush()
        continue
      }
      const first = initialOf(w)
      if (!first) {
        flush()
        continue
      }
      if (run.length === 0 || initialOf(stripApostrophe(run[run.length - 1].lower)) === first) {
        run.push(t)
      } else {
        flush()
        run.push(t)
      }
    }
    flush()
  }

  /* ------------------------------------------------------------ aggregation */
  const featureTokens = new Map<string, number[]>()
  const addFeature = (feature: string, token: number) => {
    const list = featureTokens.get(feature) ?? []
    if (!list.includes(token)) list.push(token)
    featureTokens.set(feature, list)
  }
  for (const [index, list] of tags) {
    for (const tag of list) addFeature(tag.feature, index)
  }
  for (const g of groups) {
    for (const t of g.tokens) addFeature(g.feature, t)
  }
  for (const list of featureTokens.values()) list.sort((a, b) => a - b)

  return { tok, tags, groups, featureTokens }
}

/** Highest-confidence tag for a token, useful for the single-label legend. */
export function bestTag(list: Tag[] | undefined): Tag | undefined {
  if (!list || list.length === 0) return undefined
  const rank: Record<Confidence, number> = { high: 0, medium: 1, low: 2 }
  return [...list].sort((a, b) => rank[a.confidence] - rank[b.confidence])[0]
}
