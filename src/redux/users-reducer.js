import {usersApi} from "../api/api";
import {DEFAULT_AVATAR_SRC} from "../constants/Users";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const IS_FETCHING_FOLLOW_OR_UNFOLLOW_START = 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_START';
const IS_FETCHING_FOLLOW_OR_UNFOLLOW_END = 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_END';

let initialState = {
  users: [],
  defaultAvatarSrc: DEFAULT_AVATAR_SRC,
  pagesSize: 5,
  totalUsersCount: 0,
  isFetching: false,
  isFetchingFollowOrUnfollowIdList: [],
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
                if(u.id === action.id) {
                  u.followed = true;
                }
                return u;
              }),
             }
    case UNFOLLOW:
      return {
              ...state,
              users: state.users.map(u => {
                if(u.id === action.id) {
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
      }
      else {
        return {
                ...state,
                isFetching: false,
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
export let setUsers =(users) => ({type: SET_USERS, users});
export let followAC = (id) => ({type: FOLLOW, id});
export let unfollowAC = (id) => ({type: UNFOLLOW, id});
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let isFetchingFollowOrUnfollowStart = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_START, id});
export let isFetchingFollowOrUnfollowEnd = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_END, id});

export const getUsersSC = (currentPage, pagesSize) => {
  return async (dispatch) => {
    let action = toggleIsFetching(true);
    dispatch(action);
    let response = await usersApi.getUsers(currentPage, pagesSize);
    if (response.status === 200) {
      action = setUsers(response.data.items);
      dispatch(action);
      action = setTotalUsersCount(response.data.totalCount);
      dispatch(action);
      action = toggleIsFetching(false);
      dispatch(action);
    }
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