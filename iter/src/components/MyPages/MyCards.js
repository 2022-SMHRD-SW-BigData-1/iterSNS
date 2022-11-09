import MyCard from "./MyCard";
import Navigation  from "../Navigation/Navigation";
import PInfo  from "../Profile/PInfo";
import axios from "axios";
import { useState, useEffect } from "react";

import "./mycards.scss"

function MyCards() {

  let myFollowID = [];
  const [umyFollowID, setumyFollowID] = useState([]);
  let myFollowingID = [];
  const [umyFollowingID, setumyFollowingID] = useState([]);
  
  async function getFollow() {
    console.log("DB에서 ID값 가져오기!");
    
    // axios.post("보낼 위치", "보낼 데이터")
    await axios.post("http://127.0.0.1:3001/GetFollow")
      .then((result) => {
        console.log("게시판 데이터 보내기 성공!");
                        
        result.data.followInfo.map(function(data, index){          
        myFollowID.push(data.follow_id);
        setumyFollowID(umyFollowID.concat(myFollowID));
        console.log(data.follow_id)
        myFollowingID.push(data.user_id);
        console.log(data.user_id)
        setumyFollowingID(umyFollowingID.concat(myFollowingID));

        
        })
        
        
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
  
      console.log("zz");
      // console.log(postInfo);
      
  }  
  
  useEffect(() => {
    getFollow();
    
  }, []);

  return (
    <>
      <Navigation />
      {console.log(umyFollowingID)}
      <PInfo umyFollowID={umyFollowID} umyFollowingID={umyFollowingID}/>
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
