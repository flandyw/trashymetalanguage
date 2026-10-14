import { BADGES, accuracy, levelNumber, nextRank, rankFor, rankProgress, type Profile } from '../lib/game'

interface Props {
  profile: Profile
  onOpenProgress: () => void
  onReset: () => void
}

export default function HeaderBar({ profile, onOpenProgress, onReset }: Props) {
  const rank = rankFor(profile.xp)
  const next = nextRank(profile.xp)
  const pct = Math.round(rankProgress(profile.xp) * 100)
  const acc = accuracy(profile)

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand__mark">HL</span>
        <div>
          <h1>Metalanguage Highlighter</h1>
          <p className="brand__sub">
            VCE English Language · Read closely. Name precisely. Explain clearly.
          </p>
        </div>
      </div>

      <div className="hud">
        <button type="button" className="hud__rank" onClick={onOpenProgress}>
          <span className="hud__lvl">Lv {levelNumber(profile.xp)}</span>
          <span className="hud__title">{rank.title}</span>
          <span className="hud__bar" aria-hidden="true">
            <span className="hud__fill" style={{ width: `${pct}%` }} />
          </span>
          <span className="hud__hint">
            {next ? `${next.minXp - profile.xp} XP to ${next.title}` : 'Top rank reached'}
          </span>
        </button>

        <div className="hud__stats">
          <div className="stat">
            <span className="stat__value">{profile.xp}</span>
            <span className="stat__label">XP</span>
          </div>
          <div className="stat">
            <span className="stat__value">{profile.totalRight + profile.totalWrong > 0 ? `${Math.round(acc * 100)}%` : '—'}</span>
            <span className="stat__label">accuracy</span>
          </div>
          <div className="stat">
            <span className="stat__value">
              {profile.badges.length}/{BADGES.length}
            </span>
            <span className="stat__label">badges</span>
          </div>
          <div className="stat">
            <span className="stat__value">{profile.mastered.length}</span>
            <span className="stat__label">mastered</span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn--ghost btn--tiny"
          onClick={onReset}
          title="Clear saved progress"
        >
          Reset
        </button>
      </div>
    </header>
  )
}
