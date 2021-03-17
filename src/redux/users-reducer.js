const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  users: [],
  pagesSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
};


const sidebarReducer = (state = initialState, action) => {
  
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
    default:
      return state;
  }
}

export default sidebarReducer;
export let setUsersActionCreator =(users) => ({type: SET_USERS, users});
export let addFriendActionCreator = (id) => ({type: ADD_FRIEND, id});
export let deleteFriendActionCreator = (id) => ({type: DELETE_FRIEND, id});
export let setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
