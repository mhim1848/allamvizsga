import Question from "./Question";
import { QuestionType } from "../types/QuestionType";

// Next step users own questions + all questions from db displayed
export default function QuestionList(props: {
  questions: Array<QuestionType>;
}) {
  return (
    <>
      <ul className="block m-8">
        {props.questions.map((question) => (
          <li key={question.id}>
            <Question {...question} />
          </li>
        ))}
      </ul>
    </>
  );
}
