import React, {useEffect} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import {checkUserOrOwner} from "../../redux/app-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";
                 
const ProfileContainer = (props) => {
   let {myId, match, profile, 
        logoutFetching, getProfile, getStatus, 
        checkUserOrOwner} = props;
   
    useEffect( () => {
      if (logoutFetching) return;
      getProfile(match.params.userId);
      getStatus(match.params.userId);
      checkUserOrOwner(match.params.userId);
    }, [myId, logoutFetching]);
    return (<Profile {...props} profile={profile} />);
};



let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myId: state.auth.userId,
    logoutFetching: state.auth.logoutFetching,
  }
)

export default compose(
                       connect(mapStateToProps,{
                                                getProfile, lookingMyProfile, 
                                                notLookingMyProfile, getStatus,
                                                checkUserOrOwner
                                                }),
                       withRouter
                      )(ProfileContainer);
