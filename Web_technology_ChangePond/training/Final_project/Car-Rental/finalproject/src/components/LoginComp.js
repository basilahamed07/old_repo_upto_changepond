import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { redirect, useNavigate, useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import "./LoginComp.css"
const defaultTheme = createTheme();



const LoginComp = () => {
   const nav = useNavigate();
   const redirect = ()=>{
    nav('/dash/signup');
   };
   const reloadss = ()=>{
    nav('/dash/forgot');
   };


   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email =data.get('email');
    let password=data.get('password');
    axios.get("http://localhost:8888/users").then((res)=>{
        let usersData=res.data;
       const data =usersData.filter((val)=>{return val.useremail===email && val.userpassword===password});
       if(data.length>0){
        nav("/dash/MainDashbord");
        sessionStorage.setItem("user",email)
       }
       else{  
        window.alert("useremail or passwwsord is wrong");
        email="";
        password="";
       }
    }).catch(()=>{})

  };

  return (
    <ThemeProvider theme={defaultTheme}  >
      <Container component="main"  maxWidth="xs" >
        <CssBaseline  />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" id="inputform"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component="button" variant="text" onClick={()=>reloadss()}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component="button" variant='text' onClick={()=>redirect()}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>


  );
}

export default LoginComp
