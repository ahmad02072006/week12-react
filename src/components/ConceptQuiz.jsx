import { useState } from 'react';
import QUESTIONS from '../data/quizQuestions';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function ConceptQuiz() {
  const [index, setIndex] = useState(0);   // which question we are on
  const [answers, setAnswers] = useState([]); // answers[i] = option chosen for question i

  const finished = index >= QUESTIONS.length;
  const score = answers.filter((choice, i) => choice === QUESTIONS[i].answer).length;

  function choose(optionIndex) {
    if (answers[index] !== undefined) return; // already answered
    setAnswers((prev) => [...prev, optionIndex]);
  }

  function restart() {
    setIndex(0);
    setAnswers([]);
  }

  if (finished) {
    return (
      <section className="section" aria-labelledby="quiz-title">
        <h2 id="quiz-title">Quiz finished</h2>
        <p className="big-number">{score} / {QUESTIONS.length}</p>
        <ol className="quiz-review">
          {QUESTIONS.map((q, i) => (
            <li key={q.topic} className={answers[i] === q.answer ? 'correct-text' : 'wrong-text'}>
              {answers[i] === q.answer ? '✓' : '✗'} {q.topic}
            </li>
          ))}
        </ol>
        <button className="btn" onClick={restart}>Try again</button>
      </section>
    );
  }

  const q = QUESTIONS[index];
  const chosen = answers[index];
  const answered = chosen !== undefined;

  return (
    <section className="section" aria-labelledby="quiz-title">
      <h2 id="quiz-title">Concept Mastery Quiz</h2>
      <p className="muted">
        Quiz {index + 1} / {QUESTIONS.length} · {q.topic} · Score: {score}
      </p>
      <progress className="quiz-progress" value={index + (answered ? 1 : 0)} max={QUESTIONS.length} />

      <p className="quiz-question">{q.question}</p>

      <div className="quiz-options">
        {q.options.map((option, i) => {
          let state = '';
          if (answered && i === q.answer) state = 'correct';
          else if (answered && i === chosen) state = 'wrong';
          return (
            <button
              key={option}
              className={`quiz-option ${state}`}
              onClick={() => choose(i)}
              disabled={answered}
            >
              <span className="quiz-letter">{LETTERS[i]}</span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="quiz-explain" role="status">
          <strong>{chosen === q.answer ? 'Correct.' : 'Not quite.'}</strong> {q.explanation}
        </div>
      )}

      <div className="row">
        <button className="btn" onClick={() => setIndex((i) => i + 1)} disabled={!answered}>
          {index === QUESTIONS.length - 1 ? 'See result' : 'Next question'}
        </button>
      </div>
    </section>
  );
}

export default ConceptQuiz;
