import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeColor = () => {
    console.log(window.scrollY);
    if (window.scrollY > 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className={navbar ? "navBar active" : "navBar"}>
        <div className="navWrapper">
          <button
            className="signBtn"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Sign in/up
          </button>
          <img src="./روح السعودية.png" className="logo" alt="logo" />
          <div className="side">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/menu.png"
              className="sideMenu"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
