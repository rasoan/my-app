import {DEFAULT_AVATAR_SRC} from "../../constants/Users";
import {DEFAULT_STATUS_TEXT} from "../../constants/Profile";
import {
    ADD_POST,
    SET_USER_PROFILE,
    START_FETCHING,
    STOP_FETCHING,
    GET_STATUS,
    UPDATE_STATUS_TEXT,
    SET_FLAG_LOOKING_AT_MY_PROFILE,
    SET_FLAG_NOT_LOOKING_AT_MY_PROFILE,
    UPDATE_PROFILE_PICTURE,
    SAVE_PROFILE
} from '../actions/types/action-types';

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
    profile: {
        photos: {
            small: null,
            large: null,
        }
    },
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
                        large: action.profile.photos.large || DEFAULT_AVATAR_SRC,
                        small: action.profile.photos.small || null,
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
            let updateStatusText = action.statusText && action.statusText !== "" ? action.statusText : DEFAULT_STATUS_TEXT;
            return {
                ...state,
                statusText: updateStatusText,
            }/*
      case GET_STATUS:
        let getStatusText = action.statusText && action.statusText !== ""? action.statusText: DEFAULT_STATUS_TEXT;
          return {
                ...state,
                statusText: getStatusText,
               }*/
        case UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        large: action.photos.large || DEFAULT_AVATAR_SRC,
                        small: action.photos.small || null,
                    }
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