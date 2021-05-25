import React from "react";
import PropTypes from "prop-types";
import UserItem from "../UserItem";
import Pagination from "../../Pagination";
import PreloaderCircular from "../../Preloaders/PreloaderCircular";

let UsersList = (props) => {
    const {
        totalUsersCount, pagesSize,
        users, follow, unfollow,
        defaultAvatarSrc, isFetchingFollowOrUnfollowIdList, isAuth,
        startCommunication, getUsersCardsSC,
        isFetchingGetUsersCards, isFetchingGetUsersCount
    } = props;

    let countPage = Math.ceil(totalUsersCount / pagesSize);


    return (<div style={{width: '100%'}}>
            <Pagination countPage={countPage}
                        countCardsInPage={pagesSize}
                        loading={isFetchingGetUsersCards}
                        getCards={getUsersCardsSC} />
        {!isFetchingGetUsersCount && (isFetchingGetUsersCards ? <PreloaderCircular /> :
            <div className="listCardsUsers">
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
            </div>)}
    </div>);
}

UsersList.propTypes = {
    totalUsersCount: PropTypes.number.isRequired,
    pagesSize: PropTypes.number.isRequired,
    users: PropTypes.array.isRequired,
    follow: PropTypes.func.isRequired,
    unfollow: PropTypes.func.isRequired,
    defaultAvatarSrc: PropTypes.string.isRequired,
    isFetchingFollowOrUnfollowIdList: PropTypes.array.isRequired,
    isAuth: PropTypes.bool.isRequired,
    startCommunication: PropTypes.func.isRequired,
};

export default UsersList;