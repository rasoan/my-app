import {usersApi} from "../api/api";
import {setUsersAC,
    followAC,
    unfollowAC,
    setTotalUsersCountAC,
    isFetchingFollowOrUnfollowStartAC,
    isFetchingFollowOrUnfollowEndAC,
    fetchingGetCountUsersStartAC,
    fetchingGetCountUsersEndAC,
    fetchingGetUserCardsStartAC,
    fetchingGetUserCardsEndAC} from '../redux/actions/creators/users-creator';

export const getCountUsers = () => {
    return async (dispatch: any) => {
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

export const getUsersCardsSC = (currentPage: number, pagesSize: number) => {
    return async (dispatch: any) => {
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

export const followUnfollow = async (dispatch: any,
                                     id: number,
                                     UsersApiFollowOrUnfollow: any,
                                     actionCreator: any) => {
    let action = isFetchingFollowOrUnfollowStartAC(id);
    dispatch(action);
    let response = await UsersApiFollowOrUnfollow(id);
    if (response.data.resultCode === 0) {
        action = actionCreator(id);
        dispatch(action);
    }
    const isFetchingFollowOrUnfollowEndAction = isFetchingFollowOrUnfollowEndAC(id);
    dispatch(isFetchingFollowOrUnfollowEndAction);
}

export const follow = (id: number) => {
    return async (dispatch: any) => {
       await followUnfollow(dispatch, id, usersApi.follow.bind(usersApi), followAC);
    }
}

export const unfollow = (id: number) => {
    return async (dispatch: any) => {
        await  followUnfollow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowAC);
    }
}