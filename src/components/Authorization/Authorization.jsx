import React from "react";
import { Field, reduxForm } from "redux-form";

const AuthorizationForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Пароль"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"} /> запомнить меня
      </div>
      <button>Залогиниться</button>
    </form>
  );
};

const AuthorizationFormRedux = reduxForm({form: 'authorization'})(AuthorizationForm);

const Authorization = (props) => {
  const onSubmit = (formData) => {

    console.log(formData)
  }
  return (
          <div>
            <h1>Авторизация</h1>
            <AuthorizationFormRedux onSubmit={onSubmit} />
          </div>
         );
};

export default Authorization;