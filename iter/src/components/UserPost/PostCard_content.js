import "./postcard_content.scss";
import Profile from "../Profile/Profile";
// import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";
import { BsPlusCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostCard_content(props) {
  const { storyBorder, image } = props;

  const postRef = useRef();
  const locationRef = useRef();
  const nav = useNavigate();

  const handlepost = (e) => {
    e.preventDefault();
    console.log(postRef.current.value);
    console.log(locationRef.current.value);

    axios
      .post("http://127.0.0.1:3001/Userpost", {
        post: postRef.current.value,
        location: locationRef.current.value,
      })
      .then((result) => {
        console.log("데이터 보내기 성공!", result.data.result);
        nav("/MainView");
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
  };

  return (
    <>
      <form onSubmit={handlepost}>
        <div className="postcard2">
          <header>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <BsImage className="BsImage"></BsImage>
            <button onClick={handlepost}>
              <BsPlusCircle
                type="submit"
                className="BsPlusCircle"
              ></BsPlusCircle>
            </button>
          </header>
          <div className="contentzz">
            <input
              type="text"
              className="cardText"
              alt="card content"
              name="posttext"
              ref={postRef}
            />
            <input
              type="text"
              className="cardLocation"
              alt="card content"
              name="loacationtext"
              ref={locationRef}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default PostCard_content;
