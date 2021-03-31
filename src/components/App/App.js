import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Users from '../Users/Users';
import Authorization from '../Authorization/Authorization';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel />
        <Route path='/dialog' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <Users />} />
        <Route path='/authorization' render={() => <Authorization />} />
      </div>
    </div>
  );
}
export default App;