import {combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import messagesReducer from "./reducers/messages-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import app from "./reducers/app-reducer";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: app,
});

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U: never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.store = store;
export default store;