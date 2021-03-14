import React from "react";
import FriendList from './FriendList'
import {addFriendActionCreator} from '../../redux/users-reducer';
import {connect} from "react-redux";



let mapStateToProps = (state) => {

  let friendList = state.usersPage.users.filter(user => user.followed);
  return {
          friendList,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          f: () => {},
         }
}

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);

export default FriendListContainer;