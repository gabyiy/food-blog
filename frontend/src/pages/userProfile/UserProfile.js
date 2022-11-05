import React, { useContext, useReducer, useState } from "react";
import { Store } from "../../Store";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header.js';

import "./UserProfile.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "FETCH_FAIL":
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

const UserProfile = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState(userInfo.name);
  const [email, setEamil] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "/api/users/replaceProfile",
        {
          password,
          passwordConfirmation,
          name,
          email,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: "UPADATE_SUCCESS" });

      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("User upadted ");
    } catch (err) {
      dispatch({ type: "FETCH_FAIL" });
      toast.error(getError(err));
    }
  };
  return (
    <div className="userProfilePage">
        <Header/>

    <div className="mainDivUserProfile">
      <div className="spanReset">
        <span>Wellcome {userInfo.name} </span>
        <p>In Here You Can Change You'r Personal Data :</p>
      </div>
      <div className="divFormReset">
        <div className="spanP">
        
          <p>Change Name :</p>
      
          <p>Change Email :</p>
          <p>Change Password :</p>
          <p>Confirm Passowrd:</p>
        </div>
        <form className="formReset" onSubmit={sumbitHandler}>
          <input
            placeholder=" Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder=" Email"
            onChange={(e) => setEamil(e.target.value)}
          />

          <input
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <button className="buttonReset" type="submit">
            Submit
          </button>
        </form>
      </div>
     <div className="botomDiv">

     </div>
    </div>
    <Footer/>
  </div>
  );
};

export default UserProfile;
