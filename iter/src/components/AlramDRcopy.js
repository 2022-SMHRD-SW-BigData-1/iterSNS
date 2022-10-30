
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "../styles/alramDR.scss";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import logo from "../images/로고1.png";
import image from "../images/왕짬뽕.jpg";
import Navigation from './Navigation';


import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/HomebuttonsDR.scss";



const actions = [
 
  { icon: <BookmarkIcon />, name: 'Save' },
  { icon: <PersonOutlineIcon />, name: 'Mypage' },
  { icon: <InstagramIcon />, name: 'Main' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <> 
    
  {/* <div>
    <img className="logo" src={logo} alt="instagram logo"/>

  </div> */}
  <div className='alramhome'>
    <Button variant="contained" size='large' >홈</Button>
  </div>  
    <div className='mainlist'>
    <List>
    
      {/* 첫번째 알림 */}
    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image}/>
          {/* / 프로필 사진 넣기/ */}
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="허니콤보"
          // secondary={
          //   <React.Fragment>
          //     <Typography
          //       sx={{ display: 'inline' }}
          //       component="span"
          //       variant="body2"
          //       color="text.primary"
          //     >
          //       Ali Connors
          //     </Typography>
          //     {" — I'll be in your neighborhood doing errands this…"}
          //   </React.Fragment>
          // }
        />
       
      </ListItem>
     
      {/* 두번째 팔로워 알림 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="동대문엽기떡볶이"/>
          
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
      {/* 네번째 알림 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="BHC"/>
         
      </ListItem>
      {/* 다섯번째 알림 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="BBQ"/>
          
      </ListItem>
      {/* 여섯번째 알림 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="교촌레드"/>
         
      </ListItem>
      {/* 일곱번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="피자나라치킨공주"/>
        
      </ListItem>
      {/* 여덟번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="와플대학"/>
         
      </ListItem>
      {/* 아홉번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="아보카도아보카"/>
          
      </ListItem>
      {/* 열번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="베스킨라빈스"/>
          
      </ListItem>
      {/* 열한번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="탕화쿵푸마라탕"/>
          
      </ListItem>
      {/* 열두번째 팔로워 */}
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText className='listtext'
          primary="고수닭갈비"/>
          
      </ListItem>

      
      
    </List>
    <SpeedDial className='buttons'
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute',bottom: 16, right: 16 ,marginRight: 50 , marginBottom:20}}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
    
    
      
   
 

    
    
    </>
  );
}
