import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// // @mui material components
// import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import MuiLink from "@mui/material/Link";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

const theme = createTheme();

const SignIn = ({ handleSignIn, handleLoading, handleViewPage }) => {
  const [isSignInDisabled, setSignInDisabled] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName = data.get('userName');
    const password =  data.get('password');
    const isValid = userName !== '' && userName.length > 5 && password !== '' && password.length > 8

    if (isValid) {
      setSignInDisabled(true)
      setTimeout(() => {
        handleLoading(false)
      }, 2000)
      handleLoading(true)
      handleViewPage(true)
    }
  };

  const handleSignUp = () => {
    handleSignIn(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Remy Sharp" src={require('../static/images/alex.jpeg')} /> <br />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isSignInDisabled}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Do not have an account? 
                <Link href="#" variant="body2" onClick={handleSignUp}>
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  // <Card className='class-card' style={{ width: '30%', margin: 'auto', marginTop: '5%'}}>
  //   <Box
  //     className="signInSocailBlock"
  //     variant="gradient"
  //     bgColor="info"
  //     borderRadius="lg"
  //     coloredShadow="info"
  //     mx={2}
  //     mt={-3}
  //     p={2}
  //     mb={1}
  //     textAlign="center"
  //   >
  //     <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
  //       Sign in
  //     </Typography>
  //     <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
  //       <Grid item xs={2}>
  //         <Typography component={MuiLink} href="#" variant="body1" color="white">
  //           <FacebookIcon color="inherit" />
  //         </Typography>
  //       </Grid>
  //       <Grid item xs={2}>
  //         <Typography component={MuiLink} href="#" variant="body1" color="white">
  //           <GitHubIcon color="inherit" />
  //         </Typography>
  //       </Grid>
  //       <Grid item xs={2}>
  //         <Typography component={MuiLink} href="#" variant="body1" color="white">
  //           <GoogleIcon color="inherit" />
  //         </Typography>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   <Box pt={4} pb={3} px={3}>
  //     <Box component="form" role="form">
  //       <Box mb={2}>
  //         <TextField
  //           type="email"
  //           label="Email"
  //           autoComplete="off"
  //           placeholder="sudhanshu@example.com"
  //           fullWidth
  //         />
  //       </Box>
  //       <Box mb={2}>
  //         <TextField type="password" label="Password" placeholder="**********" fullWidth />
  //       </Box>
  //       <Box display="flex" alignItems="center" ml={-1}>
  //         {/* <Switch checked={rememberMe} onChange={handleSetRememberMe} /> */}
  //         <Typography
  //           variant="button"
  //           fontWeight="regular"
  //           color="text"
  //           // onClick={handleSetRememberMe}
  //           sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
  //         >
  //           &nbsp;&nbsp;Remember me
  //         </Typography>
  //       </Box>
  //       <Box mt={4} mb={1}>
  //         <Button variant="gradient" color="info" fullWidth>
  //           sign in
  //         </Button>
  //       </Box>
  //       <Box mt={3} mb={1} textAlign="center">
  //         <Typography variant="button" color="text">
  //           Don&apos;t have an account?{" "}
  //           <Typography
  //             // component={Link}
  //             to="/authentication/sign-up"
  //             variant="button"
  //             color="info"
  //             fontWeight="medium"
  //             textGradient
  //           >
  //             Sign up
  //           </Typography>
  //         </Typography>
  //       </Box>
  //     </Box>
  //   </Box>
  // </Card>
  );
}

export default SignIn
