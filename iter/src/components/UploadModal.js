import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PostCard_content from "./UserPost/PostCard_content";
import { BsPlusSquare } from "react-icons/bs";
import "./postcard_content.scss";
import { BsPlusCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { storyBorder, image } = props;
  const imgInput = useRef();
  const postInput = useRef();
  const [imageData, setImageData] = useState("");

  const srcChange = (e) => {
    setImageData(URL.createObjectURL(e.target.files[0]));
  };

  function imgUpload(e) {
    imgInput.current.click();
  };

  function goSubmit() {
    postInput.current.click();
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <BsPlusSquare className="icon" fontSize="medium"></BsPlusSquare>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }} />
          <form
            action="http://localhost:3001/Userpost"
            method="post"
            encType="multipart/form-data"
          >
            <div className="postbackground">
              <div className="postcard2">
                <div className="card">
                  <img className="cardImage" alt="card content" src={imageData}/>
                </div>

                <div className="contentzz">
                  <div className="post_header">
                    <header className="headerz">
                      <BsImage className="BsImage" onClick={imgUpload}></BsImage>
                      <input
                        type="file"
                        accept="image/*"
                        ref={imgInput}
                        name="jeju"
                        onChange={srcChange}
                        style={{ display: "none", width:"10px" }}
                      ></input>
                      <BsPlusCircle
                        type="submit"
                        className="BsPlusCircle"
                        onClick={goSubmit}
                      ></BsPlusCircle>
                      <button style={{ display: "none", width:"10px" }} ref={postInput}></button>
                    </header>
                    <input
                      type="text"
                      className="cardText"
                      alt="card content"
                      name="posttext"
                    />
                    <input
                      type="text"
                      className="cardLocation"
                      alt="card content"
                      name="loacationtext"
                    />
                  </div>
                </div>
                
              </div>
            </div>
      </form>
       
        </Box>
      </Modal>
    </div>
  );
}
