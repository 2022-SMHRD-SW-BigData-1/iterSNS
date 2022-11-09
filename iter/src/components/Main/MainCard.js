import "./maincard.scss";
import Profile from "../Profile/Profile";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Pclick_content from "./Post_click/Pclick_content";
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
  const { postSeq, postUserseq, postUserId, postUserDate, postUserLocation, postUsercontent, postUserLikes, postUserLikeState, postUserImg } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  // window.Buffer = window.Buffer || require("buffer").Buffer;
  // encode = window.Buffer.from(data.post_img).toString("base64");
  // postImg.push("data:image/png;base64," + encode);
  // setpostUserImg(postUserImg.concat(postImg));

  return (
    <>
      <Button onClick={handleOpen}>
        
        <div className="maincard" style={{backgroundColor:"white", width:"290px", height:"400px", border:"2px solid", color:"black"}}  >
          <header className="mainheader">
            <Profile
              className="mainProfile"
              iconSize="medium"
              userID={postUserId}
              
            />
          </header>
          <img className="maincardImage" src={postUserImg} alt="card content" style={{marginTop:"8px",width:"250px",height:"310px"}}/>
        </div>
       
      </Button>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <Box sx={style}>
              <Pclick_content
                postSeq = {postSeq}
                postUserseq = {postUserseq}
                postUserId = {postUserId}
                postUserDate = {postUserDate}
                postUserLocation = {postUserLocation}
                postUsercontent = {postUsercontent}
                postUserLikes = {postUserLikes}
                postUserImg = {postUserImg}
                postUserLikeState = {postUserLikeState}

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
