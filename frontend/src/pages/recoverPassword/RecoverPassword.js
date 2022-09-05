import axios from "axios";
import React, { useState, useReducer, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Store";
import { getError } from "../../utils";

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
      navigate("/")
    } catch (err) {
      toast.error(getError(err))
    }
  };

  // console.log(user.token);
  console.log(userReset);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {/* <Link to={`/reset-password/${user.oldUser._id}/${user.token}`}>
        <h1>Res</h1>
      </Link> */}
    </div>
  );
};

export default RecoverPassword;
