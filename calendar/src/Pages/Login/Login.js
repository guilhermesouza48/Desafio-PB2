import React, { useState } from "react";
import "./Login.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/inputs";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

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
    <div className="main">
      <div className="forms">
        <div className="texts">
          <h1>Welcome,</h1>
          <p>To continue browsing safely, log in to the network.</p>
        </div>
        <div className="label_chain">
          <Input
            value={email}
            type="text"
            placeholder="user name"
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
        </div>

        <div className="label_chain">
          <Input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => [setPassword(e.target.value)]}
          />
        </div>

        <div className="label_chain">{error}</div>

        <button type="button" onClick={handleLogin}>
          Log in
        </button>
        <Link to="/regist">Register</Link>
      </div>
      <Imagens />
    </div>
  );
};

export default Login;
