import {usersApi} from "../api/api";
import {actions} from '../redux/actions/creators/users-creator';
import { ThunkAction } from 'redux-thunk'
import {AppStateType, InferActionsTypes} from "../redux/redux-store";
import {Dispatch} from "redux";

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>

export const getCountUsers = (): ThunkType => {
    return async (dispatch) => {
        let action = actions.fetchingGetCountUsersStartAC();
        dispatch(action);
        let response = await usersApi.getUsers();
        if (response.status === 200) {
            const setTotalUsersCountAction = actions.setTotalUsersCountAC(response.data.totalCount);
            dispatch(setTotalUsersCountAction);
        }
        const fetchingGetCountUsersEndAction = actions.fetchingGetCountUsersEndAC();
        dispatch(fetchingGetCountUsersEndAction);
    }
}

export const getUsersCardsSC = (currentPage: number,
                                pagesSize: number): ThunkType => {
    return async (dispatch) => {
        let action = actions.fetchingGetUserCardsStartAC();
        dispatch(action);
        let response = await usersApi.getUsers(currentPage, pagesSize);
        if (response.status === 200) {
            const setUsersAction = actions.setUsersAC(response.data.items);
            dispatch(setUsersAction);
        }
        const fetchingGetUserCardsEndAction = actions.fetchingGetUserCardsEndAC();
        dispatch(fetchingGetUserCardsEndAction);
    }
}

export const _followUnfollow = async (dispatch: DispatchType,
                                     id: number,
                                     UsersApiFollowOrUnfollow: any,
                                     actionCreator: (id: number) => ActionsTypes) => {
    let action = actions.isFetchingFollowOrUnfollowStartAC(id);
    dispatch(action);
    let response = await UsersApiFollowOrUnfollow(id);
    if (response.data.resultCode === 0) {
        const followUnfollowAction = actionCreator(id);
        dispatch(followUnfollowAction);
    }
    const isFetchingFollowOrUnfollowEndAction = actions.isFetchingFollowOrUnfollowEndAC(id);
    dispatch(isFetchingFollowOrUnfollowEndAction);
}

export const follow = (id: number): ThunkType => {
    return async (dispatch) => {
       await _followUnfollow(dispatch, id, usersApi.follow.bind(usersApi), actions.followAC);
    }
}

export const unfollow = (id: number): ThunkType => {
    return async (dispatch) => {
        await  _followUnfollow(dispatch, id, usersApi.unfollow.bind(usersApi), actions.unfollowAC);
    }
}