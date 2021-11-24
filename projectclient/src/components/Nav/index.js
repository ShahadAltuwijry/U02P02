import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Nav = () => {
  // const [navbar, setNavbar] = useState(false);
  // const [backGroundColor, setBackGroundColor] = useState({
  //   backgroundColor: "transparent",
  // });
  // // const [sidebar, setSidebar] = useState(false);
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

  return (
    <>
      <div className="navWrapper">
        <button
          className="signBtn"
          onClick={() => {
            navigate("/Sign");
          }}
        >
          تسجيل الدخول
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
        </div>
      </div>
    </>
  );
};
export default Nav;
