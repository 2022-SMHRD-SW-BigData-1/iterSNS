import "./maincard.scss";
import Profile from "../Profile/Profile";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Pclick_content from "./Post_click/Pclick_content";
import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  boxShadow: 24
};

function MainCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageData, setImageData] = useState("");
  const [userID, setUserID] = useState();
  let dataNum, num;

  async function getUserInfo() {
    console.log("DB에서 ID값 가져오기!");
    
    // axios.post("보낼 위치", "보낼 데이터")
    axios.post("http://127.0.0.1:3001/getUser")
      .then((result) => {
        console.log("데이터 보내기 성공!");
        dataNum = result.data.userInfo;
        num = parseInt(Math.random()*dataNum.length);
  
        setUserID(dataNum[num].user_id);
        window.Buffer = window.Buffer || require("buffer").Buffer;
        let encode = window.Buffer.from(dataNum[num].post_img).toString(
          "base64"
        );
        setImageData("data:image/png;base64," + encode);
        console.log("data:image/png;base64," + encode);
        // nav("/MainView");
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
  }
  
  
  useEffect(function () {
    getUserInfo();
  });
  

  return (
    <>
      <Button onClick={handleOpen}>
        <div className="maincard">
          <header className="mainheader">
            <Profile
              className="mainProfile"
              iconSize="medium"
              userID={userID}
            />
          </header>
          <img className="maincardImage" src={imageData} alt="card content" />
        </div>
      </Button>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          // BackdropComponent={Backdrop}
          // BackdropProps={{
          //   timeout: 500,
          // }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Pclick_content
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {/* Live From Space */}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {/* Mac Miller */}
          </Typography>
        </CardContent>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default MainCard;
