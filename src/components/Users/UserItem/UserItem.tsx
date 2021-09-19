import React from "react";
import style from "../Users.module.scss";
import {NavLink} from "react-router-dom";
import PreloaderLinear from "../../Preloaders/PreloaderLinear";
import ButtonFollowUnfollow from "../../ButtonFollowUnfollow";
import PATH from "../../../constants/path"

type PropsType = {
    followed: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetchingFollowOrUnfollowIdList: Array<number>
    photo: string
    name: string
    defaultAvatarSrc: string
    id: number
    navLinkTo: string
    isAuth: boolean
    startCommunication: (id: number) => void
}

const UserItem: React.FC<PropsType> = (props) => {
const {
    followed,
    follow,
    unfollow,
    isFetchingFollowOrUnfollowIdList,
    photo,
    name,
    defaultAvatarSrc,
    id,
    isAuth,
    startCommunication
} = props

    let isFetching = isFetchingFollowOrUnfollowIdList.some(element => element === id) ? <PreloaderLinear/> : null;
    let avatarSrc = photo ? photo : defaultAvatarSrc;

    return (
        <div className={style.UserItemContainer}>
            <NavLink to={`${PATH.PROFILE}/${id}`}>
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
                {isAuth &&
                <button className={"startCommunication"} onClick={() => startCommunication(id)}>Начать диалог</button>}
            </div>
        </div>

    );
};

export default UserItem;