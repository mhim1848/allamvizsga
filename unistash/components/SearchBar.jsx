import { useState } from "react";
import { Formik, useFormik } from "formik";

export default function SearchBar(props) {
  //   const [search, setSearch] = useState("");
  const formik = useFormik({
    initialValues: {
      searchBar: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="searchBar">What would you like to look for?</label>
        <input
          id="searchBar"
          name="searchBar"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.searchBar}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
