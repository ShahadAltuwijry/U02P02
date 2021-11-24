import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    const regData = {
      userName: userName,
      email: email,
      password: password,
    };
    axios
      .post(`http://localhost:5000/user`, regData)
      .then((res) => console.log(res))
      .then(navigate("/UserPage")); //this is a bug it will navigate even if its empty don't forget to fix it !!
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
