import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  const getUsers = async () => {
    const user = await axios.get("http://localhost:5000/user");
    setAllUsers(user.data);
    console.log(user.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    let exist = false;

    allUsers.filter((user) => {
      if (user.userName === userName && user.email === email) {
        exist = true;
      }
    });

    if (exist) {
      Swal.fire({
        title: "اسم المستخدم او البريد مسجل مسبقاً، الرجاء تسجيل الدخول",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/signin");
    }
    if (!exist) {
      const regData = {
        userName: userName,
        email: email,
        password: password,
      };
      axios
        .post(`http://localhost:5000/user`, regData)
        .then((res) => console.log(res.data));
    }
    // navigate("/UserPage"); this didnt work fix it!
  };

  return (
    <div className="loginWrapper">
      <div className="innerDiv">
        <div className="showSignUp">
          <form onSubmit={signUp}>
            <input
              required
              type="text"
              name="userName"
              value={userName}
              placeholder="ادخل اسم المستخدم "
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="ادخل الايميل"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="ادخل كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginBtn" type="submit">
              تسجيل
            </button>
            <br />
            <br />
            <a className="anchor" href="./SignIn">
              هل تملك حسابًا بالفعل؟
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
