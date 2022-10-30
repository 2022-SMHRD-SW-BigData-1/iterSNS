import MyCard from "./MyCard";
import Navigation  from "../Navigation/Navigation";
import PInfo  from "../Profile/PInfo";

import "./mycards.scss"

function MyCards() {

  return (
    <>
      <Navigation />
      <PInfo />
      <div className="mycm">
        <div className="mycontainer" >

          <div className="mycards" >
            <MyCard image="https://picsum.photos/800/900"/>
            <MyCard image="https://picsum.photos/800"/>
            <MyCard image="https://picsum.photos/800/1000"/>
          </div>
          
          <div className="mycards">
            <MyCard image="https://picsum.photos/800/900"/>
            <MyCard image="https://picsum.photos/800"/>
            <MyCard image="https://picsum.photos/800/1000"/>
          </div>

          <div className="mycards">
            <MyCard image="https://picsum.photos/800/900"/>
            <MyCard image="https://picsum.photos/800"/>
            <MyCard image="https://picsum.photos/800/1000"/>
          </div>

        </div>
      </div>   
    </>
  );
}

export default MyCards;
