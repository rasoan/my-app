import {DEFAULT_STATUS_TEXT} from "../../constants/Profile";
import {
    ADD_POST,
    SET_USER_PROFILE,
    START_FETCHING,
    STOP_FETCHING,
    UPDATE_STATUS_TEXT,
    UPDATE_PROFILE_PICTURE,
    SAVE_PROFILE
} from '../actions/types/action-types';
import {postType, profileType} from "../../types/types";


let initialState = {
    posts: [] as Array<postType>,
    profile: null as profileType | null,
    isFetching: false,
    defaultStatusText: DEFAULT_STATUS_TEXT,
    statusText: DEFAULT_STATUS_TEXT,
    lookingAtMyProfile: true,
    redrawToProfileComponent: true,
    newPostText: "",
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {
                    ...action.profile,
                    photos: {
                        large: action.profile.photos.large,
                        small: action.profile.photos.small,
                    }
                },
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    content: action.message,
                    imgSrc: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1',
                    countLikes: 222,
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
            }
        case UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        large: action.photos.large,
                        small: action.photos.small,
                    }
                } as profileType,
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