import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form';
import { useAuth } from '../../providers/AuthProvider';
import { login } from '../../utils/login';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const { register, handleSubmit } = useForm();

  const user = useAuth()

  const submit = (data) => {
    login(data.username, data.password).then((resp) => {
      if (data.remember) {
        localStorage.setItem('token', resp.token)
        localStorage.setItem('user', JSON.stringify(resp.account))
        sessionStorage.clear()
      } else {
        sessionStorage.setItem('token', resp.token)
        sessionStorage.setItem('user', JSON.stringify(resp.account))
        localStorage.clear()
      }
      user.setToken(resp.token)
      user.setUser(resp.account)
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '75vh', justifyContent: 'center', marginTop: '5%' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={4}
          sx={{
            backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/000/176/742/original/abstract-background-with-geometric-shapes-and-lines-vector.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={false} sm={3} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form noValidate onSubmit={handleSubmit(submit)}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '2%' },
                  }}
                  {...register('username')}
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
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '6%' },
                  }}
                  {...register('password')}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" {...register('remember')} />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 5 }}
                  InputProps={{
                    style: { width: '90%', marginBottom: '6%' },
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="../signup" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}