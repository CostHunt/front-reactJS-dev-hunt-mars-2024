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
import { LoadingButton } from '@mui/lab';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

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

  const { register, handleSubmit, formState: { errors } } = useForm();

  const user = useAuth()

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)

  const submit = (data) => {
    data['image_profile'] = './sieg.png'
    data['nom'] = 'bobo'
    data['prenoms'] = 'Jean'
    data['id_quartier'] = '4824de93-7ec9-4fb5-aeb4-73f2e5ec0e79'
    // console.log(data)
    setLoading(true)

    signup(data).then((resp) => {
      sessionStorage.setItem('token', resp.token)
      sessionStorage.setItem('user', JSON.stringify(resp.account))
      localStorage.clear()
      user.setToken(resp.token)
      user.setUser(resp.account)
      setLoading(false)
      setError(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
      setError(true)
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
                  error={(errors?.username)}
                  helperText={(errors?.username) ? errors.username.message : ""}
                  {...register('username', { required: "This field is required" })}
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
                  error={(errors?.matricule)}
                  helperText={(errors?.matricule) ? errors.matricule.message : ""}
                  {...register('matricule', { required: "This field is required" })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: { borderRadius: '30px', width: '100%', marginBottom: '2%' },
                  }}
                  error={(errors?.email)}
                  helperText={(errors?.email) ? errors.email.message : ""}
                  {...register('email', { required: "This field is required" })}
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
                  error={(errors?.password)}
                  helperText={(errors?.password) ? errors.password.message : ""}
                  {...register('password', { required: "This field is required" })}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <input type="file" accept='image/*' {...register('image')} />
              </Grid> */}
            </Grid>

            {(error) ?
              <Alert severity='error'>
                Ce compte existe déjà
              </Alert> : null
            }

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
              loading={loading}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
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