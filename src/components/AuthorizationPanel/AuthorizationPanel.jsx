import React from "react";
import PropTypes from "prop-types";
import style from "./AuthorizationPanel.module.scss";
import ButtonAuthorization from '../ButtonAuthorization';
import {SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from '../../constants/Authorization';
import Button from "../Button";
import {NavLink} from 'react-router-dom';

const AuthorizationPanel = (props) => {
    const {isAuth, authorizationInfo, logOut} = props;
    return (<div className={style.authorizationPanelWrapper}>
        {isAuth && <div className={style.authorizationPanelInfo}>
            <p className={style.infoText}>{"Айди: " + authorizationInfo.userId}</p>
            <p className={style.infoText}>{"Логин: " + authorizationInfo.login}</p>
            <p className={style.infoText}>{"Почта: " + authorizationInfo.email}</p>
        </div>}
        {isAuth && <div className={style.authorizationPanel}>
            <Button text={"Выйти"}
                    handlerClick={logOut} />
        </div>}
        {!isAuth && <div className={style.authorizationPanel}>
            <Button text={"Войти"}
                    component={NavLink}
                    to="/authorization" />
            <Button text={"Зарегистрироваться"}
                    component={NavLink}
                    to="/authorization" />
        </div>}
    </div>);
};

AuthorizationPanel.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    authorizationInfo: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
}

export default AuthorizationPanel;