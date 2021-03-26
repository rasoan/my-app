import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
                 
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{getProfile,})(WithUrlDataContainerComponent);