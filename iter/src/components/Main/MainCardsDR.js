import "./maincards.scss";
import MainCard from "./MainCard";
import Navigation  from "../Navigation/Navigation";

function MainCards() {

  return (
    <>
    <Navigation></Navigation>
    <div className="cm">
      <div className="container" >
        <div className="cards" >

          <MainCard image="https://picsum.photos/800/900"/>
          <MainCard image="https://picsum.photos/800"/>
          <MainCard image="https://picsum.photos/800/1000"/>
        </div>

        <div className="cards">
          <MainCard image="https://picsum.photos/800/900"/>
          <MainCard image="https://picsum.photos/800"/>
          <MainCard image="https://picsum.photos/800/1000"/>
        </div>

        <div className="cards">
          <MainCard image="https://picsum.photos/800/900"/>
          <MainCard image="https://picsum.photos/800"/>
          <MainCard image="https://picsum.photos/800/1000"/>
        </div>

      </div>
    </div>
    </>
  );
}

export default MainCards;
