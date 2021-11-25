import React, { useState, useEffect } from "react";
import Footer from "./../Footer";
import Nav from "./../Nav";
import "./style.css";

const UserPage = () => {
  const [logged, setLogged] = useState([]);

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    setLogged(JSON.parse(userLogged));
  }, []);

  return (
    <div className="userDiv">
      <Nav />
      {!logged ? (
        <div className="guestDiv">
          <h1 className="guestHead">
            :( ضيفنا الغالي، لا نملك معلومات كافية عنك لاظهار هذه الصفحة لك
          </h1>
          <br />
          <h3> !ابدأ رحلتك الممتعة معنا في السعودية عن طريق التسجيل </h3>
          <br />
          <a href="./signUp" className="anchorg">
            سجل الأن
          </a>
          <br />
          <h3>او اذا كان عندك حساب </h3>
          <br />
          <a href="./signin" className="anchorg">
            سجل دخولك
          </a>
        </div>
      ) : (
        <div className="userDiv"></div>
      )}
      <Footer />
    </div>
  );
};

export default UserPage;
