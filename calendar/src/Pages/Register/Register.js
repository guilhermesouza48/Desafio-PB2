import React, { useState } from "react";
import "./Register.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/inputs";
import { useNavigate, NavLink } from "react-router-dom";
import Service from "../../Services/Service";
import {
  validateEmail,
  validatePass,
  validateName,
  validateCity,
  validateConfirm,
  validateLastName,
  validateBirthday,
  validateCountry,
} from "../../Utils/Validate";

const service = new Service();

const Register = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  const validate = () => {
    return (
      validateEmail(form.email) &&
      validatePass(form.password) &&
      validateName(form.name) &&
      validateCity(form.city) &&
      validateConfirm(form.password, form.confirmPassword) &&
      validateLastName(form.lastname) &&
      validateBirthday(form.birthdate) &&
      validateCountry(form.country)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await service.registrar({
        name: form.name,
        lastname: form.lastname,
        birthdate: form.birthdate,
        country: form.country,
        city: form.city,
        email: form.email,
        password: form.password,
      });
      if (data) {
        const responseLogin = await service.login({
          name: form.name,
          email: form.email,
          password: form.password,
        });
        if (responseLogin === true) {
          alert("funcionou");
          navigate("*");
        }
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
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading === true || !validate}
        >
          Register Now
        </button>
        <NavLink to="*">Sing in</NavLink>
        
      </div>
      <Imagens />
    </div>
  );
};

export default Register;
