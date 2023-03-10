import React, { useState } from "react";
import "./Login.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/Inputs";
import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../Hook/useAuth";
import axios from "axios";
import Load from "../../components/Loading/Loading";

import { Label } from "../../components/Label/Label_Chain";

import { Title, Subtitle } from "../../components/Texts/Texts";
import { Buttons } from "../../components/Buttons/Buttons";

const Login = () => {
  // const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    setLoading(true)
    // if (!email && !password) {

    //   setError("Wow, invalid username or password.Please, try again!");
    //   return;
    // }

    // const res = login(email, password);

    // if (res) {
    //   setError(res);
    //   return;
    // }

    const api = axios.create({
      baseURL: "https://latam-challenge-2.deta.dev/api/v1/",
    });

    api.post("users/sign-in", { email, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response);
        setLoading(false)
        navigate("/dash");
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false)
          // setTitle(error.response.status);
          // setmensagem(error.response.data.message);
          // handleOpenModal();
        } else if (error.request) {
          console.log(error.request);
          setLoading(false)
        } else {
          console.log("Error", error.message);
          setLoading(false)
        }
        console.log(error.config);
        setLoading(false)
      });
  };

  return (
    <div className="mainLogin">
      <div className="formsLogin">
        <div className="textsLogin">
          <Title>Welcome,</Title>
          <Subtitle>
            To continue browsing safely, log in to the network.
          </Subtitle>
        </div>

        <div className="titleLogin">
          <h2>Login</h2>
        </div>

        <Label>
          <Input
            value={email}
            type="text"
            placeholder="user name"
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
        </Label>

        <Label>
          <Input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => [setPassword(e.target.value)]}
          />
        </Label>

        <div className="errorLogin">{error}</div>

        {loading ? <Load /> : ""}

        <Buttons onClick={handleLogin}>Login</Buttons>

        <Link to="/regist" className="link">
          Register
        </Link>
      </div>
      <Imagens />
    </div>
  );
};

export default Login;
