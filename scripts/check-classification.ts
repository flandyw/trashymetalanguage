/** Regression cases for context-sensitive classifications and annotation alignment. */
import { strict as assert } from 'node:assert'
import { analyse } from '../src/lib/tagger'
import { prepare } from '../src/lib/resolve'
import { ALL_PASSAGES } from '../src/data/passages'
import { applyScore, emptyProfile } from '../src/lib/game'

function tags(text: string, word: string, occurrence = 0) {
  const result = analyse(text)
  const token = result.tok.tokens.filter(t => t.text === word)[occurrence]
  assert.ok(token, `Missing token ${word}`)
  return (result.tags.get(token.index) ?? []).map(t => t.feature)
}
assert.ok(tags('I read books.', 'I').includes('pronoun'))
assert.ok(!tags('I read books.', 'I').includes('noun-proper'))
assert.ok(tags('This book is useful.', 'This').includes('determiner'))
assert.ok(!tags('This book is useful.', 'This').includes('pronoun-demonstrative'))
assert.ok(tags('This is useful.', 'This').includes('pronoun-demonstrative'))
assert.ok(!tags('This is useful.', 'This').includes('determiner'))
assert.ok(tags('I know that she left.', 'that').includes('conjunction-subordinating'))
assert.ok(!tags('I know that she left.', 'that').includes('determiner'))
assert.ok(tags('They need three people.', 'need').includes('verb-lexical'))
assert.ok(!tags('They need three people.', 'need').includes('verb-modal'))
assert.ok(tags('I can open the can.', 'can', 0).includes('verb-modal'))
assert.ok(tags('I can open the can.', 'can', 1).includes('noun-common'))
assert.ok(!tags('I can open the can.', 'can', 1).includes('verb-modal'))
assert.ok(!tags('The family is friendly.', 'family').includes('adverb'))
assert.ok(!tags('The family is friendly.', 'family').includes('suffix'))
assert.ok(!tags('The family is friendly.', 'friendly').includes('adverb'))
assert.ok(tags('She may travel in May.', 'May').includes('noun-proper'))
assert.ok(!tags('She may travel in May.', 'May').includes('verb-modal'))
assert.ok(!tags('I want to read.', 'to').includes('preposition'))
assert.ok(tags('She is happy.', 'is').includes('verb-lexical'))
assert.ok(tags('She is working.', 'is').includes('verb-auxiliary'))
assert.ok(!analyse('in. spite of rain').groups.some(g => g.feature === 'preposition-complex'))
for (const passage of ALL_PASSAGES) {
  const prepared = prepare(passage)
  assert.deepEqual(prepared.problems, [], passage.id)
  assert.deepEqual(analyse(passage.text, {transcript: passage.transcript}).tok.tokens, prepared.tok.tokens, `${passage.id}: token alignment`)
}
const prior = {...emptyProfile(), featureStats: {adjective: {found: 1, missed: 0, xp: 5}}}
const scored = applyScore(prior, {xp: 5, coins: 0, label: 'Found'}, 'adjective', 'hit')
assert.equal(prior.featureStats.adjective.found, 1, 'Scoring must not mutate previous progress')
assert.equal(scored.profile.featureStats.adjective.found, 2)
console.log(`Classification regressions and ${ALL_PASSAGES.length} answer keys passed.`)
