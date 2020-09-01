import React from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header>
      <div className={style.NavigationContainer}>
        <ul>
          <li className={style.NavigationContainer__item}>
            <a className={style.NavigationContainer__link} href="#">
              Profile
            </a>
          </li>
          <li className={style.NavigationContainer__item}>
            <a className={style.NavigationContainer__link} href="#">
              Messages
            </a>
          </li>
          <li className={style.NavigationContainer__item}>
            <a className={style.NavigationContainer__link} href="#">
              News
            </a>
          </li>
          <li className={style.NavigationContainer__item}>
            <a className={style.NavigationContainer__link} href="#">
              Music
            </a>
          </li>
          <li className={style.NavigationContainer__item}>
            <a className={style.NavigationContainer__link} href="#">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
