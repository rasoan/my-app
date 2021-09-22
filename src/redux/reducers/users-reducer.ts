import DEFAULT_AVATAR_SRC from "../../images/avatar.png";
import {userType} from "../../types/types";
import {actions} from "../actions/creators/users-creator";
import {InferActionsTypes} from "../redux-store";


let initialState = {
    users: [] as Array<userType>,
    defaultAvatarSrc: DEFAULT_AVATAR_SRC,
    pagesSize: 5,
    totalUsersCount: 0,
    isFetchingFollowOrUnfollowIdList: [] as Array<number>,
    isFetchingGetUsersCards: false,
    isFetchingGetUsersCount: false,
};

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = true;
                    }
                    return u;
                }),
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = false;
                    }
                    return u;
                }),
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case "FETCHING_GET_USERS_COUNT_START": {
            return {
                ...state,
                isFetchingGetUsersCount: true,
            }
        }
        case "FETCHING_GET_USERS_COUNT_END": {
            return {
                ...state,
                isFetchingGetUsersCount: false,
            }
        }
        case "FETCHING_GET_USERS_CARDS_START": {
            return {
                ...state,
                isFetchingGetUsersCards: true,
            }
        }
        case "FETCHING_GET_USERS_CARDS_END": {
            return {
                ...state,
                isFetchingGetUsersCards: false,
            }
        }
        case 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_START':
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList: [...state.isFetchingFollowOrUnfollowIdList, action.id],
            }
        case 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_END':
            let isFetchingFollowOrUnfollowIdList = state
                .isFetchingFollowOrUnfollowIdList
                .filter(id => id !== action.id);
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList,
            }
        default:
            return state;
    }
}
export default usersReducer;