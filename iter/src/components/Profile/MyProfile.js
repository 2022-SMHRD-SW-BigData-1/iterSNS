import "./profile.scss";

function Profile(props) {
  const {
    urlText,
    userID
  } = props;

  return (
    <div className="profile">
      <span className="accountName">{userID}</span>

      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
