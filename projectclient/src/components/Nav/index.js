import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
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
      <nav className={navbar ? "navBarActive" : "navBar"}>
        <div className="navWrapper">
          <button
            className="signBtn"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Sign in/up
          </button>
          <img
            src="./روح السعودية.png"
            className="logo"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="side">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-User-essential-collection-bearicons-glyph-bearicons.png"
              className="sideMenu"
              alt="sideicon"
              onClick={() => {
                navigate("/UserPage");
              }}
            />
            {/*   {sidebar ? (
              <div className="sideBarDiv">
                <ul>
                  <li
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    اذهب الى الخلف
                    <img
                      className="backIcon"
                      src="https://img.icons8.com/material-outlined/48/000000/circled-left--v1.png"
                      alt="Go Back btn"
                    />
                  </li>
                  <li
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    الرئيسية
                  </li>
                  <li
                    onClick={() => {
                      navigate("/#Paragraph");
                    }}
                  >
                    البرامج
                  </li>
                  <li
                    onClick={() => {
                      navigate("/podcasts");
                    }}
                  >
                    الحزمات
                  </li>
                  <li
                    onClick={() => {
                      navigate("#about");
                    }}
                  >
                    الوجهات السياحية
                  </li>
                  <li
                    onClick={() => {
                      navigate("/UserPage");
                    }}
                  >
                    User page
                  </li>
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
