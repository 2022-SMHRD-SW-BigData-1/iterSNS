import "./pinfo.scss";
import React from "react";
import avatar from "./images/lorde.png";
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
            <span className="z1">게시글 </span>
            <span className="z2"><Button1></Button1></span>
            <span className="z3"><Button2></Button2></span>
          </div>
          <div className="profileChange">
            <button className="buttonprofile">
              프로필편집 <BsGear className="Bsgear" size={20}></BsGear>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PInfo;
