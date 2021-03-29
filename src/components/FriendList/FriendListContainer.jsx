import React from "react";
import FriendList from './FriendList'
import {connect} from "react-redux";
import {getProfile, notLookingMyProfile} from "../../redux/profile-reducer";
import {compose} from "redux";

class FriendListContainer extends React.Component {
  clickProfileUser = (id) => {
    this.props.getProfile(id);
    this.props.notLookingMyProfile();
  }
  render() {
    return <FriendList friendList={this.props.friendList} clickProfileUser={this.clickProfileUser} />
  }
}

let mapStateToProps = (state) => {
  let friendList = state.usersPage.users.filter(user => user.followed);
  return {
          friendList,
         }
}


export default compose(
                       connect(mapStateToProps, {getProfile, notLookingMyProfile})
                      )(FriendListContainer);