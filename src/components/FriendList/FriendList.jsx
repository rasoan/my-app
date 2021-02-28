import React from "react";
import style from "./FriendList.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const FriendList = (props) => {
  
  let path = "/" + props.id;

  return (
    <div className={style.container}>
      {props.friendList.map((friend) => (
        <NavLink className={style.friendContainer} to={"/" + friend.id}>
          <img className={style.photo} src={friend.imgSrc} />
          <p className={style.name}>{friend.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

FriendList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default FriendList;
