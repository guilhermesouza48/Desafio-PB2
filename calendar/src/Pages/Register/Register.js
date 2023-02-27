import React, { useState } from "react";
import "./Register.css";
import { Imagens } from "../../components/imagens/img";
import Input from "../../components/Inputs/Inputs";
import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../Hook/useAuth";
import Load from "../../components/Loading/Loading";
import axios from "axios";
import Modal from "react-modal";
import { Buttons } from "../../components/Buttons/Buttons";

Modal.setAppElement("#root");

const Register = () => {
  // const { register } = useAuth();
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const [modalIsopen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [title, setTitle] = useState();
  const [mensagem, setmensagem] = useState();
  const [loading, setLoading] = useState(false);

  const handlechangeValues = (props, value) => {
    setUser({ ...user, [props]: value });
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleRegister = (data) => {
    console.log(data);
    setLoading(true);

    const api = axios.create({
      baseURL: "https://latam-challenge-2.deta.dev/api/v1/",
    });

    api
      .post("users/sign-up", user)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
        navigate("/");
      })
      .catch(function (error) {
        if (error.response) {
          setTitle(error.response.status);
          setmensagem(error.response.data.message);
          handleOpenModal();
          setLoading(false);
        } else if (error.request) {
          console.log(error.request);
          setLoading(false);
        } else {
          setLoading(false);
          console.log("Error", error.message);
        }
        console.log(error.config);
        setLoading(false);
      });
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
            value={user.firstName}
            type="text"
            placeholder="Your first name"
            onChange={(e) => handlechangeValues("firstName", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>last name</label>
          <Input
            value={user.lastName}
            type="text"
            placeholder="Your last name"
            onChange={(e) => handlechangeValues("lastName", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>birth date</label>
          <Input
            value={user.birthDate}
            type="text"
            placeholder="YYYY/MM/DD"
            onChange={(e) => handlechangeValues("birthDate", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>Country</label>
          <Input
            value={user.country}
            type="text"
            placeholder="Your country"
            onChange={(e) => handlechangeValues("country", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>City </label>
          <Input
            value={user.city}
            type="text"
            placeholder="Your city"
            onChange={(e) => handlechangeValues("city", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>e-mail</label>
          <Input
            value={user.email}
            type="email"
            placeholder="Valid e-mail here"
            onChange={(e) => handlechangeValues("email", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            value={user.password}
            type="password"
            placeholder="Your password"
            onChange={(e) => handlechangeValues("password", e.target.value)}
          />
        </div>
        <div className="label_chain">
          <label>password</label>
          <Input
            value={user.confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(e) =>
              handlechangeValues("confirmPassword", e.target.value)
            }
          />
        </div>

        {loading ? <Load /> : ""}

        <Buttons type="button" onClick={handleRegister}>
          Register Now
        </Buttons>
        <Link to="/" className="linkLogin">
          Sing in
        </Link>
        {/* <div className="errorLogin">{error}</div> */}

        <div className="modal-container">
          <Modal
            isOpen={modalIsopen}
            onRequestClose={handleCloseModal}
            className="modal-content"
            overlayClassName="modal-overlay"
            contentLabel="example modal"
          >
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className="titleModal">
              <p>{title}</p>
            </div>
            <div className="msgModal">
              <h1>{mensagem}</h1>
            </div>
            
          </Modal>

         
        </div>
      </div>
      <Imagens />
    </div>
  );
};

export default Register;
