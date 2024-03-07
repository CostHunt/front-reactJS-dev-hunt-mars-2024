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
// import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signup } from '../../utils/signup';
import { useAuth } from '../../providers/AuthProvider';

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

export default function SignUp() {

  const { register, handleSubmit } = useForm();

  const user = useAuth()

  const submit = (data) => {
    data['image_profile'] = './sieg.png'
    data['nom'] = 'bobo'
    data['prenoms'] = 'Jean'
    data['id_quartier'] = 'd10cfa33-db3c-49e4-9d92-cae07bf4cf61'
    // console.log(data)

    signup(data).then((resp) => {
      sessionStorage.setItem('token', resp.token)
      sessionStorage.setItem('user', JSON.stringify(resp.account))
      localStorage.clear()
      user.setToken(resp.token)
      user.setUser(resp.account)
    }).catch((error) => {
      console.log(error)
    })
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          // item
          // xs={false}
          sm={3}
          md={4}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/abstract-green-blue-waves-background_1302-6007.jpg?w=740)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(submit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Username"
                  autoFocus
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '2%' },
                  }}
                  {...register('username')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="N° Matricule"
                  type='number'
                  name="lastName"
                  autoComplete="family-name"
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '2%' },
                  }}
                  {...register('matricule')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '2%' },
                  }}
                  {...register('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '5%' },
                  }}
                  {...register('password')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}