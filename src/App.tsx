import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import HeaderBar from './components/HeaderBar'
import HighlightedText, { type TokenState, type Underline } from './components/HighlightedText'
import HuntPanel, { type HuntInfo } from './components/HuntPanel'
import LibraryPanel from './components/LibraryPanel'
import ProgressPanel from './components/ProgressPanel'
import QuizPanel from './components/QuizPanel'
import { buildQuestions } from './lib/quiz'
import WordPopover, { type Anchor } from './components/WordPopover'
import ExplorePanel from './components/ExplorePanel'
import { ALL_PASSAGES, passageById, passagesForFeature } from './data/passages'
import {
  HINT_COST,
  huntCandidates,
  makeHunt,
  nextPassageId,
  occurrenceFor,
  type Hunt,
} from './lib/hunt'
import { REGISTER_LABELS, feature } from './lib/taxonomy'
import { TIER_META, wordCount, type Passage } from './lib/passages'
import { analyse } from './lib/tagger'
import { prepare } from './lib/resolve'
import {
  applyScore,
  masteryPercent,
  scoreChallengeComplete,
  scoreHint,
  scoreHit,
  scoreMiss,
  scoreQuizCorrect,
  scoreQuizWrong,
  type Profile,
} from './lib/game'
import { loadLastPassage, loadProfile, resetProfile, saveLastPassage, saveProfile } from './lib/storage'
import { playBadge, playClick, playHit, playMiss, setSoundEnabled, soundEnabled } from './lib/sound'

type View = 'hunt' | 'explore' | 'quiz' | 'library' | 'progress'

interface Toast {
  id: number
  text: string
  kind: 'xp' | 'badge' | 'rank' | 'info'
}

/* ---------------------------------------------------------------------- app */

export default function App() {
  const [profile, setProfile] = useState<Profile>(() => loadProfile())
  const [view, setView] = useState<View>('hunt')
  const [passageId, setPassageId] = useState<string>(
    () => loadLastPassage() ?? ALL_PASSAGES[0].id,
  )
  const [hunt, setHunt] = useState<Hunt | null>(() => {
    const start =
      passageById(loadLastPassage() ?? ALL_PASSAGES[0].id) ?? ALL_PASSAGES[0]
    return makeHunt(start, loadProfile())
  })
  const [customText, setCustomText] = useState<string | null>(null)
  const [layers, setLayers] = useState<Set<string>>(new Set())
  const [source, setSource] = useState<'auto' | 'gold'>('gold')
  const [selected, setSelected] = useState<{ index: number; anchor: Anchor } | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [sound, setSound] = useState(() => soundEnabled())
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<Map<number, number>>(new Map())
  const [quizScore, setQuizScore] = useState({ correct: 0, answered: 0 })
  const toastId = useRef(0)

  const passage = passageById(passageId) ?? ALL_PASSAGES[0]
  const text = customText ?? passage.text
  const preparedGold = useMemo(() => prepare(passage), [passage])
  const analysed = useMemo(() => analyse(text, { transcript: customText ? undefined : passage.transcript }), [text, customText, passage.transcript])

  useEffect(() => {
    saveProfile(profile)
  }, [profile])
  useEffect(() => {
    saveLastPassage(passageId)
  }, [passageId])
  useEffect(() => {
    setSoundEnabled(sound)
  }, [sound])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [passageId, view])

  const pushToast = useCallback((text: string, kind: Toast['kind'] = 'xp') => {
    toastId.current += 1
    const id = toastId.current
    setToasts((prev) => [...prev.slice(-3), { id, text, kind }])
    window.setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2600)
  }, [])

  const award = useCallback(
    (
      score: ReturnType<typeof scoreHit>,
      featureId?: string,
      outcome?: 'hit' | 'miss',
      updateProgress: (current: Profile) => Profile = (current) => current,
    ) => {
      // Scoring happens outside the state updater so a re-invoked updater can
      // never fire the toasts (or the sound) twice. Exactly one award per event.
      const applied = applyScore(updateProgress(profile), score, featureId, outcome)
      setProfile(applied.profile)
      for (const b of applied.newBadges) {
        pushToast(`${b.icon} ${b.label} — ${b.blurb}`, 'badge')
        playBadge()
      }
      if (applied.rankedUp) pushToast(`Rank up: ${applied.rankedUp.title}`, 'rank')
      if (applied.featureMastered) {
        const f = feature(applied.featureMastered)
        pushToast(`Mastered: ${f?.label ?? applied.featureMastered}`, 'info')
      }
      if (score.xp !== 0) pushToast(`${score.xp > 0 ? '+' : ''}${score.xp} XP · ${score.label}`)
    },
    [profile, pushToast],
  )

  /* ------------------------------------------------------------------- hunt */

  const startHunt = useCallback(
    (target: Passage, profileForPick: Profile, prefer?: string) => {
      const next = makeHunt(target, profileForPick, prefer)
      setHunt(next)
      setSelected(null)
      setLayers(new Set())
      setCustomText(null)
      if (feature(prefer ?? next.feature)) {
        pushToast(`New hunt: ${feature(next.feature)?.label}`, 'info')
      }
    },
    [pushToast],
  )

  /** Switching to Hunt always leaves a live hunt for the current passage. */
  const switchView = useCallback(
    (next: View) => {
      if (next === 'hunt' && !customText) {
        setHunt((h) => (h && h.passageId === passageId ? h : makeHunt(passage, profile)))
      }
      if (next !== 'explore' && customText) setCustomText(null)
      setView(next)
      setSelected(null)
    },
    [customText, passage, passageId, profile],
  )

  const huntOccurrenceFor = useCallback(
    (tokenIndex: number): number => (hunt ? occurrenceFor(hunt, tokenIndex) : -1),
    [hunt],
  )

  const onWordClick = useCallback(
    (tokenIndex: number, rect: DOMRect) => {
      const anchor: Anchor = { x: rect.left, y: rect.bottom, width: rect.width }
      setSelected((prev) => (prev?.index === tokenIndex ? null : { index: tokenIndex, anchor }))
      if (view !== 'hunt' || !hunt || hunt.done || customText) {
        playClick()
        return
      }
      const occIdx = huntOccurrenceFor(tokenIndex)
      if (occIdx !== -1) {
        if (hunt.foundIdx.includes(occIdx)) return
        const foundIdx = [...hunt.foundIdx, occIdx]
        const complete = foundIdx.length === hunt.occurrences.length
        const multiWord = (hunt.occurrences[occIdx]?.tokens.length ?? 1) > 1
        const perfect = complete && hunt.misses === 0 && hunt.hintsUsed === 0
        const hit = scoreHit(passage.difficulty, profile.combo, multiWord)
        // The completion bonus is folded into the same award so the whole click
        // is one atomic score — no stale state, no double counting.
        const bonus = complete
          ? scoreChallengeComplete(passage.difficulty, perfect, hunt.hintsUsed)
          : null
        const total = bonus
          ? { xp: hit.xp + bonus.xp, coins: hit.coins + bonus.coins, label: bonus.label }
          : hit

        playHit(profile.combo + 1)
        award(total, hunt.feature, 'hit', (p) => ({
          ...p,
          combo: p.combo + 1,
          comboBest: Math.max(p.comboBest, p.combo + 1),
          totalRight: p.totalRight + 1,
          huntsCompleted: p.huntsCompleted + (complete ? 1 : 0),
          perfectHunts: p.perfectHunts + (perfect ? 1 : 0),
          passagesMastered:
            complete && !p.passagesMastered.includes(passage.id)
              ? [...p.passagesMastered, passage.id]
              : p.passagesMastered,
        }))
        setHunt({ ...hunt, foundIdx, wrongToken: null, done: complete })
        return
      }

      // A miss — but if the word *is* annotated for something else, say so.
      const other = preparedGold.tokenFeatures.get(tokenIndex) ?? []
      const otherLabel = other.map((id) => feature(id)?.label).filter(Boolean) as string[]
      playMiss()
      award(scoreMiss(), hunt.feature, 'miss', (p) => ({
        ...p,
        combo: 0,
        totalWrong: p.totalWrong + 1,
      }))
      setHunt({ ...hunt, misses: hunt.misses + 1, wrongToken: tokenIndex })
      window.setTimeout(() => {
        setHunt((h) => (h && h.wrongToken === tokenIndex ? { ...h, wrongToken: null } : h))
      }, 700)
      if (otherLabel.length) {
        pushToast(`Not a ${feature(hunt.feature)?.label.toLowerCase()} — the key has this as ${otherLabel.slice(0, 2).join(' / ')}`, 'info')
      } else {
        pushToast('This word is not one of the selected examples. Check the definition and try another.', 'info')
      }
    },
    [
      view,
      hunt,
      customText,
      huntOccurrenceFor,
      profile.combo,
      passage.difficulty,
      passage.id,
      award,
      preparedGold,
      pushToast,
    ],
  )

  /* ------------------------------------------------------------- hunt actions */

  const onHint = useCallback(() => {
    if (!hunt || hunt.done) return
    const remaining = hunt.occurrences
      .map((_, i) => i)
      .filter((i) => !hunt.foundIdx.includes(i) && !hunt.hinted.includes(i))
    if (remaining.length === 0) return
    const pick = remaining[0]
    const tokens = hunt.occurrences[pick].tokens
    setHunt({ ...hunt, hinted: [...hunt.hinted, pick], hintsUsed: hunt.hintsUsed + 1 })
    award(scoreHint(), undefined, undefined, (p) => ({ ...p, hintsUsed: p.hintsUsed + 1 }))
    const words = tokens.map((t) => analysed.tok.tokens[t]?.text).filter(Boolean).join(' ')
    pushToast(`Look near “${words || 'the highlighted stretch'}”`, 'info')
  }, [hunt, award, analysed, pushToast])

  const onRevealAll = useCallback(() => {
    if (!hunt) return
    setHunt({
      ...hunt,
      foundIdx: hunt.occurrences.map((_, i) => i),
      revealed: true,
      done: true,
    })
    pushToast('Answer revealed — no completion bonus this time', 'info')
  }, [hunt, pushToast])

  const onNewTarget = useCallback(() => {
    // Exclude the current target so "different feature" really is different.
    const alternatives = huntCandidates(passage).filter((c) => c.id !== hunt?.feature)
    const prefer = alternatives.length
      ? alternatives[Math.floor(Math.random() * alternatives.length)].id
      : undefined
    startHunt(passage, profile, prefer)
  }, [passage, profile, hunt, startHunt])

  const goToPassage = useCallback(
    (id: string, nextView: View = 'hunt', prefer?: string) => {
      const target = passageById(id)
      if (!target) return
      setPassageId(id)
      setSource('gold')
      setLayers(new Set())
      setSelected(null)
      setShowAnalysis(false)
      setQuizIndex(0)
      setQuizAnswers(new Map())
      setQuizScore({ correct: 0, answered: 0 })
      setCustomText(null)
      setHunt(prefer ? makeHunt(target, profile, prefer) : makeHunt(target, profile))
      setView(nextView)
    },
    [profile],
  )

  const onNextPassage = useCallback(() => {
    goToPassage(nextPassageId(passageId), 'hunt')
  }, [goToPassage, passageId])

  /* ----------------------------------------------------------------- explore */

  const counts = useMemo(() => {
    const map = new Map<string, number>()
    if (source === 'gold' && !customText) {
      for (const g of preparedGold.gold) map.set(g.feature, g.occurrences.length)
    } else {
      for (const tags of analysed.tags.values()) {
        for (const tag of tags) if (tag.confidence !== 'low') map.set(tag.feature, (map.get(tag.feature) ?? 0) + 1)
      }
      for (const group of analysed.groups) {
        if (group.confidence !== 'low') map.set(group.feature, (map.get(group.feature) ?? 0) + 1)
      }
    }
    return map
  }, [source, customText, preparedGold, analysed])

  const painted = useMemo(() => {
    const map = new Map<number, string[]>()
    if (view === 'hunt' && hunt) {
      for (const i of hunt.foundIdx) {
        for (const t of hunt.occurrences[i].tokens) {
          map.set(t, [hunt.feature])
        }
      }
      for (const i of hunt.hinted) {
        if (hunt.foundIdx.includes(i)) continue
        for (const t of hunt.occurrences[i].tokens) map.set(t, [hunt.feature])
      }
      return map
    }
    if (view !== 'explore') return map
    if (source === 'gold' && !customText) {
      if (layers.size === 0) return map
      for (const [token, feats] of preparedGold.tokenFeatures) {
        const keep = feats.filter((f) => layers.has(f))
        if (keep.length) map.set(token, keep)
      }
      return map
    }
    for (const [token, tags] of analysed.tags) {
      const keep = tags
        .filter((t) => t.confidence !== 'low')
        .filter((t) => layers.size === 0 || layers.has(t.feature))
        .map((t) => t.feature)
      if (keep.length) map.set(token, keep)
    }
    if (layers.size === 0) {
      for (const g of analysed.groups) {
        if (g.confidence === 'low') continue
        for (const t of g.tokens) {
          const list = map.get(t) ?? []
          if (!list.includes(g.feature)) list.push(g.feature)
          map.set(t, list)
        }
      }
    } else {
      for (const g of analysed.groups) {
        if (g.confidence === 'low' || !layers.has(g.feature)) continue
        for (const t of g.tokens) {
          const list = map.get(t) ?? []
          if (!list.includes(g.feature)) list.push(g.feature)
          map.set(t, list)
        }
      }
    }
    return map
  }, [view, hunt, source, customText, layers, preparedGold, analysed])

  const states = useMemo(() => {
    const map = new Map<number, TokenState>()
    if (view !== 'hunt' || !hunt) return map
    for (const i of hunt.foundIdx) {
      for (const t of hunt.occurrences[i].tokens) map.set(t, 'found')
    }
    for (const i of hunt.hinted) {
      if (hunt.foundIdx.includes(i)) continue
      for (const t of hunt.occurrences[i].tokens) map.set(t, 'hint')
    }
    if (hunt.wrongToken !== null) map.set(hunt.wrongToken, 'miss')
    return map
  }, [view, hunt])

  const underlines = useMemo<Underline[]>(() => {
    if (view !== 'explore' || (source === 'gold' && !customText)) return []
    const wantPhrase = (id: string) =>
      layers.size === 0
        ? id === 'prepositional-phrase'
        : layers.has(id)
    return analysed.groups
      .filter((g) => g.feature === 'prepositional-phrase' && wantPhrase(g.feature) && g.confidence !== 'low')
      .map((g) => ({ feature: g.feature, tokens: g.tokens }))
  }, [view, source, customText, layers, analysed])

  const huntInfo: HuntInfo | null = hunt
    ? {
        feature: hunt.feature,
        total: hunt.occurrences.length,
        found: hunt.foundIdx.length,
        misses: hunt.misses,
        hintsUsed: hunt.hintsUsed,
        done: hunt.done,
        perfect: hunt.done && hunt.misses === 0 && hunt.hintsUsed === 0 && !hunt.revealed,
        revealed: hunt.revealed,
        hintedTokens: hunt.hinted.flatMap((i) => hunt.occurrences[i].tokens),
      }
    : null

  const questions = useMemo(() => buildQuestions(passage), [passage])

  const selectedTags =
    selected !== null
      ? (analysed.tags.get(selected.index) ?? []).concat(
          analysed.groups
            .filter((g) => g.tokens.includes(selected.index) && !analysed.tags.get(selected.index)?.some((t) => t.feature === g.feature))
            .map((g) => ({ feature: g.feature, confidence: g.confidence, note: g.note })),
        )
      : []
  const selectedGold =
    selected !== null ? (preparedGold.tokenFeatures.get(selected.index) ?? []) : []

  const featuresInText = useMemo(() => {
    const ids = new Set<string>()
    if (source === 'gold' && !customText) preparedGold.gold.forEach((g) => ids.add(g.feature))
    else counts.forEach((_, id) => ids.add(id))
    return ids
  }, [source, customText, preparedGold, counts])

  const practiseFeature = useCallback(
    (featureId: string) => {
      const pool = passagesForFeature(featureId)
      if (pool.length === 0) {
        pushToast(`No curated passage carries “${feature(featureId)?.label}” yet`, 'info')
        return
      }
      const scored = pool
        .map((p) => ({ p, r: Math.random() - masteryPercent(profile.featureStats[featureId]) / 100 }))
        .sort((a, b) => b.r - a.r)
      const chosen = scored[0].p
      goToPassage(chosen.id, 'hunt', featureId)
    },
    [profile.featureStats, goToPassage, pushToast],
  )

  /* -------------------------------------------------------------------- view */

  return (
    <div className="app">
      <HeaderBar
        profile={profile}
        onOpenProgress={() => switchView('progress')}
        onReset={() => {
          if (!window.confirm('Clear all saved XP, badges and practice history? This cannot be undone.')) return
          setProfile(resetProfile())
          pushToast('Progress cleared', 'info')
        }}
      />

      <nav className="tabs" aria-label="Modes">
        {(
          [
            ['hunt', 'Practise'],
            ['explore', 'Explore'],
            ['quiz', 'Quiz'],
            ['library', 'Passages'],
            ['progress', 'Progress'],
          ] as [View, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`tab${view === id ? ' tab--on' : ''}`}
            aria-current={view === id ? 'page' : undefined}
            onClick={() => switchView(id)}
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          className="tab tab--sound"
          onClick={() => setSound((s) => !s)}
          title="Toggle sound"
          aria-label={sound ? 'Mute sounds' : 'Enable sounds'}
          aria-pressed={sound}
        >
          {sound ? '🔊' : '🔇'}
        </button>
      </nav>

      <div className="mode-intro">
        <div><span className="eyebrow">VCE ENGLISH LANGUAGE</span>
          <h2>{view === 'hunt' ? 'Notice the language. Explain the choice.' : view === 'explore' ? 'Look closer at how language works.' : view === 'quiz' ? 'Turn observations into analysis.' : view === 'library' ? 'Find your next text.' : 'Your practice, over time.'}</h2>
          <p>{view === 'hunt' ? 'Read the target below, then select its examples in the passage. For a phrase, select any word inside it.' : view === 'explore' ? 'Choose a feature to highlight its examples, or select a word to read its explanation.' : view === 'quiz' ? 'Read the passage, choose an answer, and use the explanation to check your reasoning.' : view === 'library' ? 'Choose a short warm-up or work through a passage in context.' : 'Revisit the features that need more practice.'}</p>
        </div>
        <button className="btn" onClick={() => switchView(view === 'library' ? 'hunt' : 'library')}>{view === 'library' ? 'Resume practice' : 'Browse passages →'}</button>
      </div>

      {view === 'progress' ? (
        <ProgressPanel
          profile={profile}
          onClose={() => switchView('hunt')}
          onPractise={practiseFeature}
        />
      ) : view === 'library' ? (
        <LibraryPanel
          currentId={passageId}
          mastered={profile.passagesMastered}
          onPick={(id) => goToPassage(id, 'hunt')}
          onClose={() => switchView('hunt')}
        />
      ) : (
        <main className={`stage${view === 'explore' ? ' stage--split' : ''}`}>
          <section className="board">
            <div className="board__meta">
              <button
                type="button"
                className="btn btn--ghost btn--tiny"
                onClick={() => goToPassage(nextPassageId(passageId, -1), view)}
                disabled={!!customText}
              >
                ← Prev
              </button>
              <div className="board__title">
                <h2>
                  {customText ? 'Your text' : passage.title}
                  {!customText && (
                    <span className="board__tier">
                      {TIER_META[passage.lengthTier].icon} {TIER_META[passage.lengthTier].label}
                    </span>
                  )}
                </h2>
                <p>
                  {customText
                    ? `${wordCount(customText)} words · automatic suggestions`
                    : `${passage.source} · ${wordCount(passage.text)} ${wordCount(passage.text) === 1 ? 'word' : 'words'} · difficulty ${passage.difficulty}/5`}
                </p>
              </div>
              <button
                type="button"
                className="btn btn--ghost btn--tiny"
                onClick={() => goToPassage(customText ? passageId : nextPassageId(passageId), view)}
              >
                {customText ? 'Curated text' : 'Next →'}
              </button>
            </div>

            {view === 'hunt' && hunt && !customText && (
              <div className="target-brief">
                <span className="eyebrow">YOUR TARGET · {hunt.occurrences.length} EXAMPLE{hunt.occurrences.length === 1 ? '' : 'S'}</span>
                <h2>{feature(hunt.feature)?.label}</h2>
                <p>{feature(hunt.feature)?.short}</p>
              </div>
            )}
            <div className="board__text" data-mode={view}>
              <p className="reading-label">{view === 'hunt' ? 'SELECT THE EXAMPLES' : 'READ & INVESTIGATE'}<span>{customText || source === 'auto' && view === 'explore' ? 'Automatic suggestions' : 'Passage answer key'}</span></p>
              <HighlightedText
                tok={customText ? analysed.tok : preparedGold.tok}
                painted={painted}
                states={states}
                underlines={underlines}
                selected={selected?.index ?? null}
                onWordClick={onWordClick}
                size={passage.lengthTier === 0 && !customText ? 'large' : 'normal'}
              />
            </div>

            {view === 'hunt' && huntInfo && !customText && (
              <HuntPanel
                passage={passage}
                hunt={huntInfo}
                onHint={onHint}
                onRevealAll={onRevealAll}
                onNewTarget={onNewTarget}
                onNextPassage={onNextPassage}
                hintCost={HINT_COST}
              />
            )}

            {view === 'quiz' && (
              <QuizPanel
                passage={passage}
                index={quizIndex}
                chosen={quizAnswers.get(quizIndex) ?? null}
                total={questions.length}
                score={quizScore}
                onChoose={(i) => {
                  if (quizAnswers.has(quizIndex)) return
                  const q = questions[quizIndex]
                  const correct = i === q.answer
                  setQuizAnswers((prev) => new Map(prev).set(quizIndex, i))
                  setQuizScore((s) => ({ correct: s.correct + (correct ? 1 : 0), answered: s.answered + 1 }))
                  award(
                    correct ? scoreQuizCorrect(passage.difficulty, profile.combo) : scoreQuizWrong(),
                    undefined, undefined, (p) => ({
                    ...p,
                    quizzesAnswered: p.quizzesAnswered + 1,
                    quizzesCorrect: p.quizzesCorrect + (correct ? 1 : 0),
                    combo: correct ? p.combo + 1 : 0,
                    comboBest: Math.max(p.comboBest, correct ? p.combo + 1 : 0),
                  }))
                  if (correct) playHit(profile.combo + 1)
                  else playMiss()
                }}
                onNext={() => setQuizIndex((i) => Math.min(i + 1, questions.length - 1))}
                onPrev={() => setQuizIndex((i) => Math.max(i - 1, 0))}
              />
            )}

            {view !== 'hunt' && !customText && (
              <section className="analysis">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowAnalysis((s) => !s)}
                  aria-expanded={showAnalysis}
                >
                  {showAnalysis ? 'Hide' : 'Show'} passage analysis
                </button>
                {showAnalysis && (
                  <dl className="analysis__grid">
                    <div>
                      <dt>Field</dt>
                      <dd>{passage.field}</dd>
                    </div>
                    <div>
                      <dt>Mode</dt>
                      <dd>{passage.mode}</dd>
                    </div>
                    <div>
                      <dt>Tenor</dt>
                      <dd>{passage.tenor}</dd>
                    </div>
                    <div>
                      <dt>Register</dt>
                      <dd>
                        {REGISTER_LABELS[passage.register] ?? passage.register}
                        <span className="muted"> — {passage.registerNote}</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Dominant function</dt>
                      <dd>
                        {feature(passage.dominantFunction)?.label}
                        <span className="muted"> — {passage.functionNote}</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Sentence type</dt>
                      <dd>
                        {passage.sentenceStructure !== 'fragment' && <>{feature(passage.dominantSentenceType)?.label} · </>}
                        {feature(passage.sentenceStructure)?.label}
                      </dd>
                    </div>
                  </dl>
                )}
              </section>
            )}

            {view === 'explore' && layers.size > 0 && (
              <p className="board__legend">
                Painting {layers.size} layer{layers.size === 1 ? '' : 's'}:{' '}
                {[...layers]
                  .map((id) => feature(id)?.label)
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}
          </section>

          {view === 'explore' && (
            <ExplorePanel
              activeLayers={layers}
              onToggle={(id) => {
                const next = new Set(layers)
                if (next.has(id)) next.delete(id)
                else next.add(id)
                setLayers(next)
              }}
              onClear={() => setLayers(new Set())}
              counts={counts}
              source={source}
              onSourceChange={(s) => {
                setSource(s)
                setLayers(new Set())
                setSelected(null)
              }}
              hasCustomText={!!customText}
              onCustomText={(t) => {
                setCustomText(t)
                setSelected(null)
                setSource('auto')
                setLayers(new Set())
              }}
              onClearCustomText={() => { setCustomText(null); setSource('gold'); setLayers(new Set()); setSelected(null) }}
            />
          )}
        </main>
      )}

      {view === 'explore' && featuresInText.size > 0 && (
        <footer className="appfoot">
          {featuresInText.size} features {source === 'gold' && !customText ? 'annotated in the passage key' : 'suggested automatically'} · select a word to investigate
        </footer>
      )}

      {selected &&
        (() => {
          const tok = customText ? analysed.tok : preparedGold.tok
          const token = tok.tokens[selected.index] ?? analysed.tok.tokens[selected.index]
          if (!token) return null
          // Never leak the answer key while a hunt is still running.
          const revealGold =
            (view === 'explore' && source === 'gold' && !customText) ||
            (view === 'hunt' && !!hunt?.done) ||
            view === 'quiz' ||
            view === 'library'
          return (
            <WordPopover
              token={token}
              tags={selectedTags}
              goldFeatures={revealGold ? selectedGold : []}
              goldNotes={Object.fromEntries(preparedGold.gold.map(g => [g.feature, g.note]))}
              anchor={selected.anchor}
              onClose={() => setSelected(null)}
              paintGold={revealGold}
              onToggleLayer={(id) => {
                setLayers((prev) => {
                  const next = new Set(prev)
                  if (next.has(id)) next.delete(id)
                  else next.add(id)
                  return next
                })
              }}
            />
          )
        })()}

      <div className="toasts" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast--${t.kind}`}>
            {t.text}
          </div>
        ))}
      </div>
    </div>
  )
}
