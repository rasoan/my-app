import React from "react";
import style from "./Friend.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {DEFAULT_AVATAR_SRC} from "../../../constants/Users";

const Friend = ({srcPhoto, clickProfileUser, id, name}) => {
  srcPhoto = srcPhoto ? srcPhoto: DEFAULT_AVATAR_SRC;

  return (<NavLink onClick={() => clickProfileUser(id)} className={style.friendContainer} to={`/Profile/${id}`}>
            <img className={style.photo} src={srcPhoto} />
            <p className={style.name}>{name}</p>
          </NavLink>
          );
};

export default Friend;