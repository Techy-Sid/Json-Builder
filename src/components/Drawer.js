import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Logo } from '../static/images/imgStore';
import Page from '../container/page'
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ForumIcon from '@mui/icons-material/Forum';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import QuizIcon from '@mui/icons-material/Quiz';
import FeedIcon from '@mui/icons-material/Feed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MenuDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  const drawerMainMenu = [{
    menu: 'Project',
    icon: 'DashboardIcon'
  },
  {
    menu: 'Create JSON',
    icon: 'DataObjectIcon'
  },
  {
    menu: 'Testimonials',
    icon: 'ForumIcon'
  },
  {
    menu: 'Documentation',
    icon: 'ChromeReaderModeIcon'
  }]

  const drawerSupportMenu = [{
    menu: 'FAQ',
    icon: 'QuizIcon'
  },
  {
    menu: 'Feed',
    icon: 'FeedIcon'
  },
  {
    menu: 'Support',
    icon: 'SupportAgentIcon'
  }]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSelectMenuItem = item => {
    setSelectedMenu(item)
  }

  const getIcon = icon => {
    switch (icon) {
      case 'DashboardIcon':
        return <DashboardIcon />
      case 'DataObjectIcon':
        return <DataObjectIcon />
      case 'ForumIcon':
        return <ForumIcon />
      case 'ChromeReaderModeIcon':
        return <ChromeReaderModeIcon />
      case 'QuizIcon':
        return <QuizIcon />
      case 'FeedIcon':
        return <FeedIcon />
      case 'SupportAgentIcon':
        return <SupportAgentIcon />
      default:
        return <span></span>
    }
  }

  return (
    <Box sx={{ display: 'flex' }} className="class-1">
      <CssBaseline className="class-2" />
      <AppBar position="fixed" open={open} className="class-3">
        <Toolbar style={{ height: open ? '95px' : '65px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            JSON BUILDER
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}></Typography>
          <MenuItem sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <Avatar alt="Remy Sharp" src={require('../static/images/alex.jpeg')} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="class-4">
        <DrawerHeader className="class-5">
          {open && <Logo className="drawerLogo" />}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Box className="menuItemContainer">
          {open && <Divider />}
          <List className="class-6">
            {drawerMainMenu.map(({ menu, icon }, index) => (
              <ListItem key={menu} disablePadding sx={{ display: 'block' }} className="class-7">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  className="class-8"
                  onClick={() => onSelectMenuItem(menu)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    className="class-9"
                  >
                    {getIcon(icon)}
                  </ListItemIcon>
                  <ListItemText primary={menu} sx={{ opacity: open ? 1 : 0 }} className="class-10" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {drawerSupportMenu.map(({ menu, icon}, index) => (
              <ListItem key={menu} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => onSelectMenuItem(menu)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(icon)}
                  </ListItemIcon>
                  <ListItemText primary={menu} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box className="pages_parent">
          <Page menuItem={selectedMenu} />
        </Box>
      </Box>
    </Box>
  );
}

export default MenuDrawer
