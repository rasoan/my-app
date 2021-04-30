import React from "react";
import style from "./Header.module.scss";
import AuthorizationPanel from "../AuthorizationPanel";
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles( theme => ({
    appBar: {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
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
              <Typography variant="h6" noWrap>
                  Responsive drawer
              </Typography>
          </Toolbar>
        <AuthorizationPanel />
      </AppBar>
    </>
  );
};

export default Header;
