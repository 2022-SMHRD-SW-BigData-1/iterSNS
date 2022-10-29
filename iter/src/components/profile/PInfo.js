import "../../styles/pinfo.scss";
import React from "react";
import avatar from "../../images/lorde.png";
import Button2 from "./Buttonfing";
import Button1 from "./Buttonfer";
import { BsGear } from "react-icons/bs";

const PInfo = () => {
  function Card(props) {
    const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
      props;
  }
  return (
      <div className="info">

        <div className="container">
          <div className="imgBox">
          <img className="infoImage" src={avatar} alt="card content" />
        </div>
        <div className="follow">
          <div className="profile">
            <span>게시글 </span>
            <span>팔로워 </span>
            <span>팔로잉 </span>
            </div>
            <div className="profileChange">
              프로필 편집
            </div>
          </div>
        </div>

    </div>    
  );
};

export default PInfo;
