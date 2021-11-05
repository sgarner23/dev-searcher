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
        <div className="name-handle-date-container">
          <div className="title-date">
            <p className="git-title profile-text">{data.name}</p>
            <p className="handle">{data.handle}</p>
          </div>
          <p className="date">{`Joined ${data.dateJoined}`}</p>
        </div>
        <div className="bio-container">
          <p className="bio profile-text">
            {data.bio ? data.bio : `Profile has no bio.`}
          </p>
        </div>
        <div className="stats">
          <div>
            <p className="stat-title profile-text">Repos</p>
            <p className="numbers profile-text">{data.repos}</p>
          </div>
          <div>
            <p className="stat-title profile-text">Followers</p>
            <p className="numbers profile-text">{data.followers}</p>
          </div>
          <div>
            <p className="stat-title profile-text">Following</p>
            <p className="numbers profile-text">{data.following}</p>
          </div>
        </div>
        <div className="links">
          <div className="link-container location">
            <img className="location-img filter" src={location} alt="" />
            <p className="link-text profile-text">
              {!data.location ? "No location listed" : data.location}
            </p>
          </div>
          <div className="link-container twitter">
            <img src={twitter} alt="" className="filter" />
            <p className="link-text profile-text twitter-text">
              {!data.twitter ? "No Twitter listed" : data.twitter}
            </p>
          </div>
        </div>
        <div className="links">
          <div className="link-container website-link">
            <img className="filter" src={website} alt="" />
            <a className="link-text website-url profile-text">
              {!data.blog ? "No website listed" : data.blog}
            </a>
          </div>
          <div className="link-container work">
            <img className="filter" src={company} alt="" />
            <p className="link-text profile-text">
              {!data.company ? "No company listed" : data.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
