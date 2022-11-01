import "./pclick_img.scss";

function Pclick_img(props) {
  const { storyBorder, image } = props;

  return (
    <>
      <div className="Pclick_imgcard">
        <img className="Pclick_imgcardImage" src={image} alt="card content" />
      </div>
    </>
  );
}

export default Pclick_img;
