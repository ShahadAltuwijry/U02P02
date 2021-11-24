// import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Sign = () => {
  // const [signin, setSignin] = useState(false); //buttons states
  // const [signup, setSignup] = useState(false); //buttons states
  const navigate = useNavigate();

  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const signUp = (e) => {
  //   e.preventDefault();
  //   const regData = {
  //     userName: userName,
  //     email: email,
  //     password: password,
  //   };
  //   axios
  //     .post(`http://localhost:5000/user`, regData)
  //     .then((res) => console.log(res))
  //     .then(navigate("/UserPage")); //this is a bug it will navigate even if its empty don't forget to fix it !!
  // };

  return (
    <div className="loginWrapper">
      <div className="innerDiv">
        {/* <h1>مرحباً بك!</h1>
        <h1>Welcome!</h1> */}
        <button
          // onClick={() => setSignin(!signin && signup === false)}
          onClick={() => {
            navigate("/SignIn");
          }}
          className="loginBtn"
        >
          تسجيل الدخول
        </button>
        <button
          // onClick={() => setSignup(!signup && signin === false)}
          onClick={() => {
            navigate("/SignUp");
          }}
          className="loginBtn"
        >
          تسجيل مستخدم جديد
        </button>
      </div>
    </div>
  );
};

export default Sign;
