import "./card.scss";
import Profile from "./Profile/Profile";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <div className="clickcard">
      {/* <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
      </header>
      <img className="cardImage" src={image} alt="card content" /> */}
      <CardMenu />
      {/* <div className="clicklikedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div> */}
      <div className="clickcomments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      {/* <div className="timePosted">{hours} HOURS AGO</div> */}
      
      <div className="clickaddComment">
        <input></input>
        <div className="clickcommentText">Add a comment...</div>
        <div className="clickpostText">Post</div>
      </div>
    </div>
  );
}

export default Card;
