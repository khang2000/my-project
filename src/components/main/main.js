import React from "react";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Main = (props) => {
  const { user, index, onDeleteTodo, handleOpenModal, handleOpenDetail } =
    props;
  const { id } = user;
  console.log("🚀 ~ file: main.js:8 ~ Main ~ onDeleteTodo:", onDeleteTodo);
  console.log("🚀 ~ file: main.js:8 ~ Main ~ index:", index);
  console.log("🚀 ~ file: main.js:8 ~ Main ~ user:", user);
  // const { userName, userImage, id, userSex, userCmnd } = props;
  return (
    <tbody>
      <tr key={index}>
        <td scope="row">{index + 1}</td>
        <td>
          <img
            style={{ width: "100px", height: "100px" }}
            src={user.userImage}
          ></img>
        </td>
        <td>{user.userName}</td>
        <td>{user.userSex}</td>
        <td>{user.userDateOfBirth}</td>
        <td>{user.userAddressBorn}</td>
        <td>{user.userCmnd}</td>
        <td>
          <p className="status">Đang làm việc</p>
        </td>
        <td>
          <Link to={`/user/${id}`}>
            <FaEye />
          </Link>
        </td>
        <td>
          <FaPencilAlt
            onClick={() => {
              handleOpenModal(user);
            }}
          />
        </td>
        <td>
          <FaTrashAlt
            onClick={() => {
              onDeleteTodo(user.id);
            }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Main;
