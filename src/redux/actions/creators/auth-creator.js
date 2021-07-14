import {GET_CAPTCHA, LOG_OUT, SET_USER_DATA, SIGN_IN, SIGN_UP, SET_PHOTOS_AUTH_USER} from "../types/action-types";

export const setUserDataAC = (userId = null, email = null, login = null, isAuth = false) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
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

export const setPhotosAuthUserAC = (photos) => ({type: SET_PHOTOS_AUTH_USER, photos});