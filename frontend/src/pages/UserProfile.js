import React, { useContext, useReducer, useState } from "react";
import { Store } from "../Store";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../utils";

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
    <div>
      <div>
        <span>Hi {userInfo.name} </span>
      </div>
      <div>
        <form onSubmit={sumbitHandler}>
          <input
            placeholder="chande Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="change Email"
            onChange={(e) => setEamil(e.target.value)}
          />
          <input
            placeholder="change Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button type="submit">Submit.</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
