import { Formik, Form } from "formik";
import CustomTextInput from "./CustomTextInput";
import * as Yup from "yup";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
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
