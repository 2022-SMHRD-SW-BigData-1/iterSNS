import "../styles/postcard_img.scss";

function PostCard_img(props) {
  const {
    storyBorder,
    image,
  } = props;

  return (
    <>
        <div className="card">
        <img className="cardImage" src={image} alt="card content" />
        </div>
    </>



  );
}

export default PostCard_img;
