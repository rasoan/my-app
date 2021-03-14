import React from "react";
import style from "./Friend.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../images/avatar.png"

const Friend = (props) => {
  let srcPhoto = props.srcPhoto ? props.srcPhoto: userPhoto;

  return (<NavLink className={style.friendContainer} to={props.navlinkTo}>
            <img className={style.photo} src={srcPhoto} />
            <p className={style.name}>{props.name}</p>
          </NavLink>
          );
};

export default Friend;