import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // npm install --save react-router-dom
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="regist" element={<Register />} /> 
            </Routes>
        </Router>
    )
}

export default Routering;