import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const history = useNavigate();
  const userLogout = () => {
    localStorage.removeItem("user_login");
    history("/home");
  };

  return (
    <div>
      <div className="log-in"></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/add-user">
                  AddUser
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  AboutUs
                </Link>
              </li>
            </ul>
            <div className="log-out">
              <button
                onClick={userLogout}
                className="nav-link active btn-logout"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
