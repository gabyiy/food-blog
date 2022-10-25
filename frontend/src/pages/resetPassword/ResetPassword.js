import ExitToApp from "@mui/icons-material/ExitToApp";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Store";
import { getError } from "../../utils";
import "./ResetPassword.css";

const ResetPassword = () => {
  const { state } = useContext(Store);
  const { userReset } = state;
  const [home, setHome] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `/api/users/reset-password/${userReset.oldUser._id}/${userReset.token}`,
        {
          newPassword,
          confirmNewPassword,
        }
      );
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const ifPasswordMatch = () => {
    if (newPassword === confirmNewPassword) {
      setHome(true);
      toast.success("Password changed successfully");
    }
    console.log(newPassword, confirmNewPassword);
  };

  return (
    <div>
      {!home ? (
        <div className="page_blur">
          <div className="main_register">
            <div className="register_header">
              <div className="header">
                <Link className="link" to="/">
                  <ExitToApp className="exitToApp" />
                </Link>
              </div>
              <h1>Change Password</h1>
            </div>

            <form className="register_form" onSubmit={submitHandler}>
              <div className="reg_line">
                <div className="wrap_input  ">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="email_password"
                    name="email"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="reg_line">
                <div className="wrap_input   ">
                  <input
                    className="email_password"
                    placeholder="Confirm Password"
                    name="password"
                    type="password"
                    onChange={(e) => setconfirmNewPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="reg_btn_wrapper">
                <button
                  className="btn_register"
                  type="submit"
                  onClick={ifPasswordMatch}
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="page_blur">
          <div className="main_register">
            <div className="register_header">
              <h1>Password Changed</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
