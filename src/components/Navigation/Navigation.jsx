import React from "react";
import PropTypes from "prop-types";
import style from "./Navigation.module.scss";
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  const {clickProfileLink} = props;
  return (
    <header>
      <div className={style.NavigationContainer}>
        <ul className={style.NavigationContainer__list}>
          <li className={style.NavigationContainer__item}>
            <NavLink onClick={clickProfileLink} activeClassName={style.active} className={style.NavigationContainer__link} to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to="/dialogs">
            Dialogs
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

Navigation.propTypes = {
  clickProfileLink: PropTypes.func.isRequired,
}

export default Navigation;
