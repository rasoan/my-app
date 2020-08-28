import React from 'react';
import style from './App.module.scss';
import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../MainContent';


const App = () => {
  return (
    <div>
      <Header />
      <div className={style.Display}>
      <Navigation />
      <MainContent />
      </div>
    </div>
  );
}

export default App;