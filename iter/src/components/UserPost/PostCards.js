import "./postcards.scss";
// import Stories from "./Stories";
import PostCard_img from "./PostCard_img";
import PostCard_content from "./PostCard_content";
import Navigation from "../Navigation/Navigation";

function PostCards() {
  return (
    <>
      <Navigation></Navigation>
      <div className="postcm">
        <div className="postcontainer">
          <div className="postcards">
            <PostCard_img image="https://picsum.photos/800/900" />
          </div>
          <div className="postcards">
            <PostCard_content image="https://picsum.photos/800/900" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCards;
