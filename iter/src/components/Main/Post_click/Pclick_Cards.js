import "./pclick_cards.scss";
// import Stories from "./Stories";
import Pclick_img from "./Pclick_img";
import Pclick_content from "./Pclick_content";

function Pclick_Cards() {
  return (
    <>
      <div className="clickcm">
        <div className="clickcontainer">
          <div className="clickcards">
            <Pclick_img image="https://picsum.photos/800/900" />
          </div>
          <div className="clickcards">
            <Pclick_content image="https://picsum.photos/800/900" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pclick_Cards;
