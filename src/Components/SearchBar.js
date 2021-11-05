import React from "react";
import search from "../Assets/search.svg";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ getUser, isError, setIsError }) => {
  const [userInput, setUserInput] = useState("");

  //lifting the state up and resetting serach bar text
  function beamDataUp() {
    getUser(userInput);
  }

  //setting the userinput to the current state variable and removing error message
  function updateInput(e) {
    setUserInput(e.target.value);
    setIsError(false);
  }

  return (
    <div className="search-bar-container">
      <div className="search-left">
        <img src={search} alt="" className="search-icon" />
        <div className="search-text-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => updateInput(e)}
            placeholder="Search GitHub username..."
            className="user-input"
          />
        </div>
        {isError && <p className="error-message">No results</p>}
      </div>
      <button className="search-btn" onClick={beamDataUp}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
