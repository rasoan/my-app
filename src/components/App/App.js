import React, {useEffect} from 'react';
import style from './App.module.scss';
import LeftPanel from '../LeftPanel';
import Header from '../Header';
//import ProfileContainer from '../Profile/ProfileContainer';
//import DialogsContainer from '../Dialogs/DialogsContainer';
import PreloaderInitializationApplication from "../Preloader/PreloaderInitializationApplication";
//import Users from '../Users/Users';
import { Route, Switch } from 'react-router-dom';
import {connect} from "react-redux";
import app, {initializeTheApplication} from "../../redux/app-reducer";
import {authMe} from "../../redux/auth-reducer";
import {withSuspense} from "../../hoc/withSuspense";
import { Redirect } from "react-router-dom";
import AuthorizationPage from '../../pages/AuthorizationPage';
const ProfilePage =  React.lazy(() => import('../../pages/ProfilePage'));
const DialogsPage =  React.lazy(() => import('../../pages/DialogsPage'));
const UsersPage =        React.lazy(() => import('../../pages/UsersPage'));
const MessagesPage = React.lazy(() => import('../../pages/MessagesPage'));

const App = (props) => {
  useEffect(() => {
    props.authMe()
         .then(response => {
           props.initializeTheApplication(true);
         });
    return () => {}
  }, [])
  
  
    if (!props.initialize) {
      return (<PreloaderInitializationApplication />)
    }

    return (
      <div>
        {props.initialize && <div>
        <Header />
        <div className={style.container}>
          <LeftPanel />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route path='/dialogs' render={withSuspense(DialogsPage)} />
            <Route path='/messages/:userId?' render={withSuspense(MessagesPage)} />
            <Route path='/profile/:userId?' render={withSuspense(ProfilePage)} />
            <Route path='/users' render={withSuspense(UsersPage)} />
            <Route path='/authorization' render={() => <AuthorizationPage />} />
            <Route path='*' render={() => <h2>Error 404, not found!</h2>} />
          </Switch>
        </div>
        </div>}
      </div>);
}

let mapStateToProps = (state) => {
  return {
    initialize: state.app.initializeTheApplication,
  }
}
export default connect(mapStateToProps, {authMe, initializeTheApplication})(App);