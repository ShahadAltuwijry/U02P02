import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./style.css";

const ExternalPage = () => {
  const [program, setProgram] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/programs");

    // console.log(data.data[0].data);

    setProgram(res.data);
  };

  useEffect(() => {
    {
      program.map((item, i) => (window.location.href = `${item.origLink}`));
    }
  }, []);

  return (
    <div>
      <h1>Have fun!</h1>
    </div>
  );
};

export default ExternalPage;
