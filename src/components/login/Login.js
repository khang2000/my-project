import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const getData = (e) => {
    const { value, name } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("useryoutube");
    console.log(getUserArr);
    const { email, password } = inpVal;
    if (email === "") {
      alert("fill your email");
    } else if (!email.includes("@")) {
      alert("your email invalid");
    } else if (password === "") {
      alert("fill your password");
    } else if (password.length < 5) {
      alert("password more than 5 characters");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("tài khoản hặc mật khẩu không chính xác");
        } else {
          console.log("userLogin successfully");
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
          history("/");
        }
      }
    }
  };
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left-data mt-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Đăng nhập</h3>
          <form>
            <div className="mb-3 col-lg-6">
              <input
                type="email"
                placeholder="enter your email?"
                className="form-control"
                id="exampleInputEmail1"
                onChange={getData}
                name="email"
              />
            </div>
            <div className="mb-3 col-lg-6">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={getData}
                name="password"
              />
            </div>
            <button
              type="submit"
              onClick={addData}
              className="btn btn-primary col-lg-6"
            >
              Submit
            </button>
          </form>
          <p className="mt-3">
            Already Have an Account{" "}
            <span>
              <Link to="/home">Đăng ký</Link>
            </span>
          </p>
        </div>
        <div className="right-data ">
          <div className="sign-img ">
            <img
              src="https://www.itbriefcase.net/wp-content/uploads/2020/12/hello2-1024x642.jpeg"
              style={{ maxWidth: 480 }}
              alt=""
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
