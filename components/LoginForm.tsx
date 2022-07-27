import { Formik, Form, ErrorMessage } from "formik";
import CustomTextInput from "./CustomTextInput";
import * as Yup from "yup";
import * as bcrypt from "bcryptjs";
import { useState } from "react";

async function validateData(userEmail: string, userPassword: string) {
  const url = `/api/emails/${userEmail.toString()}`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ userEmail }),
  });

  if (!response.ok) {
    // throw new Error(response.statusText);
  }

  const responseJson = await response.json();

  if (responseJson.email === null) {
    console.log("Email does not exist.");
  }

  const passwordsMatch = await bcrypt.compare(
    userPassword,
    responseJson.password
  );

  if (passwordsMatch) {
    console.log("ok");
  }
}

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const ok = await validateData(values.email, values.password);
        // console.log(ok);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form-control">
        <CustomTextInput
          className="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage name="email">
          {(msg) => <div className="text-white fixed bg-red-600">{msg}</div>}
        </ErrorMessage>
        <CustomTextInput
          className="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-ghost normal-case text-xl">
          Login
        </button>
      </Form>
    </Formik>
  );
}
