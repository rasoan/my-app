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
    return async (dispatch) => {
        let action = fetchingGetCountUsersStartAC();
        dispatch(action);
        let response = await usersApi.getUsers();
        if (response.status === 200) {
            action = setTotalUsersCountAC(response.data.totalCount);
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
            action = setUsersAC(response.data.items);
            dispatch(action);
        }
        action = fetchingGetUserCardsEndAC();
        dispatch(action);
    }
}

export const followUnfollow = async (dispatch, id, UsersApiFollowOrUnfollow, actionCreator) => {
    let action = isFetchingFollowOrUnfollowStartAC(id);
    dispatch(action);
    let response = await UsersApiFollowOrUnfollow(id);
    if (response.data.resultCode === 0) {
        action = actionCreator(id);
        dispatch(action);
    }
    action = isFetchingFollowOrUnfollowEndAC(id);
    dispatch(action);
}

export const follow = (id) => {
    return async (dispatch) => {
       await followUnfollow(dispatch, id, usersApi.follow.bind(usersApi), followAC);
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        await  followUnfollow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowAC);
    }
}