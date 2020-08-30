import React from 'react';
import style from './App.module.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import Profile from '../Profile';


const App = () => {
  return (
    <div>
      <Header />
      <div className={style.Display}>
      <Navigation />
      <Profile />
      </div>
    </div>
  );
}

export default App;