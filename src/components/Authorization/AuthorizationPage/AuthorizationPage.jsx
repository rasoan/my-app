import React from "react";
import styleForm from "../../common/FormsControls/FormControls.module.scss";
import { Field, reduxForm } from "redux-form";
import {signIn} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Login, Pass} from "../../common/FormsControls/FormControls";
import { Redirect } from "react-router";
const maxLength40 = maxLengthCreator(40);


const AuthorizationForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"}
               name={"login"}
               component={Login}
               validate={[maxLength40, required]} />
      </div>
      <div>
        <Field placeholder={"Пароль"}
               name={"password"}
               component={Pass}
               validate={[maxLength40, required]}
               type="password" />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"} /> запомнить меня
      </div>
      <button>Залогиниться</button>
      {props.error && <div className={styleForm.inCorrectSubmitDataHint}>
        <p>{props.error}</p>
      </div>}
    </form>
  );
};

const AuthorizationFormRedux = reduxForm({form: 'authorization'},)(AuthorizationForm);

const AuthorizationPage = (props) => {
  const onSubmit = (formData) => {
    props.signIn(formData.login, formData.password, formData.rememberMe);
  }

  if(props.isAuth) {
    return <Redirect to="/profile" />
  }
  return (
          <div>
            <h1>Авторизация</h1>
            <AuthorizationFormRedux onSubmit={onSubmit} />
          </div>
         );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {signIn})(AuthorizationPage);

