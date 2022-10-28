import "../styles/maincards.scss";
// import Stories from "./Stories";
import MainCard from "./MainCard";
import Navigation  from "./Navigation";

function MainCards() {
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
      <div className="container" >
      <div className="cards" >
        {/* <Stories /> */}
        <MainCard
          // accountName="rafagrassetti"
          // storyBorder={true}
          image="https://picsum.photos/800/900"
          // comments={commentsOne}
          // likedByText="dadatlacak"
          // likedByNumber={89}
          // hours={16}
        />
        <MainCard
          // accountName="mapvault"
          image="https://picsum.photos/800"
          // comments={commentsTwo}
          // likedByText="therealadamsavage"
          // likedByNumber={47}
          // hours={12}
        />
        <MainCard
          // accountName="dadatlacak"
          // storyBorder={true}
          image="https://picsum.photos/800/1000"
          // comments={commentsThree}
          // likedByText="mapvault"
          // likedByNumber={90}
          // hours={4}
        />
        </div>

        <div className="cards">
        {/* <Stories /> */}
        <MainCard
          // accountName="rafagrassetti"
          // storyBorder={true}
          image="https://picsum.photos/800/900"
          // comments={commentsOne}
          // likedByText="dadatlacak"
          // likedByNumber={89}
          // hours={16}
        />
        <MainCard
          // accountName="mapvault"
          image="https://picsum.photos/800"
          // comments={commentsTwo}
          // likedByText="therealadamsavage"
          // likedByNumber={47}
          // hours={12}
        />
        <MainCard
          // accountName="dadatlacak"
          // storyBorder={true}
          image="https://picsum.photos/800/1000"
          // comments={commentsThree}
          // likedByText="mapvault"
          // likedByNumber={90}
          // hours={4}
        />
        </div>

        <div className="cards">
        {/* <Stories /> */}
        <MainCard
          // accountName="rafagrassetti"
          // storyBorder={true}
          image="https://picsum.photos/800/900"
          // comments={commentsOne}
          // likedByText="dadatlacak"
          // likedByNumber={89}
          // hours={16}
        />
        <MainCard
          // accountName="mapvault"
          image="https://picsum.photos/800"
          // comments={commentsTwo}
          // likedByText="therealadamsavage"
          // likedByNumber={47}
          // hours={12}
        />
        <MainCard
          // accountName="dadatlacak"
          // storyBorder={true}
          image="https://picsum.photos/800/1000"
          // comments={commentsThree}
          // likedByText="mapvault"
          // likedByNumber={90}
          // hours={4}
        />
        </div>

        </div>
    </div>
    
    
    </>
  );
}

export default MainCards;
