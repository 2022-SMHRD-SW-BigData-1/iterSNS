import "../styles/maincard.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";

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
      {/* <MainCardMenu /> */}
     
      {/* <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div> */}
      
        </div>
    </>



  );
}

export default MainCard;
