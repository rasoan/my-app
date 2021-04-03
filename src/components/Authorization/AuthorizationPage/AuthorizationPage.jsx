import React from "react";
import { Field, reduxForm } from "redux-form";
import {signIn} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Login, Pass} from "../../common/FormsControls/FormControls";
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
               validate={[maxLength40, required]} />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"} /> запомнить меня
      </div>
      <button>Залогиниться</button>
    </form>
  );
};

const AuthorizationFormRedux = reduxForm({form: 'authorization'},)(AuthorizationForm);

const AuthorizationPage = (props) => {
  const onSubmit = (formData) => {
    props.signIn(formData.login, formData.password);
  }
  return (
          <div>
            <h1>Авторизация</h1>
            <AuthorizationFormRedux onSubmit={onSubmit} />
          </div>
         );
};



export default connect(null, {signIn})(AuthorizationPage);

