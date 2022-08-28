import React, { useContext } from "react";
import { Store } from "../Store";

const UserProfile = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { userInfo } = state;
  return <div>{userInfo.name}</div>;
};

export default UserProfile;
