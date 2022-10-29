import "../styles/mycard.scss";

function MyCard(props) {
  const {
    image,
  } = props;

  return (
    <>
      <div className="card">
        <div>
          <img className="cardImage" src={image} alt="card content" />
        </div>
      </div>
    </>
  );
}

export default MyCard;
