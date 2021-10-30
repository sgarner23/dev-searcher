import React from "react";
import search from "../Assets/search.svg";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ getUser }) => {
  const [userInput, setUserInput] = useState("");

  function beamDataUp() {
    console.log(userInput);
    getUser(userInput);
    setUserInput("");
  }

  return (
    <div className="search-bar-container">
      <div className="search-left">
        <img src={search} alt="" />
        <div className="search-text-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search GitHub username..."
            className="user-input"
          />
        </div>
        <p className="error-message">No results</p>
      </div>
      <button className="search-btn" onClick={beamDataUp}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
