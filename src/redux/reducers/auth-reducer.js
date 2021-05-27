import {DEFAULT_USER_ID, SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from "../../constants/Authorization";
import {SET_USER_DATA,
    SET_AVATAR_AUTH_PANEL,
SIGN_IN,
SIGN_UP,
LOG_OUT,
GET_CAPTCHA} from '../actions/types/action-types';

let initialState = {
    avatarAuthPanel: null,
    userId: DEFAULT_USER_ID,
    isAuth: false,
    email: null,
    login: null,
    captchaUrl: "",
    signInImg: SIGN_IN_IMG,
    signUpImg: SIGN_UP_IMG,
    logOutImg: LOG_OUT_IMG,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        case SET_AVATAR_AUTH_PANEL:
            return {
               ...state,
                avatarAuthPanel: action.profile.photos.small,
            }
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
            }
        case SIGN_UP:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
            }
        case GET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;
    }
}

export default authReducer;