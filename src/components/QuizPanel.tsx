import type { Passage } from '../lib/passages'
import { buildQuestions } from '../lib/quiz'

interface Props {
  passage: Passage
  index: number
  chosen: number | null
  onChoose: (index: number) => void
  onNext: () => void
  onPrev: () => void
  total: number
  score: { correct: number; answered: number }
}

export default function QuizPanel({
  passage,
  index,
  chosen,
  onChoose,
  onNext,
  onPrev,
  total,
  score,
}: Props) {
  const questions = buildQuestions(passage)
  const q = questions[index]
  if (!q) return null
  const answered = chosen !== null

  return (
    <section className="quiz">
      <div className="quiz__head">
        <h2>Analysis check</h2>
        <span className="quiz__meta">
          Question {index + 1} of {total} · {passage.source}
        </span>
        <span className="quiz__score">
          {score.correct}/{score.answered} correct
        </span>
      </div>

      <div className="quiz__body">
        <p className="quiz__prompt">{q.prompt}</p>
        <ol className="quiz__options">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer
            const isChosen = i === chosen
            const cls = ['quiz__option']
            if (answered && isAnswer) cls.push('quiz__option--correct')
            if (answered && isChosen && !isAnswer) cls.push('quiz__option--wrong')
            if (answered && isChosen) cls.push('quiz__option--chosen')
            return (
              <li key={opt}>
                <button
                  type="button"
                  className={cls.join(' ')}
                  disabled={answered}
                  onClick={() => onChoose(i)}
                >
                  <span className="quiz__letter">{'ABCD'[i] ?? '?'}</span>
                  <span>{opt}</span>
                  {answered && isAnswer && <span className="quiz__tick">✓</span>}
                  {answered && isChosen && !isAnswer && <span className="quiz__cross">✕</span>}
                </button>
              </li>
            )
          })}
        </ol>

        {answered && (
          <div className="quiz__explain">
            <strong>{chosen === q.answer ? 'Correct.' : 'Not quite.'}</strong> {q.explain}
            {q.kind !== 'curated' && (
              <span className="quiz__kind">auto-generated from the passage metadata</span>
            )}
          </div>
        )}
      </div>

      <div className="quiz__actions">
        <button type="button" className="btn btn--ghost" onClick={onPrev} disabled={index === 0}>
          ← Previous
        </button>
        <button
          type="button"
          className="btn btn--primary"
          onClick={onNext}
          disabled={index >= total - 1}
        >
          Next question →
        </button>
      </div>
    </section>
  )
}
