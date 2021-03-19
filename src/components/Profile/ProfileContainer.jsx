import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile,
        startFetching,
        stopFetching} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
                 
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId: 2;
    this.props.startFetching();
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
         .then(response => {
           this.props.setUserProfile(response.data);
           this.props.stopFetching();
    });
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

export default connect(mapStateToProps,{
                                        setUserProfile,
                                        startFetching,
                                        stopFetching
                                       }
                                         )(WithUrlDataContainerComponent);
