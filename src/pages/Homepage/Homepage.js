import React from "react";
import { useState } from "react";
import Nav from "../../components/nav/nav";
import Main from "../../components/main/main";
import HeaderTable from "./HeaderTable";
import EditUser from "../../components/editUser/EditUser";

const Homepage = (props) => {
  const { users, onDeleteTodo } = props;
  const [isOpenModal, setOpenModal] = useState(false);
  const [userDemo, setUserDemo] = useState();
  console.log("🚀 ~ file: Homepage.js:7 ~ Homepage ~ users:", users);
  const handleOpenModal = (user) => {
    console.log("🚀 ~ file: Homepage.js:17 ~ handleOpenModal ~ user:", user);
    setUserDemo(user);
    setOpenModal(!isOpenModal);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const fisrtIndex = lastIndex - recordsPerPage;
  const records = users.slice(fisrtIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div>
      <div className="user">
        <Nav />
        <table
          className={
            isOpenModal
              ? "table table-striped class-example"
              : "table table-striped"
          }
        >
          <HeaderTable />
          {records.map((user, index) => {
            return (
              <Main
                user={user}
                index={index}
                onDeleteTodo={onDeleteTodo}
                handleOpenModal={handleOpenModal}
              />
            );
          })}
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        {isOpenModal && (
          <div className="center-screen">
            <EditUser user={userDemo} />
          </div>
        )}
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Homepage;
