import React from "react";
import style from "./UserItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../images/avatar.png";


const UserItem = (props) => {
  let buttonText = props.followed ? "Удалить из друзей": "Добавить в друзья";
  let styleButton = props.followed ? style.deleteFriendButton: style.addFriendButton;
  let srcPhoto = props.photo ? props.photo: userPhoto;
  return (
            <div className={style.UserItemContainer}>
              <NavLink to={props.navlinkTo}>
                <img className={style.photo} src={srcPhoto} />
                <p className={style.name}>{props.name}</p>
              </NavLink>
              <div>
                <p>{""}</p>
                <p>{""}</p>
                <button onClick={() => {
                  
                  return props.addOrDeleteFriend({id: props.id, followed: props.followed})
                }
                } className={styleButton}>{buttonText}</button>
              </div>
            </div>
          
          );
};

export default UserItem;