import "./maincard.scss";
import Profile from "../Profile/Profile";
import { ReactComponent as CardButton } from "./images/cardButton.svg";

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
