import {profileAPI} from "../api/api";
import {DEFAULT_AVATAR_SRC} from "../constants/Users";
import {DEFAULT_STATUS_TEXT} from "../constants/Profile";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {ADD_POST,
SET_USER_PROFILE,
START_FETCHING,
STOP_FETCHING,
GET_STATUS,
UPDATE_STATUS_TEXT,
SET_FLAG_LOOKING_AT_MY_PROFILE,
SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
UPDATE_PROFILE_PICTURE,
SAVE_PROFILE} from '../redux/actions/types/action-types';

//updateProfilePicture

import {addPostAC,
    setUserProfileAC,
    startFetchingAC,
    stopFetchingAC,
    updateNewStatusTextAC,
    lookingMyProfileAC,
    notLookingMyProfileAC,
    getStatusAC,
    updateProfilePictureAC,
    saveProfileAC} from '../redux/actions/creators/profile-creator';

export const getProfile = (id) => {
  return async (dispatch, getState) => {
    id = checkId(id, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let action = startFetchingAC();
    dispatch(action);
    let response = await profileAPI.getProfile(id);   
    if (response.status === 200) {
      action = setUserProfileAC(response.data);
      dispatch(action);
      action = stopFetchingAC();
      dispatch(action);
    }
  }
}

export const addPost = (newPostText) => {
  return (dispatch) => {
    let action = addPostAC(newPostText);
    dispatch(action);
  }
}

export const updateNewStatusText = (newStatusText) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(newStatusText)
    if (response.status === 200) {
      let action = updateNewStatusTextAC(newStatusText);
      dispatch(action);
    }
  }
}

export const lookingMyProfile = () => {
  return (dispatch) => {
    let action = lookingMyProfileAC();
    dispatch(action);
  }
}

export const notLookingMyProfile = () => {
  return (dispatch) => {
    let action = notLookingMyProfileAC();
    dispatch(action);
  }
}

export const getStatus = (id) => {
  return async (dispatch, getState) => {
    
    id = checkId(id, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let response = await profileAPI.getStatus(id)
    if (response.status === 200) {

      let action = getStatusAC(response.data);
      dispatch(action);
    }
  }
}

export const updateProfilePicture = (imagefile) => {
  return async (dispatch) => {
    let response = await profileAPI.updateProfilePicture(imagefile);
    if (response.data.resultCode === 0) {
      let action = updateProfilePictureAC(response.data.data.photos);
      dispatch(action);
    }
    else {
      console.log("Фотография профиля не обновилась, не подходящий формат файла!")
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    let id = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      let response = await profileAPI.getProfile(id)
      if (response.status === 200) {
        let action = setUserProfileAC(response.data);
        dispatch(action);
      }
    }
    return response;
  }
}

const checkId = (id, isAuth, myId, defaultId) => {
  if(!id) {
    id = isAuth ? myId: defaultId;
  }
  return id;
}