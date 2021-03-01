import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import Profile from '../Profile/Profile';
import Dialog from '../Dialog';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel state={props.state} dispatch={props.dispatch}/>
        <Route path="/Dialog" render={() => <Dialog state={props.state} dispatch={props.dispatch} />} />
        <Route path="/Profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}
export default App;