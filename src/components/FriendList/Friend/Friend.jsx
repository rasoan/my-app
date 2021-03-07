import React from "react";
import style from "./Friend.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Friend = (props) => {

  return (<NavLink className={style.friendContainer} to={props.navlinkTo}>
            <img className={style.photo} src={props.imgSrc} />
            <p className={style.name}>{props.name}</p>
          </NavLink>
          );
};

export default Friend;