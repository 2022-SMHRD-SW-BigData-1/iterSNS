import "./pclick_content.scss";
import Profile from "../../Profile/Profile";
//import { ReactComponent as CardButton } from "./images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";
import { BsPlusCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";

function Pclick_content(props) {
  const { storyBorder, image } = props;

  return (
    <>
      <div className="Pclick_contentcard">
        <header className="Pclick_contentheader">
          <Profile iconSize="medium" storyBorder={storyBorder} />
        </header>
        <div className="Pclick_contentcontent">
          <textarea className="clickText" />
          {/* ↓지도api들어갈 자리 */}
          <div type="text" className="clickLocation" alt="card content" />
        </div>
      </div>
    </>
  );
}

export default Pclick_content;