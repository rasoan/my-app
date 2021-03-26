import React from "react";
import FriendList from './FriendList'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  let friendList = state.usersPage.users.filter(user => user.followed);
  return {
          friendList,
         }
}

const FriendListContainer = connect(mapStateToProps, {})(FriendList);
export default FriendListContainer;