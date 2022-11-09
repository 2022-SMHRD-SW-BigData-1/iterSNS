import "./mypclick_content.scss";
import MyProfile from "../../Profile/MyProfile";
import { ReactComponent as Comments } from "../../Main/images/comments.svg";
import Bookmarkicon from "../../Bookmark";
import Hearticon from "../../Hearticon";
import { useState, useRef } from "react";
import IterMap from "../../IterMap/IterMap"
import axios from "axios";

function Pclick_content(props) {
  const { postSeq, postUserseq, postUserId, postUserDate, postUserLocation, postUsercontent, postUserLikes, postUserLikeState, postUserImg} = props;
  const [like, setlike] = useState(postUserLikeState);
  const [save, setsave] = useState(false);
  const [style, setStyle] = useState({display: 'block'})
  const comment = useRef();
  const [commentID, setCommentID] = useState("");
  const [cmtContent, setcmtContent] = useState("");
  

  //좋아요
  const toggleLike = async () => {

    setlike(!like);

    await axios
      .post("http://127.0.0.1:3001/Postlikes",{
         postlike : !like,
         postSeq: postSeq
      })
      .then((result) => {
        console.log("데이터 보내기 성공!", result);
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch

  };

  //게시글저장;
  const toggleSave = async () => {
    // const response = await axios.post("http://127.0.0.1:3001/Save");
    setsave(!save);

    await axios
      .post("http://127.0.0.1:3001/Save", {})
      .then((result) => {
        console.log("데이터 보내기 성공!", result);
      })
      .catch(() => {
        console.log("데이터 보내기 실패!");
      });
  };

  const toggleFollow = async (e) => {

    setStyle({display: 'none'})

    axios
    .post("http://127.0.0.1:3001/Follow", {
      postUserId: postUserId,
    })
    .then((result) => {
      console.log("데이터 보내기 성공!", result);
    })
    .catch(() => {
      console.log("데이터 보내기 실패!");
    });
  }

  const toggleComment = async () =>{

    axios
    .post("http://127.0.0.1:3001/Comment", {
      comment: comment.current.value,
      postseq: postSeq,
    })
    .then((result) => {
      console.log("데이터 보내기 성공!", result);
      setCommentID(result.data.commentID);
      setcmtContent(result.data.cmtContent);
    })
    .catch(() => {
      console.log("데이터 보내기 실패!");
    });
    
  }



  return (
    <>
    <div className="clickcm">
      <div className="clickcontainer" >
        <div className="clickcards" >
          <div className="Pclick_imgcard">
            <img className="Pclick_imgcardImage" src={postUserImg} alt="card content" />
          </div>
        </div>
        <div className="clickcards" >          
          <div className="Pclick_contentcard">
            <header className="Pclick_contentheader" >
              <MyProfile userID={postUserId}/>
              <button className="followbutton" style={style} onClick={toggleFollow}>follow</button>
            </header>

            <div className="Pclick_contentcontent">
              <div className="Pclick_cards">
                <div className="clickText">{postUsercontent}<br /><br /><br /><br /><br />위치 : {postUserLocation}</div>
                  <div className="cardss">
                    <div className="clickcard">
                      <div className="cardMenu">
                        <div className="interactions">
                        <Hearticon className="icon" like={like} onClick={toggleLike} />
                          <Comments className="icon" />
                        </div>
                        <div className="posttime">
                        {postUserDate.slice(0,10)} {postUserDate.slice(11,19)}
                        </div>
                      </div>

                      <div className="clickcomments">
                        <div className="commentContainer">
                        <div className="accountName">{commentID}</div>
                          <div className="comment">{cmtContent}</div>
                        </div>
                      </div>
                    
                      <div className="clickaddComment">
                        <input ref={comment} className="clickcommentText" placeholder="Add a comment..."></input>
                        <button onClick={toggleComment} className="clickpostText" style={{color:"black"}}>Post</button>
                      </div>
                    </div>
                  </div>
                </div>
              {/* ↓지도api들어갈 자리 */}
              <div type="text" className="clickLocation" alt="card content"><IterMap /></div>
            </div>
          </div>
        </div>  
      </div>
    </div>
      
    </>
  );
}

export default Pclick_content;
