import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useParams, Link } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
//import { mainListItems, Logout } from './listItems';
import { Table } from 'react-bootstrap';
import StorefrontIcon from '@material-ui/icons/Storefront';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',

      },
      toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
      },
      appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
      },
      appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      menuButton: {
            marginRight: 36,
      },
      menuButtonHidden: {
            display: 'none',
      },
      title: {
            flexGrow: 1,
            fontSize: 40,
            fontWeight: 600,
      },
      userimage: {
            height: 60,
            width: 60,
            borderRadius: 100,
            borderColor: 'white',

      },
      drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9),
            },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

      },

      container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            marginTop: '20px',
            marginLeft: '100px',
      },
      paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
      },
      fixedHeight: {
            height: 'auto',
      },
      addbutton: {
            backgroundColor: '#0000ff',
            height: '50px',
            width: '160px',
            borderRadius: '5px',
            marginRight: '10px',
            textDecoration: 'none',
            textAlign: 'center',
            paddingTop: '10px'
      },
      addcategorybox: {
            width: '1100px',
            height: '120px',
            backgroundColor: '#fff',
            marginLeft: '30px',
            display: 'flex',
            //boxShadow:'5px 1px 2px 2px '

      },
      categorybtn: {
            border: 0,
            backgroundColor: '#9bddff',
            width: '800px',
            height: '40px',
            marginTop: '40px',
            marginLeft: '30px',
            fontSize: '20px',
            borderRadius: '5px'

      },
      addcategory: {
            height: '40px'
      },
      categoryimage: {
            height: '500px',
            width: '1100px'
      },
      btn: {
            color: 'white',
            fontSize: '18px',
            width: '150px',
            height: '40px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '5px'
      },
      

     
      twocolumn: {
            gridTemplateColumns: '1fr 2fr',
            display: 'flex',
      },
      columnleft: {
            width: '300px',

      },
     
     



}));

const styles = {
      side: {
            backgroundColor: 'rgb(37, 37, 94)',
      }
};


export default function ProductInfo() {
      const classes = useStyles();
      const [open, setOpen] = React.useState(true);

      const handleDrawerOpen = () => {
            setOpen(true);
      };
      const handleDrawerClose = () => {
            setOpen(false);
      };

      return (
            <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar} style={{ backgroundColor: 'rgb(37, 37, 94)' }}>
                              <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    <b>STOCKS</b>
                              </Typography>

                              <IconButton color="inherit" fontSize="inherit">
                                    <AccountCircleIcon />

                              </IconButton>
                        </Toolbar>

                  </AppBar>
                  <div style={styles.side}>
                        <Drawer
                              variant="permanent"
                              classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                              }}
                              open={open}
                        >
                              <div className={classes.toolbarIcon} style={{ backgroundColor: 'rgb(37, 37, 94)', color: 'white' }}>
                                    <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
                                          <ChevronLeftIcon />
                                    </IconButton>
                              </div>
                              <Divider />
                              <List style={{ backgroundColor: 'rgb(37, 37, 94)', color: 'white' }}>
                                    <ListItem button component={Link} to="/">
                                          <ListItemIcon style={{ color: 'white' }}>
                                                <DashboardIcon />
                                          </ListItemIcon>
                                          <ListItemText primary="Manage Store Items" />
                                    </ListItem>
                              </List>
                              <Divider />
                              <List style={{ backgroundColor: 'rgb(37, 37, 94)', color: 'white' }}>
                                    <ListItem button component={Link} to="/stockdetail">
                                          <ListItemIcon style={{ color: 'white' }}>
                                                <StorefrontIcon />
                                          </ListItemIcon>
                                          <ListItemText primary="Manage Stock " />
                                    </ListItem>
                              </List>

                        </Drawer>
                  </div>


            </div>
      );
}








