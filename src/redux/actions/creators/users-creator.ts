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
import {userType} from "../../../types/types";

export type setUsersACType = {
    type: typeof SET_USERS
    users: Array<userType>
}
export const setUsersAC = (users: Array<userType>): setUsersACType => ({type: SET_USERS, users})

export type FollowACType = {
    type: typeof FOLLOW
    id: number
}
export const followAC = (id: number): FollowACType => ({type: FOLLOW, id})

export type UnfollowACType = {
    type: typeof UNFOLLOW
    id: number
}
export const unfollowAC = (id: number): UnfollowACType => ({type: UNFOLLOW, id})

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export type IsFetchingFollowOrUnfollowStartACType = {
    type: typeof IS_FETCHING_FOLLOW_OR_UNFOLLOW_START
    id: number
}
export const isFetchingFollowOrUnfollowStartAC = (id: number): IsFetchingFollowOrUnfollowStartACType => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_START, id})

export type IsFetchingFollowOrUnfollowEndACType = {
    type: typeof IS_FETCHING_FOLLOW_OR_UNFOLLOW_END
    id: number
}
export const isFetchingFollowOrUnfollowEndAC = (id: number): IsFetchingFollowOrUnfollowEndACType => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_END, id})

export type FetchingGetCountUsersStartACType = {
    type: typeof FETCHING_GET_USERS_COUNT_START
}
export const fetchingGetCountUsersStartAC = (): FetchingGetCountUsersStartACType => ({type: FETCHING_GET_USERS_COUNT_START})

export type FetchingGetCountUsersEndACType = {
    type: typeof FETCHING_GET_USERS_COUNT_END
}
export const fetchingGetCountUsersEndAC = (): FetchingGetCountUsersEndACType => ({type: FETCHING_GET_USERS_COUNT_END})

export type FetchingGetUserCardsStartACType = {
    type: typeof FETCHING_GET_USERS_CARDS_START
}
export const fetchingGetUserCardsStartAC = (): FetchingGetUserCardsStartACType => ({type: FETCHING_GET_USERS_CARDS_START})

export type FetchingGetUserCardsEndACType = {
    type: typeof FETCHING_GET_USERS_CARDS_END
}
export const fetchingGetUserCardsEndAC = (): FetchingGetUserCardsEndACType => ({type: FETCHING_GET_USERS_CARDS_END})

