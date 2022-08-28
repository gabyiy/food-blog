import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store.js";
import Axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils.js";

const Register = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password dont match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div className="page_blur">
      <div className="main_register">
        <div className="register_header">
          <div className="header">
            <Link to="/">
              <span>x</span>
            </Link>
          </div>
          <h1>Register</h1>
        </div>

        <form className="register_form" onSubmit={submitHandler}>
          <div className="reg_line">
            <div className="wrap_input  ">
              <input
                type="text"
                placeholder="Enter Name"
                className="email_password"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="reg_line">
            <div className="wrap_input  ">
              <input
                type="text"
                placeholder="Enter email adress"
                className="email_password"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="reg_line">
            <div className="wrap_input   ">
              <input
                placeholder="Enter Password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="reg_line">
            <div className="wrap_input  ">
              <input
                type="text"
                placeholder="Confirm Password"
                className="email_password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="reg_btn_wrapper">
            <button className="btn_register" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
