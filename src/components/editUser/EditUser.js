import React from "react";
import InputInfor from "../../components/inputInfor/inputInfor";

const EditUser = (props) => {
  const text = { text: "Cập nhật" };
  return (
    <div>
      <InputInfor user={props.user} text={text} />
    </div>
  );
};

export default EditUser;
