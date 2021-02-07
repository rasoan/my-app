import React from 'react';
import style from './App.module.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import Profile from '../Profile';
import Dialog from '../Dialog';
import {Route} from 'react-router-dom';


const App = (props) => {
  
  return (
      <div>
        <Header />
        <div className={style.Display}>
          <Navigation />
          <Route path="/Dialog" render={ () => <Dialog store={props.store} dispatch={props.store.dispatch.bind(props.store)}/> } />
          <Route path="/Profile" render={ () => <Profile profilePage={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)} /> } />
        </div>
      </div>
  );
}

export default App;