import React, {useEffect} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import {follow, unfollow} from "../../redux/users-reducer"
import {checkUserOrOwner} from "../../redux/app-reducer";
import {startCommunication} from "../../redux/dialogs-reducer"
import { withRouter } from "react-router";
import {compose} from "redux";
                 
const ProfileContainer = (props) => {
   let {myId, match, profile, 
        logoutFetching, getProfile, getStatus, 
        checkUserOrOwner, follow, unfollow, startCommunication, controlPanels, isAuth} = props;
   
    useEffect( () => {
      if (logoutFetching) return;
      getProfile(match.params.userId);
      getStatus(match.params.userId);
      checkUserOrOwner(match.params.userId);
    }, [myId, logoutFetching]);
    return (<Profile {...props} profile={profile}
                                follow={follow}
                                unfollow={unfollow}
                                startCommunication={startCommunication}
                                controlPanels={controlPanels}
                                isAuth={isAuth} />);
};



let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myId: state.auth.userId,
    logoutFetching: state.auth.logoutFetching,
    controlPanels: state.app.controlPanels,
    isAuth: state.auth.isAuth,
  }
)

export default compose(
                       connect(mapStateToProps,{
                                                getProfile, lookingMyProfile, 
                                                notLookingMyProfile, getStatus,
                                                checkUserOrOwner,
                                                follow,
                                                unfollow,
                                                startCommunication,
                                                }),
                       withRouter
                      )(ProfileContainer);
