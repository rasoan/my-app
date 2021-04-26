import React, {useEffect} from "react";
import PropTypes from "prop-types";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {
        getUsersSC,
        unfollow, follow
       } from '../../../redux/users-reducer';
import {getUsers, getPagesSize, getTotalUsersCount, 
        getIsFetching, getIsFetchingFollowOrUnfollowIdList, 
        getIsAuth, getDefaultAvatarSrc} from "../../../redux/users-selectors";
import {startCommunication} from "../../../redux/dialogs-reducer";



const UsersListContainer = (props) => {
  const {currentPage, pagesSize, totalUsersCount, getUsersSC, users,
         isFetching, isFetchingFollowOrUnfollowIdList, follow, 
         unfollow, defaultAvatarSrc, isAuth, startCommunication} = props;

  useEffect(() => {
    getUsersSC(currentPage, pagesSize);
  }, [getUsersSC, currentPage, pagesSize]);
  
    return (<UsersList totalUsersCount={totalUsersCount}
                       pagesSize={pagesSize}
                       users={users}
                       isFetching={isFetching}
                       isFetchingFollowOrUnfollowIdList={isFetchingFollowOrUnfollowIdList} 
                       getUsers={getUsersSC}
                       follow={follow} 
                       unfollow={unfollow} 
                       defaultAvatarSrc={defaultAvatarSrc}
                       isAuth={isAuth}
                       startCommunication={startCommunication} />); 
}

UsersListContainer.propTypes = {
  currentPage: PropTypes.number,
  pagesSize: PropTypes.number,
  totalUsersCount: PropTypes.number,
  getUsersSC: PropTypes.func,
  users: PropTypes.array,
  isFetching: PropTypes.bool,
  isFetchingFollowOrUnfollowIdList: PropTypes.array,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  defaultAvatarSrc: PropTypes.string,
  isAuth: PropTypes.bool,
  startCommunication: PropTypes.func,
}

const mapStateToProps = (state) => {
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

const actionCreators = {
  getUsersSC,
  follow,
  unfollow,
  startCommunication,
}

export default connect(mapStateToProps, actionCreators)(UsersListContainer);