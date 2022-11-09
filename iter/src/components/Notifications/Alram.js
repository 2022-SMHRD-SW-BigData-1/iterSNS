import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// 추가된 import
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import "./alram.scss";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    boxShadow: 24,
  };

  return (
    <>
 
    <List className='MainList'
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick} id='AheaderClick'>
        <ListItemText primary="알림" id='Aheader'/>
        {/* 맨상단 제목부분 */}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
     
    {/* 팔로워 팔로잉 스위치 버튼 */}
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          <Divider variant="inset" component="li" />
            <ListItem alignItems="center" id='Afollowerbutton'>
              <Link to="/MainView">
                <Button variant="contained" size='large'>메인</Button>
              </Link>
            </ListItem>
      </List>
    </Collapse>

        {/* 첫번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
                {/* alt 팔로워 팔로잉 이름 src 프로필 사진 경로*/}
              </ListItemAvatar>
              <ListItemText className="listtext" primary="동대문엽기떡볶이" />
            </ListItem>
          </List>
        </Collapse>

        {/* 두번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText className="listtext" primary="BHC" />
            </ListItem>
          </List>
        </Collapse>

        {/* 세번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText className="listtext" primary="허니콤보" />
            </ListItem>
          </List>
        </Collapse>

        {/* 네번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText className="listtext" primary="BHC" />
            </ListItem>
          </List>
        </Collapse>

        {/* 다섯번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText className="listtext" primary="교촌레드" />
            </ListItem>
          </List>
        </Collapse>

        {/* 여섯번째 알림 */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText className="listtext" primary="탕화쿵푸마라탕" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
}
