import axios from "axios";
import React, { useState, useReducer, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Store";
import { getError } from "../../utils";
import "./RecoverPassword.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
const RecoverPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [{ loading, error, user }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    user: {},
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userReset } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/forgot-password", {
        email,
      });
      dispach({ type: "FETCH_SUCCESS", payload: data });
      ctxDispatch({ type: "USER_RESET", payload: data });
      localStorage.setItem("userReset", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // console.log(user.token);
  return (
    <div className="page_blur">
      <div className="main_register">
        <div className="register_header">
          <div className="header">
            <Link className="link" to="/">
              <span>x</span>
            </Link>
          </div>
          <h1>Recover Password</h1>
        </div>

        <form className="register_form" onSubmit={submitHandler}>
          <div className="reg_line">
            <div className="wrap_input  ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="reg_btn_wrapper">
            <button className="btn_register" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
