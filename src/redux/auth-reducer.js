import {authAPI} from "../api/api";
import {SIGN_IN_IMG, SIGN_UP_IMG, LOG_OUT_IMG} from "../constants/Authorization";
const SET_USER_DATA = "SET_USER_DATA";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const LOG_OUT = "LOG_OUT";

let initialState = {
  userId: null,
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
              isAuth: true,
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
                console.log("правильный пароль, вы залогинились!")
                
              }
              else {
                console.log("неверный пароль!")
              }
              authAPI.getAuthMe()
                     .then(response => {
                       if (response.data.resultCode === 0) {
                         let {id, email, login} = response.data.data; 
                         dispatch(setUserData(id, email, login));
                         //window.location.href = '/Profile'; // этот код надо как-то переделать, костыль
                       }
                     });
            })
   }  
}

export const signUp = ()  => {
  return (dispatch) => {
    // authAPI.signUp()
    //        .then(response => {

    //        });
  }  
}

export const logOut = ()  => {
  return (dispatch) => {
    authAPI.logOut()
           .then(response => {
             console.log(response.resultCode);
             dispatch(logOutAC(false));
           });
  }  
}