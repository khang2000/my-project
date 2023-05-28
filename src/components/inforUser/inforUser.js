import React from "react";

const InforUser = (props) => {
  const { users } = props;

  return (
    <div className="infor-user">
      <img src={users.userImage}></img>
      <div className="infor-user-text">
        <h2>{users.userName}</h2>

        <h4>So CMND: {users.userCmnd}</h4>

        <h4>Date of Birth: {users.userDateOfBirth}</h4>

        <h4>Address: {users.userAddressBorn}</h4>
        <h4>Position: {users.userPosition}</h4>
      </div>
    </div>
  );
};

export default InforUser;
