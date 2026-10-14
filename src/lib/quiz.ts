/**
 * Builds the question set for a passage: two auto-generated questions about
 * the text as a whole, plus the hand-written curated ones.
 *
 * The shuffle is seeded from the passage so the options do not jump around
 * between renders.
 */

import type { Passage } from './passages'
import { FUNCTION_IDS, REGISTER_LABELS, feature } from './taxonomy'

export interface BuiltQuestion {
  prompt: string
  options: string[]
  answer: number
  explain: string
  kind: 'curated' | 'function' | 'register'
}

function shuffleSeeded<T>(items: T[], seed: number): T[] {
  const out = [...items]
  let s = seed || 1
  for (let i = out.length - 1; i > 0; i -= 1) {
    s = (s * 1103515245 + 12345) % 2147483648
    const j = s % (i + 1)
    const tmp = out[i]
    out[i] = out[j]
    out[j] = tmp
  }
  return out
}

function seedFrom(text: string): number {
  let h = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h) % 2147483647
}

export function buildQuestions(passage: Passage): BuiltQuestion[] {
  const seed = seedFrom(passage.id + passage.text)

  const funcOptions = shuffleSeeded([...FUNCTION_IDS], seed)
  const funcQuestion: BuiltQuestion = {
    prompt: 'Which function of language dominates this passage?',
    options: funcOptions.map((id) => feature(id)?.label ?? id),
    answer: funcOptions.indexOf(passage.dominantFunction),
    explain: passage.functionNote,
    kind: 'function',
  }

  const registerPool = ['formal-register', 'informal-register', 'neutral-register']
  const regOptions = shuffleSeeded(registerPool, seed + 7)
  const registerQuestion: BuiltQuestion = {
    prompt: 'How would you describe the register of this passage?',
    options: regOptions.map((id) => REGISTER_LABELS[id] ?? id),
    answer: regOptions.indexOf(passage.register),
    explain: passage.registerNote,
    kind: 'register',
  }

  const curated: BuiltQuestion[] = passage.quiz.map((q) => ({
    prompt: q.prompt,
    options: q.options,
    answer: q.answer,
    explain: q.explain,
    kind: 'curated' as const,
  }))

  return [funcQuestion, ...curated, registerQuestion]
}
