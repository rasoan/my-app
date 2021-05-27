export const getUserIdSelector = (state) => {
    return state.auth.userId;
}

export const getIsAuthSelector = (state) => {
    return state.auth.isAuth;
}

export const getEmailSelector = (state) => {
    return state.auth.email;
}

export const getLoginSelector = (state) => {
    return state.auth.login;
}

export const getCaptchaUrlSelector = (state) => {
    return state.auth.captchaUrl;
}

export const getSignInImgSelector = (state) => {
    return state.auth.signInImg;
}

export const getSignUpImgSelector = (state) => {
    return state.auth.signUpImg;
}

export const getLogOutImgSelector = (state) => {
    return state.auth.logOutImg;
}

export const getAvatarAuthPanel = (state) => {
    return state.auth.avatarAuthPanel;
}