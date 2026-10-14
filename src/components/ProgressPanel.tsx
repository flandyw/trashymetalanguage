import {
  BADGES,
  MASTERY_HITS,
  RANKS,
  accuracy,
  levelNumber,
  masteryPercent,
  nextRank,
  rankFor,
  rankProgress,
  recentActivity,
  type Profile,
} from '../lib/game'
import { FEATURES, feature } from '../lib/taxonomy'

interface Props {
  profile: Profile
  onClose: () => void
  onPractise: (featureId: string) => void
}

export default function ProgressPanel({ profile, onClose, onPractise }: Props) {
  const rank = rankFor(profile.xp)
  const next = nextRank(profile.xp)
  const activity = recentActivity(profile, 21)
  const peak = Math.max(1, ...activity.map((a) => a.xp))

  const practised = Object.keys(profile.featureStats)
  const masteredFeatures = FEATURES.filter((f) =>
    profile.mastered.includes(f.id),
  )
  const weakest = practised
    .map((id) => ({ id, stat: profile.featureStats[id] }))
    .filter((x) => feature(x.id))
    .sort((a, b) => masteryPercent(a.stat) - masteryPercent(b.stat))
    .slice(0, 5)

  return (
    <div className="progress">
      <header className="progress__head">
        <div>
          <h2>Your progress</h2>
          <p className="progress__sub">
            {rank.title} · Level {levelNumber(profile.xp)} · {profile.xp} XP
          </p>
        </div>
        <button type="button" className="btn btn--ghost btn--tiny" onClick={onClose}>
          Close
        </button>
      </header>

      <section className="progress__rank">
        <div className="progress__rankbar" aria-hidden="true">
          <span style={{ width: `${Math.round(rankProgress(profile.xp) * 100)}%` }} />
        </div>
        <p>
          {next
            ? `${next.minXp - profile.xp} XP until ${next.title} — “${next.blurb}”`
            : 'You have reached the top rank. Keep the streak alive.'}
        </p>
        <ol className="ranklist">
          {RANKS.map((r) => (
            <li
              key={r.title}
              className={profile.xp >= r.minXp ? 'ranklist__item ranklist__item--on' : 'ranklist__item'}
            >
              <span className="ranklist__xp">{r.minXp}</span>
              <span>{r.title}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="progress__stats">
        <Stat label="XP" value={profile.xp} />
        <Stat label="Accuracy" value={`${Math.round(accuracy(profile) * 100)}%`} />
        <Stat label="Hunts finished" value={profile.huntsCompleted} />
        <Stat label="Flawless runs" value={profile.perfectHunts} />
        <Stat label="Best combo" value={profile.comboBest} />
        <Stat
          label="Quiz accuracy"
          value={
            profile.quizzesAnswered
              ? `${Math.round((profile.quizzesCorrect / profile.quizzesAnswered) * 100)}%`
              : '—'
          }
        />
        <Stat label="Hints used" value={profile.hintsUsed} />
        <Stat label="Features mastered" value={`${masteredFeatures.length}/${FEATURES.length}`} />
      </section>

      <section className="progress__activity">
        <h3>Last three weeks</h3>
        <div className="spark" role="img" aria-label="Daily XP over the last 21 days">
          {activity.map((a) => (
            <span
              key={a.key}
              className={`spark__bar${a.xp > 0 ? ' spark__bar--on' : ''}`}
              style={{ height: `${Math.max(4, (a.xp / peak) * 100)}%` }}
              title={`${a.key}: ${a.xp} XP`}
            />
          ))}
        </div>
      </section>

      <section className="progress__badges">
        <h3>
          Badges <span className="muted">{profile.badges.length} of {BADGES.length}</span>
        </h3>
        <ul className="badges">
          {BADGES.map((b) => {
            const earned = profile.badges.includes(b.id)
            return (
              <li key={b.id} className={`badge${earned ? ' badge--on' : ''}`}>
                <span className="badge__icon">{b.icon}</span>
                <span className="badge__label">{b.label}</span>
                <span className="badge__blurb">{b.blurb}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="progress__mastery">
        <h3>Feature mastery</h3>
        {practised.length === 0 ? (
          <p className="muted">
            Nothing practised yet. Finish a hunt and the bars will fill in.
          </p>
        ) : (
          <>
            <p className="muted">
              Needs {MASTERY_HITS} accurate finds to count as mastered. Weakest first — click
              one to practise it.
            </p>
            <ul className="mastery">
              {weakest.map(({ id, stat }) => {
                const f = feature(id)
                if (!f) return null
                const pct = masteryPercent(stat)
                return (
                  <li key={id}>
                    <button type="button" className="mastery__row" onClick={() => onPractise(id)}>
                      <span className="mastery__name">{f.label}</span>
                      <span className="mastery__bar" aria-hidden="true">
                        <span
                          style={{ width: `${pct}%`, background: f.colour }}
                        />
                      </span>
                      <span className="mastery__pct">
                        {pct}% · {stat.found}✓ {stat.missed}✕
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bstat">
      <span className="bstat__value">{value}</span>
      <span className="bstat__label">{label}</span>
    </div>
  )
}
