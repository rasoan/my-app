import React, {useEffect} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";
                 
const ProfileContainer = (props) => {
   let {userId, match, profile, isAuth, 
        logoutFetching, getProfile, getStatus, 
        notLookingMyProfile, lookingMyProfile} = props;
   
    useEffect( () => {
      if (logoutFetching) return;
      getProfile(match.params.userId);
      getStatus(match.params.userId);
      if (match.params.userId || !isAuth) {
        notLookingMyProfile();
      }
      else {
        lookingMyProfile();
      }
    }, [userId, logoutFetching]);

    return (<Profile {...props} profile={profile} />);
};



let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    logoutFetching: state.auth.logoutFetching,
  }
)

export default compose(
                       connect(mapStateToProps,{getProfile, lookingMyProfile, notLookingMyProfile, getStatus}),
                       withRouter
                      )(ProfileContainer);
