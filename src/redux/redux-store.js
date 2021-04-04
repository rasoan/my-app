import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import app from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  appPage: app,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;