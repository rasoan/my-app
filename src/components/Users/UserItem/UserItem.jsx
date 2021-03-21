import React from "react";
import style from "./UserItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../images/avatar.png";
import * as axios from "axios";
import Preloader from "../../Preloader/Preloader";


const UserItem = (props) => {
  let buttonText = props.followed ? "Удалить из друзей": "Добавить в друзья";
  let styleButton = props.followed ? style.deleteFriendButton: style.addFriendButton;
  let srcPhoto = props.photo ? props.photo: userPhoto;
  let isFetching = props.isFetchingAddOrDeleteFriend && props.isFetchingAddOrDeleteFriendId === props.id ? <Preloader /> : null;
  
  return (
            <div className={style.UserItemContainer}>
              <NavLink to={props.navlinkTo}>
                <img className={style.photo} src={srcPhoto} />
                <p className={style.name}>{props.name}</p>
              </NavLink>
              <div>
                <p>{""}</p>
                <p>{""}</p>
                {isFetching || <button onClick={() => {
                  if (props.followed) {
                    props.toggleIsFetchingAddOrDeleteFriend(true, props.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "fd622230-6210-4ef3-a457-276f95f589d0",
                      }
                    })
                    .then(response => {
                      
                      if (response.data.resultCode === 0) {
                       props.deleteFriend(props.id);
                       props.toggleIsFetchingAddOrDeleteFriend(false);
                      }
                    });
                  }
                  else {
                    props.toggleIsFetchingAddOrDeleteFriend(true, props.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "fd622230-6210-4ef3-a457-276f95f589d0",
                      }
                    })
                    .then(response => {
                      
                      if (response.data.resultCode === 0) {
                       props.addFriend(props.id);
                      }
                      props.toggleIsFetchingAddOrDeleteFriend(false);
                    });
                  }
                }
                } className={styleButton}>{buttonText}</button>}
              </div>
            </div>
          
          );
};

export default UserItem;