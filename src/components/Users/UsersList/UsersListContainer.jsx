import React from "react";

import UsersList from "./UsersList";
import {connect} from "react-redux";
import {setUsers, 
        addFriend, 
        deleteFriend,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        isFetchingFollowOrUnfollowStart,
        isFetchingFollowOrUnfollowEnd,
        getUsers,
        unfollow, follow} from '../../../redux/users-reducer';
import {usersApi} from "../../../api/api";

class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pagesSize);
  }
  
  render() {
    return (<UsersList totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       addFriend={this.props.addFriend}
                       deleteFriend={this.props.deleteFriend}
                       setCurrentPage={this.props.setCurrentPage} 
                       isFetching={this.props.isFetching}
                       isFetchingFollowOrUnfollowStart={this.props.isFetchingFollowOrUnfollowStart}
                       isFetchingFollowOrUnfollowEnd={this.props.isFetchingFollowOrUnfollowEnd}
                       isFetchingFollowOrUnfollowIdList={this.props.isFetchingFollowOrUnfollowIdList} 
                       getUsers={this.props.getUsers}
                       follow={this.props.follow} 
                       unfollow={this.props.unfollow} />); 
  }
}

let mapStateToProps = (state) => {
  return {
          users: state.usersPage.users,
          pagesSize: state.usersPage.pagesSize,
          totalUsersCount: state.usersPage.totalUsersCount,
          currentPage: state.usersPage.currentPage,
          isFetching: state.usersPage.isFetching,
          isFetchingFollowOrUnfollowIdList: state.usersPage.isFetchingFollowOrUnfollowIdList,
         }
}

export default connect(mapStateToProps,{
                                        deleteFriend,
                                        addFriend,
                                        setCurrentPage,
                                        isFetchingFollowOrUnfollowStart,
                                        isFetchingFollowOrUnfollowEnd,
                                        getUsers,
                                        follow,
                                        unfollow,
                                       }
                                        )(UsersListContainer);