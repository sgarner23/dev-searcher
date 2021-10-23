import React from "react";
import ToggleMode from "./ToggleMode";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <p className="title-text">devfinder</p>
      <ToggleMode />
    </div>
  );
};

export default Title;
