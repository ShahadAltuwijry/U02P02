import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const [logged, setLogged] = useState([]);

  const navigate = useNavigate();

  // const changeColor = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 15) {
  //     // setNavbar(true);
  //     console.log("here");
  //     setBackGroundColor({ backgroundColor: "white" });
  //   } else {
  //     // setNavbar(false);
  //     setBackGroundColor({ backgroundColor: "transparent" });
  //   }
  // };
  // window.addEventListener("scroll", changeColor);

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    setLogged(JSON.parse(userLogged));
  }, []);

  return (
    <>
      <div className="navWrapper">
        <div className="signBtnDiv">
          {!logged ? (
            <button
              className="signBtn"
              onClick={() => {
                navigate("/Sign");
              }}
            >
              تسجيل الدخول
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="logoDiv">
          <img
            src="./روح السعودية.png"
            className="logo"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="side">
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-User-essential-collection-bearicons-glyph-bearicons.png"
            className="sideMenu"
            alt="sideicon"
            onClick={() => {
              navigate("/UserPage");
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Nav;
