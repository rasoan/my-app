import React from "react";
import style from "./Navigation.module.scss";


const Navigation = () => {
  
  return (
    <header>
      <div className={style.NavigationContainer}>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
