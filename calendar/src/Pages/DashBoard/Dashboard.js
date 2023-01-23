import React from "react";
import "./Dashboard.css";
import Logo from "./compass.png";
import icon from "./icon.png";
import { Link } from "react-router-dom";



const Dash = () => {
  const relogio = new Date();
  const hora = relogio.getHours();
  const minuto = relogio.getMinutes();
  const dia = relogio.getDate();
  const ano = relogio.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="main">
      <header className="header">
        <div className="text">
          <h1>Weekly Planner</h1>
          <p>Use this planner to organize your daily issues.</p>
        </div>
        <div className="time">
          <h2>
            {hora}:{minuto}
          </h2>
          <p>
            {monthNames[relogio.getMonth()]} {dia}th, {ano}
          </p>
        </div>
        <div></div>
        <div className="exit">
          <img id="logoimg" src={Logo} alt="Logo compass" />
          <img id="icon" src={icon} alt="Icon" />
          <Link to="/">Logout</Link>
        </div>
      </header>
      <div className="ActionSection">
        <div></div>
      </div>
      <div className="Board"></div>
    </div>
  );
};

export default Dash;
