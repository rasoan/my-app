import {
    FETCHING_GET_USERS_CARDS_END,
    FETCHING_GET_USERS_CARDS_START,
    FETCHING_GET_USERS_COUNT_END,
    FETCHING_GET_USERS_COUNT_START,
    FOLLOW, IS_FETCHING_FOLLOW_OR_UNFOLLOW_END,
    IS_FETCHING_FOLLOW_OR_UNFOLLOW_START,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW
} from "../types/action-types";

export const setUsers = (users) => ({type: SET_USERS, users});
export const followAC = (id) => ({type: FOLLOW, id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const isFetchingFollowOrUnfollowStart = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_START, id});
export const isFetchingFollowOrUnfollowEnd = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_END, id});
export const fetchingGetCountUsersStartAC = () => ({type: FETCHING_GET_USERS_COUNT_START});
export const fetchingGetCountUsersEndAC = () => ({type: FETCHING_GET_USERS_COUNT_END});
export const fetchingGetUserCardsStartAC = () => ({type: FETCHING_GET_USERS_CARDS_START});
export const fetchingGetUserCardsEndAC = () => ({type: FETCHING_GET_USERS_CARDS_END});