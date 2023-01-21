import React from "react";
import "./Register.css";
import Imagens from "../../components/imagens/img";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";


const Register = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // } 


  return (
    <div className="main">
      <div className="forms">
        <div className="texts">
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>
        </div>
        <div className="label_chain">
          <label>first name </label>
          <input type="text" placeholder="Your first name" />
        </div>
        <div className="label_chain">
          <label>last name</label>
          <input placeholder="Your last name" />
        </div>
        <div className="label_chain">
          <label>birth date</label>
          <input placeholder="YMM/DD/YYYY" />
        </div>
        <div className="label_chain">
          <label>Country</label>
          <input placeholder="Your Country" />
        </div>
        <div className="label_chain">
          <label>City </label>
          <input placeholder="Your City" />
        </div>
        <div className="label_chain">
          <label>e-mail</label>
          <input placeholder="Valid e-mail here" />
        </div>
        <div className="label_chain">
          <label>password</label>
          <input placeholder="Your password" />
        </div>
        <div className="label_chain">
          <label>password</label>
          <input placeholder="Confirm your password" />
        </div>
        <button type="submit">Register Now</button>
      </div>
      <Imagens/>
    </div>
  );
};

export default Register;
