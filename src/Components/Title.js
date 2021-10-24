import React from "react";
import ToggleMode from "./ToggleMode";
import "./Title.css";

const Title = ({ themeToggler }) => {
  return (
    <div className="title-container">
      <p className="title-text">devfinder</p>
      <ToggleMode themeToggler={themeToggler} />
    </div>
  );
};

export default Title;
