import React from "react";
import styleForm from "../../common/FormsControls/FormControls.module.scss";
import { Field, reduxForm } from "redux-form";
import {signIn} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Login, Pass} from "../../common/FormsControls/FormControls";
import { Redirect } from "react-router";

import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const maxLength40 = maxLengthCreator(40);


const AuthorizationForm = ({handleSubmit, error, captchaUrl}) => {
    return (
      <form onSubmit={handleSubmit}>
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
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&  <Field placeholder={"Введите текст с картинки"}
                                        name={"captcha"}
                                        component={Login} />}
        {error && <div className={styleForm.inCorrectSubmitDataHint}>
          <p>{error}</p>
        </div>}
      </form>
    );
  };

export const AuthorizationFormRedux = reduxForm({form: 'authorization'},)(AuthorizationForm);
  


export const AuthorizationFormTest = ({handleRegistration, error, captchaUrl}) => {
    const { register, handleSubmit } = useForm();
    return (
        <Form onSubmit={handleSubmit(handleRegistration)}>
          <div>
            <Input placeholder="Логин"
                   type="text"
                   {...register("login")} />
          </div>
          <div>
            <Input placeholder="Пароль"
                   type="password"
                   {...register("password")} />
          </div>
          <div>
            <input type="checkbox" {...register("rememberMe")} /> запомнить меня
          </div>
          <Button>Залогиниться</Button>
        </Form>
      );
}