import "../styles/navigation.scss";
import Menu from "./Menu";
import searchIcon from "../images/searchIcon.png";
import logo from "../images/로고1투명.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="logobox"><img className="logo" src={logo} alt="Iter logo"/></div>
        <div className="search">
        <img className="searchIcon" src={searchIcon} alt="search icon" />
        <input className="searchBox" type="text" placeholder="Search"></input>
        </div>
        <Menu/>
      </div>
    </div>
  );
}

export default Navigation;
