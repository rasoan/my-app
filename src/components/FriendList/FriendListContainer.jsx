import React from "react";
import FriendList from './FriendList'
import {addFriendActionCreator} from '../../redux/sidebar-reducer';
import {connect} from "react-redux";



let mapStateToProps = (state) => {
  return {
          friendList: state.sidebarPage.friendList,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          f: () => {},
         }
}

const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);

export default FriendListContainer;