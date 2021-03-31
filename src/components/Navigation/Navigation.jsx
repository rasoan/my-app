import React from "react";
import style from "./Navigation.module.scss";
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header>
      <div className={style.NavigationContainer}>
        <ul className={style.NavigationContainer__list}>
          <li className={style.NavigationContainer__item}>
            <NavLink onClick={props.clickProfileLink} activeClassName={style.active} className={style.NavigationContainer__link} to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/dialog">
            Dialog
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/news">
              News
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/music">
              Music
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/users">
              Users
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
