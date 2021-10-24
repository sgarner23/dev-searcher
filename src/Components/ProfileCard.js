import React from "react";
import "./ProfileCard.css";
import location from "../Assets/location.svg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="left-side-card">
        <div className="profile-image"></div>
      </div>

      <div className="right-side-card">
        <div className="title-date">
          <p className="git-title">The Octocat</p>
          <p className="date">Joined 25 Jan 2011</p>
        </div>
        <p className="handle">@octocat</p>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          tempore fugiat sapiente porro beatae accusantium illum dicta numquam
          rerum amet sint cum.
        </p>
        <div className="stats">
          <div>
            <p className="stat-title">Repos</p>
            <p className="numbers">8</p>
          </div>
          <div>
            <p className="stat-title">Followers</p>
            <p className="numbers">3938</p>
          </div>
          <div>
            <p className="stat-title">Following</p>
            <p className="numbers">9</p>
          </div>
        </div>
        <div className="links">
          <div className="location">
            <img className="location-img" src={location} alt="" />
            <p className="link-text">San Francisco</p>
          </div>
          <div className="twitter">
            <img src="../Assets/twitter.svg" alt="" />
            <p>Not Available</p>
          </div>
        </div>
        <div className="links">
          <div className="website-link">
            <img src="../Assets/website.svg" alt="" />
            <a className="website-url" href="#">
              https://github.blog
            </a>
          </div>
          <div className="work">
            <img src="../Assets/company.svg" alt="" />
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
