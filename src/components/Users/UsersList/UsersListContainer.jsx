import React from "react";
import * as axios from "axios";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {setUsers, 
        addFriend, 
        deleteFriend,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFetchingAddOrDeleteFriend} from '../../../redux/users-reducer';

class UsersListContainer extends React.Component {
  componentDidMount() {
    const toggleIsFetching = this.props.toggleIsFetching;
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`,{
      withCredentials: true,
    })
         .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          toggleIsFetching(false);
    });
  }
  
  render() {
    return (<UsersList totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       addFriend={this.props.addFriend}
                       deleteFriend={this.props.deleteFriend}
                       setCurrentPage={this.props.setCurrentPage} 
                       setUsers={this.props.setUsers} 
                       isFetching={this.props.isFetching}
                       toggleIsFetching={this.props.toggleIsFetching} 
                       isFetchingAddOrDeleteFriend={this.props.isFetchingAddOrDeleteFriend}
                       toggleIsFetchingAddOrDeleteFriend={this.props.toggleIsFetchingAddOrDeleteFriend}
                       isFetchingAddOrDeleteFriendId={this.props.isFetchingAddOrDeleteFriendId}
                       />); 
  }
}

let mapStateToProps = (state) => {
  return {
          users: state.usersPage.users,
          pagesSize: state.usersPage.pagesSize,
          totalUsersCount: state.usersPage.totalUsersCount,
          currentPage: state.usersPage.currentPage,
          isFetching: state.usersPage.isFetching,
          isFetchingAddOrDeleteFriend: state.usersPage.isFetchingAddOrDeleteFriend,
          isFetchingAddOrDeleteFriendId: state.usersPage.isFetchingAddOrDeleteFriendId,
         }
}

export default connect(mapStateToProps,{
                                        deleteFriend,
                                        addFriend,
                                        setUsers,
                                        setCurrentPage,
                                        setTotalUsersCount,
                                        toggleIsFetching,
                                        toggleIsFetchingAddOrDeleteFriend,
                                       }
                                        )(UsersListContainer);