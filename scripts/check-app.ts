/**
 * End-to-end logic harness.
 *
 *   bun scripts/check-app.ts
 *
 * Plays every hunt in the app through the real modules: the same target
 * picker, the same resolver and the same scoring code the UI calls. Exits
 * non-zero on the first failure.
 */

import { ALL_PASSAGES, BANKS } from '../src/data/passages/index'
import { analyse } from '../src/lib/tagger'
import { HUNT_EXCLUDED, feature } from '../src/lib/taxonomy'
import { tokenize } from '../src/lib/tokenize'
import { prepare } from '../src/lib/resolve'
import { huntCandidates, makeHunt, nextPassageId, occurrenceFor } from '../src/lib/hunt'
import { buildQuestions } from '../src/lib/quiz'
import {
  BADGES,
  MASTERY_HITS,
  RANKS,
  accuracy,
  applyScore,
  emptyProfile,
  isMastered,
  masteryPercent,
  newlyEarned,
  nextRank,
  rankFor,
  rankProgress,
  recentActivity,
  scoreChallengeComplete,
  scoreHit,
  scoreQuizCorrect,
  type Profile,
} from '../src/lib/game'

let failures = 0
const fail = (msg: string) => {
  failures += 1
  console.log('  ✗ ' + msg)
}
const ok = (msg: string) => console.log('  ✓ ' + msg)

/* ---------------------------------------------- 1. tokeniser invariants */

console.log('\n1. Tokeniser round-trip on every passage')
{
  let checked = 0
  for (const p of ALL_PASSAGES) {
    const tok = tokenize(p.text)
    const rebuilt = tok.segments
      .map((s) => (s.kind === 'text' ? s.value : tok.tokens[s.token].text))
      .join('')
    if (rebuilt !== p.text) {
      fail(`${p.id}: rendering the segments does not reproduce the text`)
    }
    // Every token must be reachable from exactly one word segment.
    const seen = new Set<number>()
    for (const s of tok.segments) if (s.kind === 'word') seen.add(s.token)
    if (seen.size !== tok.tokens.length) {
      fail(`${p.id}: ${seen.size} of ${tok.tokens.length} tokens have a segment`)
    }
    for (const t of tok.tokens) {
      if (t.start >= t.end) fail(`${p.id}: token "${t.text}" has an empty span`)
      if (p.text.slice(t.start, t.end) !== t.text) {
        fail(`${p.id}: token "${t.text}" offsets do not slice back to the word`)
      }
    }
    checked += 1
  }
  if (failures === 0) ok(`${checked} passages: segments rebuild the text, token offsets exact`)
}

/* ------------------------------------- 2. every hunt is winnable, by clicking */

console.log('\n2. Simulated hunts across all passages and every gold feature')
{
  const base = emptyProfile()
  let hunts = 0
  let clicks = 0
  let misresolution = 0
  let emptyTargets = 0
  let excludedLeaks = 0

  for (const p of ALL_PASSAGES) {
    const prepared = prepare(p)
    const tokenCount = tokenize(p.text).tokens.length

    // The picker must never hand back a target with no occurrences.
    const picked = makeHunt(p, base)
    if (picked.occurrences.length === 0) {
      fail(`${p.id}: picker chose "${picked.feature}" with zero occurrences`)
    }
    if (!feature(picked.feature)) fail(`${p.id}: picker chose unknown feature id`)

    for (const candidate of huntCandidates(p)) {
      const hunt = makeHunt(p, base, candidate.id)
      if (hunt.feature !== candidate.id) {
        fail(`${p.id}: asked for "${candidate.id}" but got "${hunt.feature}"`)
      }
      // Simulate the learner clicking every token in the text, one by one: the
      // hits must complete the hunt and must be the only tokens that count.
      const found = new Set<number>()
      for (let token = 0; token < tokenCount; token += 1) {
        clicks += 1
        const occ = occurrenceFor(hunt, token)
        if (occ === -1) {
          // A miss. Confirm it really is outside the answer set.
          const inAnyOccurrence = hunt.occurrences.some((o) => o.tokens.includes(token))
          if (inAnyOccurrence) misresolution += 1
          continue
        }
        if (hunt.occurrences[occ].tokens.length === 0) misresolution += 1
        found.add(occ)
      }
      if (found.size !== hunt.occurrences.length) {
        fail(
          `${p.id}/${candidate.id}: clicking every token found ${found.size} of ${hunt.occurrences.length} occurrences`,
        )
      }
      hunts += 1
    }

    // Hunt must never target an excluded or unknown feature.
    for (const c of huntCandidates(p)) {
      if (HUNT_EXCLUDED.has(c.id)) excludedLeaks += 1
      if (!feature(c.id)) fail(`${p.id}: candidate "${c.id}" is not a real feature`)
    }

    // Sanity: gold tokens must all be inside the passage.
    for (const g of prepared.gold) {
      if (g.occurrences.length === 0) emptyTargets += 1
      for (const occ of g.occurrences) {
        if (occ.tokens.length === 0) {
          fail(`${p.id}/${g.feature}: an occurrence covers no tokens`)
        }
      }
    }
  }

  if (misresolution) fail(`${misresolution} token/occurrence mismatches`)
  if (emptyTargets) fail(`${emptyTargets} gold features resolved to nothing`)
  if (excludedLeaks) fail(`${excludedLeaks} excluded features leaked into hunt candidates`)
  if (failures === 0) {
    ok(`${hunts} hunts across ${ALL_PASSAGES.length} passages: all winnable by clicking`)
    ok(`${clicks} simulated clicks classified consistently`)
  }
}

/* -------------------------------------------------- 3. quiz answer integrity */

console.log('\n3. Every quiz question has one correct, reachable answer')
{
  let questions = 0
  let passages = 0
  for (const p of ALL_PASSAGES) {
    const built = buildQuestions(p)
    if (built.length < 3) fail(`${p.id}: only ${built.length} questions`)
    for (const q of built) {
      questions += 1
      if (q.options.length < 2) fail(`${p.id}: a question has ${q.options.length} options`)
      if (q.answer < 0 || q.answer >= q.options.length) {
        fail(`${p.id}: answer index ${q.answer} out of range`)
      }
      if (new Set(q.options.map((o) => o.trim())).size !== q.options.length) {
        fail(`${p.id}: duplicate options in "${q.prompt}"`)
      }
      if (q.options.some((o) => !o || !o.trim())) fail(`${p.id}: blank option in "${q.prompt}"`)
      if (!q.explain || q.explain.length < 15) fail(`${p.id}: thin explanation for "${q.prompt}"`)
      // The auto-generated function question must point at the stated function.
      if (q.kind === 'function') {
        const want = feature(p.dominantFunction)?.label
        if (q.options[q.answer] !== want) {
          fail(`${p.id}: function answer is "${q.options[q.answer]}", expected "${want}"`)
        }
      }
      if (q.kind === 'register') {
        const map: Record<string, string> = {
          'formal-register': 'Formal',
          'informal-register': 'Informal',
          'neutral-register': 'Neutral',
        }
        if (q.options[q.answer] !== map[p.register]) {
          fail(`${p.id}: register answer is "${q.options[q.answer]}"`)
        }
      }
    }
    passages += 1
  }
  if (failures === 0) ok(`${questions} questions across ${passages} passages are well formed`)
}

/* ------------------------------------------------------ 4. the tagger runs */

console.log('\n4. Auto-tagger over every passage and every gold span')
{
  let tagged = 0
  let tags = 0
  const unknown = new Set<string>()
  const invoked = new Set<string>()
  for (const p of ALL_PASSAGES) {
    const a = analyse(p.text)
    tagged += 1
    for (const list of a.tags.values()) {
      for (const t of list) {
        tags += 1
        invoked.add(t.feature)
        if (!feature(t.feature)) unknown.add(t.feature)
        if (!t.confidence) unknown.add(`${t.feature}:no-confidence`)
      }
    }
    for (const g of a.groups) {
      invoked.add(g.feature)
      if (!feature(g.feature)) unknown.add(g.feature)
      if (g.tokens.length === 0) unknown.add(`${g.feature}:empty-span`)
    }
    for (const label of p.gold) invoked.add(label.feature)
    if (a.tok.tokens.length !== tokenize(p.text).tokens.length) {
      fail(`${p.id}: tagger tokenised a different number of tokens`)
    }
  }
  // Also exercise the free-text path with awkward input.
  for (const weird of [
    '',
    '   ',
    'a',
    '!!!',
    "it's it's it's",
    'UPPERCASE ONLY',
    'emoji 😀 here',
    'hyph-en-ated word',
    'don’t use curly ’ quotes',
    '1 2 3 456',
    'e.g. i.e. etc.',
  ]) {
    const a = analyse(weird)
    for (const list of a.tags.values()) {
      for (const t of list) if (!feature(t.feature)) unknown.add(t.feature)
    }
    for (const g of a.groups) if (!feature(g.feature)) unknown.add(g.feature)
  }

  if (unknown.size) fail(`annotator emitted unknown feature ids: ${[...unknown].join(', ')}`)
  const textFeatures = [...invoked].filter((id) => feature(id)?.scope === 'text')
  if (textFeatures.length) {
    fail(`annotator emitted passage-scope features on words: ${textFeatures.join(', ')}`)
  }
  if (failures === 0) ok(`${tagged} passages annotated, ${tags} tag instances, all ids valid`)
}

/* --------------------------------------------------------- 5. game engine */

console.log('\n5. Scoring, ranks, badges and mastery')
{
  let profile: Profile = emptyProfile()
  const start = profile.xp

  // A perfect run of hunts should climb ranks and unlock badges.
  let rankUps = 0
  for (let i = 0; i < 40; i += 1) {
    const difficulty = (i % 5) + 1
    profile = applyScore(profile, scoreHit(difficulty, i, false), 'preposition', 'hit').profile
    profile = {
      ...profile,
      combo: i,
      comboBest: Math.max(profile.comboBest, i),
      totalRight: profile.totalRight + 1,
    }
    const applied = applyScore(
      profile,
      scoreChallengeComplete(difficulty, true, 0),
      undefined,
      undefined,
    )
    profile = applied.profile
    if (applied.rankedUp) rankUps += 1
  }
  profile = {
    ...profile,
    huntsCompleted: 40,
    perfectHunts: 40,
  }
  const final = applyScore(profile, scoreQuizCorrect(3, 4), undefined, undefined).profile

  if (final.xp <= start) fail('XP did not increase across a full play session')
  if (final.comboBest < 39) fail(`combo tracking lost the best value (${final.comboBest})`)
  if (rankUps < 3) fail(`only ${rankUps} rank-ups over a full session`)
  if (rankFor(final.xp).minXp > final.xp) fail('rankFor returned a rank above the current XP')
  if (nextRank(final.xp) && nextRank(final.xp)!.minXp <= final.xp) {
    fail('nextRank returned a rank already achieved')
  }
  if (rankProgress(final.xp) < 0 || rankProgress(final.xp) > 1) {
    fail(`rankProgress out of range: ${rankProgress(final.xp)}`)
  }
  if (accuracy(final) <= 0.9) fail(`accuracy should be near perfect, got ${accuracy(final)}`)
  if (!isMastered(final.featureStats.preposition)) fail('preposition should be mastered')
  if (masteryPercent(final.featureStats.preposition) !== 100) {
    fail(`mastery should be 100%, got ${masteryPercent(final.featureStats.preposition)}`)
  }
  if (!final.mastered.includes('preposition')) fail('mastered list missing preposition')
  const earned = BADGES.filter((b) => final.badges.includes(b.id))
  if (earned.length < 6) fail(`only ${earned.length} badges earned on a full play session`)
  const reEarned = newlyEarned(final)
  if (reEarned.length) fail(`badges re-fired as newly earned: ${reEarned.map((b) => b.id).join(', ')}`)
  if (recentActivity(final, 21).length !== 21) fail('activity strip should be 21 days')
  if (final.dailyXp[Object.keys(final.dailyXp)[0]] <= 0) fail('daily XP was not recorded')

  // A miss must not lose XP, and a hint must be a small cost with a floor at 0.
  const missBefore = final.xp
  const afterMiss = applyScore(final, { xp: 0, coins: 0, label: 'miss' }, 'idiom', 'miss').profile
  if (afterMiss.xp !== missBefore) fail('a miss changed the XP total')
  if (afterMiss.featureStats.idiom?.missed !== 1) fail('a miss was not recorded on the feature')
  // Hints cost XP but the total must never go negative.
  let floored: Profile = { ...emptyProfile(), xp: 20 }
  for (let i = 0; i < 50; i += 1) {
    floored = applyScore(floored, { xp: -4, coins: 0, label: 'hint' }, undefined, undefined).profile
  }
  if (floored.xp !== 0) fail(`XP floor broken: 20 XP minus 50 hints landed at ${floored.xp}`)
  if (profile.xp - 4 * 5 !== applyScore(profile, { xp: -20, coins: 0, label: 'hints' }, undefined, undefined).profile.xp) {
    fail('a hint penalty was applied inconsistently')
  }

  // Ranks are ordered and monotonic.
  for (let i = 1; i < RANKS.length; i += 1) {
    if (RANKS[i].minXp <= RANKS[i - 1].minXp) fail('RANKS are not in ascending XP order')
  }
  if (MASTERY_HITS < 1) fail('MASTERY_HITS must be positive')

  if (failures === 0) {
    ok(`${final.xp} XP, rank "${rankFor(final.xp).title}", ${earned.length} badges, XP floor held at 0`)
  }
}

/* ------------------------------------------------- 6. navigation integrity */

console.log('\n6. Navigation')
{
  const ids = new Set(ALL_PASSAGES.map((p) => p.id))
  let cursor = ALL_PASSAGES[0].id
  const visited = new Set<string>()
  for (let i = 0; i < ALL_PASSAGES.length + 2; i += 1) {
    cursor = nextPassageId(cursor)
    if (!ids.has(cursor)) fail(`nextPassageId returned unknown id "${cursor}"`)
    visited.add(cursor)
  }
  if (visited.size !== ALL_PASSAGES.length) {
    fail(`forward paging visited ${visited.size} of ${ALL_PASSAGES.length} passages`)
  }
  let back = nextPassageId(ALL_PASSAGES[0].id, -1)
  if (back !== ALL_PASSAGES[ALL_PASSAGES.length - 1].id) fail('backward paging does not wrap')

  const bankIds = new Set(BANKS.map((b) => b.id))
  if (bankIds.size !== BANKS.length) fail('duplicate bank ids')
  const bankLabels = new Set(BANKS.map((b) => b.label))
  if (bankLabels.size < BANKS.length - 2) fail('banks are suspiciously similarly named')

  if (failures === 0) ok(`${ALL_PASSAGES.length} passages page in both directions and wrap`)
}

console.log(
  failures === 0
    ? '\nALL CHECKS PASSED\n'
    : `\n${failures} CHECK${failures === 1 ? '' : 'S'} FAILED\n`,
)
process.exit(failures === 0 ? 0 : 1)
