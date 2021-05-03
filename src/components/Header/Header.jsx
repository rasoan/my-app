import React from "react";
import AuthorizationPanel from "../AuthorizationPanel";
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import People from '@material-ui/icons/People';



const useStyles = makeStyles( theme => ({
    appBar: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        minHeight: '70px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    header: {
        color: "#3f51b5",
        [theme.breakpoints.up("xs")]: {
            fontSize: 0
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: 15
        },
        [theme.breakpoints.up("md")]: {
            fontSize: 20
        },
    },
    headerIcon: {
        marginRight: 5,
    },
}))

const Header = (props) => {
    const {toggleNav} = props;
    const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}
              color='default'
              position='static'>
          <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleNav}
                  className={classes.menuButton}
              >
                  <MenuIcon />
              </IconButton>
              <People className={`${classes.header} ${classes.headerIcon}`} />
              <Typography className={classes.header}
                          variant="h6"
                          component="h1"

                          noWrap>
                  СОЦИАЛЬНАЯ СЕТЬ
              </Typography>
              <AuthorizationPanel />
          </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
