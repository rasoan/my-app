import React from 'react';
import style from './App.module.scss';
import LeftPanel from'../LeftPanel';
import Header from '../Header';
import ProfileContainer from '../Profile/ProfileContainer';
import Dialog from '../Dialog';
import { Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <div>
      <Header />
      <div className={style.container}>
        <LeftPanel state={props.state} dispatch={props.dispatch}/>
        <Route path="/Dialog" render={() => <Dialog dialogsPage={props.state.dialogsPage} 
                                                    dispatch={props.dispatch} />} />
        <Route path="/Profile" render={() => <ProfileContainer profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}
export default App;