import React, { useState } from "react";
import "./Dashboard.css";
import Logo from "./compass.png";
import icon from "./icon.png";
import { Link } from "react-router-dom";
import InputDashBoard from "../../components/Inputs/InputDash";
import Selections from "../../components/Selection/Select";

const Dash = () => {
  const relogio = new Date();
  const hora = relogio.getHours();
  const minuto = relogio.getMinutes();
  const dia = relogio.getDate();
  const ano = relogio.getFullYear();
  const [weather, setWeather] = useState();

  const handleWeather = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ab4c360a7a424575a55181943231802&q=Franca&lang=pt`
    )
      .then((res) => {
        if (res.ok) return res.json();
        else {
          console.log(res);
        }
      })
      .then((data) => {
        // console.log(data);
        setWeather(data);
        console.log(weather)
      });
  };

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
    <div className="mainDash">
      <header className="headerDash">
        <div className="textDash">
          <h1>Weekly Planner</h1>
          <p>Use this planner to organize your daily issues.</p>
        </div>
        <div className="timeDash">
          <h2>
            {hora}:{minuto}
          </h2>
          <p>
            {monthNames[relogio.getMonth()]} {dia}th, {ano}
          </p>
        </div>
          {weather.map(weather.current.condition.text)}
        <div>
        
        </div>
       
        <div className="exitDash">
          <img id="logoimg" src={Logo} alt="Logo compass" />
          <img id="icon" src={icon} alt="Icon" />
          <Link to="/">Logout</Link>
        </div>
      </header>

      <div className="ActionSectionDash">
        <div>
          <InputDashBoard
            // value={value}
            // type={type}
            placeholder="Task or issue"
            // onChange={onChange}
          />
        </div>

        <Selections />
      </div>

      <div className="BoardDash"></div>
    </div>
  );
};

export default Dash;
