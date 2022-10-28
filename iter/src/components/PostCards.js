import "../styles/postcards.scss";
// import Stories from "./Stories";
import PostCard_img from "./PostCard_img";
import PostCard_content from "./PostCard_content";
import Navigation from "./Navigation";

function PostCards() {
  const commentsOne = [
    {
      // user: "raffagrassetti",
      // text: "Woah dude, this is awesome! 🔥",
      // id: 1,
    },
    {
      // user: "therealadamsavage",
      // text: "Like!",
      // id: 2,
    },
    {
      // user: "mapvault",
      // text: "Niceeeee!",
      // id: 3,
    },
  ];

  const commentsTwo = [
    {
      // user: "mapvault",
      // text: "Amazing content, keep it up!",
      // id: 4,
    },
  ];

  const commentsThree = [
    {
      // user: "dadatlacak",
      // text: "Love this!",
      // id: 5,
    },
  ];

  return (
    <>
      <Navigation></Navigation>
      <div className="cm">
        <div className="container">
          <div className="cards">
            {/* <Stories /> */}
            <PostCard_img
              // accountName="rafagrassetti"
              // storyBorder={true}
              image="https://picsum.photos/800/900"
              // comments={commentsOne}
              // likedByText="dadatlacak"
              // likedByNumber={89}
              // hours={16}
            />
          </div>
          <div className="cards">
            {/* <Stories /> */}
            <PostCard_content
              // accountName="rafagrassetti"
              // storyBorder={true}
              image="https://picsum.photos/800/900"
              // comments={commentsOne}
              // likedByText="dadatlacak"
              // likedByNumber={89}
              // hours={16}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCards;
