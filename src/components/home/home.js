import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
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
  const history = useNavigate();
  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpVal;
    if (name === "") {
      alert("fill your name");
    } else if (email === "") {
      alert("fill your email");
    } else if (!email.includes("@")) {
      alert("your email invalid");
    } else if (date === "") {
      alert("fill your date of birth");
    } else if (password === "") {
      alert("fill your password");
    } else if (password.length < 5) {
      alert("password more than 5 characters");
    } else {
      console.log("successfully!");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpVal]));
      history("/login");
    }
  };
  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Đăng ký</h3>
            <form>
              <div className="mb-3 col-lg-6">
                <input
                  type="text"
                  placeholder="enter your name?"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={getData}
                  name="name"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="enter your email?"
                  onChange={getData}
                  name="email"
                />
              </div>
              <div className="mb-3 col-lg-6">
                <input
                  type="date"
                  className="form-control"
                  onChange={getData}
                  name="date"
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
                <Link to="/login">Đăng nhập</Link>
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
    </div>
  );
};

export default Home;
