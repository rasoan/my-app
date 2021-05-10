import {
    ADD_POST, GET_STATUS, SAVE_PROFILE,
    SET_FLAG_LOOKING_AT_MY_PROFILE, SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
    SET_USER_PROFILE,
    START_FETCHING,
    STOP_FETCHING, UPDATE_PROFILE_PICTURE,
    UPDATE_STATUS_TEXT
} from "../types/action-types";

export const addPostAC = (text) =>
    ({
        type: ADD_POST,
        message: text,
    });

export const setUserProfileAC = (profile) =>
    ({
        type: SET_USER_PROFILE,
        profile
    });

export const startFetchingAC = () =>
    ({
        type: START_FETCHING
    });

export const stopFetchingAC = () =>
    ({
        type: STOP_FETCHING
    });

export const updateNewStatusTextAC = (statusText) =>
    ({
        type: UPDATE_STATUS_TEXT,
        statusText,
    });

export const lookingMyProfileAC = () =>
    ({
        type: SET_FLAG_LOOKING_AT_MY_PROFILE,
    });

export const notLookingMyProfileAC = () =>
    ({
        type: SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
    });

export const getStatusAC = (statusText) =>
    ({
        type: GET_STATUS,
        statusText
    })

export const updateProfilePictureAC = (imagefile) =>
    ({
        type: UPDATE_PROFILE_PICTURE,
        imagefile,
    })

export const saveProfileAC = (profile) =>
    ({
        type: SAVE_PROFILE,
        profile,
    })