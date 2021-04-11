import React, {useEffect} from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";
                 
const ProfileContainer = (props) => {
   let {userId, match, profile, isAuth} = props;

    useEffect(() => {
      console.log("useeffect, ", userId, " " , profile);
      
      props.getProfile(userId);
      props.getStatus(userId);
      if (props.match.params.userId || !props.isAuth) {
        props.notLookingMyProfile();
      }
      else {
        props.lookingMyProfile();
      }
      let ar = [userId, match, profile, isAuth];
    }, [userId]);


    return (<Profile {...props} profile={props.profile} />);
};



let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  }
)

export default compose(
                       connect(mapStateToProps,{getProfile, lookingMyProfile, notLookingMyProfile, getStatus}),
                       withRouter
                      )(ProfileContainer);
