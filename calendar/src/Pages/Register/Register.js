import React, { useState } from "react";
import "./Register.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/inputs";
// import { useNavigate } from "react-router-dom";
import UserServices from "../../Services/Service";

const Register = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState([]);
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await UserServices.register({
        name: form.name,
        lastname: form.lastname,
        birthdate: form.birthdate,
        country: form.country,
        city: form.city,
        email: form.email,
        password: form.password,
      });
      if (data) {
        const responseLogin = await UserServices.login({
          name: form.name,
          email: form.email,
          password: form.password,
        });
        if (responseLogin === true) {
          alert("funcionou");
        }
      }
      setLoading(false);
    } catch (err) {
      alert("deu ruim" + err);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

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
            name="name"
            type="text"
            placeholder="Your first name"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>last name</label>
          <Input
            name="lastname"
            type="text"
            placeholder="Your last name"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>birth date</label>
          <Input
            name="birthdate"
            type="text"
            placeholder="MM/DD/YYYY"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>Country</label>
          <Input
            name="country"
            type="text"
            placeholder="Your country"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>City </label>
          <Input
            name="city"
            type="text"
            placeholder="Your city"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>e-mail</label>
          <Input
            name="email"
            type="email"
            placeholder="Valid e-mail here"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            name="password"
            type="password"
            placeholder="Your password"
            onChange={handleChange}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit} disabled={loading === true}>Register Now</button>
        {/* <NavLink to="login">Sing in</NavLink> */}
        <div>
          <a href="./">link</a>
        </div>
      </div>
      <Imagens />
    </div>
  );
};

export default Register;