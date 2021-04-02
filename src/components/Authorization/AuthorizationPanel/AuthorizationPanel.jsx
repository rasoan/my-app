import React from "react";
import style from "./AuthorizationPanel.module.scss";
import AuthorizationItem from './AuthorizationItem/AuthorizationItem';

const AuthorizationPanel = (props) => {

  if (props.isAuth) {
    return (<div className={style.authorizationPanelWrapper}>
              <div className={style.authorizationPanelInfo}>
                <p className={style.infoText}>{"Айди: " + props.authorizationInfo.userId}</p>
                <p className={style.infoText}>{"Логин: " + props.authorizationInfo.login}</p>
                <p className={style.infoText}>{"Почта: " + props.authorizationInfo.email}</p>
              </div>
              <div className={style.authorizationPanel}>
                <AuthorizationItem text={"Выйти"}
                                onClickF={props.logOutClick}
                                srcImg={props.logOutImg} />
              </div>
            </div>);
  }
  else {
    return (<div className={style.authorizationPanel}>
             <AuthorizationItem text={"Войти"}
                                onClickF={props.signInOnClick}
                                srcImg={props.signInImg} />
             <AuthorizationItem text={"Зарегестрироваться"}
                                onClickF={props.signUpOnClick}
                                srcImg={props.signUpImg} />
           </div>);
  }
};

export default AuthorizationPanel;