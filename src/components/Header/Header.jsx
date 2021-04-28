import React from "react";
import style from "./Header.module.scss";
import AuthorizationPanel from "../AuthorizationPanel";
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100px',

    }
}))

const Header = () => {
    const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}
              color='default'
              position='static'>
        <AuthorizationPanel />
      </AppBar>
    </>
  );
};

export default Header;
