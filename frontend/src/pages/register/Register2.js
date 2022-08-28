import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "./Register2.css";
import RegisterInput from "../../components/inputs/registerInput/RegisterInput";

const userInfo = {
  first_name: "",
  last_name: "",
  enail: "",
  password: "",
};

const Register2 = () => {
  const [user, setUser] = useState(userInfo);

  const { first_name, last_name, email, password } = user;

  const handleRegisterChange = (e) => {
    //aici cautam ca avem la nume (ex email), si value este ce scriem
    const { name, value } = e.target;
    //aici setam useru cu ce introducem la name(ex email) si la user o sa salvam valoarea
    //deci user o sa se schimbe in inpututu cu numele in care scriem(email ex), si o salveze
    //ce aveam inainte plus ce scriem in continuare
    setUser({ ...user, [name]: value });
  };

  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("What is your First Name")
      .min(3, "First name must be between 3 ands 30")
      .max(30, "First name must be between 3 ands 30")

      //aici utilizam regex pentru a permite doar litere marfi si mici si spati
      .matches(/^[aA-zZ\s]+$/, "Number and special character are not allowed"),

    last_name: Yup.string()
      .required("What is your Last Name")
      .min(3, "First name must be between 3 ands 30")
      .max(30, "First name must be between 3 ands 30")
      .matches(/^[aA-zZ\s]+$/, "Number and special character are not allowed"),

    email: Yup.string()
      .required(
        "You'll need this when you log in and you ever need to reset your password"
      )
      .email("Enter a valid emnai adress"),

    password: Yup.string()
      .required(
        "Enter a combination of at least six number ,leeters and punctuation marks(ssuch as ! and &"
      )
      .min(6, "Password must be atleast 6 characters")
      .max(30, "Password can 't have more then 30 characters "),
  });

  return (
    <div className="page_blur">
      <div className="main_register">
        <div className="register_header">
          <div className="header">
            <span>x</span>
          </div>
          <h1>Sign Up</h1>
        </div>
        <Formik
          enableReinitialize
          //stabilim vaalorile initaile care o sa le aibe inputurile,valorile astea sunt mereu reinitializate
          //de valori care le avem in state
          initialValues={{
            first_name,
            last_name,
            email,
            password,
          }}
          //pentru ca formik sa valideze ca ce introducem corespunde cu cerintele trebuie sa facem
          //o validation schema care o sa fie registerValidation din Yup
          validationSchema={registerValidation}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <div className="wrap_input ">
                  <RegisterInput
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={handleRegisterChange}
                  />
                </div>
              </div>
              <div className="reg_line">
                <div className="wrap_input ">
                  <div className="error_div"></div>
                  <RegisterInput
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={handleRegisterChange}
                  />
                </div>
              </div>
              <div className="reg_line">
                <div className="wrap_input  ">
                  <RegisterInput
                    type="text"
                    placeholder="Enter email adress"
                    className="email_password"
                    name="email"
                    onChange={handleRegisterChange}
                  />
                </div>
              </div>
              <div className="reg_line">
                <div className="wrap_input   ">
                  <RegisterInput
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    onChange={handleRegisterChange}
                  />
                </div>
              </div>
              <div className="reg_btn_wrapper">
                <button className="btn_register">Register</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register2;
