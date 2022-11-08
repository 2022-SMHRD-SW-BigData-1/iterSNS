import { useRef, useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import image from "./images/main.jpg";
import logo from "./images/mainlogo.png";
import "./login.scss";

function Copyright(props) {
  return <></>;
}

const theme = createTheme();

export default function Login() {

  const idRef = useRef();
  const pwRef = useRef();
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/Logout")
      .then((res) => {
        console.log("초기화 성공!", res.data.res);
      })
      .catch(() => {
        console.log("초기화 실패!");
      }); 
  }, []);


  const handleLogin = (e) => {
    // form태그가 다른 페이지로 이동시키지 않도록 방지
    e.preventDefault();
    console.log("handleLogin!");
    console.log(idRef.current.value);
    console.log(pwRef.current.value);

    // axios.post("보낼 위치", "보낼 데이터")
    axios
      .post("http://127.0.0.1:3001/Login", {
        email: idRef.current.value,
        password: pwRef.current.value,
      })
      .then((result) => {
        console.log("데이터 보내기 성공!", result.data.id);
        nav("/MainView");
      }) // axios로 보낼 위치에 데이터 보내기를 성공하면 then
      .catch(() => {
        console.log("데이터 보내기 실패!");
      }); // aixos로 보낼 위치에 데이터 보내기를 실패하면 catch
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "90vh", width: "140vh" }}
        className="main"
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`, // 좌측 이미지
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            className="centerbox"
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }}> */}
            <img src={logo} className="logo"></img>
            {/* <LockOutlinedIcon />  */}
            {/* 회원가입 위 아이콘 수정자리 */}
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
            {/* <form onSubmit={handleLogin} method="post"> */}
            <Box
              component="form"
              noValidate
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
              method="post"
            >
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                  inputRef={idRef}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  inputRef={pwRef}
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="info"
                  sx={{ mt: 3, mb: 2 }}
                >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      비밀번호 찾기
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/SignIn" variant="body2">
                      {"아이디가 없나요? 회원가입하기"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
              {/* </form> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
