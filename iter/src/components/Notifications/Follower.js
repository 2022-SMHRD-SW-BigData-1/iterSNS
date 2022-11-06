import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// 추가된 import 
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import "./follower.scss";
import ButtonGroup from '@mui/material/ButtonGroup';
export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
 
    <List className='MainList'
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick} id='headerClick'>
        <ListItemText primary="팔로워" id='header'/>
        {/* 맨상단 제목부분 */}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
     
    {/* 팔로워 팔로잉 스위치 버튼 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center" id='followerbutton'>
              <ButtonGroup variant="text" aria-label="text button group" >
                <Button variant="contained" size='large' color="info" >팔로워</Button>
                <Button variant="outlined" size='large' color="info" >팔로잉</Button>
              </ButtonGroup>
            </ListItem>
      </List>
    </Collapse>




    {/* 첫번째 팔로워 팔로잉 */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding >
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
                        {/* alt 팔로워 팔로잉 이름 src 프로필 사진 경로*/}
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="동대문엽기떡볶이"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

    {/* 두번째 팔로워 팔로잉 */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="BHC"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

    {/* 세번째 팔로워 팔로잉 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="허니콤보"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

       {/* 네번째 팔로워 팔로잉 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="BHC"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

       {/* 다섯번째 팔로워 팔로잉 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="교촌레드"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

       {/* 여섯번째 팔로워 팔로잉 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                <ListItemText className='listtext'
                primary="탕화쿵푸마라탕"/>
            <Button variant="contained" color="info">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

    </List>
   
    </>
  );
}
