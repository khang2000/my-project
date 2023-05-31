import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useHistory } from "react";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          render={() => {
            return localStorage.getItem("accessToken") ? (
              <Admin />
            ) : (
              <redirect to="/log-in" />
            );
          }}
        ></Route>
        <Route path="/log-in" element={<Login />}>
          <Login />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Admin() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("accessToken");
    history.replace("/log-in");
  };
  return (
    <div>
      <h2>Admin</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
function Login() {
  const history = useHistory();
  const login = () => {
    localStorage.setItem("accessToken", true);
    history.replace("/admin");
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
