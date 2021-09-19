import {usersApi} from "../api/api";
import {
    setUsersAC,
    followAC,
    unfollowAC,
    setTotalUsersCountAC,
    isFetchingFollowOrUnfollowStartAC,
    isFetchingFollowOrUnfollowEndAC,
    fetchingGetCountUsersStartAC,
    fetchingGetCountUsersEndAC,
    fetchingGetUserCardsStartAC,
    fetchingGetUserCardsEndAC, ActionsTypes, FollowACType, UnfollowACType
} from '../redux/actions/creators/users-creator';
import { ThunkAction } from 'redux-thunk'
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>

export const getCountUsers = (): ThunkType => {
    return async (dispatch) => {
        let action = fetchingGetCountUsersStartAC();
        dispatch(action);
        let response = await usersApi.getUsers();
        if (response.status === 200) {
            const setTotalUsersCountAction = setTotalUsersCountAC(response.data.totalCount);
            dispatch(setTotalUsersCountAction);
        }
        const fetchingGetCountUsersEndAction = fetchingGetCountUsersEndAC();
        dispatch(fetchingGetCountUsersEndAction);
    }
}

export const getUsersCardsSC = (currentPage: number,
                                pagesSize: number): ThunkType => {
    return async (dispatch) => {
        let action = fetchingGetUserCardsStartAC();
        dispatch(action);
        let response = await usersApi.getUsers(currentPage, pagesSize);
        if (response.status === 200) {
            const setUsersAction = setUsersAC(response.data.items);
            dispatch(setUsersAction);
        }
        const fetchingGetUserCardsEndAction = fetchingGetUserCardsEndAC();
        dispatch(fetchingGetUserCardsEndAction);
    }
}

export const _followUnfollow = async (dispatch: DispatchType,
                                     id: number,
                                     UsersApiFollowOrUnfollow: any,
                                     actionCreator: (id: number) => FollowACType | UnfollowACType) => {
    let action = isFetchingFollowOrUnfollowStartAC(id);
    dispatch(action);
    let response = await UsersApiFollowOrUnfollow(id);
    if (response.data.resultCode === 0) {
        const followUnfollowAction = actionCreator(id);
        dispatch(followUnfollowAction);
    }
    const isFetchingFollowOrUnfollowEndAction = isFetchingFollowOrUnfollowEndAC(id);
    dispatch(isFetchingFollowOrUnfollowEndAction);
}

export const follow = (id: number): ThunkType => {
    return async (dispatch) => {
       await _followUnfollow(dispatch, id, usersApi.follow.bind(usersApi), followAC);
    }
}

export const unfollow = (id: number): ThunkType => {
    return async (dispatch) => {
        await  _followUnfollow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowAC);
    }
}