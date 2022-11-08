import "./postcards.scss";
// import Stories from "./Stories";

import PostCard_content from "./PostCard_content";
import Navigation from "../Navigation/Navigation";

function PostCards() {
  return (
    <>
      <Navigation></Navigation>
      <div className="postcm">
        <div className="postcontainer">
          <div className="postcards">
            <PostCard_content/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCards;
