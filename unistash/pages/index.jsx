import LoginForm from "../components/LoginForm";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <button
          onClick={() => signIn()}
          className="btn btn-ghost normal-case text-xl"
        >
          Sign in with Google!
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="btn btn-ghost normal-case text-xl"
        >
          Sign out {session.user.name}.
        </button>
      )}
      <LoginForm />
    </>
  );
}
