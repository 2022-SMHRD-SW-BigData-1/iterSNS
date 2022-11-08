import "./maincards.scss";
import MainCard from "./MainCard";
import Navigation from "../Navigation/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function MainCards() {

  const [imageData, setImageData] = useState([]);
  const [userID, setUserID] = useState();
  let postInfo, encode;

  async function getUserInfo() {
    console.log("DB에서 ID값 가져오기!");
    
    // axios.post("보낼 위치", "보낼 데이터")
    axios.post("http://127.0.0.1:3001/getUser")
      .then((result) => {
        console.log("데이터 보내기 성공!");
        postInfo = result.data.userInfo;
        console.log(postInfo);

        window.Buffer = window.Buffer || require("buffer").Buffer;

        console.log("zz");
        for(let i=0; i<postInfo.length; i++){
        encode = window.Buffer.from(postInfo[i].post_img).toString("base64");
        setImageData(imageData.append("data:image/png;base64," + encode));
        console.log("data:image/png;base64," + encode);
        }
        console.log("zz");
        console.log(imageData[0]);
        console.log(imageData[1]);
        console.log(imageData);
        // nav("/MainView");
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
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
