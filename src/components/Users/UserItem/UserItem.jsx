import React from "react";
import style from "./UserItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
  let buttonText = props.friend ? "Удалить из друзей": "Добавить в друзья";
  let styleButton = props.friend ? style.deleteFriendButton: style.addFriendButton;

  return (
            <div className={style.UserItemContainer}>
              <NavLink to={props.navlinkTo}>
                <img className={style.photo} src={props.imgSrc} />
                <p className={style.name}>{props.name}</p>
              </NavLink>
              <div>
                <p>{props.town}</p>
                <p>{props.country}</p>
                <button onClick={() => props.addOrDeleteFriend({id: props.id, friend: props.friend})} className={styleButton}>{buttonText}</button>
              </div>
            </div>
          
          );
};

export default UserItem;