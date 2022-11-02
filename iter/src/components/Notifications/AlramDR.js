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

export default function TemporaryDrawer() {
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
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}></Button>
          {/* 바꿀버튼이름</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}