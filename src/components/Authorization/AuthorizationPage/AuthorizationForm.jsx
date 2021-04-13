import React from "react";
import style from "../../common/FormsControls/FormControls.module.scss";
import { Field, Form, reduxForm } from "redux-form";
import {signIn} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Login, Pass} from "../../common/FormsControls/FormControls";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import classNames from 'classnames';




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
        {error && <div >
          <p>{error}</p>
        </div>}
      </form>
    );
  };

export const AuthorizationFormRedux = reduxForm({form: 'authorization'},)(AuthorizationForm);
  


export const AuthorizationFormTest = ({handleRegistration, error, captchaUrl}) => {
  const validationSchema = Yup.object().shape({
    login: Yup.string()
              .min(5, 'Миниум пять символов!')
              .max(40, 'Максимум 40 символов символов!'),
    password: Yup.string()
                 .min(5, 'Миниум пять символов!')
                 .max(40, 'Максимум 40 символов символов!'),
  });
    const { register, formState, handleSubmit } = useForm({
      resolver: yupResolver(validationSchema)
  });
    const {errors, touchedFields, isValid} = formState;
    const errorClassPassord = classNames({ [style.inCorrect]: errors.password || touchedFields.password && !isValid.password }, 
                                         { [style.inCorrect]: touchedFields.password && isValid.password});

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div>
            <input placeholder="Логин"
                   type="text"
                   className={touchedFields.login && !errors.login && style.correct || errors.login && style.inCorrect || style.default }
                   {...register("login")} />
                   {errors.login && <p>{errors.login.message}</p>}
          </div>
          <div>
            <input placeholder="Пароль"
                   className={errorClassPassord}
                   type="password"
                   {...register("password")} />
                   {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <input type="checkbox" {...register("rememberMe")} /> запомнить меня
          </div>
          <button>Залогиниться</button>
        </form>
      );
}