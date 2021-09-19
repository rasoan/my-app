import {authAPI, profileAPI, ResultCodesEnum, securityAPI} from "../api/api";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {setUserDataAC, getCaptchaAC, setPhotosAuthUserAC} from '../redux/actions/creators/auth-creator';
import {openMainControlPanel,
    openQuestPageControlPanel,
    openOwnerPageControlPanel} from "./app";

export const authMe = () => {
    return async (dispatch: any) => {
        const response = await authAPI.getAuthMe();
        if (response.data.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = response.data.data;
            const userDataAction = setUserDataAC(id, email, login, true);
            dispatch(userDataAction);
            const responseProfile = await profileAPI.getProfile(id );
            if (responseProfile.status === 200) {
                const photosAuthUserAction = setPhotosAuthUserAC(responseProfile.data.photos);
                dispatch(photosAuthUserAction);
            }
            openMainControlPanel(dispatch, true);
        } else {
            const action = setUserDataAC(DEFAULT_USER_ID);
            dispatch(action);
        }

        return response.data;
    }
}

export const signIn = (email: string, password: string, rememberMe: boolean, captcha: any) => {
    return async (dispatch: any) => {
        const response = await authAPI.signIn(email, password, rememberMe, captcha);
        if (response.data.resultCode === ResultCodesEnum.Success) {
            await authMe()(dispatch);
        } else {
            const responseCaptcha = await securityAPI.getCaptchaUrl();
            const action = getCaptchaAC(responseCaptcha.data.url);
            dispatch(action);
        }
        return response;
    }
}

export const logOut = () => {
    return async (dispatch: any, getState: any) => {
        let response = await authAPI.logOut();
        if (response.data.resultCode === ResultCodesEnum.Success) {
            const userDataAction = setUserDataAC(DEFAULT_USER_ID);
            dispatch(userDataAction);
            const photosAuthUserAction = setPhotosAuthUserAC({small: null, large: null});
            dispatch(photosAuthUserAction);
            openMainControlPanel(dispatch, false);
            openOwnerPageControlPanel(dispatch, false);
            openQuestPageControlPanel(dispatch, false);
        }

        return response;
    }
}