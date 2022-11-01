import "./maincard.scss";
import Profile from "../Profile/Profile";
import { ReactComponent as CardButton } from "./images/cardButton.svg";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pclick_Cards from "./Post_click/Pclick_Cards";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1250,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MainCard(props) {
  const { storyBorder, image } = props;
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
              storyBorder={storyBorder}
            />
            <CardButton className="maincardButton" />
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
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Pclick_Cards />
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default MainCard;
