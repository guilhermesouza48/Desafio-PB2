import React, { useState } from "react";
import "./Register.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/inputs";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      !name |
      !password |
      !email |
      !country |
      !city |
      !birthdate |
      !lastName
    ) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== confirmPassword) {
      setError("não são iguais");
      return;
    }

    const res = register(
      name,
      password,
      email,
      country,
      city,
      birthdate,
      lastName
    );

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="main">
      <div className="forms">
        <div className="texts">
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>
        </div>
        <div className="label_chain">
          <label>first name </label>
          <Input
            value={name}
            type="text"
            placeholder="Your first name"
            onChange={(e) => [setName(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>last name</label>
          <Input
            value={lastName}
            type="text"
            placeholder="Your last name"
            onChange={(e) => [setLastName(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>birth date</label>
          <Input
            value={birthdate}
            type="text"
            placeholder="MM/DD/YYYY"
            onChange={(e) => [setBirthdate(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>Country</label>
          <Input
            value={country}
            type="text"
            placeholder="Your country"
            onChange={(e) => [setCountry(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>City </label>
          <Input
            value={city}
            type="text"
            placeholder="Your city"
            onChange={(e) => [setCity(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>e-mail</label>
          <Input
            value={email}
            type="email"
            placeholder="Valid e-mail here"
            onChange={(e) => [setEmail(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            value={password}
            type="password"
            placeholder="Your password"
            onChange={(e) => [setPassword(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => [setConfirmPassword(e.target.value, setError(""))]}
          />
        </div>
        <div>{error}</div>

        <button type="button" onClick={handleRegister}>
          Register Now
        </button>
        <Link to="*">Sing in</Link>
      </div>
      <Imagens />
    </div>
  );
};

export default Register;
