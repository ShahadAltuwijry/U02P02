// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Sign = () => {
  const [logged, setLogged] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    setLogged(JSON.parse(userLogged));
  }, []);

  return (
    <div className="loginWrapper">
      <button
        className="backBtn"
        onClick={() => {
          navigate(-1);
        }}
      >
        العودة للخلف
      </button>
      {!logged ? (
        <div className="innerDiv">
          {/* <h1>مرحباً بك!</h1>
        <h1>Welcome!</h1> */}
          <button
            onClick={() => {
              navigate("/SignIn");
            }}
            className="loginBtn"
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => {
              navigate("/SignUp");
            }}
            className="loginBtn"
          >
            تسجيل مستخدم جديد
          </button>
        </div>
      ) : (
        navigate("/UserPage")
      )}
    </div>
  );
};

export default Sign;
