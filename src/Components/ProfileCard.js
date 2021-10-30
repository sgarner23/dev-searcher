import React from "react";
import "./ProfileCard.css";
import location from "../Assets/location.svg";
import twitter from "../Assets/twitter.svg";
import website from "../Assets/website.svg";
import company from "../Assets/company.svg";
import { useState } from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="left-side-card">
        <img src={data.avatarPic} className="profile-image"></img>
      </div>

      <div className="right-side-card">
        <div className="title-date">
          <p className="git-title profile-text">The Octocat</p>
          <p className="date">Joined 25 Jan 2011</p>
        </div>
        <p className="handle">@octocat</p>
        <p className="bio profile-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          tempore fugiat sapiente porro.
        </p>
        <div className="stats">
          <div>
            <p className="stat-title profile-text">Repos</p>
            <p className="numbers profile-text">8</p>
          </div>
          <div>
            <p className="stat-title profile-text">Followers</p>
            <p className="numbers profile-text">3938</p>
          </div>
          <div>
            <p className="stat-title profile-text">Following</p>
            <p className="numbers profile-text">9</p>
          </div>
        </div>
        <div className="links">
          <div className="link-container location">
            <img className="location-img filter" src={location} alt="" />
            <p className="link-text profile-text">San Francisco</p>
          </div>
          <div className="link-container twitter">
            <img src={twitter} alt="" className="filter-gray" />
            <p className="link-text not-available">Not Available</p>
          </div>
        </div>
        <div className="links">
          <div className="link-container website-link">
            <img className="filter" src={website} alt="" />
            <a className="link-text website-url profile-text" href="#">
              https://github.blog
            </a>
          </div>
          <div className="link-container work">
            <img className="filter" src={company} alt="" />
            <p className="link-text profile-text">@github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
