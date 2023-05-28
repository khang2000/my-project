import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import AddUser from "./pages/AddUser/AddUser";
import User from "./pages/User/User";
import { useState } from "react";
const initialUsers = [
  {
    id: "1",
    userName: "Nguyen VaN A",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Engineer",
    userImage:
      "https://vapa.vn/wp-content/uploads/2022/12/tai-hinh-nen-anime-ngau-001.jpg",
  },
  {
    id: "2",
    userName: "Nguyen THi tuoi",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Accounting",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-4-1672891473805339716913.png",
  },
  {
    id: "3",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-20-16728916028822010149407.png",
  },
  {
    id: "4",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/4/6/be1-164922643669587606129.jpg",
  },
  {
    id: "5",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/4/6/be4-1649226446729738810615.jpg",
  },
  {
    id: "6",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/4/6/be5-16492264500811439142899.jpg",
  },
  {
    id: "7",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-18-16728915910371146050735.png",
  },
  {
    id: "8",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-14-16728915684691946880143.png",
  },
  {
    id: "9",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-13-1672891559219628882211.png",
  },
  {
    id: "10",
    userName: "Tran van a",
    userCmnd: "12345678",
    userDateOfBirth: "01/01/2000",
    userSex: "Nam",
    userAddressBorn: "Ha Noi",
    userPosition: "Secretary",
    userImage:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/5/photo-12-16728915530391956881054.png",
  },
];
const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const onAddNewUserToUserList = (user) => {
    const newUser = {
      ...user,
      id: uuidv4(),
    };
    const newUserList = [...users, newUser];
    setUsers(newUserList);
    console.log(users);
  };
  const onDeleteTodo = (todoId) => {
    console.log("🚀 ~ file: App.js:34 ~ onDeleteTodo ~ todoId:", todoId);
    const newDeleteUser = users.filter((newUser) => newUser.id !== todoId);
    setUsers(newDeleteUser);
  };
  return (
    <div className="App">
      {/* <InputInfor /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Homepage users={users} onDeleteTodo={onDeleteTodo} />}
          />
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
