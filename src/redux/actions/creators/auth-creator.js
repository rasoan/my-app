import {GET_CAPTCHA, LOG_OUT, SET_USER_DATA, SIGN_IN, SIGN_UP, SET_AVATAR_AUTH_PANEL} from "../types/action-types";

export const setUserDataAC = (userId = null, email = null, login = null, isAuth = false) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        },
        isAuth: isAuth,
    }
};

export const signInAC = (isAuth) => ({type: SIGN_IN,});

export const signUpAC = (isAuth) => {
    return {
        type: SIGN_UP,
        isAuth,
    }
}

export const logOutAC = () => ({type: LOG_OUT});

export const getCaptchaAC = (captchaUrl) =>
    ({type: GET_CAPTCHA, captchaUrl});

export const setAvatarAuthPanelAC = (profile) => ({type: SET_AVATAR_AUTH_PANEL, profile});