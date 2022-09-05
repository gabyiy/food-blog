import axios from "axios";
import React, { useContext, useState } from "react";
import { Store } from "../../Store";

const ResetPassword = () => {
  const { state } = useContext(Store);
  const { userReset } = state;
  const [newPassword, setNewPassword] = useState("");

  console.log(userReset);
  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `/api/users/reset-password/${userReset.oldUser._id}/${userReset.token}`,
      {
        newPassword,
      }
    );
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="confirm-password"
        />
        <br />
        <button type="submit" value="submit">
          Push
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
