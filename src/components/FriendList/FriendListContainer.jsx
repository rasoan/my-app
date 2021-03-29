import React from "react";
import FriendList from './FriendList'
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class FriendListContainer extends React.Component {
  render() {
    return <FriendList friendList={this.props.friendList}/>
  }
}

let mapStateToProps = (state) => {
  let friendList = state.usersPage.users.filter(user => user.followed);
  return {
          friendList,
         }
}


export default compose(
                       connect(mapStateToProps, {})
                      )(FriendListContainer);