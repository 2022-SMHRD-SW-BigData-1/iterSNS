import "./navigation.scss";
import Menu from "./Menu";
import searchIcon from "./images/searchIcon.png";
import logo from "./images/logowhite3.png";
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="logobox"><Link to="/MainView"><img className="navigationlogo" src={logo} alt="Iter logo"/></Link></div>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <input className="searchBox" type="text" placeholder="Search"></input>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;