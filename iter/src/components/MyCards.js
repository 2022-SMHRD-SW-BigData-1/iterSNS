import MyCard from "./MyCard";

import "../styles/mycards.scss"

function MyCards() {

  return (

    <div className="cm">
      <div className="container" >

        <div className="cards" >
          <MyCard image="https://picsum.photos/800/900"/>
          <MyCard image="https://picsum.photos/800"/>
          <MyCard image="https://picsum.photos/800/1000"/>
        </div>
        
        <div className="cards">
          <MyCard image="https://picsum.photos/800/900"/>
          <MyCard image="https://picsum.photos/800"/>
          <MyCard image="https://picsum.photos/800/1000"/>
        </div>

        <div className="cards">
          <MyCard image="https://picsum.photos/800/900"/>
          <MyCard image="https://picsum.photos/800"/>
          <MyCard image="https://picsum.photos/800/1000"/>
        </div>

      </div>
    </div>   
    
  );
}

export default MyCards;
