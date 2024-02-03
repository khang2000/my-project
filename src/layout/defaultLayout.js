import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "../store-toolkit/reducers/userSlice";

export default function DefaultLayout() {
  const [login, setLogin] = useState(0);
  const [isAdmin, setIsAdmin] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(1);
      const username = localStorage.getItem("user");
      fetch(`http://localhost:4000/user/${username}`).then(async (res) => {
        const data = await res.json();
        console.log(data);
        // dispatch(setUser(data || {}));
        dispatch(userSlice.actions.setUser(data || {}));
        if (data?.role.includes("admin")) {
          setIsAdmin(1);
        } else {
          setIsAdmin(0);
        }
      });
    } else setLogin(0);
  }, [dispatch]);
  return (
    <>
      <nav>
        {login === 0 ? (
          <div>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div>
            {isAdmin ? (
              <Link to="/">Homepage</Link>
            ) : (
              <Link to={"/user/id"}>User</Link>
            )}
          </div>
        )}
      </nav>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}
