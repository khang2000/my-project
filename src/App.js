import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import AddUser from "./pages/AddUser/AddUser";
import User from "./pages/User/User";
import Home from "./components/home/home";
import Login from "./components/login/Login";
import { useState } from "react";
import { initialUsers } from "./initData";
const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const onAddNewUserToUserList = (user) => {
    const newUser = {
      ...user,
      id: uuidv4(),
    };
    const newUserList = [...users, newUser];
    setUsers(newUserList);
  };
  const onDeleteTodo = (todoId) => {
    const newDeleteUser = users.filter((newUser) => newUser.id !== todoId);
    setUsers(newDeleteUser);
  };
  const updateUser = (user) => {
    const listUser = users.map((item) => {
      if (item.id === user.userId) {
        item.userName = user.userName;
        item.userAddressBorn = user.userAddressBorn;
        item.userImage = user.userImage;
        item.userDateOfBirth = user.userDateOfBirth;
        item.userPosition = user.userPosition;
        item.userSex = user.userSex;
      }
      return item;
    });
    setUsers(listUser);
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home /> */}
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                updateUser={updateUser}
                users={users}
                onDeleteTodo={onDeleteTodo}
              />
            }
          />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/add-user"
            element={<AddUser onAddNewUser={onAddNewUserToUserList} />}
          />
          <Route path="/user/:id" element={<User users={users} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
