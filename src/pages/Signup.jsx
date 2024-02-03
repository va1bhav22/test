import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { signUpAuth } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await dispatch(signUpAuth(values));
      setSubmitting(false);
      navigate("/");
    } catch (error) {
      setSubmitting(false);
      if (error.response && error.response.data && error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          setFieldError(error.field, error.message);
        });
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.username = "Required";
          }
          if (!values.lastName) {
            errors.username = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="firstName" placeholder="first Name" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <Field type="text" name="lastName" placeholder="last Name" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
