import React, { useState, useEffect, useRef } from "react";
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
  const description = useRef();
  const day = useRef();
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dayAPI, setDayAPI] = useState("monday");

  const setDay = (day) => {
    setDayAPI(day);
    getCard(day);
  };

  const deleteEvent = (id) => {
    getCard(dayAPI);
    deleteHandler(id);
  };

  const deleteHandler = (id) => {
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res;
      })
      .then((data) => {
        getCard(dayAPI);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

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

  useEffect(() => {
    handleWeather();
    getCard(dayAPI);
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

  const storage = JSON.parse(localStorage.getItem("user") || "");
  const token = storage.token;

  const sendDate = () => {
    const user = {
      description: description.current?.value,
      dayOfWeek: day.current?.value,
    };

    console.log(storage);

    addCard(user, token);
  };

  const getCard = (day) => {
    setLoading(true);
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCard(data.events);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const addCard = (info, token) => {
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events`, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getCard(dayAPI);
        console.log(data);
      });
  };

  const deleteAllCards = () => {
    fetch(
      `https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${dayAPI}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getCard(dayAPI);
      })
      .catch((error) => console.log(error));
  };

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
          <h2>
            {weather?.location?.name} - {weather?.location?.region}
          </h2>

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
            enteredRef={description}
          />
        </div>

        <Selections enteredRef={day} />
        <button className="" onClick={sendDate}>
          Add
        </button>

        <button className="" onClick={deleteAllCards}>
          Delete All Cards
        </button>
      </div>

      <div className="BoardDash">
        <div className="days">
          <p onClick={() => setDay("monday")}>Monday</p>{" "}
          <p onClick={() => setDay("tuesday")}>Tuesday</p>{" "}
          <p onClick={() => setDay("wednesday")}>Wednesday</p>{" "}
          <p onClick={() => setDay("thursday")}>Thursday</p>{" "}
          <p onClick={() => setDay("friday")}>Friday</p>{" "}
          <p onClick={() => setDay("saturday")}>Saturday</p>{" "}
          <p onClick={() => setDay("sunday")}>Sunday</p>{" "}
        </div>

        {card.map((item) => {
          const timeAPI = item.createdAt.split("T");
          const formatData = timeAPI[1].split(".");
          const timeEvent = formatData[0].split(":");

          return (
            <div className="card-content">
              {loading ? <p>loading...</p> : ""}
              <p className="description-content">{item.description}</p>

              <p className="horas-content">{`${timeEvent[0]}h ${timeEvent[1]}m`}</p>

              <button
                className="delete-event"
                onClick={() => deleteEvent(item._id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dash;

//guilhermesouzzadejesus@hotmail.com
//123456789
