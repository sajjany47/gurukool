import React from "react";
import { Field, Form, Formik } from "formik";
import { dropdownField, inputFiled } from "../../component/Field";

const Home = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", username: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="col-12">
              <div className="grid mt-6">
                <div className="col-12 md:col-4">
                  <Field
                    component={inputFiled}
                    header={"Name"}
                    name="email"
                    type="email"
                  />
                </div>
                <div className="col-12 md:col-4">
                  <Field component={inputFiled} name="username" />
                </div>
                <div className="col-12 md:col-4">
                  <Field
                    component={dropdownField}
                    name="email"
                    options={[{ label: "Sajjan", value: 2 }]}
                    filter
                  />
                </div>
                <div className="col-12 md:col-4">
                  <Field component={inputFiled} name="username" />
                </div>
              </div>

              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Home;
