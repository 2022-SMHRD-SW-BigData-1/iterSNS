import "./maincards.scss";
import MainCardDR from "./MainCardDR";
import NavigationDR from "../Navigation/NavigationDR";



function MainCards() {
  return (
    <>
      <NavigationDR></NavigationDR>
      <div className="maincm">
        <div className="maincontainer">
          <div className="maincards">
            <MainCardDR image="https://picsum.photos/800/900" />
            <MainCardDR image="https://picsum.photos/800" />
            <MainCardDR image="https://picsum.photos/800/1000" />
          </div>

          <div className="maincards">
            <MainCardDR image="https://picsum.photos/800/900" />
            <MainCardDR image="https://picsum.photos/800" />
            <MainCardDR image="https://picsum.photos/800/1000" />
          </div>

          <div className="maincards">
            <MainCardDR image="https://picsum.photos/800/900" />
            <MainCardDR image="https://picsum.photos/800" />
            <MainCardDR image="https://picsum.photos/800/1000" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCards;
