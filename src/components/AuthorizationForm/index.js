import AuthorizationForm from "./AuthorizationForm";
import React from "react";
import PropTypes from "prop-types";
import {signIn} from "../../middlewares/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const AuthorizationFormContainer = (props) => {
  const {signIn, isAuth, captchaUrl} = props;
  const handleRegistration = (formData) => {
    signIn(formData.login, formData.password, formData.rememberMe, formData.captcha);
  }

  if(isAuth) return <Redirect to="/profile" />
  
  return (<AuthorizationForm handleRegistration={handleRegistration}
                             captchaUrl={captchaUrl} />);
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

const actionCreators = {signIn};

AuthorizationFormContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  captchaUrl: PropTypes.string,
  signIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(AuthorizationFormContainer);