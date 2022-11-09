import "./Navigation";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MyProfileIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Alarm from "../Notifications/Alram";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  boxShadow: 24,
};
function Menu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="menubox">
      <div className="menu">
        <Link to="/MainView">
          <HomeIcon className="icon" fontSize="small" />
        </Link>
        {/* <Link to="#"><Inbox className="icon" /></Link> */}
        <Link to="/PostCards">
          <BsPlusSquare className="icon" fontSize="medium" />
        </Link>
        <>
          <FavoriteBorderIcon
            onClick={handleOpen}
            className="icon"
            fontSize="small"
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <Alarm />
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
              ></Typography>
            </Box>
          </Modal>
        </>
        <Link to="/MyPages">
          <MyProfileIcon className="icon" fontSize="small" />
        </Link>
        <Link to="/">
          <LogoutIcon className="icon" fontSize="small" />
        </Link>
      </div>
    </div>
  );
}
export default Menu;