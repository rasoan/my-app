 import {openControlPanelAC,
     closeControlPanelAC,
     refreshRequestsAC,
     toggleNavAC, initializeTheApplicationAC} from '../redux/actions/creators/app-creator';

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
        if (id && id === myId) { // есть в адресной строке id и он мой ОТКРЫТЬ
            const action = openControlPanelAC();
            dispatch(action);
        } else if (id) { // есть в адресной строке id и он не мой СКРЫТЬ
            const action = closeControlPanelAC();
            dispatch(action);
        } else if (isAuth) { // если я авторизован и адресная строка пустая ОТКРЫТЬ
            const action = openControlPanelAC();
            dispatch(action);
        } else if (!isAuth) { // иначе если я не авторизован и адресная строка пустая СКРЫТЬ
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