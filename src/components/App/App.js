import React from 'react';
import style from './App.module.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import Profile from '../Profile';
import Dialog from '../Dialog';
import {Route} from 'react-router-dom';


const App = (props) => {
  
  console.log(props);

  return (
      <div>
        <Header />
        <div className={style.Display}>
          <Navigation />
          <Route path="/Dialog" render={ () => <Dialog messagesData={props.state.messagesPage.messages} dialogsData={props.state.messagesPage.dialogsData} /> } />
          <Route path="/Profile" render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> } />
        </div>
      </div>
  );
}

export default App;