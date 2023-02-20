import React from "react";
import "./Register.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/Inputs";
import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../Hook/useAuth";
// import axios from "axios";



const Register = () => {
  // const { register } = useAuth();
  const navigate = useNavigate();

  

  const handleRegister = data => {
    console.log(data)
    


    // if (
    //   !name |
    //   !password |
    //   !email |
    //   !country |
    //   !city |
    //   !birthdate |
    //   !lastName
    // ) {
    //   setError("Fill in all fields");
    //   return;
    // } else if (this.password !== this.confirmPassword) {
    //   setError("different passwords");
    //   return;
    // }

    // const res = register(
    //   name,
    //   password,
    //   email,
    //   country,
    //   city,
    //   birthdate,
    //   lastName
    // );

    // if (res) {
    //   setError(res);
    //   return;
    // }
    navigate("/")
  };

  
  // const [error, setError] = useState("");
  

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
            // value={firstName}
            type="text"
            placeholder="Your first name"
            // onChange={(e) => [this.name(e.target.value, setError(""))]} // api
          />
        </div>
        <div className="label_chain">
          <label>last name</label>
          <Input
            // value={this.lastName}
            type="text"
            placeholder="Your last name"
            // onChange={(e) => [setLastName(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>birth date</label>
          <Input
            // value={this.birthDate}
            type="text"
            placeholder="MM/DD/YYYY"
            // onChange={(e) => [setBirthdate(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>Country</label>
          <Input
            // value={this.country}
            type="text"
            placeholder="Your country"
            // onChange={(e) => [this.country(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>City </label>
          <Input
            // value={this.city}
            type="text"
            placeholder="Your city"
            // onChange={(e) => [setCity(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>e-mail</label>
          <Input
            // value={this.email}
            type="email"
            placeholder="Valid e-mail here"
            // onChange={(e) => [setEmail(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            // value={this.password}
            type="password"
            placeholder="Your password"
            // onChange={(e) => [setPassword(e.target.value, setError(""))]}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            // value={this.confirmPassword}
            type="password"
            placeholder="Confirm your password"
            // onChange={(e) => [setConfirmPassword(e.target.value, setError(""))]}
          />
        </div>
        {/* <div>{error}</div> */}

        <button type="button" onClick={handleRegister}>
          Register Now
        </button>
        <Link to="/" className="linkLogin">
          Sing in
        </Link>
      </div>
      <Imagens />
    </div>
  );
};

export default Register;
