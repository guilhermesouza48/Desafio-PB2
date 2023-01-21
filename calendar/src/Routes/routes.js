import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' // npm install --save react-router-dom
import Register from "../Pages/Register/Register";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="mainPage" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default Routering;