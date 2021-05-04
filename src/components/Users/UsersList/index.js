import React, {useEffect} from "react";
import PropTypes from "prop-types";
import UsersList from "./UsersList";
import {connect} from "react-redux";
import {
    unfollow, follow, getCountUsers, getUsersCardsSC
} from '../../../redux/users-reducer';
import {getUsers, getPagesSize, getTotalUsersCount, 
        getIsFetching, getIsFetchingFollowOrUnfollowIdList, 
        getIsAuth, getDefaultAvatarSrc, getIsFetchingGetUsersCards, getIsFetchingGetUsersCount} from "../../../redux/users-selectors";
import {startCommunication} from "../../../redux/dialogs-reducer";



const UsersListContainer = (props) => {
  const {currentPage, pagesSize, totalUsersCount, users,
         isFetching, isFetchingFollowOrUnfollowIdList, follow, 
         unfollow, defaultAvatarSrc, isAuth, startCommunication,
      isFetchingGetUsersCards, isFetchingGetUsersCount,
      getCountUsers, getUsersCardsSC} = props;

  useEffect(() => {
      getCountUsers();
      getUsersCardsSC(currentPage, pagesSize);
  }, [getUsersCardsSC, currentPage, pagesSize]);

    return (<UsersList totalUsersCount={totalUsersCount}
                       pagesSize={pagesSize}
                       users={users}
                       isFetchingFollowOrUnfollowIdList={isFetchingFollowOrUnfollowIdList}
                       getUsersCardsSC={getUsersCardsSC}
                       isFetchingGetUsersCount={isFetchingGetUsersCount}
                       isFetchingGetUsersCards={isFetchingGetUsersCards}
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
          isFetchingFollowOrUnfollowIdList: getIsFetchingFollowOrUnfollowIdList(state),
          isFetchingGetUsersCards: getIsFetchingGetUsersCards(state),
          isFetchingGetUsersCount: getIsFetchingGetUsersCount(state),
          isAuth: getIsAuth(state),
          defaultAvatarSrc: getDefaultAvatarSrc(state),
         }
}

const actionCreators = {
  follow,
  unfollow,
  startCommunication,
    getCountUsers,
    getUsersCardsSC
}

export default connect(mapStateToProps, actionCreators)(UsersListContainer);