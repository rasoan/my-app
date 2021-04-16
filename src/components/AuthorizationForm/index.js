import AuthorizationForm from "./AuthorizationForm";
import React from "react";
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const AuthorizationFormContainer = ({signIn, isAuth, captchaUrl}) => {
  const handleRegistration = (formData) => {
    signIn(formData.login, formData.password, formData.rememberMe, formData.captcha);
  }

  if(isAuth) {
    return <Redirect to="/profile" />
  }
  return (<AuthorizationForm handleRegistration={handleRegistration}
                             captchaUrl={captchaUrl} />);
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {signIn})(AuthorizationFormContainer);