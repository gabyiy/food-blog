import React, { useContext, useEffect, useState } from "react";
import "./Login2.css";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store.js";
import Axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils.js";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Login2 = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signin", {
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
            <Link className="link" to="/">
              <ExitToAppIcon className="exitToApp" />
            </Link>
          </div>
          <h1>Login</h1>
        </div>

        <form className="register_form" onSubmit={submitHandler}>
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
                className="email_password"
                placeholder="Enter password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="reg_btn_wrapper">
            <button className="btn_register" type="submit">
              Login
            </button>
          </div>
        </form>
        <Link to="/recover">
          <p className="recoverPasswordLink">Recover Password</p>
        </Link>
      </div>
    </div>
  );
};

export default Login2;
