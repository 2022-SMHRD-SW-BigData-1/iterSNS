import "../styles/postcard_content.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";

function PostCard_content(props) {
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
      <div className="contentzz">
      <input type="text" className="cardText"alt="card content" />
      <input type="text" className="cardLocation"alt="card content" />
      </div>
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

export default PostCard_content;
