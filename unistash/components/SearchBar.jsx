import { Formik, Form } from "formik";
import CustomTextInput from "./CustomTextInput";
import * as Yup from "yup";

export default function SearchBar(props) {
  return (
    <Formik
      initialValues={{ searchBar: "" }}
      validationSchema={Yup.object({
        searchBar: Yup.string().max(50, "Must be at most 50 characters long."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex w-full">
        <label htmlFor="searchBar" className="label">
          What would you like to look for?
        </label>
        <div className="divider divider-horizontal" />
        <CustomTextInput
          className="input"
          name="searchBar"
          type="text"
          placeholder="Type in your questions."
        />

        <button type="submit" className="btn btn-accent btn-outline">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
