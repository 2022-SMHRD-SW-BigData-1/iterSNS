import "./navigation.scss";
import Menu from "./Menu";
import logo from "../Login/images/mainlogo.png";
import { Link } from "react-router-dom"
// Search icon
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
// 
import {React, useRef} from 'react';
import axios from "axios";

function Navigation() {

  const searchRef = useRef()
  
  const handSearch = (e) => {
    e.preventDefault();
    console.log("handSearch!");
    console.log(searchRef);

    axios.post("http://127.0.0.1:3001/Search", {
      search : searchRef.current.value,
  })

      .then((res)=>{
          console.log("검색 보내기 성공!", res)
      }) 
      .catch(()=>{
          console.log("검색 보내기 실패!")
      }); 
    }



  return (
    <div className="navigation">
      <div className="container">
        <div className="logobox"><Link to="/MainView"><img className="navigationlogo" src={logo} alt="Iter logo"/></Link></div>
        <div className="search">
          <form onSubmit={handSearch}>
          <input className="searchBox" type="text" placeholder="Search" ref={searchRef}>
          </input>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="search" className="searchIcon" name="Search" type="submit" >
              <SearchIcon />
            </IconButton>
          </Stack>
          </form>
        </div>
        <Menu />
      </div>
    </div>
  );
  }

export default Navigation;