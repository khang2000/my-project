import React, { useState } from "react";

const InputInfor = (props) => {
  const { user, text } = props;
  const [inputValues, setInputValues] = useState({
    userName: user ? user.userName : "",
    userId: user ? user.id : "", // if(user) user.userName else ""
    userCmnd: user ? user.userCmnd : "",
    userDateOfBirth: user ? user.userDateOfBirth : "",
    userSex: user ? user.userSex : "",
    userAddressBorn: user ? user.userAddressBorn : "",
    userImage: user ? user.userImage : "",
    userPosition: user ? user.userPosition : "",
  });
  const onUserChange = (e) => {
    const { value, name } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    text && text.text === "Cập nhật"
      ? props.updateUser(inputValues)
      : props.onAddNewUser(inputValues);

    // props.onAddNewUser(inputValues);
    // props.updateUser(inputValues);
    setInputValues({
      userName: "",
      userCmnd: "",
      userDateOfBirth: "",
      userSex: "",
      userAddressBorn: "",
      userImage: "",
    });
  };
  return (
    <div>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Họ và Tên
          </label>
          <input
            className="form-control"
            id="userName"
            placeholder="Enter your name"
            value={inputValues.userName}
            name="userName"
            onChange={onUserChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Số CMND
          </label>
          <input
            className="form-control"
            id="userCmnd"
            placeholder="Enter your idnumder"
            value={inputValues.userCmnd}
            name="userCmnd"
            onChange={onUserChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Ngày tháng năm sinh
          </label>
          <input
            className="form-control"
            id="userDateOfBirth"
            placeholder="Enter your Date of Birth"
            value={inputValues.userDateOfBirth}
            name="userDateOfBirth"
            onChange={onUserChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            giới tính
          </label>
          <input
            className="form-control"
            id="userSex"
            placeholder="Enter your sex"
            value={inputValues.userSex}
            name="userSex"
            onChange={onUserChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Nơi Sinh
          </label>
          <input
            className="form-control"
            id="userAddressBorn"
            placeholder="Enter your Address born"
            value={inputValues.userAddressBorn}
            name="userAddressBorn"
            onChange={onUserChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Chức vụ
          </label>
          <input
            className="form-control"
            id="userPosition"
            placeholder="Enter your Position"
            value={inputValues.userPosition}
            name="userPosition"
            onChange={onUserChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Ảnh nhân viên
          </label>
          <input
            className="form-control"
            id="userImage"
            placeholder="Enter your Image"
            value={inputValues.userImage}
            name="userImage"
            onChange={onUserChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {text ? text.text : "Đăng ký"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputInfor;
