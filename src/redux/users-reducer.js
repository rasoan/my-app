import {usersApi} from "../api/api";
const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const IS_FETCHING_FOLLOW_OR_UNFOLLOW_START = 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_START';
const IS_FETCHING_FOLLOW_OR_UNFOLLOW_END = 'IS_FETCHING_FOLLOW_OR_UNFOLLOW_END';



let initialState = {
  users: [],
  pagesSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
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
    case ADD_FRIEND:
      
      return {
              ...state,
              users: state.users.map(u => {
                if(u.id === action.id) {
                  u.followed = true;
                }
                return u;
              }),
             }
    case DELETE_FRIEND:
      return {
              ...state,
              users: state.users.map(u => {
                if(u.id === action.id) {
                  u.followed = false;
                }
                return u;
              }),
             }
    case SET_CURRENT_PAGE:
      return {
               ...state,
               currentPage: action.currentPage,
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
export let addFriend = (id) => ({type: ADD_FRIEND, id});
export let deleteFriend = (id) => ({type: DELETE_FRIEND, id});
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let isFetchingFollowOrUnfollowStart = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_START, id});
export let isFetchingFollowOrUnfollowEnd = (id) => ({type: IS_FETCHING_FOLLOW_OR_UNFOLLOW_END, id});

export const getUsers = (currentPage, pagesSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pagesSize)
      .then(response => {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleIsFetching(false));
      });
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(isFetchingFollowOrUnfollowStart(id));
    usersApi.unfollow(id)
            .then(response => {
              if (response.resultCode === 0) {
                dispatch(deleteFriend(id));
                dispatch(isFetchingFollowOrUnfollowEnd(id));       
              }
            });
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(isFetchingFollowOrUnfollowStart(id));
    usersApi.follow(id)
            .then(response => {
              if (response.resultCode === 0) {
                dispatch(addFriend(id));
              }
              dispatch(isFetchingFollowOrUnfollowEnd(id));
            });
  }
}