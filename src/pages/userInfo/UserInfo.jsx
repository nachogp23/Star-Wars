import React from "react";
import { useLocation } from "react-router-dom";
//import { useUser } from "../../hooks";

const UserInfo = () => {
  // const { user } = useUser();
  // console.log(user);

  const { state } = useLocation();
  const { currentUser } = state;
  const { name, email } = currentUser;

  return (
    <div className="user-info">
      <div className="user-info__container">
        <p>
          <span>User Name: </span>
          {name}
        </p>
        <p>
          <span>User Email: </span>
          {email}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
