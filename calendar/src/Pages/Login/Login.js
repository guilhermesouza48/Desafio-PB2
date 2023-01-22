import React, { useState } from "react";
import "./Login.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/inputs";
import { useNavigate, NavLink } from "react-router-dom";
import Service from "../../Services/Service";
import {
  validateEmail,
  validatePass,
  validateName,
  validateLastName,
} from "../../Utils/Validate";

const service = new Service();

const Login = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  const validate = () => {
    return (
      validateEmail(form.email) &&
      validatePass(form.password) &&
      validateName(form.name) &&
      validateLastName(form.lastname)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await service.login(form);
      console.log("respons do login", response);

      if (response === true) {
        alert("Sucessfully logged in");
        navigate("/Register");
      }
      if (response === true) {
        alert("funcionou");
      }
      setLoading(false);
    } catch (err) {
      alert("deu ruim" + err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            name="name"
            type="text"
            placeholder="user name"
            onChange={handleChange}
          />
        </div>

        <div className="label_chain">
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading === true || !validate}
        >
          Log in
        </button>
        <NavLink to="regist">Register</NavLink>
      </div>
      <Imagens />
    </div>
  );
};

export default Login;
