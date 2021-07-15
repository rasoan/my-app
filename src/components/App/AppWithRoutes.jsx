import React from "react";
import style from "./App.module.scss";
import {Route, Switch} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import AuthorizationPage from '../../pages/AuthorizationPage';
import Navigation from '../Navigation';
import PATH from '../../constants/path';
import Header from "../Header";
import ProfilePage from '../../pages/ProfilePage';
import DialogsPage from '../../pages/DialogsPage';
import UsersPage from '../../pages/UsersPage';
import MessagesPage from '../../pages/MessagesPage';
import Box from "@material-ui/core/Box";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        backgroundColor: theme.backgroundColors.mainBackgroundColor,
    },
    mainContainerContent: {
        display: "flex",
        justifyContent: "center",
        padding: 0,
        [theme.breakpoints.up('xs')]: {
            width: 200,
        },
        [theme.breakpoints.up('sm')]: {
            width: 400,
        },
        [theme.breakpoints.up('md')]: {
            width: 700,
        },
        [theme.breakpoints.up('lg')]: {
            width: 1000,
        },
        [theme.breakpoints.up('xl')]: {
            width: 1200,
        },
    }
}));

const All = (props) => {
    const classes = useStyles();

    return (<>
        <Box className={classes.wrapper}
             minHeight={"100vh"}>
            <Header/>
            <Container
                className={classes.mainContainerContent}>
                <Navigation/>
                <div style={{flexGrow: 1}}>
                <Switch>
                    <Route exact path={PATH.NULL_PATH} render={() => <Redirect to='/profile'/>}/>
                    <Route path={PATH.DIALOGS} component={DialogsPage}/>
                    <Route path={PATH.MESSAGES + '/:userId?'} component={MessagesPage}/>
                    <Route path={PATH.PROFILE + '/:userId?'} component={ProfilePage}/>
                    <Route path={PATH.MY_APP + '/:userId?'} component={ProfilePage}/>
                    <Route path={PATH.USERS} component={UsersPage}/>
                    <Route path={PATH.ALL} render={() => <h2>Error 404, not found!</h2>}/>
                </Switch>
                </div>
            </Container>
        </Box>
    </>);
}

const AppWithRoutes = () => {
    return (<>
        <Switch>
            <Route path={PATH.AUTHORIZATION} render={() => <AuthorizationPage/>}/>
            <Route path={PATH.ALL} render={() => <All/>}/>
        </Switch>
    </>);
}

export default AppWithRoutes;