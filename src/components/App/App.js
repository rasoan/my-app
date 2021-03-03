import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel state={props.state} dispatch={props.dispatch}/>
        <Route path="/Dialog" render={() => <DialogsContainer store={props.store} />} />
        <Route path="/Profile" render={() => <Profile store={props.store} />} />
      </div>
    </div>
  );
}
export default App;