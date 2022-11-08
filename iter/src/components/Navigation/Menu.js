import "./Navigation";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MyProfileIcon from '@mui/icons-material/AccountCircle';
function Menu() {
  return (
    
    <div className="menubox">
      <div className="menu">
      
        <Link to="/MainView"><HomeIcon className="icon" fontSize="small"/></Link>
      
        <Link to="#"><Inbox className="icon" /></Link>
      
        <Link to="/PostCards"><BsPlusSquare className="icon" fontSize="small"/></Link>
      
        <Link to="/Notifications"><FavoriteBorderIcon className="icon" fontSize="small"/></Link>

        <Link to="/MyPages"><MyProfileIcon className="icon" fontSize="small"/></Link>

        <Link to="/"><LogoutIcon className="icon" fontSize="small"/></Link>
      </div>
    </div>

  );
}

export default Menu;
