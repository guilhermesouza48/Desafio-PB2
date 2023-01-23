import React from "react";
import "./Dashboard.css";

const Dash = () => {
  return (
    <div className="main">
      <header className="header">
        <div className="text">
          <h1>Weekly Planner</h1>
          <p>Use this planner to organize your daily issues.</p>
        </div>
      </header>
      <div className="ActionSection">
        <div className="text">
          <h2>Actions</h2>
        </div>
      </div>
      <div className="Board">

      </div>
    </div>
  );
};

export default Dash;
