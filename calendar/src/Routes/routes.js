import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // npm install --save react-router-dom
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dash from "../Pages/DashBoard/Dashboard";



const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="regist" element={<Register />} />
        <Route path="dash" element={<Dash />} />
      </Routes>
    </Router>
  );
};

export default Routering;
