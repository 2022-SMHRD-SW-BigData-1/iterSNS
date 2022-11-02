
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import "./alram.scss";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import logo from "../../images/로고1.png";
import image from "../../images/왕짬뽕.jpg";
import Navigation from '../Navigation/Navigation';
// import mia from "./src/assets/images/mia.png";



export default function AlignItemsList() {

  return (
    <> 
    <Navigation/>
    <div className='alramhome'>
      <Button variant="contained" size='large' >홈</Button>
    </div>  
    
    <div className='mainlist'>
      <List>
      {/* 첫번째 알림 */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
          {/* / 프로필 사진 넣기/ */}
        </ListItemAvatar>
        <ListItemText className='listtext' primary="허니콤보"/>
       
      {/* 두번째 팔로워 알림 */}
      </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext' primary="동대문엽기떡볶이"/>
      </ListItem>

      {/* 세번째 알림 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="청년다방"/>
      </ListItem>
  
      </List>
    </div>
    </>
  );
}
