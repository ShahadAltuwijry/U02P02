// import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom"; { useState }
import "./style.css";

const SignIn = () => {
  return (
    <div className="loginWrapper">
      <div className="innerDiv">
        <div className="showSignIn">
          <form>
            <input
              type="text"
              name="userName"
              placeholder="ادخل اسم المستخدم"
            />
            <input
              type="password"
              name="password"
              value=""
              placeholder="ادخل كلمة المرور"
            />
            <button className="loginBtn" type="submit">
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
