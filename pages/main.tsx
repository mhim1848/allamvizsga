import SearchBar from "../components/SearchBar";
import QuestionList from "../components/QuestionList";
import LoginForm from "../components/LoginForm";
import { QuestionType } from "../types/QuestionType";
import { server } from "../config";
import { useSession, signIn, signOut } from "next-auth/react";

export async function getStaticProps() {
  const res = await fetch(`${server}/api/questions/`);
  const questions = await res.json();

  return {
    props: { questions }, // will be passed to the page component as props
  };
}

export default function Main(props: { questions: Array<QuestionType> }) {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <>
          <label className="label">
            To access the content behind this page, you need to sign in first.
          </label>
          <button
            onClick={() => signIn()}
            className="btn btn-ghost normal-case text-xl"
          >
            Sign in with Google!
          </button>
          <LoginForm />
        </>
      )}
      {session && (
        <>
          <button
            onClick={() => signOut()}
            className="btn btn-ghost normal-case text-xl"
          >
            Sign out {session?.user?.name}.
          </button>
          <SearchBar />
          <QuestionList questions={props.questions} />
        </>
      )}
    </>
  );
}
