import React from "react";
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import { Redirect } from "react-router";
import {AuthorizationForm} from "./AuthorizationPage/AuthorizationForm";

const AuthorizationPage = ({signIn, isAuth, captchaUrl}) => {
  const handleRegistration = (formData) => {
    signIn(formData.login, formData.password, formData.rememberMe, formData.captcha);
  }

  if(isAuth) {
    return <Redirect to="/profile" />
  }
  return (
          <div>
            <h1>Авторизация</h1>
            <AuthorizationForm handleRegistration={handleRegistration}
                               captchaUrl={captchaUrl} />
          </div>
         );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {signIn})(AuthorizationPage);