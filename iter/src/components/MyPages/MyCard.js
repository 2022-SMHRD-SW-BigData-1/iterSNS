import "./mycard.scss";

function MyCard(props) {
  const {
    image,
  } = props;

  return (
    <>
      <div className="mycard">
        <div>
          <img className="mycardImage" src={image} alt="card content" />
        </div>
      </div>
    </>
  );
}

export default MyCard;
