import {
  usersApi
} from "../api/api";
import {DEFAULT_AVATAR_SRC} from "../constants/Users";
import {DEFAULT_STATUS_TEXT} from "../constants/Profile"
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = 'STOP_FETCHING';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const USE_DEFAULT_STATUS_TEXT = 'USE_DEFAULT_STATUS_TEXT';
const SET_FLAG_LOOKING_AT_MY_PROFILE = 'SET_FLAG_LOOKING_AT_MY_PROFILE';
const SET_FLAG_NOT_LOOKING_AT_MY_PROFILE = 'SET_FLAG_NOT_LOOKING_AT_MY_PROFILE';


let initialState = {
  posts: [{
      content: 'alo',
      imgSrc: 'https://archilab.online/images/1/123.jpg',
      countLikes: '1',
    },
    {
      content: 'helo',
      imgSrc: 'https://archilab.online/images/1/123.jpg',
      countLikes: '3',
    },
  ],
  newPostText: 'it-camasutra.com!',
  profile: null,
  isFetching: false,
  statusText: null,
  lookingAtMyProfile: true,
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
              statusText: action.profile.aboutMe || DEFAULT_STATUS_TEXT,
             };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
            content: action.message,
            imgSrc: 'https://archilab.online/images/1/123.jpg',
            countLikes: '222',
          }],
          newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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
      case UPDATE_NEW_STATUS_TEXT:
        return {
                ...state,
                statusText: action.statusText,
               }
      case USE_DEFAULT_STATUS_TEXT:
        return {
                ...state,
                statusText: action.defaultStatusText,
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
        default:
          return state;
  }
}

export default profileReducer;

export let addPostActionCreator = (text) =>
  ({
    type: ADD_POST,
    message: text,
  });

export let updateNewPostText = (newText) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
  });

export let setUserProfile = (profile) =>
  ({
    type: SET_USER_PROFILE,
    profile
  });

export let startFetching = () =>
  ({
    type: START_FETCHING
  });

export let stopFetching = () =>
  ({
    type: STOP_FETCHING
  });

export let updateNewStatusText = (newStatusElement) =>
({
  type: UPDATE_NEW_STATUS_TEXT,
  statusText: newStatusElement,
});

export let defaultStatusTextAC = () => 
({
  type: USE_DEFAULT_STATUS_TEXT,
  defaultStatusText: DEFAULT_STATUS_TEXT,
});

export let lookingMyProfileAC = () =>
({
  type: SET_FLAG_LOOKING_AT_MY_PROFILE,
});

export let notLookingMyProfileAC = () =>
({
  type: SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
});

export const getProfile = (id) => {
  return (dispatch) => {
           dispatch(startFetching());
           usersApi.getProfile(id)
                   .then(response => {
                     dispatch(setUserProfile(response));
                     dispatch(stopFetching());
                   });
          }
}

export const onPostChange = (newPostElement) => {
  return (dispatch) => {
            let action = updateNewPostText(newPostElement);
            dispatch(action);
          }
}

export const addPost = (newPostText) => {
  return (dispatch) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
          }
}

export const onStatusChange = (newStatusElement) => {
  return (dispatch) => {
           let action = updateNewStatusText(newStatusElement);
           dispatch(action);
         }
}

export const useDefaultStatusText = () => {
  return (dispatch) => {
          let action = defaultStatusTextAC();
          dispatch(action);
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