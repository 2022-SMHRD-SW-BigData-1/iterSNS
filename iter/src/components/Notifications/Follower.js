import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// 추가된 import 
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import "./follower.scss";

export default function NestedList(props) {
  const { followerID } = props;
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
                primary={followerID}/>
            </ListItem>
        </List>
      </Collapse>
    </List>
   
    </>
  );
}
