import React from "react";
import InputInfor from "../../components/inputInfor/inputInfor";

const AddUser = (props) => {
  const { onAddNewUser } = props;
  return (
    <div className="inputInfor">
      <InputInfor onAddNewUser={onAddNewUser} />
    </div>
  );
};

export default AddUser;
