import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description";
import LogIn from "./components/LogIn";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/description" element={<Description />} />
        <Route exact path="/Login" element={<LogIn />} />
        <Route exact path="/UserPage" element={<UserPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
