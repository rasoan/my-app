import React from "react";
import {signIn} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import { Redirect } from "react-router";
import {AuthorizationForm} from "./AuthorizationForm";

const AuthorizationPage = ({signIn, isAuth, captchaUrl}) => {
  const handleRegistration = (formData) => {
    console.log(formData)
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

/*
import styleForm from "../../common/FormsControls/FormControls.module.scss";
import { Field, reduxForm } from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Login, Pass} from "../../common/FormsControls/FormControls";
*/