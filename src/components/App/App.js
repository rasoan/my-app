import React, {useEffect} from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
//import ProfileContainer from '../Profile/ProfileContainer';
//import DialogsContainer from '../Dialogs/DialogsContainer';
import PreloaderInitializationApplication from "../Preloader/PreloaderInitializationApplication";
//import Users from '../Users/Users';
import { Route } from 'react-router-dom';
import {connect} from "react-redux";
import app, {initializeTheApplication} from "../../redux/app-reducer";
import {authMe} from "../../redux/auth-reducer";
import {withSuspense} from "../../hoc/withSuspense";
import AuthorizationPage from '../Authorization/AuthorizationPage/AuthorizationPage';
const ProfileContainer =  React.lazy(() => import('../Profile/ProfileContainer'));
const DialogsContainer =  React.lazy(() => import('../Dialogs/DialogsContainer'));
const Users =             React.lazy(() => import('../Users/Users'));

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
          <Route path='/dialog' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users' render={withSuspense(Users)} />
          <Route path='/authorization' render={() => <AuthorizationPage />} />
        </div>
        </div>}
      </div>);
}

let mapStateToProps = (state) => {
  return {
    initialize: state.appPage.initializeTheApplication,
  }
}
export default connect(mapStateToProps, {authMe, initializeTheApplication})(App);