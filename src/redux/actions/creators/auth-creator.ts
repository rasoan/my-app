import {GET_CAPTCHA,
    LOG_OUT,
    SET_USER_DATA,
    SIGN_IN,
    SIGN_UP,
    SET_PHOTOS_AUTH_USER} from "../types/action-types";
import {photosType, userDataAuth} from "../../../types/types";

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: userDataAuth | null
    isAuth: boolean
}
export const setUserDataAC = (userId: number,
                              email: null | string = null,
                              login: null | string = null,
                              isAuth = false): SetUserDataType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        } as userDataAuth,
        isAuth: isAuth,
    }
};

export type SignInType = {
    type: typeof SIGN_IN
}
export const signInAC = (): SignInType => ({type: SIGN_IN});

export type SignUpType = {
    type: typeof SIGN_UP
    isAuth: boolean
}
export const signUpAC = (isAuth: boolean): SignUpType => ({type: SIGN_UP, isAuth})

export type LogOutType = {
    type: typeof LOG_OUT
}
export const logOutAC = (): LogOutType => ({type: LOG_OUT});

export type GetCaptchaType = {
    type: typeof GET_CAPTCHA
    captchaUrl: string
}
export const getCaptchaAC = (captchaUrl: string): GetCaptchaType => ({type: GET_CAPTCHA, captchaUrl});

export type SetPhotosAuthUserType = {
    type: typeof SET_PHOTOS_AUTH_USER
    photos: photosType
}
export const setPhotosAuthUserAC = (photos: photosType): SetPhotosAuthUserType => ({type: SET_PHOTOS_AUTH_USER, photos});