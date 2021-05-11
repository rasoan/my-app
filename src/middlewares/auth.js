import {stopSubmit} from "redux-form";
import {authAPI, securituAPI} from "../api/api";
import {DEFAULT_USER_ID, SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from "../constants/Authorization";
import {setUserDataAC,
    signInAC,
    signUpAC,
    logOutAC,
    getCaptchaAC} from '../redux/actions/creators/auth-creator';

import {SET_USER_DATA,
SIGN_IN,
SIGN_UP,
LOG_OUT,
GET_CAPTCHA} from '../redux/actions/types/action-types';





export const authMe = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuthMe();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            let action = setUserDataAC(id, email, login, true);
            dispatch(action);
        } else if (response.data.resultCode === 2) {
            let action = setUserDataAC(DEFAULT_USER_ID);
            dispatch(action);
        }
        return response;
    }
}

export const signIn = (email, password, rememberMe = null, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.signIn(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            let action = authMe();
            dispatch(action);
        } else {
            let action = authMe();
            dispatch(action);
            action = stopSubmit("authorization", {_error: response.data.messages[0]});
            dispatch(action);
            let responseCaptcha = await securituAPI.getCaptchaUrl();
            action = getCaptchaAC(responseCaptcha.data.url);
            dispatch(action);
        }
        return response;
    }
}

export const signUp = () => {
    return (dispatch) => {
    }
}

export const logOut = () => {
    return async (dispatch, getState) => {
        let response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            let action = setUserDataAC(DEFAULT_USER_ID);
            dispatch(action);
        }
        return response;
    }
}