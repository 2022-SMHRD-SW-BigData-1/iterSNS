import "../styles/postcards.scss";
// import Stories from "./Stories";
import PostCard_img from "./PostCard_img";
import PostCard_content from "./PostCard_content";
import Navigation from "./Navigation";

function PostCards() {
  return (
    <>
      <Navigation></Navigation>
      <div className="cm">
        <div className="container">
          
          <div className="cards">
            <PostCard_img image="https://picsum.photos/800/900"/>
          </div>
          <div className="cards">
            <PostCard_content image="https://picsum.photos/800/900"/>
          </div>

        </div>
      </div>
    </>
  );
}

export default PostCards;
