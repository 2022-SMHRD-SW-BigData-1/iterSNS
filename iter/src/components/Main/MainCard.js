import "./maincard.scss";
import Profile from "../Profile/Profile";
import { ReactComponent as CardButton } from "./images/cardButton.svg";


function MainCard(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <>
      <div className="card">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder} />
          <CardButton className="cardButton" />
        </header>
        <img className="cardImage" src={image} alt="card content" />      
      </div>
    </>



  );
}

export default MainCard;
