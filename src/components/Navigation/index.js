import React from "react";
import PropTypes from "prop-types";
import Navigation from './Navigation';
import {getProfile} from '../../redux/profile-reducer';
import {refreshRequests} from '../../redux/app-reducer';
import {toggleNav} from "../../redux/app-reducer.js";
import {connect} from "react-redux";

const NavigationContainer = (props) => {
  const {refreshRequests, navigationPanelVisibility, toggleNav} = props;

  const clickProfileLink = () => {
    refreshRequests();
  }

  return (<>
    <Navigation clickProfileLink={clickProfileLink}
                navigationPanelVisibility={navigationPanelVisibility}
                toggleNav={toggleNav} />
    {/*<Navigation clickProfileLink={clickProfileLink} />*/}
  </>);
}

NavigationContainer.propTypes = {
  refreshRequests: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
  navigationPanelVisibility: state.app.navigationPanelVisibility,
});

const actionCreators = {
  getProfile,
  refreshRequests,
  toggleNav,
}

export default connect(mapStateToProps, actionCreators)(NavigationContainer);