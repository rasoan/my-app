


const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
  pagesSize: 3,
  totalUsersCount: 20,
  currentPage: 3,
};


const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
              ...state,
              users: [...state.users, ...action.users]
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
    default:
      return state;
  }
}

export default sidebarReducer;
export let setUsersActionCreator =(users) => ({type: SET_USERS, users});
export let addFriendActionCreator = (id) => ({type: ADD_FRIEND, id});
export let deleteFriendActionCreator = (id) => ({type: DELETE_FRIEND, id});
