import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Users from '../Users/Users';
import Login from '../Login';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel />
        <Route path='/Dialog' render={() => <DialogsContainer />} />
        <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/Users' render={() => <Users />} />
        <Route path='/Login' render={() => <Login />} />
      </div>
    </div>
  );
}
export default App;