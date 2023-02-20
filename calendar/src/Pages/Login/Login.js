import React, { useState } from "react";
import "./Login.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/Inputs";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

import { Label } from "../../components/Label/Label_Chain";

import { Title, Subtitle } from "../../components/Texts/Texts";
import { Buttons } from "../../components/Buttons/Buttons";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email && !password) {
      setError("Wow, invalid username or password.Please, try again!");
      return;
    }

    const res = login(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/dash");
  };

  return (
    <div className="mainLogin">
      <div className="formsLogin">
        <div className="textsLogin">
          <Title>Welcome,</Title>
          <Subtitle>To continue browsing safely, log in to the network.</Subtitle>
        </div>
        <h2>Login</h2>
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

        {/* Vai virar Modal */}
        <div className="errorLogin">{error}</div>

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
