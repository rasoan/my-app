import React from "react";
import PropTypes from "prop-types";
import Navigation from './Navigation';
import {getProfile, lookingMyProfile} from '../../redux/profile-reducer';
import {refreshRequests} from '../../redux/app-reducer';
import {connect} from "react-redux";

const NavigationContainer = (props) => {
  const {refreshRequests} = props;

  const clickProfileLink = () => {
    refreshRequests();
  }

  return <Navigation clickProfileLink={clickProfileLink} />;
}

NavigationContainer.propTypes = {
  refreshRequests: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
});

const actionCreators = {
  getProfile,
  refreshRequests,
}

export default connect(mapStateToProps, actionCreators)(NavigationContainer);