import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Users from '../Users/Users';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel />
        <Route path="/Dialog" render={() => <DialogsContainer />} />
        <Route path="/Profile" render={() => <ProfileContainer />} />
        <Route path="/Users" render={() => <Users />} />
      </div>
    </div>
  );
}
export default App;