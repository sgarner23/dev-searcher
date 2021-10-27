import React from "react";
import "./ToggleMode.css";
import moon from "../Assets/moon.svg";
import sun from "../Assets/sun.svg";

const ToggleMode = ({ themeToggler, theme }) => {
  return (
    <div className="toggle-container" onClick={themeToggler}>
      <p className="dark-text">{theme === "light" ? "DARK" : "LIGHT"}</p>
      <img
        className="toggle-icon"
        src={theme === "light" ? moon : sun}
        alt=""
      />
    </div>
  );
};

export default ToggleMode;
