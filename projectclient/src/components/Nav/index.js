import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <button className="signBtn">Sign in/up</button>
      <img src="./روح السعودية.png" className="logo" />
      <div className="side">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu.png"
          className="sideMenu"
        />
      </div>
    </div>
  );
};

export default Nav;
