import React from "react";
import style from "./DialogItem.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/Dialog/" + props.id;
  return (
    <NavLink className={style.navlink} to={path}>{props.name}</NavLink>
  );
};

DialogItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DialogItem;
