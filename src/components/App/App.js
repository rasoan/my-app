import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Preloader from "../Preloader/Preloader";
import Users from '../Users/Users';
import AuthorizationPage from '../Authorization/AuthorizationPage/AuthorizationPage';
import { Route } from 'react-router-dom';
import {connect} from "react-redux";
import app, {initializeTheApplication} from "../../redux/app-reducer";
import {authMe} from "../../redux/auth-reducer";
import {withSuspense} from "../../hoc/withSuspense";

class App extends React.Component {
  componentDidMount() {
    this.props.authMe()
              .then(response => {
                this.props.initializeTheApplication(true);
              });
  }
  render() {
    if (!this.props.initialize) {
      return (<Preloader />)
    }

    return (
      <div>
        {this.props.initialize && <div>
        <Header />
        <div className={style.container}>
          <LeftPanel />
          <Route path='/dialog' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users' render={withSuspense(Users)} />
          <Route path='/authorization' render={withSuspense(AuthorizationPage)} />
        </div>
        </div>}
      </div>);
  }
}

let mapStateToProps = (state) => {
  return {
    initialize: state.appPage.initializeTheApplication,
  }
}
export default connect(mapStateToProps, {authMe, initializeTheApplication})(App);