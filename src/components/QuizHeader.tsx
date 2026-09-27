type QuizHeaderProps = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
};

export default function QuizHeader({
  questionNumber,
  totalQuestions,
  question,
}: QuizHeaderProps) {
  return (
    <header>
      <p>
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 id="quiz-question">{question}</h2>
    </header>
  );
}
