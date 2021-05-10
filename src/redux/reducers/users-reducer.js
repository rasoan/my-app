import {usersApi} from "../../api/api";
import {DEFAULT_AVATAR_SRC} from "../../constants/Users";

import {FOLLOW,
UNFOLLOW,
SET_USERS,
SET_TOTAL_USERS_COUNT,
TOGGLE_IS_FETCHING,
IS_FETCHING_FOLLOW_OR_UNFOLLOW_START,
IS_FETCHING_FOLLOW_OR_UNFOLLOW_END,
FETCHING_GET_USERS_CARDS_START,
FETCHING_GET_USERS_CARDS_END,
FETCHING_GET_USERS_COUNT_START,
FETCHING_GET_USERS_COUNT_END} from '../actions/types/action-types';

import {setUsers,
    followAC,
    unfollowAC,
    setTotalUsersCount,
    toggleIsFetching,
    isFetchingFollowOrUnfollowStart,
    isFetchingFollowOrUnfollowEnd,
    fetchingGetCountUsersStartAC,
    fetchingGetCountUsersEndAC,
    fetchingGetUserCardsStartAC,
    fetchingGetUserCardsEndAC} from '../actions/creators/users-creator';

let initialState = {
    users: [],
    defaultAvatarSrc: DEFAULT_AVATAR_SRC,
    pagesSize: 5,
    totalUsersCount: 0,
    isFetchingFollowOrUnfollowIdList: [],
    isFetchingGetUsersCards: false,
    isFetchingGetUsersCount: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = true;
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = false;
                    }
                    return u;
                }),
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            if (action.isFetching) {
                return {
                    ...state,
                    isFetching: true,
                }
            } else {
                return {
                    ...state,
                    isFetching: false,
                }
            }
        case FETCHING_GET_USERS_COUNT_START: {
            return {
                ...state,
                isFetchingGetUsersCount: true,
            }
        }
        case FETCHING_GET_USERS_COUNT_END: {
            return {
                ...state,
                isFetchingGetUsersCount: false,
            }
        }
        case FETCHING_GET_USERS_CARDS_START: {
            return {
                ...state,
                isFetchingGetUsersCards: true,
            }
        }
        case FETCHING_GET_USERS_CARDS_END: {
            return {
                ...state,
                isFetchingGetUsersCards: false,
            }
        }
        case IS_FETCHING_FOLLOW_OR_UNFOLLOW_START:
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList: [...state.isFetchingFollowOrUnfollowIdList, action.id],
            }
        case IS_FETCHING_FOLLOW_OR_UNFOLLOW_END:
            let isFetchingFollowOrUnfollowIdList = state.isFetchingFollowOrUnfollowIdList.filter(id => id !== action.id);
            return {
                ...state,
                isFetchingFollowOrUnfollowIdList,
            }
        default:
            return state;
    }
}
export default usersReducer;


export const getCountUsers = () => {
    return async (dispatch) => {
        let action = fetchingGetCountUsersStartAC();
        dispatch(action);
        let response = await usersApi.getUsers();
        if (response.status === 200) {
            action = setTotalUsersCount(response.data.totalCount);
            dispatch(action);
        }
        action = fetchingGetCountUsersEndAC();
        dispatch(action);
    }
}

export const getUsersCardsSC = (currentPage, pagesSize) => {
    return async (dispatch) => {
        let action = fetchingGetUserCardsStartAC();
        dispatch(action);
        let response = await usersApi.getUsers(currentPage, pagesSize);
        if (response.status === 200) {
            action = setUsers(response.data.items);
            dispatch(action);
        }
        action = fetchingGetUserCardsEndAC();
        dispatch(action);
    }
}

const followUnfollow = async (dispatch, id, UsersApiFollowOrUnfollow, actionCreator) => {
    let action = isFetchingFollowOrUnfollowStart(id);
    dispatch(action);
    let response = await UsersApiFollowOrUnfollow(id);
    if (response.data.resultCode === 0) {
        action = actionCreator(id);
        dispatch(action);
    }
    action = isFetchingFollowOrUnfollowEnd(id);
    dispatch(action);
}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfollow(dispatch, id, usersApi.follow.bind(usersApi), followAC);
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowAC);
    }
}