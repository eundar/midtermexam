import "./pages.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="quiz-container">
      <h1>
        Welcome to the
        <span>FRONTEND QUIZ!</span>
      </h1>

      <Link href="/quiz">
        <button className="start-button">Start Quiz</button>
      </Link>
    </div>
  );
}
