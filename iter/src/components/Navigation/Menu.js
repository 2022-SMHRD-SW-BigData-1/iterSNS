import "./Navigation";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Inbox } from "./images/inbox.svg";
// import { ReactComponent as Explore } from "./images/explore.svg";
import { ReactComponent as Notifications } from "./images/notifications.svg";
import { Link } from "react-router-dom";
import ProfileIcon from "../Profile/ProfileIcon";
import { BsPlusSquare } from "react-icons/bs";

import image from "../Profile/images/profile.jpg";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Menu() {
  return (
    
    <div className="menubox">
      <div className="menu">
      
        <Link to="/MainView"><HomeIcon className="icon" fontSize="small"/></Link>
      
        <Link to="#"><Inbox className="icon" /></Link>
      
        <Link to="/IterMap"><ExploreIcon className="icon" fontSize="small"/></Link>
      
        <Link to="/Notifications"><FavoriteBorderIcon className="icon" fontSize="small"/></Link>

        <Link to="/MyPages"><ProfileIcon iconSize="small" image={image} /></Link>

        <Link to="/Login"><LogoutIcon className="icon" fontSize="small"/></Link>
      </div>
    </div>

  );
}

export default Menu;
