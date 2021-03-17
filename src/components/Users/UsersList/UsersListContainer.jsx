import React from "react";
import * as axios from "axios";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {setUsersActionCreator, 
        addFriendActionCreator, 
        deleteFriendActionCreator,
        setCurrentPageActionCreator,
        setTotalUsersCountActionCreator,
        toggleIsFetchingActionCreator} from '../../../redux/users-reducer';

class UsersListContainer extends React.Component {
  componentDidMount() {
    const toggleIsFetching = this.props.toggleIsFetching;
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
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
                       toggleIsFetching={this.props.toggleIsFetching} />); 
  }
}

let mapStateToProps = (state) => {
  return {
          users: state.usersPage.users,
          pagesSize: state.usersPage.pagesSize,
          totalUsersCount: state.usersPage.totalUsersCount,
          currentPage: state.usersPage.currentPage,
          isFetching: state.usersPage.isFetching,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          addFriend: (userInfo) => {
              let action = addFriendActionCreator(userInfo.id);
              dispatch(action);
          },
          deleteFriend: (userInfo) => {
              let action = deleteFriendActionCreator(userInfo.id);
              dispatch(action);
          },
          setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
          },
          setCurrentPage: (currentPage) => {
            let action = setCurrentPageActionCreator(currentPage);
            dispatch(action);
          },
          setTotalUsersCount: (totalUsersCount) => {
            let action = setTotalUsersCountActionCreator(totalUsersCount);
            dispatch(action);
          },
          toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingActionCreator(isFetching);
            dispatch(action);
          }
         }
}



export default connect(mapStateToProps, {
  deleteFriend: deleteFriendActionCreator,
  addFriend: addFriendActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setTotalUsersCount: setTotalUsersCountActionCreator,
  toggleIsFetching: toggleIsFetchingActionCreator,
 })(UsersListContainer);