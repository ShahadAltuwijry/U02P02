import React from "react";
import Footer from "./../Footer";
import Nav from "./../Nav";
import "./style.css";

const UserPage = () => {

  

  return (
    <div className="userDiv">
      <Nav />
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
      <Footer />
    </div>
  );
};

export default UserPage;
