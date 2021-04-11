import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import Pagination from "../../Pagination/Pagination";
import PreloaderServerUpload from "../../Preloader/PreloaderServerUpload";


let UsersList = ({totalUsersCount, pagesSize, currentPage, setCurrentPage, isFetching, users, getUsers, follow, unfollow, defaultAvatarSrc, isFetchingFollowOrUnfollowIdList, isAuth}) => {
  let countPage = Math.ceil(totalUsersCount / pagesSize);
  let pages = [];
  for(let i = 1; i <= countPage; i++) {
    pages.push(i);
  }

    return (<>
               <Pagination listPageNumbers={pages}
                           countCardsInPage={pagesSize} 
                           loading={isFetching}
                           getCards={getUsers} />
               {isFetching ? <PreloaderServerUpload /> : null}
               {!isFetching && users.map((user) => <UserItem navlinkTo={"/Profile/" + user.id}
                                                                         id={user.id} 
                                                                         photo={user.photos.small}
                                                                         name={user.name}
                                                                         followed={user.followed}
                                                                         isFetchingFollowOrUnfollowIdList={isFetchingFollowOrUnfollowIdList}
                                                                         follow={follow} 
                                                                         unfollow={unfollow}
                                                                         defaultAvatarSrc={defaultAvatarSrc} isAuth={isAuth}/>)}
           </>);        
}

UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;