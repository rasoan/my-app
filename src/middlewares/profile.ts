import {profileAPI} from "../api/api";
import {DEFAULT_USER_ID} from "../constants/Authorization";
import {addPostAC,
    setUserProfileAC,
    startFetchingAC,
    stopFetchingAC,
    updateNewStatusTextAC,
    updateProfilePictureAC} from '../redux/actions/creators/profile-creator';
import {checkId} from "../middlewaresAdditions/profile";
import {setPhotosAuthUserAC} from "../redux/actions/creators/auth-creator";

export const getProfile = (userId: number) => {
  return async (dispatch: any, getState: any) => {
    userId = checkId(userId, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let action = startFetchingAC();
    dispatch(action);
    let response = await profileAPI.getProfile(userId);
    if (response.status === 200) {
      if (!getState().auth.isAuth) {
        response.data.photos.small = null;
      }
      const setUserProfileAction = setUserProfileAC(response.data);
      dispatch(setUserProfileAction);
    }
    const stopFetchingAction = stopFetchingAC();
    dispatch(stopFetchingAction);
    return userId;
  }
}

export const addPost = (newPostText: string) => {
  return (dispatch: any) => {
    let action = addPostAC(newPostText);
    dispatch(action);
  }
}

export const updateNewStatusText = (newStatusText: string) => {
  return async (dispatch: any) => {
    let response = await profileAPI.updateStatus(newStatusText)
    if (response.status === 200) {
      let action = updateNewStatusTextAC(newStatusText);
      dispatch(action);
    }
  }
}

export const getStatus = (id: number) => {
  return async (dispatch: any, getState: any) => {
    id = checkId(id, getState().auth.isAuth, getState().auth.userId, DEFAULT_USER_ID);
    let response = await profileAPI.getStatus(id)
    if (response.status === 200) {
      let action = updateNewStatusTextAC(response.data);
      dispatch(action);
    }
  }
}

export const updateProfilePicture = (imageFile: any) => {
  return async (dispatch: any) => {
    let response = await profileAPI.updateProfilePicture(imageFile);
    if (response.data.resultCode === 0) {
      let action = updateProfilePictureAC(response.data.data.photos);
      dispatch(action);
      const setPhotosAuthUserAction = setPhotosAuthUserAC(response.data.data.photos);
      dispatch(setPhotosAuthUserAction);
      return true;
    }
    else {
      return false;
    }
  }
}

export const saveProfile = (profile: any) => {
  return async (dispatch: any, getState: any) => {
    let id = getState().auth.userId;
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