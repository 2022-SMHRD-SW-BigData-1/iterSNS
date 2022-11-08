import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

import image from "./images/main.jpg";
import logo from "./images/mainlogo.png";
import "./signin.scss";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Copyright(props) {
  return (
    <></>
  );
}

const theme = createTheme();

export default function Login() {

  const nav = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const firstJuminRef = useRef();
  const lastJuminRef = useRef();
  const genderRef = useRef();
  
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    let gen = lastJuminRef.current.value;
    
    console.log(gen.charAt(0));
    if( gen.charAt(0) == "1" || gen.charAt(0) == "3"){
      setGender("1");
    } else{
      setGender("2")
    };
  }

  const handleSignIn = (e) => {   
    
      // form태그가 다른 페이지로 이동시키지 않도록 방지
      e.preventDefault();
      console.log("handleLogin!");
      
      console.log(idRef.current.value);
      console.log(pwRef.current.value);
      console.log(nameRef.current.value);
      console.log(firstJuminRef.current.value);
      console.log(lastJuminRef.current.value);
      console.log(genderRef.current.value);

    
      // axios.post("보낼 위치", "보낼 데이터")
      axios.post("http://127.0.0.1:3001/SignIn", {
          email: idRef.current.value,
          password: pwRef.current.value,
          name: nameRef.current.value,
          firstJumin: firstJuminRef.current.value,
          lastJumin: lastJuminRef.current.value,
          gender: genderRef.current.value
      })
      .then((result)=>{
          console.log("데이터 보내기 성공!", result.data.result)
          nav("/");
      
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(()=>{
          console.log("데이터 보내기 실패!")
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"  sx={{ height: '90vh' , width:'140vh'}} className='main'>
        {/* 위 그리드 sx에서 사이즈 조정 */}
        <CssBaseline />
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`, // 좌측 배경사진
            backgroundRepeat: 'no-repeat',
            backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
        >
          <Box className='centerbox' // scss에서 회원가입 박스 위치 조정
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }}> */}
              <img src={logo} className='logo'></img>
              {/* <LockOutlinedIcon />  */}
              {/* 회원가입 위 아이콘 수정자리 */}
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
            <Box component="form" noValidate onSubmit={handleSignIn} sx={{ mt: 1 }}>
              <Grid container spacing={2}>

              {/* 이메일 */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  inputRef={idRef}
                  autoComplete="email"
                />
              </Grid>
              {/* 비밀번호 */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  inputRef={pwRef}
                  autoComplete="new-password"
                />
              </Grid>
              {/* 이름 */}
              <Grid item xs={12} >
              <TextField
               autoComplete="given-name"
               name="name"
               required
               fullWidth
               id="name"
               label="이름입력"
               inputRef={nameRef}
               autoFocus
              />
              </Grid>
              {/* 주민번호  */}
              <Grid item xs={12} sm={5}>
              <TextField
               autoComplete="first-Jumin"
               name="firstJumin"
               required
               fullWidth
               id="firstJumin"
               inputRef={firstJuminRef}
               label="주민번호 앞번호 입력"
               autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="lastJumin"
                  label="주민번호 뒷번호 입력"
                  type="password"
                  name="lastJumin"
                  inputRef={lastJuminRef}
                  autoComplete="last-Jumin"
                  onChange={handleChange}
                />
              </Grid>
              {/* 성별 */}
              <Grid item xs={12} sm={2}>
              <FormControl fullWidth>
              <InputLabel id="Gender-select-label">성별</InputLabel>
                <Select
                labelId="Gender-select-label"
                id="Gender-select"
                name="gender"
                value={gender}
                label="Gender"
                inputRef={genderRef}
                >

                <MenuItem value={1}>남</MenuItem>
                <MenuItem value={2}>여</MenuItem>
                </Select>
                </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='info'
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}