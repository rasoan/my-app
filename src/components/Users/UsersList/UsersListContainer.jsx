import React from "react";
import UsersList from "../UsersList/UsersList"
import {setUsersActionCreator, addFriendActionCreator, deleteFriendActionCreator} from '../../../redux/users-reducer';
import {connect} from "react-redux";



let mapStateToProps = (state) => {

  return {
          users: state.usersPage.users,
          pagesSize: state.usersPage.pagesSize,
          totalUsersCount: state.usersPage.totalUsersCount,
          currentPage: state.usersPage.currentPage,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          addOrDeleteFriend: (userInfo) => {
            if (userInfo.followed) {
              let action = deleteFriendActionCreator(userInfo.id);
              dispatch(action);
            }
            else {
              let action = addFriendActionCreator(userInfo.id);
              dispatch(action);
            }
          },
          setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
          }
         }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;