import React from "react";
import { useState } from "react";
import Nav from "../../components/nav/nav";
import Main from "../../components/main/main";
import HeaderTable from "./HeaderTable";
import EditUser from "../../components/editUser/EditUser";

const Homepage = (props) => {
  const { users, onDeleteTodo } = props;
  const [isOpenModal, setOpenModal] = useState(false);
  // SEARCH
  const [search, setSearch] = useState("");

  // UPDATE
  const [userDemo, setUserDemo] = useState();
  console.log("🚀 ~ file: Homepage.js:7 ~ Homepage ~ users:", users);
  const handleOpenModal = (user) => {
    console.log("🚀 ~ file: Homepage.js:17 ~ handleOpenModal ~ user:", user);
    setUserDemo(user);
    setOpenModal(!isOpenModal);
  };
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // const [recordsPerPage, setRecordsPerPage] = useState();
  // const handleRecord = () => {
  //   setRecordsPerPage(recordsPerPage.i);
  // };
  const [recordsPerPage, setRecordsPerPage] = useState("3");
  const lastIndex = currentPage * recordsPerPage;
  const fisrtIndex = lastIndex - recordsPerPage;
  const records = users.slice(fisrtIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <div>
      <div className="user">
        <Nav />
        <div className="nav">
          <form>
            <label for="user">Hiển thị</label>
            <select>
              <option
                onClick={(e) => setRecordsPerPage(e.target.value)}
                value={1}
              >
                1
              </option>
              <option onChange={(e) => setRecordsPerPage(e.target.value)}>
                2
              </option>
              <option onChange={(e) => setRecordsPerPage(e.target.value)}>
                3
              </option>
            </select>
          </form>

          <form>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
            ></input>
          </form>
        </div>

        <table
          className={
            isOpenModal
              ? "table table-striped class-example"
              : "table table-striped"
          }
        >
          <HeaderTable />
          {records
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.userName.toLowerCase().includes(search);
            })
            .map((user, index) => {
              return (
                // .splice(ar.indexOf('one'), 1)
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
