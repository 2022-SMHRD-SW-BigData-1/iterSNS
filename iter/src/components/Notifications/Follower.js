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
export default function NestedList(props) {
  const { followID } = props
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
 
    <List id='MainList'
      component="nav"
      aria-labelledby="nested-list-subheader">
    
     
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
                primary={followID}/>
            <Button variant="contained" color="warning">삭제</Button>
            </ListItem>
        </List>
      </Collapse>

    </List>
   
    </>
  );
}
