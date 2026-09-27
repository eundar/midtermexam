type ProgressBarProps = {
  currentQuestion: number;
  totalQuestions: number;
  answerResults: (boolean | null)[];
};

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
  answerResults,
}: ProgressBarProps) {
  return (
    <div>
      <div
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
        aria-valuenow={currentQuestion}
        aria-valuetext={`Question ${currentQuestion} of ${totalQuestions}`}
      >
        {Array.from({ length: totalQuestions }, (_, index) => {
          const questionNumber = index + 1;
          const isCurrent = questionNumber === currentQuestion;
          const answerResult = answerResults[index];
          const state = isCurrent
            ? "current"
            : answerResult === null
              ? "upcoming"
              : answerResult
                ? "correct"
                : "incorrect";

          return (
            <span
              key={questionNumber}
              aria-current={isCurrent ? "step" : undefined}
              data-state={state}
            >
              {answerResult === null
                ? questionNumber
                : answerResult
                  ? "✓"
                  : "✕"}
            </span>
          );
        })}
      </div>
    </div>
  );
}
