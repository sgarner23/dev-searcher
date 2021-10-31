import logo from "./logo.svg";
import "./App.css";

import Title from "./Components/Title";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const BASE_URL = `https://api.github.com/users/`;
  const [data, setData] = useState({
    avatarPic: "",
    name: "",
    handle: "",
    dateJoined: "",
    bio: null,
    repos: 0,
    followers: 0,
    following: 0,
    location: "",
    blog: null,
    twitter: null,
    company: "",
  });

  function formatDate(dateProperty) {
    let dateMiliSeconds = Date.parse(dateProperty);
    let formattedDate = new Date(dateMiliSeconds).toDateString();

    let dateArr = formattedDate.split(" ");
    const newDateArr = [dateArr[2], dateArr[1], dateArr[3]];

    return newDateArr.join(" ");
  }

  function updateData(resData) {
    setData({
      ...data,
      avatarPic: resData.avatar_url,
      name: resData.name,
      handle: `@${resData.login}`,
      dateJoined: formatDate(resData.created_at),
      bio: resData.bio,
      repos: resData.public_repos,
      followers: resData.followers,
      following: resData.following,
      location: resData.location,
      blog: resData.blog,
      twitter: resData.twitter_username,
      company: resData.company,
    });
  }

  async function getUser(userInput) {
    const res = await axios.get(BASE_URL + `${userInput}`);
    updateData(res.data);
  }

  useEffect(() => {
    getUser("octocat");
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <Title themeToggler={themeToggler} theme={theme} />
        <SearchBar getUser={getUser} />
        <ProfileCard data={data} />
      </div>
    </ThemeProvider>
  );
}

export default App;
