import React from "react";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {
        setCurrentPage,
        getUsers,
        unfollow, follow
       } from '../../../redux/users-reducer';



class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pagesSize);
  }
  
  render() {

    return (<UsersList totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       setCurrentPage={this.props.setCurrentPage} 
                       isFetching={this.props.isFetching}
                       isFetchingFollowOrUnfollowIdList={this.props.isFetchingFollowOrUnfollowIdList} 
                       getUsers={this.props.getUsers}
                       follow={this.props.follow} 
                       unfollow={this.props.unfollow} 
                       defaultAvatarSrc={this.props.defaultAvatarSrc} />); 
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
          isAuth: state.auth.isAuth,
          defaultAvatarSrc: state.usersPage.defaultAvatarSrc,
         }
}

export default connect(mapStateToProps,{
                                        setCurrentPage,
                                        getUsers,
                                        follow,
                                        unfollow,
                                       }
                                        )(UsersListContainer);