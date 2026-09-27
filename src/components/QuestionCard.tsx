import AnswerOptions from "@/components/AsnwerOptions";
import QuizHeader from "@/components/QuizHeader";

type QuestionCardProps = {
  question: {
    question: string;
    options: string[];
  };
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) {
  return (
    <section aria-labelledby="quiz-question">
      <QuizHeader
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        question={question.question}
      />
      <AnswerOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
      />
    </section>
  );
}
