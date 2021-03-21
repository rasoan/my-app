const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_ADD_OR_DELETE_FRIEND = 'TOGGLE_IS_FETCHING_ADD_OR_DELETE_FRIEND';


let initialState = {
  users: [],
  pagesSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  isFetchingAddOrDeleteFriend: false,
  isFetchingAddOrDeleteFriendId: false,
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
    case TOGGLE_IS_FETCHING_ADD_OR_DELETE_FRIEND:
      if (action.isFetchingAddOrDeleteFriend) {
        return {
                ...state,
                isFetchingAddOrDeleteFriend: true,
                isFetchingAddOrDeleteFriendId: action.isFetchingAddOrDeleteFriendId,
               }
        }
      else {
        return {
                ...state,
                isFetchingAddOrDeleteFriend: false,
               }
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
export let toggleIsFetchingAddOrDeleteFriend = (isFetchingAddOrDeleteFriend, id = false) => ({type: TOGGLE_IS_FETCHING_ADD_OR_DELETE_FRIEND, isFetchingAddOrDeleteFriend, isFetchingAddOrDeleteFriendId: id});
