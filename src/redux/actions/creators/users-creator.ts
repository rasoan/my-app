import {userType} from "../../../types/types";

export const actions = {
    setUsersAC: (users: Array<userType>) => ({type: 'SET_USERS', users} as const),
    followAC: (id: number) => ({type: 'FOLLOW', id} as const),
    unfollowAC: (id: number) => ({type: 'UNFOLLOW', id} as const),
    setTotalUsersCountAC: (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),
    isFetchingFollowOrUnfollowStartAC: (id: number) => ({
        type: 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_START',
        id
    } as const),
    isFetchingFollowOrUnfollowEndAC: (id: number) => ({
        type: 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_END',
        id
    } as const),
    fetchingGetCountUsersStartAC: () => ({type: 'FETCHING_GET_USERS_COUNT_START'} as const),
    fetchingGetCountUsersEndAC: () => ({type: 'FETCHING_GET_USERS_COUNT_END'} as const),
    fetchingGetUserCardsStartAC: () => ({type: 'FETCHING_GET_USERS_CARDS_START'} as const),
    fetchingGetUserCardsEndAC: () => ({type: 'FETCHING_GET_USERS_CARDS_END'} as const),
}

