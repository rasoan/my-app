import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, lookingMyProfile, notLookingMyProfile, getStatus} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import {compose} from "redux";
                 
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
    if (this.props.match.params.userId) {
      this.props.notLookingMyProfile();
    }
    else {
      this.props.lookingMyProfile();
    }
  }
  render() {
    return (
            <Profile {...this.props} profile={this.props.profile} />
           );
  };
}

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  }
)

export default compose(
                       connect(mapStateToProps,{getProfile, lookingMyProfile, notLookingMyProfile, getStatus}),
                       withRouter
                      )(ProfileContainer);
