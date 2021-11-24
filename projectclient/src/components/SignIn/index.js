import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const SignIn = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getUsers = async () => {
    const user = await axios.get("http://localhost:5000/user");
    setAllUsers(user.data);
    console.log(user.data);
  };
  console.log(allUsers);

  useEffect(() => {
    getUsers();
  }, []);

  const signin = (e) => {
    e.preventDefault();
    let exist = false;
    // eslint-disable-next-line
    allUsers.filter((user) => {
      if (user.userName === userName && user.password === password) {
        exist = true;
      }
    });
    if (exist) {
      localStorage.setUser("user", JSON.stringify({ userName }));
    }
    navigate("/UserPage");
    if (!exist) {
      Swal.fire({
        title:
          "اسم المستخدم او كلمة المرور خاطئة، الرجاء التأكد من المعلومات المدخلة",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/signin");
    }
  };
  return (
    <div className="loginWrapper">
      <div className="innerDiv">
        <div className="showSignIn">
          <form onSubmit={signin}>
            <input
              required
              type="text"
              name="userName"
              placeholder="ادخل اسم المستخدم"
              onSubmit={(e) => setUserName(e.target.value)}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="ادخل كلمة المرور"
              onSubmit={(e) => setPassword(e.target.value)}
            />
            <button className="loginBtn" type="submit" value="signin">
              تسجيل الدخول
            </button>
            <br />
            <br />
            <a className="anchor" href="./SignUp">
              لا تملك حسابًا بعد؟
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
