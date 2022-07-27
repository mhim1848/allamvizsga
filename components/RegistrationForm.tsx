import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomTextInput from "./CustomTextInput";
import { signUpType } from "../types/SignupType";

function cloneUserData(userData:signUpType, hash : String) {
  return {
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: hash
  }
}

async function saveUser(userData:signUpType) {
  try {
      const bcrypt = require("bcryptjs");
      bcrypt.genSalt(10, function(err : String, salt : String) {
        bcrypt.hash(userData.password, salt, async (err : String, hash : String) => {
          const response = await fetch('/api/registrationHandler', {
            method: 'POST',
            body: JSON.stringify(cloneUserData(userData, hash)),
          })
        
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          
          return await response.json();
        });
    });
  } catch (Exception) {
    console.log("Error occured while creating proper signup form data.");
  }
}

//getEmailnek kell majd egy /[dynamicPath] mert GET methodnál bodyban nem lehet küldeni infót, így urlből kellene kinyernem
async function validateEmail(email:String) {
  const response = await fetch('/api/getEmail', {
    method: 'GET',
    body: JSON.stringify(email),
  })

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function RegistrationForm() {
  return (
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
            "Must be at most 30 characters long."
          ),
        })}
        onSubmit={async (values: signUpType, { setSubmitting }) => {
          // await validateEmail(values.email);
          await saveUser(values);
          setTimeout(() => {
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

          <button type="submit" className="btn btn-accent btn-outline">
            Create account!
          </button>
        </Form>
      </Formik>
  );
}
