import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>

              {/* 이메일 */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
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
                  autoComplete="new-password"
                />
              </Grid>
              {/* 이름 */}
              <Grid item xs={12} >
              <TextField
               autoComplete="given-name"
               name="firstName"
               required
               fullWidth
               id="firstName"
               label="이름입력"
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
                  name="lastJumin"
                  autoComplete="last-Jumin"
                />
              </Grid>
              {/* 성별 */}
              <Grid item xs={12} sm={2}>
              <FormControl fullWidth>
              <InputLabel id="Gender-select-label">성별</InputLabel>
                <Select
                labelId="Gender-select-label"
                id="Gender-select"
                value={gender}
                label="Gender"
                onChange={handleChange}
                >
                <MenuItem value={0}>남성</MenuItem>
                <MenuItem value={1}>여성</MenuItem>
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