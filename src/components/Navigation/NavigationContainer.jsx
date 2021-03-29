import React from "react";
import Navigation from './Navigation';
import {getProfile} from '../../redux/profile-reducer';
import {compose} from "redux";
import {connect} from "react-redux";

class NavigationContainer extends React.Component {
  clickProfileLink= () => {
    this.props.getProfile()
  }

  render() {
    return <Navigation clickProfileLink={this.clickProfileLink} />;
  }
};


let mapStateToProps = (state) => (
  {
    redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
  }
)
export default compose(
                       connect(mapStateToProps, {getProfile})
                      )(NavigationContainer);
