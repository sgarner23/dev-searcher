import logo from "./logo.svg";
import "./App.css";

import Title from "./Components/Title";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <Title themeToggler={themeToggler} />
        <SearchBar />
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
