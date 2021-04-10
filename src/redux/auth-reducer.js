import { stopSubmit } from "redux-form";
import {authAPI} from "../api/api";
import {DEFAULT_USER_ID, SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from "../constants/Authorization";
const SET_USER_DATA = "SET_USER_DATA";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const LOG_OUT = "LOG_OUT";

let initialState = {
  userId: DEFAULT_USER_ID,
  email: null,
  login: null,
  isAuth: false,
  signInImg: SIGN_IN_IMG,
  signUpImg: SIGN_UP_IMG,
  logOutImg: LOG_OUT_IMG,
};
//SignIn
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
              ...state,
              ...action.data,
              isAuth: action.isAuth,
             }
      case SIGN_IN:
        return {
                ...state,
                isAuth: action.isAuth,
               }
      case SIGN_UP:
        return {
                ...state,
                isAuth: action.isAuth,
               }
      case LOG_OUT:
        return {
                ...state,
                isAuth: action.isAuth,
               }
      default:
        return state;
  }
}

export default authReducer;
export let setUserDataAC = (userId = null, email = null, login = null, isAuth = false) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    },
    isAuth,
  }
};

export let signInAC = (isAuth) => {
  return {
          type: SIGN_IN,
          isAuth,
         }
}

export let signUpAC = (isAuth) => {
  return {
    type: SIGN_UP,
    isAuth,
   }
}

export let logOutAC = (isAuth) => {
  return {
    type: LOG_OUT,
    isAuth,
   }
}

export const authMe = () => {
  return async (dispatch) => {
    let response = await authAPI.getAuthMe();
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      let action = setUserDataAC(id, email, login, true);
      dispatch(action);
    }
    else if (response.data.resultCode === 2) {
      let action = setUserDataAC(DEFAULT_USER_ID);
      dispatch(action);
    }
    return response;
  }
}

export const signIn = (email, password, rememberMe = null)  => {
   return async (dispatch) => {
     let response = await authAPI.signIn(email, password, rememberMe);
     if (response.data.resultCode === 0) {
       let action = authMe();
       dispatch(action);
     }
     else {
       let action = authMe();
       dispatch(action);
       action = stopSubmit("authorization", {_error: response.data.messages[0]});
       dispatch(action);
     }
     return response;
   }  
}

export const signUp = ()  => {
  return (dispatch) => {}  
}

export const logOut = ()  => {
  return async (dispatch) => {
    let response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
      let action = setUserDataAC(DEFAULT_USER_ID);  
      dispatch(action);
    }
    return response;
  }  
}