// import { Form, Formik, ErrorMessage, Field } from "formik";
import LoginForm from "../components/LoginForm";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login(props) {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <button onClick={() => signIn()}>Sign in with Google!</button>
      )}
      {session && (
        <button onClick={() => signOut()}>Sign out {session.user.name}.</button>
      )}
      <LoginForm />
    </>
  );
}
