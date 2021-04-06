import React from "react";
import style from "./AuthorizationPanel.module.scss";
import AuthorizationItem from './AuthorizationItem/AuthorizationItem';
import {SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from '../../../constants/Authorization';

const AuthorizationPanel = ({isAuth, authorizationInfo, logOutClick, signInOnClick, signUpOnClick}) => {
  if (isAuth) {
    return (<div className={style.authorizationPanelWrapper}>
              <div className={style.authorizationPanelInfo}>
                <p className={style.infoText}>{"Айди: " + authorizationInfo.userId}</p>
                <p className={style.infoText}>{"Логин: " + authorizationInfo.login}</p>
                <p className={style.infoText}>{"Почта: " + authorizationInfo.email}</p>
              </div>
              <div className={style.authorizationPanel}>
                <AuthorizationItem text={"Выйти"}
                                onClickF={logOutClick}
                                srcImg={LOG_OUT_IMG} />
              </div>
            </div>);
  }
  else {
    return (<div className={style.authorizationPanel}>
             <AuthorizationItem text={"Войти"}
                                onClickF={signInOnClick}
                                srcImg={SIGN_IN_IMG} />
             <AuthorizationItem text={"Зарегестрироваться"}
                                onClickF={signUpOnClick}
                                srcImg={SIGN_UP_IMG} />
           </div>);
  }
};

export default AuthorizationPanel;