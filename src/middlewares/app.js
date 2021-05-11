 import {INITIALIZE_THE_APPLICATION,
 OPEN_CONTROL_PANEL,
 CLOSE_CONTROL_PANEL,
 REFRESH_REQUEST,
 TOGGLE_NAV} from '../redux/actions/types/action-types';
 import {openControlPanelAC,
     closeControlPanelAC,
     refreshRequestsAC,
     toggleNavAC} from '../redux/actions/creators/app-creator';


export let initializeTheApplicationAC = (initializeTheApplication) => {
    return {
        type: INITIALIZE_THE_APPLICATION,
        initializeTheApplication,
    }
}




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