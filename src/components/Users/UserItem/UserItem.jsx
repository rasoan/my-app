import React from "react";
import style from "../Users.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import PreloaderLinear from "../../Preloaders/PreloaderLinear";
import ButtonFollowUnfollow from "../../ButtonFollowUnfollow";

const UserItem = (props) => {
    const {
        followed, follow, unfollow, isFetchingFollowOrUnfollowIdList,
        photo, name, defaultAvatarSrc, id, navlinkTo, isAuth,
        startCommunication
    } = props;

    let isFetching = isFetchingFollowOrUnfollowIdList.some(element => element === id) ? <PreloaderLinear/> : null;
    let avatarSrc = photo ? photo : defaultAvatarSrc;

    return (
        <div className={style.UserItemContainer}>
            <NavLink to={navlinkTo}>
                <img className={style.photo}
                     src={avatarSrc}
                     alt={"user"}/>
                <p className={style.name}>{name}</p>
            </NavLink>
            <div>
                <p>{""}</p>
                <p>{""}</p>
                {isFetching || (isAuth && <ButtonFollowUnfollow follow={follow}
                                                               unfollow={unfollow}
                                                               friend={followed}
                                                               userId={id}/>)}
                {isAuth && <button className={"startCommunication"} onClick={() => startCommunication(id)}>Начать диалог</button>}
            </div>
        </div>

    );
};

UserItem.propTypes = {
    followed: PropTypes.bool,
    follow: PropTypes.func,
    unfollow: PropTypes.func,
    isFetchingFollowOrUnfollowIdList: PropTypes.array,
    photo: PropTypes.string,
    name: PropTypes.string,
    defaultAvatarSrc: PropTypes.string,
    id: PropTypes.string,
    navlinkTo: PropTypes.string,
    isAuth: PropTypes.bool,
    startCommunication: PropTypes.func,
}

export default UserItem;