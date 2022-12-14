import * as React from "react";
import Button2 from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Follower from "../Notifications/Follower";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  boxShadow: 24,
};
export default function OutlinedButtons(props) {
  const { followerID } = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button2 onClick={handleOpen} variant="outlined" color="warning">
          팔로워
        </Button2>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {followerID.map(function (data, index) {
              return (<Follower followerID={data}/>);
            })}
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </>
  );
}