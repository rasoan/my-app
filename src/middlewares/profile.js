import {profileAPI} from "../api/api";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {addPostAC,
    setUserProfileAC,
    startFetchingAC,
    stopFetchingAC,
    updateNewStatusTextAC,
    getStatusAC,
    updateProfilePictureAC} from '../redux/actions/creators/profile-creator';
import {checkId} from "../middlewaresAdditions/profile";

export const getProfile = (userId) => {
  return async (dispatch, getState) => {
    userId = checkId(userId, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let action = startFetchingAC();
    dispatch(action);
    let response = await profileAPI.getProfile(userId);
    if (response.status === 200) {
      if (!getState().auth.isAuth) {
        response.data.photos.small = null;
      }
      action = setUserProfileAC(response.data);
      dispatch(action);
    }
    action = stopFetchingAC();
    dispatch(action);
    return userId;
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

export const getStatus = (id) => {
  return async (dispatch, getState) => {
    id = checkId(id, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let response = await profileAPI.getStatus(id)
    if (response.status === 200) {
      // let action = getStatusAC(response.data);
      let action = updateNewStatusTextAC(response.data);
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
      return true;
    }
    else {
      return false;
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    let id = getState().auth.userId;
    console.log(profile);
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      let response = await profileAPI.getProfile(id)
      if (response.status === 200) {
        let action = setUserProfileAC(response.data);
        dispatch(action);
      }
    }
  }
}