const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = 'STOP_FETCHING';

let initialState = {
  posts: [
          {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
              ...state,
              profile: action.profile,
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
    default:
      return state;
  }
}

export default profileReducer;

export let addPostActionCreator = (text) => 
    ({type: ADD_POST, message: text,});

export let updateNewPostTextActionCreator = (newText) => 
    ({type: UPDATE_NEW_POST_TEXT, newText,});

export let setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export let startFetching = () => ({type: START_FETCHING});


export let stopFetching = () => 
    ({type: STOP_FETCHING});