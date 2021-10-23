import React from "react";
import search from "../Assets/search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-left">
        <img src={search} alt="" />
        <div className="search-text-container">
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="user-input"
          />
        </div>
        <p className="error-message">No results</p>
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
