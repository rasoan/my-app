import React from "react";
import style from "./UserItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import Preloader from "../../Preloader/Preloader";


const UserItem = ({followed, follow, unfollow, isFetchingFollowOrUnfollowIdList, photo, name, defaultAvatarSrc, id, navlinkTo}) => {
  let buttonText = followed ? "Удалить из друзей": "Добавить в друзья";
  let styleButton = followed ? style.deleteFriendButton: style.addFriendButton;
  let isFetching = isFetchingFollowOrUnfollowIdList.some(element => element === id) ? <Preloader /> : null;
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
                {isFetching || <button onClick={() => {
                  if (!followed) {
                    follow(id);
                  }

                  if (followed) {
                    unfollow(id);
                  }
                }
                } className={styleButton}>{buttonText}</button>}
              </div>
            </div>
          
          );
};

export default UserItem;