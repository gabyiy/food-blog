import React from "react";
import "./Login.css";
import { Formik, form, Form } from "formik";
import { Link, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="image_login ">
      <div className="login_form">
        <h1>Sign In</h1>
        <Formik>
          {(formik) => (
            <Form className="inputs">
              <input
                type="text"
                placeholder="Enter you'r email"
                className="inputOneAndTwo"
              />
              <input
                type="text"
                placeholder="Enter you'r password"
                className="inputOneAndTwo"
              />
              <button type="submit" className="btn_login">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/forgoten" className="forgot_password">
          Forgoten Password
        </Link>
      </div>
    </div>
  );
};

export default Login;
