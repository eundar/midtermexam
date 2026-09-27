type AnswerOptionsProps = {
  options: string[];
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
};

export default function AnswerOptions({
  options,
  selectedAnswer,
  onAnswerSelect,
}: AnswerOptionsProps) {
  return (
    <fieldset>
      <legend>Answer options</legend>
      {options.map((option, index) => (
        <label key={`${option}-${index}`} htmlFor={`answer-option-${index}`}>
          <input
            id={`answer-option-${index}`}
            type="radio"
            name="answer-option"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => onAnswerSelect(option)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
