import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Logo } from '../static/images/imgStore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuDrawer from './Drawer'

const Header = ({ handleSignIn, isHeaderChange }) => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const handleLogin = () => {
    handleSignIn(true)
  }

  return (
    <>
    {isHeaderChange ? (
      <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" className='header'>
          <Toolbar>
            <Logo className="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div id="slide">JSON BUILDER</div>
            </Typography>
            <div className="hvr-sweep-to-right" onClick={handleLogin}>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
    ) : (
      <MenuDrawer />
    )}
    </>
  );
}

export default Header
