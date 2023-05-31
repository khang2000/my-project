import React from "react";
import InputInfor from "../../components/inputInfor/inputInfor";
import Header from "../../components/header/header";

const AddUser = (props) => {
  const { onAddNewUser } = props;
  return (
    <div>
      <Header />
      <div className="inputInfor">
        <InputInfor onAddNewUser={onAddNewUser} />
      </div>
    </div>
  );
};

export default AddUser;
