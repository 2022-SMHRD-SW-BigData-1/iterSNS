import "./pclick_content.scss";
import Profile from "../../Profile/Profile";
import { ReactComponent as Comments } from "../images/comments.svg";
import Bookmarkicon from "../../Bookmark";
import Hearticon from "../../Hearticon";
import { useState, useRef, useEffect } from "react";
import IterMap from "../../IterMap/IterMap"
import axios from "axios";
import Comment from "../../Comment"

function Pclick_content(props) {
  
  const { postSeq, postUserseq, postUserId, postUserDate, postUserLocation, postUsercontent, postUserLikes, postUserLikeState, postUserImg} = props;
  const [like, setlike] = useState(postUserLikeState);
  const [save, setsave] = useState(false);
  const [style, setStyle] = useState({display: 'block'})
  const comment = useRef();
  let commentInfo;
  let commentIDu = [];
  const [commentID, setCommentID] = useState([]);
  const [commentID2, setCommentID2] = useState("");
  let cmtContentu = [];
  const [cmtContent, setcmtContent] = useState([]);
  const [cmtContent2, setcmtContent2] = useState("");
  

  async function getComment(){

    await axios
    .post("http://127.0.0.1:3001/getComment", {
      postseq: postSeq,
    })
    .then((result) => {
      console.log("데이터 보내기 성공!", result);
      console.log(result.data.commentInfo);
      
      commentInfo = result.data.commentInfo;
      setCommentID2(comment.current.value);
      setcmtContent2(result.data.ccommentInfo.user_id);

      result.data.commentInfo.map(function(data, index){          
        commentIDu.push(data.user_id);
        setCommentID(commentID.concat(commentIDu));
        
        cmtContentu.push(data.cmt_content);
        setcmtContent(cmtContent.concat(cmtContentu));
        
      })
    })
    .catch(() => {
      console.log("데이터 보내기 실패!");
    });

  }

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

    })
    .catch(() => {
      console.log("데이터 보내기 실패!");
    });
    
  }

  useEffect(() => {
    getComment();

  },[])

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
              <Profile userID={postUserId}/>
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
                          <div className="accountName">{commentID2}</div>
                          <div className="comment">{cmtContent2}</div>
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
