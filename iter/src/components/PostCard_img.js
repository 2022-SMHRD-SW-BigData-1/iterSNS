import "../styles/postcard_img.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
// import MainCardMenu from "./MainCardMenu";
// import Comment from "./Comment";

function PostCard_img(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <>
        <div className="card">
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

export default PostCard_img;
