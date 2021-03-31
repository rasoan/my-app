import React from "react";
import style from "./LoginAndRegistration.module.scss";

const LoginAndRegistration = (props) => {
  let login = props.isAuth ? <p>{props.login}</p>: "";
  let signUp = !props.isAuth ? <p>Зарегестрироваться</p>: "";
  let signIn = !props.isAuth ? <p>Войти</p>: "";

  return (<>
           {login ? login: ""}
           {signUp}
           {signIn}
          </>);
};

export default LoginAndRegistration;
