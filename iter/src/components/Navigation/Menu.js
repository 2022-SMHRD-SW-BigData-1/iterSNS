import "./navigation.scss";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Inbox } from "./images/inbox.svg";
import { ReactComponent as Explore } from "./images/explore.svg";
import { ReactComponent as Notifications } from "./images/notifications.svg";
import { Link } from "react-router-dom"
import ProfileIcon from "../Profile/ProfileIcon";

import image from "../Profile/images/profile.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';



function Menu() {

  const [state, setState] = React.useState({
    
    bottom: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* 첫번째 알림 */}
      <List>
        {['Alram1'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                {/* / 프로필 사진 넣기/ */}
              </ListItemAvatar>
            <ListItemText className='listtext' primary="허니콤보"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       {/* 두번째 팔로워 알림 */}
      <List>
        {['Alram2'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                {/* / 프로필 사진 넣기/ */}
              </ListItemAvatar>
            <ListItemText className='listtext' primary="동대문엽기떡볶이"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       {/* 세번째 알림 */}
       <List>
        {['Alram3'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                {/* / 프로필 사진 넣기/ */}
              </ListItemAvatar>
            <ListItemText className='listtext' primary="청년다방"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <div className="menubox">
      <nav>
      <div className="menu">
      
        <Link to="/MainView"><Home className="icon" /></Link>
      
        <Link to="#"><Inbox className="icon" /></Link>
      
        <Link to="/IterMap"><Explore className="icon" /></Link>
      
        <Link to="#alram">    <div>
        {['bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Notifications className="icon" onClick={toggleDrawer(anchor, true)}>니얼굴</Notifications>
            {/* 바꿀버튼이름</Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}</div>
        {/* <Notifications className="icon" /> */}
        </Link>

        <Link to="/MyPages"><ProfileIcon iconSize="small" image={image} /></Link>
      </div>
      </nav>
    </div>




    </>
  );
}

export default Menu;
