import "./navigation.scss";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { ReactComponent as Explore } from "./images/explore.svg";
import { ReactComponent as Notifications } from "./images/notifications.svg";
import { Link } from "react-router-dom"
import ProfileIcon from "../Profile/ProfileIcon";

import image from "../Profile/images/profile.jpg";

function Menu() {
  return (
    
    <div className="menubox">
      <div className="menu">
      
        <Link to="/MainView"><Home className="icon" /></Link>
      
        <Link to="#"><Inbox className="icon" /></Link>
      
        <Link to="/IterMap"><Explore className="icon" /></Link>
      
        <Link to="/Notifications"><Notifications className="icon" /></Link>

        <Link to="/MyPages"><ProfileIcon iconSize="small" image={image} /></Link>
      </div>
    </div>

  );
}

export default Menu;
