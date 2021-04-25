import React from "react";
import PropTypes from "prop-types";
import style from "./Navigation.module.scss";
import {NavLink} from 'react-router-dom';
import PATH from '../../constants/path';

const Navigation = (props) => {
  const {clickProfileLink} = props;
  return (
    <header>
      <div className={style.NavigationContainer}>
        <ul className={style.NavigationContainer__list}>
          <li className={style.NavigationContainer__item}>
            <NavLink onClick={clickProfileLink} activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.PROFILE}>
              Profile
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.DIALOGS}>
            Dialogs
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.NEWS}>
              News
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.MUSIC}>
              Music
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.USERS}>
              Users
            </NavLink>
          </li>
          <li className={style.NavigationContainer__item}>
            <NavLink activeClassName={style.active} className={style.NavigationContainer__link} to={PATH.SETTINGS}>
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