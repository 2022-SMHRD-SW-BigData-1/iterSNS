import "./pclick_content.scss";
import Profile from "../../Profile/Profile";
import { ReactComponent as Inbox } from "../images/Inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import Bookmarkicon from "../../Bookmark";
import Hearticon from "../../Hearticon";
import { useState } from "react";
import axios from "axios";

function Pclick_content(props) {
  const { storyBorder, image } = props;
  const [like, setlike] = useState(false);
  const [save, setsave] = useState(false);

  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://127.0.0.1:3001/Postlikes");
  //     if (response.data.type === "liked") setlike(true);
  //   };
  //   fetchData();
  // }, []);

  //좋아요
  const toggleLike = async (e) => {
    // const response = await axios.post("http://127.0.0.1:3001/Postlikes");
    setlike(!like);

    
    axios
      .post("http://127.0.0.1:3001/Postlikes",{ postlike : like})
      .then((result) => {
        console.log("데이터 보내기 성공!", result);
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
  };

  //게시글저장;
  const toggleSave = async (e) => {
    // const response = await axios.post("http://127.0.0.1:3001/Save");
    setsave(!save);
    axios
      .post("http://127.0.0.1:3001/Save", {})
      .then((result) => {
        console.log("데이터 보내기 성공!", result);
      })
      .catch(() => {
        console.log("데이터 보내기 실패!");
      });
  };

  const [style, setStyle] = useState({display: 'block'})



  return (
    <>
    <div className="clickcm">
      <div className="clickcontainer">
        <div className="clickcards">
          <div className="Pclick_imgcard">
            <img className="Pclick_imgcardImage" src={image} alt="card content" />
          </div>
        </div>
        <div className="clickcards">          
          <div className="Pclick_contentcard">
            <header className="Pclick_contentheader">
              <Profile iconSize="medium" storyBorder={storyBorder} />
              <button className="followbutton" style={style} onClick={e=>{setStyle({display: 'none'})}}>follow</button>
            </header>

            <div className="Pclick_contentcontent">
              <div className="Pclick_cards">
                <div className="clickText" />
                  <div className="cardss">
                    <div className="clickcard">
                      <div className="cardMenu">
                        <div className="interactions">
                        <Hearticon className="icon" like={like} onClick={toggleLike} />
                          <Comments className="icon" />
                          
                        </div>
                        <Bookmarkicon className="icon" save={save} onClick={toggleSave} />
                      </div>

                      <div className="clickcomments">
                        <div className="commentContainer">
                          <div className="accountName">댓글작성자</div>
                          <div className="comment">댓글내용</div>
                        </div>
                      </div>
                    
                      <div className="clickaddComment">
                        <input className="clickcommentText" placeholder="Add a comment..."></input>
                        <button className="clickpostText">Post</button>
                      </div>
                    </div>
                  </div>
                </div>
              {/* ↓지도api들어갈 자리 */}
              <div type="text" className="clickLocation" alt="card content" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Pclick_content;
