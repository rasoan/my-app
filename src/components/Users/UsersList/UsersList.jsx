import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import Pagination from "../../Pagination/Pagination";
import Preloader from "../../Preloader/Preloader";


let UsersList = (props) => {
  let countPage = Math.ceil(props.totalUsersCount / props.pagesSize);
  let pages = [];
  for(let i = 1; i <= countPage; i++) {
    pages.push(i);
  }
  let currentPage = props.currentPage;

    return (<>
               <Pagination listPageNumbers={pages}
                           currentPageNumber={currentPage} 
                           setCurrentPage={props.setCurrentPage}
                           countCardsInPage={props.pagesSize} 
                           loading={props.isFetching}
                           getCards={props.getUsers} />
               {props.isFetching ? <Preloader /> : null}
               {!props.isFetching && props.users.map((user) => <UserItem navlinkTo={"/Profile/" + user.id}
                                                                         id={user.id} 
                                                                         photo={user.photos.small}
                                                                         name={user.name}
                                                                         followed={user.followed}
                                                                         isFetchingFollowOrUnfollowIdList={props.isFetchingFollowOrUnfollowIdList}
                                                                         follow={props.follow} 
                                                                         unfollow={props.unfollow}
                                                                         defaultAvatarSrc={props.defaultAvatarSrc} />)}
           </>);        
}

UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;