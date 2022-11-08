import "./maincards.scss";
import MainCard from "./MainCard";
import Navigation from "../Navigation/Navigation";

function MainCards() {
  return (
    <>
      <Navigation></Navigation>
      <div className="maincm">
        <div className="maincontainer">
          <div className="maincards">
            <MainCard />
            <MainCard />
            <MainCard />
          </div>

          <div className="maincards">
            <MainCard />
            <MainCard />
            <MainCard />
          </div>

          <div className="maincards">
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCards;
