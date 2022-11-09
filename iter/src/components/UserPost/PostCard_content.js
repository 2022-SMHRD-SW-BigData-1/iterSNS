import "./postcard_content.scss";
import MyProfile from "../Profile/MyProfile";
import { BsPlusCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../../images/로고1.png";
import axios from "axios";
import photo from "../../images/photo.PNG";

function PostCard_content(props) {
  const { storyBorder, image } = props;
  const imgInput = useRef();
  const postInput = useRef();

  function imgUpload() {
    imgInput.current.click();
  }

  function goSubmit() {
    postInput.current.click();
  }

  return (
    <>
      <form
        action="http://localhost:3001/Userpost"
        method="post"
        encType="multipart/form-data"
      >
        <div className="postcard2">
          <div className="card">
            <img className="cardImage" alt="card content" />
          </div>
          <div className="contentzz">
            <div className="post_header">
              <header>
                <BsImage className="BsImage" onClick={imgUpload}></BsImage>
                <input
                  type="file"
                  accept="image/*"
                  ref={imgInput}
                  name="jeju"
                  style={{ display: "none" }}
                ></input>

                <BsPlusCircle
                  type="submit"
                  className="BsPlusCircle"
                  onClick={goSubmit}
                ></BsPlusCircle>
                <button style={{ display: "none" }} ref={postInput}></button>
              </header>
              <input
                type="text"
                className="cardText"
                alt="card content"
                name="posttext"
              />
              <input
                type="text"
                className="cardLocation"
                alt="card content"
                name="loacationtext"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostCard_content;
