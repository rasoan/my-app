import {
  usersApi,
  profileAPI
} from "../api/api";
import {DEFAULT_AVATAR_SRC} from "../constants/Users";
import {DEFAULT_STATUS_TEXT, MY_ID} from "../constants/Profile"
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = 'STOP_FETCHING';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS_TEXT = 'UPDATE_STATUS_TEXT';
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
  profile: null,
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
            imgSrc: 'https://archilab.online/images/1/123.jpg',
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

export const getProfile = (id) => {
  id = id ? id: MY_ID;
  return (dispatch) => {
           dispatch(startFetching());
           profileAPI.getProfile(id)
                   .then(response => {
                     if(response.status === 200) {
                       dispatch(setUserProfile(response.data));
                       dispatch(stopFetching());
                    }
                   });
          }
}

export const addPost = (newPostText) => {
  return (dispatch) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
          }
}

export const updateNewStatusText = (newStatusText) => {
  return (dispatch) => {
           profileAPI.updateStatus(newStatusText)
                     .then(response => {
                        if (response.status === 200) {
                          let action = updateNewStatusTextAC(newStatusText);
                          dispatch(action);
                        }
                     });
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

export const getStatus = (userId) => {
  userId = userId ? userId: MY_ID;
  return (dispatch) => {
           profileAPI.getStatus(userId)
                     .then(response => {
                       if(response.status === 200) {
                        let action = getStatusAC(response.data);
                        dispatch(action);
                       }
                     });
          }
}