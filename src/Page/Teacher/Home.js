import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { inputFiled } from "../../component/Field";

const Home = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", username: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            <Field component={inputFiled} name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field component={inputFiled} name="username" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Home;
