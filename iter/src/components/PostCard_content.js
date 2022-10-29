import "../styles/postcard_content.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";
import { BsPlusCircle } from "react-icons/bs";

function PostCard_content(props) {
  const { storyBorder, image } = props;

  return (
    <>
      <div className="card">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder} />
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
