const INITIALIZE_THE_APPLICATION = "INITIALIZE_THE_APPLICATION";
const OPEN_CONTROL_PANEL = "OPEN_CONTROL_PANEL";
const CLOSE_CONTROL_PANEL = "CLOSE_CONTROL_PANEL";
const REFRESH_REQUEST = "REFRESH_REQUESTS";

let initialState = {
    initializeTheApplication: false,
    controlPanels: false,
    refreshRequests: false,
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

export default app;