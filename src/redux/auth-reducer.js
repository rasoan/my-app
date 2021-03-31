import {authAPI} from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const SIGN_IN = "SIGN_IN";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
//SignIn
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
              ...state,
              ...action.data,
              isAuth: true,
             }
      case SIGN_IN:
        return {
                ...state,
                isAuth: action.isAuth,
               }
      default:
        return state;
  }
}

export default authReducer;
export let setUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  }
};

export let signInAC = (isAuth) => {
  return {
          type: SIGN_IN,
          isAuth,
         }
}

export const authMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe()
            .then(response => {
              if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; 
                dispatch(setUserData(id, email, login));
              }
            });
  }
}

export const signIn = (email, password, rememberMe = false, captcha = true)  => {
   return (dispatch) => {
     authAPI.signIn(email, password, rememberMe, captcha)
            .then(response => {
              let {id, email, login} = response.data.data;
              if (response.data.resultCode === 0) {
              }
              authAPI.getAuthMe()
                     .then(response => {
                       if (response.data.resultCode === 0) {
                         let {id, email, login} = response.data.data; 
                         dispatch(setUserData(id, email, login));
                       }
                     });
            })
   }  
}