import React from "react";
import style from "./App.module.scss";
import { Route, Switch } from 'react-router-dom';
import {withSuspense} from "../../hoc/withSuspense";
import { Redirect } from "react-router-dom";
import AuthorizationPage from '../../pages/AuthorizationPage';
import LeftPanel from '../LeftPanel';
import PATH from '../../constants/path';

const ProfilePage =  React.lazy(() => import('../../pages/ProfilePage'));
const DialogsPage =  React.lazy(() => import('../../pages/DialogsPage'));
const UsersPage =        React.lazy(() => import('../../pages/UsersPage'));
const MessagesPage = React.lazy(() => import('../../pages/MessagesPage'));

const AppWithRoutes  = () => {
    return (
        <div className={style.container}>
        <LeftPanel />
        <Switch>
          <Route exact path={PATH.NULL_PATH} render={() => <Redirect to='/profile' />} />
          <Route path={PATH.DIALOGS} render={withSuspense(DialogsPage)} />
          <Route path={PATH.MESSAGES + '/:userId?'} render={withSuspense(MessagesPage)} />
          <Route path={PATH.PROFILE + '/:userId?'} render={withSuspense(ProfilePage)} />
          <Route path={PATH.USERS} render={withSuspense(UsersPage)} />
          <Route path={PATH.AUTHORIZATION} render={() => <AuthorizationPage />} />
          <Route path={PATH.ALL} render={() => <h2>Error 404, not found!</h2>} />
        </Switch>
      </div>
    );
}

export default AppWithRoutes;