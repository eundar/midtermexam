"use client";

import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import questions from "@/data/questions";
import styles from "./page.module.css";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answerResults, setAnswerResults] = useState<(boolean | null)[]>(() =>
    Array(questions.length).fill(null),
  );
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestion];

  function handleButtonClick() {
    const isCorrect = selectedAnswer === question.answer;
    setAnswerResults((results) =>
      results.map((result, index) =>
        index === currentQuestion ? isCorrect : result,
      ),
    );

    if (isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
  }

  function handleTryAgain() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswerResults(Array(questions.length).fill(null));
    setShowResults(false);
  }

  return (
    <main className={styles.page}>
      {showResults ? (
        <div className={`${styles.panel} ${styles.results}`}>
          <p role="status">
            Quiz complete! You scored {score} out of {questions.length}.
          </p>
          <button type="button" onClick={handleTryAgain}>
            Try again
          </button>
        </div>
      ) : (
        <div className={styles.panel}>
          <ProgressBar
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
            answerResults={answerResults}
          />
          <QuestionCard
            question={question}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={setSelectedAnswer}
          />
          <button
            type="button"
            disabled={selectedAnswer === null}
            onClick={handleButtonClick}
          >
            {currentQuestion === questions.length - 1 ? "Finish quiz" : "Next"}
          </button>
        </div>
      )}
    </main>
  );
}
