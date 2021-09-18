import {
    ADD_POST, GET_STATUS, SAVE_PROFILE,
    SET_FLAG_LOOKING_AT_MY_PROFILE, SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
    SET_USER_PROFILE,
    START_FETCHING,
    STOP_FETCHING, UPDATE_PROFILE_PICTURE,
    UPDATE_STATUS_TEXT
} from "../types/action-types";
import {photosType, profileType} from "../../../types/types";

export type AddPostACType = {
    type: typeof ADD_POST
    message: string
}
export const addPostAC = (text: string): AddPostACType =>
    ({
        type: ADD_POST,
        message: text,
    });

export type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType,
}
export const setUserProfileAC = (profile: profileType): SetUserProfileACType =>
    ({
        type: SET_USER_PROFILE,
        profile
    });

export type StartFetchingACType = {
    type: typeof START_FETCHING
}
export const startFetchingAC = (): StartFetchingACType =>
    ({
        type: START_FETCHING
    });

export type StopFetchingACType = {
    type: typeof STOP_FETCHING
}
export const stopFetchingAC = (): StopFetchingACType =>
    ({
        type: STOP_FETCHING
    });

export type UpdateNewStatusTextACType = {
    type: typeof UPDATE_STATUS_TEXT
    statusText: string
}
export const updateNewStatusTextAC = (statusText: string): UpdateNewStatusTextACType =>
    ({
        type: UPDATE_STATUS_TEXT,
        statusText,
    });

export type LookingMyProfileACType = {
    type: typeof SET_FLAG_LOOKING_AT_MY_PROFILE
}
export const lookingMyProfileAC = (): LookingMyProfileACType =>
    ({
        type: SET_FLAG_LOOKING_AT_MY_PROFILE,
    });

export type NotLookingMyProfileACType = {
    type: typeof SET_FLAG_NOT_LOOKING_AT_MY_PROFILE
}
export const notLookingMyProfileAC = (): NotLookingMyProfileACType =>
    ({
        type: SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
    });

export type UpdateProfilePictureACType = {
    type: typeof UPDATE_PROFILE_PICTURE
    photos: photosType
}
export const updateProfilePictureAC = (photos: photosType): UpdateProfilePictureACType =>
    ({
        type: UPDATE_PROFILE_PICTURE,
        photos,
    })

export type SaveProfileACType = {
    type: typeof SAVE_PROFILE,
    profile: profileType,
}
export const saveProfileAC = (profile: profileType): SaveProfileACType =>
    ({
        type: SAVE_PROFILE,
        profile,
    })