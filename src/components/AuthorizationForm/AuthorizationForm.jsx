import React from "react";
import PropTypes from "prop-types";
import style from "../../styles-global/FormControls.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const AuthorizationForm = (props) => {
  const {handleRegistration, captchaUrl} = props;

  const validationSchema = Yup.object().shape({
    login: Yup.string()
              .required('Поле обязательно для заполнения.')
              .min(2, 'Миниум 2 символа!')
              .max(50, 'Максимум 50 символов')
              .matches(/[@]/, 'Символ @ обязателен'),
    password: Yup.string()
                 .required('Поле обязательно для заполнения.')
                 .min(2, 'Миниум 2 символа!')
                 .max(50, 'Максимум 50 символов'),
  });

  const { register, formState, handleSubmit } = useForm({
      mode: 'onBlur',
      resolver: yupResolver(validationSchema)
  });

  const {errors, touchedFields} = formState;

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div>
            <input placeholder="Логин"
                   type="text"
                   className={errors.login && style.inCorrect ||touchedFields.login && style.correct }
                   {...register("login")} />
                   {errors.login && <p>{errors.login.message}</p>}
          </div>
          <div>
            <input placeholder="Пароль"
                   className={errors.password && style.inCorrect ||touchedFields.password && style.correct}
                   type="password"
                   {...register("password")} />
                   {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <input type="checkbox" {...register("rememberMe")} /> запомнить меня
          </div>
          <button>Залогиниться</button>
          <div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && <div><input type="text"
                                        {...register("captcha")} />
                           </div> }
          </div>
        </form>
      );
}

AuthorizationForm.propTypes = {
  captchaUrl: PropTypes.string.isRequired,
  handleRegistration: PropTypes.func.isRequired,
};

export default AuthorizationForm;