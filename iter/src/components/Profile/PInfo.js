import "./pinfo.scss";
import React from "react";
import avatar from "./images/lorde.png";
import Button2 from "./Buttonfing";
import Button1 from "./Buttonfer";
import Button3 from "./Buttonpost";
import { BsGear } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { Link } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1250,
  boxShadow: 24,
};
const PInfo = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="info">
      <div className="container">
        <div className="imgBox">
          <img className="infoImage" src={avatar} alt="card content" />
        </div>
        <div className="follow">
          <div className="profile">
            <span className="z1">
              <Button3></Button3>
            </span>
            <div>
              <span className="z2">
                <Button1></Button1>
              </span>
            </div>
            <span className="z3">
              <Button2></Button2>
            </span>
          </div>
          <div className="profileChange">
            <button className="save">
              <Link to="/Save">
                <BsBookmarks className="BsBookmarks" size={20}></BsBookmarks>
              </Link>
            </button>
            <button className="buttonprofile">
              프로필편집 <BsGear className="Bsgear" size={20}></BsGear>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PInfo;
