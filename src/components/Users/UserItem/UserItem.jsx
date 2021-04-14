import React from "react";
import style from "./UserItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import PreloaderServerUpload from "../../Preloader/PreloaderServerUpload";
let classNames = require('classnames');

const UserItem = ({followed, follow, unfollow, isFetchingFollowOrUnfollowIdList, 
                   photo, name, defaultAvatarSrc, id, navlinkTo, isAuth,
                   startCommunication}) => {
  let buttonText = followed ? "Удалить из друзей": "Добавить в друзья";
  let styleButton =  classNames({ [style.deleteFriendButton]: followed }, { [style.addFriendButton]: !followed });
  let isFetching = isFetchingFollowOrUnfollowIdList.some(element => element === id) ? <PreloaderServerUpload /> : null;
  let avatarSrc = photo ? photo: defaultAvatarSrc;
  return (
            <div className={style.UserItemContainer}>
              <NavLink to={navlinkTo}>
                <img className={style.photo} src={avatarSrc} />
                <p className={style.name}>{name}</p>
              </NavLink>
              <div>
                <p>{""}</p>
                <p>{""}</p>
                {isFetching || isAuth && <button onClick={() => {
                  if (!followed) {
                    follow(id);
                  }

                  if (followed) {
                    unfollow(id);
                  }
                }
                } className={styleButton}>{buttonText}</button>}
                <button onClick={() => startCommunication(id)}>Начать диалог</button>
              </div>
            </div>
          
          );
};

export default UserItem;
