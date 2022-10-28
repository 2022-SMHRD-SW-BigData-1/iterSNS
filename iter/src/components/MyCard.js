import "../styles/mycard.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";

function MyCard(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <>
      <div className="card">
        <div>
          <img className="cardImage" src={image} alt="card content" />
        </div>
      </div>
    </>
  );
}

export default MyCard;
