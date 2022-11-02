import "./postcard_content.scss";
import Profile from "../Profile/Profile";
// import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";
import { BsPlusCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";

function PostCard_content(props) {
  const { storyBorder, image } = props;

  return (
    <>
      <div className="postcard2">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder} />
          <BsImage className="BsImage"></BsImage>
          <BsPlusCircle className="BsPlusCircle"></BsPlusCircle>
        </header>
        <div className="contentzz">
          <input type="text" className="cardText" alt="card content" />
          <input type="text" className="cardLocation" alt="card content" />
        </div>
      </div>
    </>
  );
}

export default PostCard_content;
