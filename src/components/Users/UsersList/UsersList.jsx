import React from "react";
import PropTypes from "prop-types";
import UserItem from "../UserItem";
import Pagination from "../../Pagination";
import PreloaderLinear from "../../Preloaders/PreloaderLinear";


let UsersList = (props) => {
    const {
        totalUsersCount, pagesSize,
        isFetching, users, getUsers, follow, unfollow,
        defaultAvatarSrc, isFetchingFollowOrUnfollowIdList, isAuth,
        startCommunication
    } = props;

    let countPage = Math.ceil(totalUsersCount / pagesSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    return (<div style={{width: '100%'}}>
      <Pagination listPageNumbers={pages}
                  countCardsInPage={pagesSize}
                  loading={isFetching}
                  getCards={getUsers}/>
        {isFetching ? <PreloaderLinear/> :
            <div>
                {users.map((user, i) => <UserItem key={user.name + i}
                                                  navlinkTo={"/Profile/" + user.id}
                                                  id={user.id}
                                                  photo={user.photos.small}
                                                  name={user.name}
                                                  followed={user.followed}
                                                  isFetchingFollowOrUnfollowIdList={isFetchingFollowOrUnfollowIdList}
                                                  follow={follow}
                                                  unfollow={unfollow}
                                                  defaultAvatarSrc={defaultAvatarSrc}
                                                  isAuth={isAuth}
                                                  startCommunication={startCommunication}/>)}
            </div>}
    </div>);
}

UsersList.propTypes = {
    totalUsersCount: PropTypes.number.isRequired,
    pagesSize: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    follow: PropTypes.func.isRequired,
    unfollow: PropTypes.func.isRequired,
    defaultAvatarSrc: PropTypes.string.isRequired,
    isFetchingFollowOrUnfollowIdList: PropTypes.array.isRequired,
    isAuth: PropTypes.bool.isRequired,
    startCommunication: PropTypes.func.isRequired,
};

export default UsersList;