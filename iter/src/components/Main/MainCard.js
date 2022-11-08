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
  width: 1250,
  boxShadow: 24
};

function MainCard(props) {
  const { userID, image } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <img className="maincardImage" src={image} alt="card content" />
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
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
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
