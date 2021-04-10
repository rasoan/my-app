import React, {useEffect} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";
                 
const ProfileContainer = (props) => {
  
    useEffect(() => {
      props.getProfile(props.match.params.userId);
      props.getStatus(props.match.params.userId);
      if (props.match.params.userId || !props.isAuth) {
        props.notLookingMyProfile();
      }
      else {
        props.lookingMyProfile();
      }
    }, [props.isAuth]);
    return (<Profile {...props} profile={props.profile} />);
};



let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
  }
)

export default compose(
                       connect(mapStateToProps,{getProfile, lookingMyProfile, notLookingMyProfile, getStatus}),
                       withRouter
                      )(ProfileContainer);
