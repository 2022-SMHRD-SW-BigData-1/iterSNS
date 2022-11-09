import "./maincards.scss";
import MainCard from "./MainCard";
import Navigation from "../Navigation/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function MainCards() {
  let encode;
  let postSeqb = [];
  const [postSeq, setpostSeq] = useState([]);
  let userSeq = [];
  const [postUserseq, setpostUserseq] = useState([]);
  let userId = [];
  const [postUserId, setpostUserId] = useState([]);
  let postDate = [];
  const [postUserDate, setpostUserData] = useState([]);
  let postLocation = [];
  const [postUserLocation, setpostUserLocation] = useState([]);
  let postcontent = [];
  const [postUsercontent, setpostUsercontent] = useState([]);
  let postLikes = [];
  const [postUserLikes, setpostUserLikes] = useState([]);
  let postLikeState = [];
  const [postUserLikeState, setpostUserLikeState] = useState([]);
  let postImg = [];
  const [postUserImg, setpostUserImg] = useState([]);

  
  // const [postInfo, setpostInfo] = useState([]);  
  // let imageData = [];
  // const [postUserImg, setpostUserImg] = useState([]);
  
  async function getUserInfo() {
    console.log("DB에서 ID값 가져오기!");
    
    // axios.post("보낼 위치", "보낼 데이터")
    await axios.post("http://127.0.0.1:3001/getUser")
      .then((result) => {
        console.log("게시판 데이터 보내기 성공!");
                        
        result.data.userInfo.map(function(data, index){          
        postSeqb.push(data.post_seq);
        setpostSeq(postSeq.concat(postSeqb));

        userSeq.push(data.user_seq);
        setpostUserseq(postUserseq.concat(userSeq));

        userId.push(data.user_id);
        setpostUserId(postUserId.concat(userId));

        postDate.push(data.post_date);
        setpostUserData(postUserDate.concat(postDate));

        postLocation.push(data.post_location);
        setpostUserLocation(postUserLocation.concat(postLocation));

        postcontent.push(data.post_content);
        setpostUsercontent(postUsercontent.concat(postcontent));

        postLikes.push(data.post_likes);
        setpostUserLikes(postUserLikes.concat(postLikes));

        postLikeState.push(data.post_likestate);
        setpostUserLikeState(postUserLikeState.concat(postLikeState));

        window.Buffer = window.Buffer || require("buffer").Buffer;
        encode = window.Buffer.from(data.post_img).toString("base64");
        postImg.push("data:image/png;base64," + encode);
        setpostUserImg(postUserImg.concat(postImg));
        })
        
        
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch

      console.log("zz");
      // console.log(postInfo);
      
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
            <MainCard postSeq={postSeq[0]} postUserseq={postUserseq[0]} postUserId={postUserId[0]} postUserDate={postUserDate[0]} postUserLocation={postUserLocation[0]} postUsercontent={postUsercontent[0]} postUserLikes={postUserLikes[0]} postUserLikeState={postUserLikeState[0]} postUserImg={postUserImg[0]}/>
            <MainCard postSeq={postSeq[3]} postUserseq={postUserseq[3]} postUserId={postUserId[3]} postUserDate={postUserDate[3]} postUserLocation={postUserLocation[3]} postUsercontent={postUsercontent[3]} postUserLikes={postUserLikes[3]} postUserLikeState={postUserLikeState[3]} postUserImg={postUserImg[3]}/>
            <MainCard postSeq={postSeq[6]} postUserseq={postUserseq[6]} postUserId={postUserId[6]} postUserDate={postUserDate[6]} postUserLocation={postUserLocation[6]} postUsercontent={postUsercontent[6]} postUserLikes={postUserLikes[6]} postUserLikeState={postUserLikeState[6]} postUserImg={postUserImg[6]}/>
          </div>

          <div className="maincards">
            <MainCard postSeq={postSeq[1]} postUserseq={postUserseq[1]} postUserId={postUserId[1]} postUserDate={postUserDate[1]} postUserLocation={postUserLocation[1]} postUsercontent={postUsercontent[1]} postUserLikes={postUserLikes[1]} postUserLikeState={postUserLikeState[1]} postUserImg={postUserImg[1]}/>
            <MainCard postSeq={postSeq[4]} postUserseq={postUserseq[4]} postUserId={postUserId[4]} postUserDate={postUserDate[4]} postUserLocation={postUserLocation[4]} postUsercontent={postUsercontent[4]} postUserLikes={postUserLikes[4]} postUserLikeState={postUserLikeState[4]} postUserImg={postUserImg[4]}/>
            <MainCard postSeq={postSeq[7]} postUserseq={postUserseq[7]} postUserId={postUserId[7]} postUserDate={postUserDate[7]} postUserLocation={postUserLocation[7]} postUsercontent={postUsercontent[7]} postUserLikes={postUserLikes[7]} postUserLikeState={postUserLikeState[7]} postUserImg={postUserImg[7]}/>
          </div>

          <div className="maincards">
            <MainCard postSeq={postSeq[2]} postUserseq={postUserseq[2]} postUserId={postUserId[2]} postUserDate={postUserDate[2]} postUserLocation={postUserLocation[2]} postUsercontent={postUsercontent[2]} postUserLikes={postUserLikes[2]} postUserLikeState={postUserLikeState[2]} postUserImg={postUserImg[2]}/>
            <MainCard postSeq={postSeq[5]} postUserseq={postUserseq[5]} postUserId={postUserId[5]} postUserDate={postUserDate[5]} postUserLocation={postUserLocation[5]} postUsercontent={postUsercontent[5]} postUserLikes={postUserLikes[5]} postUserLikeState={postUserLikeState[5]} postUserImg={postUserImg[5]}/>
            <MainCard postSeq={postSeq[8]} postUserseq={postUserseq[8]} postUserId={postUserId[8]} postUserDate={postUserDate[8]} postUserLocation={postUserLocation[8]} postUsercontent={postUsercontent[8]} postUserLikes={postUserLikes[8]} postUserLikeState={postUserLikeState[8]} postUserImg={postUserImg[8]}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCards;
