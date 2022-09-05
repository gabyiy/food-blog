import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Store } from "../../Store";
import { getError } from "../../utils";

const ResetPassword = () => {
  const { state } = useContext(Store);
  const { userReset } = state;
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword,setconfirmNewPassword]= useState("")
  
  const submitHandler = async (e) => {
    e.preventDefault();
try{
    const { data } = await axios.post(
      `/api/users/reset-password/${userReset.oldUser._id}/${userReset.token}`,
      {
        newPassword,
        confirmNewPassword
      }
    );
}catch(err){
  toast.error(getError(err))
}
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
          onChange={(e)=>setconfirmNewPassword(e.target.value)}
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
