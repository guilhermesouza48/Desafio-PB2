import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Logo from "./compass.png";
import icon from "./icon.png";
import { Link } from "react-router-dom";
import InputDashBoard from "../../components/Inputs/InputDash";
import Selections from "../../components/Selection/Select";
import axios from "axios";

const Dash = () => {
  const relogio = new Date();
  const hora = relogio.getHours();
  const minuto = relogio.getMinutes();
  const dia = relogio.getDate();
  const ano = relogio.getFullYear();
  const [weather, setWeather] = useState();


  const handleWeather = () => {
    const userData = localStorage.getItem("user");

    const api = axios.create({
      baseURL: `http://api.weatherapi.com/v1/current.json?key=ab4c360a7a424575a55181943231802&q=${
        JSON.parse(userData).user.city
      }&lang=pt`,
    });

    api
      .get()
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        alert("ERROR: " + err.message);
      });
  };

  // console.log(weather);

  // console.log(weather?.current?.temp_c);

  useEffect(() => {
    handleWeather();
  }, []);

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

        <div className="timeDash">
          <h2>{weather?.location?.name} - {weather?.location?.region}</h2>
       
          <h2>{weather?.current?.temp_c}</h2>
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

//guilhermesouzzadejesus@hotmail.com
