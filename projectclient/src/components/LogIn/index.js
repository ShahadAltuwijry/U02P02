import React, { useState } from "react";
import "./style.css";

const LogIn = () => {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="loginWrapper">
      <div className="innerDiv">
        {/* <h1>مرحباً بك!</h1>
        <h1>Welcome!</h1> */}
        {signin ? (
          <div className="showSignIn">
            <form>
              <input type="text" name="userName" placeholder="Enter username" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </form>
          </div>
        ) : null}
        {signup ? (
          <div className="showSignUp">
            <form>
              <input type="text" name="userName" placeholder="Enter username" />
              <input type="text" name="userName" placeholder="Enter email" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </form>
          </div>
        ) : null}
        <div className="showSignUp"></div>
        <button
          onClick={() => setSignin(!signin && signup == false)}
          className="loginBtn"
        >
          Sign In
        </button>
        <button
          onClick={() => setSignup(!signup && signin == false)}
          className="loginBtn"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LogIn;
