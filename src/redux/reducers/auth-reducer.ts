import {DEFAULT_USER_ID} from "../../constants/Authorization";
import {
    SET_USER_DATA,
    SET_PHOTOS_AUTH_USER,
    SIGN_IN,
    SIGN_UP,
    LOG_OUT,
    GET_CAPTCHA
} from '../actions/types/action-types';
import {photosType} from "../../types/types"

const initialState = {
    userId: DEFAULT_USER_ID,
    isAuth: false,
    email: null as string | null,
    login: null as string | null,
    photos: {
        small: null as string | null,
        large: null as string | null,
    } as photosType,
    captchaUrl: null as string | null,
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
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
        case SET_PHOTOS_AUTH_USER:
            return {
                ...state,
                photos: {
                    large: action.photos.large,
                    small: action.photos.small,
                },
            }
        default:
            return state;
    }
}

export default authReducer;