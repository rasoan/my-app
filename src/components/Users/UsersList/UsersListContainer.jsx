import React from "react";
import UsersList from "../UsersList/UsersList"
import {addFriendActionCreator, deleteFriendActionCreator} from '../../../redux/users-reducer';
import {connect} from "react-redux";



let mapStateToProps = (state) => {

  return {
          users: state.usersPage.users,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          addOrDeleteFriend: (userInfo) => {
            if (userInfo.friend) {
              let action = deleteFriendActionCreator(userInfo.id);
              dispatch(action);
            }
            else {
              let action = addFriendActionCreator(userInfo.id);
              dispatch(action);
            }
          },
         }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;