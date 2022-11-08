import "./profile.scss";
import MyProfileIcon from "./MyProfileIcon";
import { useState, useEffect, useInsertionEffect } from "react";
import axios from "axios";

function Profile(props) {
  const {
    urlText,
    iconSize,
    image,
    userID
  } = props;

  return (
    <div className="profile">
      <MyProfileIcon
        iconSize={iconSize}
        image={image}
      />
        <div className="textContainer">
          <span className="accountName">{userID}</span>
        </div>

      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
