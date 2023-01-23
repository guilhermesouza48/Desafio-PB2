import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"; // npm install --save react-router-dom
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dash from "../Pages/DashBoard/Dashboard";


// verification login
const Permision = ({Item}) => {

    // sucess login
    const logou = false;

    // fail login
    return logou > 0 ? <Item /> : <Login />;
}


const Routering = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Router>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="regist" element={<Register />} />
            <Route path="register" element={<Permision Item={Dash} />} />
          </Routes>
        </Router>
      </Fragment>
    </BrowserRouter>
  );
};

export default Routering;
