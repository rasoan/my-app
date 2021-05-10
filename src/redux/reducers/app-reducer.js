 import {INITIALIZE_THE_APPLICATION,
 OPEN_CONTROL_PANEL,
 CLOSE_CONTROL_PANEL,
 REFRESH_REQUEST,
 TOGGLE_NAV} from '../actions/types/action-types';

let initialState = {
    initializeTheApplication: false,
    controlPanels: false,
    refreshRequests: false,
    navigationPanelVisibility: false,
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_THE_APPLICATION:
            return {
                ...state,
                initializeTheApplication: action.initializeTheApplication,
            }
        case OPEN_CONTROL_PANEL:

            return {
                ...state,
                controlPanels: true,
            }
        case CLOSE_CONTROL_PANEL:
            return {
                ...state,
                controlPanels: false,
            }
        case REFRESH_REQUEST:
            return {
                ...state,
                refreshRequests: !(state.refreshRequests),
            }
        case TOGGLE_NAV:
            return {
                ...state,
                navigationPanelVisibility: !(state.navigationPanelVisibility),
            }
        default:
            return state;
    }
}

export let initializeTheApplicationAC = (initializeTheApplication) => {
    return {
        type: INITIALIZE_THE_APPLICATION,
        initializeTheApplication,
    }
}

const openControlPanelAC = () => ({type: OPEN_CONTROL_PANEL});
const closeControlPanelAC = () => ({type: CLOSE_CONTROL_PANEL});
const refreshRequestsAC = () => ({type: REFRESH_REQUEST});
const toggleNavAC = () => ({type: TOGGLE_NAV});

export const initializeTheApplication = (initializeTheApplication) => {
    return (dispatch) => {
        dispatch(initializeTheApplicationAC(initializeTheApplication));
    }
}

export const openControlPanel = () => {
    return (dispatch) => {

        let action = openControlPanelAC();
        dispatch(action);
    }
}

export const closeControlPanel = () => {
    return (dispatch) => {

        let action = closeControlPanelAC();
        dispatch(action);
    }
}

export const checkUserOrOwner = (id) => {
    return (dispatch, getState) => {
        id = Number(id);
        const myId = getState().auth.userId;
        const isAuth = getState().auth.isAuth;
        if (id && id === myId) { // есть в адресной строке id и он мой ОТКРЫТЬ
            let action = openControlPanelAC();
            dispatch(action);
        } else if (id) { // есть в адресной строке id и он не мой СКРЫТЬ
            let action = closeControlPanelAC();
            dispatch(action);
        } else if (isAuth) { // если я авторизован и адресная строка пустая ОТКРЫТЬ
            let action = openControlPanelAC();
            dispatch(action);
        } else if (!isAuth) { // иначе если я не авторизован и адресная строка пустая СКРЫТЬ
            let action = closeControlPanelAC();
            dispatch(action);
        }
    }
}

export const refreshRequests = () => {
    return (dispatch) => {
        const action = refreshRequestsAC();
        dispatch(action);
    }
}

export const toggleNav = () => {
    return (dispatch) => {
        const action = toggleNavAC();
        dispatch(action);
    }
}

export default app;