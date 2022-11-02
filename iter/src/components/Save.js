import "./save.scss";
import MyCard from "../components/MyPages/MyCard";
import Navigation from "../components/Navigation/Navigation";
import { BsBookmarks } from "react-icons/bs";

function MyCards() {
  return (
    <>
      <Navigation />
      <div className="savecm">
        <div className="savecontainer">
          <div className="book">
            <BsBookmarks size={90}></BsBookmarks>
          </div>

          <div className="savecards">
            <MyCard image="https://picsum.photos/800/900" />
            <MyCard image="https://picsum.photos/800" />
            <MyCard image="https://picsum.photos/800/1000" />
          </div>

          <div className="savecards">
            <MyCard image="https://picsum.photos/800/900" />
            <MyCard image="https://picsum.photos/800" />
            <MyCard image="https://picsum.photos/800/1000" />
          </div>

          <div className="savecards">
            <MyCard image="https://picsum.photos/800/900" />
            <MyCard image="https://picsum.photos/800" />
            <MyCard image="https://picsum.photos/800/1000" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCards;
