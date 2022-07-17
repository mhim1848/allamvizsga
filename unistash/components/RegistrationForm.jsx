import { Formik, Form } from "formik";
import CustomTextInput from "./CustomTextInput";
import * as Yup from "yup";

export default function RegistrationForm() {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordEnsurance: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
          passwordEnsurance: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords don't match!")
            .required("Required"),
          firstName: Yup.string().max(
            20,
            "Must be at most 20 characters long."
          ),
          lastName: Yup.string().max(
            30,
            "Must be at mosst 30 characters long."
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-control">
          {/* <label htmlFor="email">Email Address</label> */}
          <CustomTextInput
            className="input input-info"
            label="Email Address"
            name="email"
            type="email"
            placeholder="Your@email.here"
          />

          <CustomTextInput
            className="input input-info"
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <CustomTextInput
            className="input input-info"
            label="Confirm password"
            name="passwordEnsurance"
            type="password"
            placeholder="Repeat your password"
          />

          <CustomTextInput
            className="input input-info"
            label="First name"
            name="firstName"
            type="text"
            placeholder="First name"
          />

          <CustomTextInput
            className="input input-info"
            label="Last name"
            name="lastName"
            type="text"
            placeholder="Last name"
          />

          <button type="submit" class="btn btn-accent btn-outline">
            Create account!
          </button>
        </Form>
      </Formik>
    </>
  );
}
