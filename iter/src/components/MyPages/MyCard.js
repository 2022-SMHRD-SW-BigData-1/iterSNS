import "./mycard.scss";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import MyPclick_content from "./Post_click/MyPclick_content";
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


function MyCard(props) {
  const { postSeq, postUserseq, postUserId, postUserDate, postUserLocation, postUsercontent, postUserLikes, postUserLikeState, postUserImg } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Button onClick={handleOpen}>
        <div className="mycard">
          <div>
            {console.log(postSeq+"마이카드의 포스트넘버")}
            <img className="mycardImage" src={postUserImg} alt="card content" />
          </div>
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
              <MyPclick_content
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

export default MyCard;
