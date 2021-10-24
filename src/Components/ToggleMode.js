import React from "react";
import "./ToggleMode.css";
import moon from "../Assets/moon.svg";

const ToggleMode = ({ themeToggler }) => {
  return (
    <div className="toggle-container" onClick={themeToggler}>
      <p className="dark-text">DARK</p>
      <img className="toggle-icon" src={moon} alt="" />
    </div>
  );
};

export default ToggleMode;
