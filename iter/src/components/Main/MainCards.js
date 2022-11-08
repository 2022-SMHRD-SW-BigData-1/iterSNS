import "./maincards.scss";
import MainCard from "./MainCard";
import Navigation from "../Navigation/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function MainCards() {
  let encode;
  let postInfo;
  // const [postInfo, setpostInfo] = useState([]);

  let postUserID = [];
  const [postUserEmail, setpostUserEmail] = useState([]);
  let imageData = [];
  const [postUserImg, setpostUserImg] = useState([]);
  async function getUserInfo() {
    console.log("DB에서 ID값 가져오기!");
    
    // axios.post("보낼 위치", "보낼 데이터")
    await axios.post("http://127.0.0.1:3001/getUser")
      .then((result) => {
        console.log("게시판 데이터 보내기 성공!");
        postInfo = result.data.userInfo;
                
        postInfo.map(function(data, index){          
        postUserID.push(data.user_id);
        console.log(postUserID);
        setpostUserEmail(postUserEmail.concat(postUserID));

        window.Buffer = window.Buffer || require("buffer").Buffer;
        encode = window.Buffer.from(data.post_img).toString("base64");
        imageData.push("data:image/png;base64," + encode);
        setpostUserImg(postUserImg.concat(imageData));
        })
        
        
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch

      console.log("zz");
      console.log(postUserID);
  }  

  useEffect(() => {
    getUserInfo();
    
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="maincm">
        <div className="maincontainer">
          <div className="maincards">
            <MainCard userID={postUserEmail[0]} image={postUserImg[0]}/>
            <MainCard userID={postUserEmail[3]} image={postUserImg[3]}/>
            <MainCard userID={postUserEmail[6]} image={postUserImg[6]}/>
          </div>

          <div className="maincards">
          <MainCard userID={postUserEmail[1]} image={postUserImg[1]}/>
          <MainCard userID={postUserEmail[4]} image={postUserImg[4]}/>
          <MainCard userID={postUserEmail[7]} image={postUserImg[7]}/>
          </div>
          <div className="maincards">
          <MainCard userID={postUserEmail[2]} image={postUserImg[2]}/>   
          <MainCard userID={postUserEmail[5]} image={postUserImg[5]}/>
          <MainCard userID={postUserEmail[8]} image={postUserImg[8]}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCards;
