import {profileAPI} from "../../api/api";
import {DEFAULT_AVATAR_SRC} from "../../constants/Users";
import {DEFAULT_STATUS_TEXT} from "../../constants/Profile";
import {DEFAULT_USER_ID} from "../../constants/Authorization";
import {ADD_POST,
SET_USER_PROFILE,
START_FETCHING,
STOP_FETCHING,
GET_STATUS,
UPDATE_STATUS_TEXT,
SET_FLAG_LOOKING_AT_MY_PROFILE,
SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
UPDATE_PROFILE_PICTURE,
SAVE_PROFILE} from '../actions/types/action-types';

//updateProfilePicture

let initialState = {
  posts: [{
      content: 'alo',
      imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
      countLikes: '1',
    },
    {
      content: 'helo',
      imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
      countLikes: '3',
    },
  ],
  profile: {},
  isFetching: false,
  defaultStatusText: DEFAULT_STATUS_TEXT,
  statusText: DEFAULT_STATUS_TEXT,
  lookingAtMyProfile: true,
  redrawToProfileComponent: true,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
              ...state,
              profile: {
                        ...action.profile,
                        photos: {
                                 ...action.profile.photos,
                                 large: action.profile.photos.large || DEFAULT_AVATAR_SRC,
                                }
                       },
             };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
            content: action.message,
            imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
            countLikes: '222',
          }],
          newPostText: "",
      };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
      }
      case STOP_FETCHING:
        return {
          ...state,
          isFetching: false,
        }
      case UPDATE_STATUS_TEXT:
        let updateStatusText = action.statusText && action.statusText !== ""? action.statusText: DEFAULT_STATUS_TEXT;
        return {
                ...state,
                statusText: updateStatusText,
               }
      case SET_FLAG_LOOKING_AT_MY_PROFILE:
        return {
                ...state,
                lookingAtMyProfile: true,
               }
      case SET_FLAG_NOT_LOOKING_AT_MY_PROFILE:
        return {
                ...state,
                lookingAtMyProfile: false,
               }
      case GET_STATUS:
        let getStatusText = action.statusText && action.statusText !== ""? action.statusText: DEFAULT_STATUS_TEXT;
        return {
                ...state,
                statusText: getStatusText,
               }
      case UPDATE_PROFILE_PICTURE:
        return {
                ...state,
                profile: {
                          ...state.profile,
                          photos: {...action.imagefile}
                         },
               }
      case SAVE_PROFILE:
        return {
                ...state,
                profile: {
                          ...state.profile,
                          ...action.profile,
                         }
               }
        default:
          return state;
  }
}

export default profileReducer;

export let addPostAC = (text) =>
  ({
    type: ADD_POST,
    message: text,
  });

export let setUserProfileAC = (profile) =>
  ({
    type: SET_USER_PROFILE,
    profile
  });

export let startFetchingAC = () =>
  ({
    type: START_FETCHING
  });

export let stopFetchingAC = () =>
  ({
    type: STOP_FETCHING
  });

export let updateNewStatusTextAC = (statusText) =>
({
  type: UPDATE_STATUS_TEXT,
  statusText,
});

export let lookingMyProfileAC = () =>
({
  type: SET_FLAG_LOOKING_AT_MY_PROFILE,
});

export let notLookingMyProfileAC = () =>
({
  type: SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
});

export let getStatusAC = (statusText) =>
({
  type: GET_STATUS,
  statusText
})

export let updateProfilePictureAC = (imagefile) =>
({
  type: UPDATE_PROFILE_PICTURE,
  imagefile,
})

export let saveProfileAC = (profile) =>
({
  type: SAVE_PROFILE,
  profile,
})

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