 import {openControlPanelAC,
     closeControlPanelAC,
     refreshRequestsAC,
     toggleNavAC, initializeTheApplicationAC} from '../redux/actions/creators/app-creator';
 import {
     CLOSE_CONTROL_PANEL,
     INITIALIZE_THE_APPLICATION,
     OPEN_CONTROL_PANEL,
     REFRESH_REQUEST, TOGGLE_NAV
 } from "../redux/actions/types/action-types";

export const initializeTheApplication = (initializeTheApplication) => {
    return (dispatch) => {
        const action = initializeTheApplicationAC(initializeTheApplication);
        dispatch(action);
    }
}

export const openControlPanel = () => {
    return (dispatch) => {
        const action = openControlPanelAC();
        dispatch(action);
    }
}

export const closeControlPanel = () => {
    return (dispatch) => {
        const action = closeControlPanelAC();
        dispatch(action);
    }
}

export const checkUserOrOwner = (id) => {
    return (dispatch, getState) => {
        id = Number(id);
        const myId = getState().auth.userId;
        const isAuth = getState().auth.isAuth;

        // если id мой и авторизован или id нет в адресной строке и авторизовн
        if (((id === myId) && isAuth) || (!id && isAuth)) {
            const action = openControlPanelAC();
            dispatch(action);
        }
// если не авторизован или в адресной строке есть id и id не мой
        if( !isAuth || (id && id != myId)) {
            const action = closeControlPanelAC();
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