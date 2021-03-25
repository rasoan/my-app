import React from "react";
import style from "./UsersList.module.scss";
import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import ListPageNumbers from "../../ListPageNumbers/ListPageNumbers";
import Preloader from "../../Preloader/Preloader";


let UsersList = (props) => {
  let countPage = Math.ceil(props.totalUsersCount / props.pagesSize);
  let pages = [];
  for(let i = 1; i <= countPage; i++) {
    pages.push(i);
  }
  let currentPage = props.currentPage;

    return (<>
               <ListPageNumbers pages={pages}
                                currentPage={currentPage} 
                                setCurrentPage={props.setCurrentPage}
                                pagesSize={props.pagesSize} 
                                setUsers={props.setUsers} 
                                isFetching={props.isFetching}
                                getUsers={props.getUsers} />
               {props.isFetching ? <Preloader /> : null}
               {!props.isFetching && props.users.map((user) => <UserItem navlinkTo={"/Profile/" + user.id}
                                                                         id={user.id} 
                                                                         photo={user.photos.small}
                                                                         name={user.name}
                                                                         followed={user.followed} 
                                                                         addFriend={props.addFriend}
                                                                         deleteFriend={props.deleteFriend}
                                                                         toggleIsFetching={props.toggleIsFetching}
                                                                         isFetching={props.isFetching} 
                                                                         toggleIsFetchingAddOrDeleteFriend={props.toggleIsFetchingAddOrDeleteFriend}
                                                                         isFetchingFollowOrUnfollowStart={props.isFetchingFollowOrUnfollowStart}
                                                                         isFetchingFollowOrUnfollowEnd={props.isFetchingFollowOrUnfollowEnd}
                                                                         isFetchingFollowOrUnfollowIdList={props.isFetchingFollowOrUnfollowIdList}
                                                                         follow={props.follow} 
                                                                         unfollow={props.unfollow} />)}
           </>);        
}


UsersList.propTypes = {
  // message: PropTypes.string.isRequired,
};

export default UsersList;