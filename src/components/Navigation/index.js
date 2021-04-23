import React from "react";
import PropTypes from "prop-types";
import Navigation from './Navigation';
import {getProfile, lookingMyProfile} from '../../redux/profile-reducer';
import {connect} from "react-redux";

const NavigationContainer = (props) => {
  const {isAuth} = props;
  const clickProfileLink = () => {
    if(isAuth) {
      console.log("Надо отправить на логинизацию, пользователь анонимный!")
    }
  }

  if(isAuth) {
    console.log("Надо запретить редактировать статус и так далее, пользователь анонимный.")
  }
  return <Navigation clickProfileLink={clickProfileLink} />;
}

NavigationContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  redrawToProfileComponent: state.profilePage.redrawToProfileComponent,
  isAuth: state.auth.isAuth,
});

const actionCreators = {
  getProfile,
  lookingMyProfile,
}

export default connect(mapStateToProps, actionCreators)(NavigationContainer);