import React from "react";
import PropTypes from "prop-types";
import Navigation from './Navigation';
import {getProfile} from '../../middlewares/profile';
import {refreshRequests, toggleNav, toggleNavigationPanel} from '../../middlewares/app';
import {connect} from "react-redux";
import {getNavigationPanelSelector} from "../../selectors/app-selectors";

const NavigationContainer = (props) => {
  const {refreshRequests, navigationPanel, toggleNavigationPanel} = props;

  const clickProfileLink = () => {
    refreshRequests();
  }

  return (<>
    <Navigation clickProfileLink={clickProfileLink}
                navigationPanel={navigationPanel}
                toggleNavigationPanel={toggleNavigationPanel} />
    {/*<Navigation clickProfileLink={clickProfileLink} />*/}
  </>);
}

NavigationContainer.propTypes = {
  refreshRequests: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
  navigationPanel: getNavigationPanelSelector(state),
});

const actionCreators = {
  getProfile,
  refreshRequests,
  toggleNavigationPanel,
}

export default connect(mapStateToProps, actionCreators)(NavigationContainer);