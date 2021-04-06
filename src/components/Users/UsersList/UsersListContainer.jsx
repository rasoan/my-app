import React from "react";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {
        getUsersSC,
        unfollow, follow
       } from '../../../redux/users-reducer';
import {getUsers, getPagesSize, getTotalUsersCount, getCurrentPagestate, getIsFetching, getIsFetchingFollowOrUnfollowIdList, getIsAuth, getDefaultAvatarSrc} from "../../../redux/users-selectors";



class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersSC(this.props.currentPage, this.props.pagesSize);
  }
  
  render() {

    return (<UsersList totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       isFetchingFollowOrUnfollowIdList={this.props.isFetchingFollowOrUnfollowIdList} 
                       getUsers={this.props.getUsersSC}
                       follow={this.props.follow} 
                       unfollow={this.props.unfollow} 
                       defaultAvatarSrc={this.props.defaultAvatarSrc} />); 
  }
}

let mapStateToProps = (state) => {
  return {
          users: getUsers(state),
          pagesSize: getPagesSize(state),
          totalUsersCount: getTotalUsersCount(state),
          isFetching: getIsFetching(state),
          isFetchingFollowOrUnfollowIdList: getIsFetchingFollowOrUnfollowIdList(state),
          isAuth: getIsAuth(state),
          defaultAvatarSrc: getDefaultAvatarSrc(state),
         }
}

export default connect(mapStateToProps,{
                                        getUsersSC,
                                        follow,
                                        unfollow,
                                       }
                                        )(UsersListContainer);