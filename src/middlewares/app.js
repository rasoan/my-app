import {
    initializeTheApplicationAC,
    openMainControlPanelAC,
    toggleNavigationPanelAC,
    openOwnerPageControlPanelAC,
    openQuestPageControlPanelAC,
    refreshRequestsAC,
} from '../redux/actions/creators/app-creator';

export const initializeTheApplication = (dispatch) => {
    const action = initializeTheApplicationAC();
    dispatch(action);
}

export const refreshRequests = (dispatch) => {
    const action = refreshRequestsAC();
    dispatch(action);
}

export const toggleNavigationPanel = (dispatch) => {
        const action = toggleNavigationPanelAC();
        dispatch(action);
}

export const openMainControlPanel = (flag) => {
    return (dispatch) => {
        const action = openMainControlPanelAC(flag);
        dispatch(action);
    }
}

export const openOwnerPageControlPanel = (flag) => {
    return (dispatch) => {
        const action = openOwnerPageControlPanelAC(flag);
        dispatch(action);
    }
}

export const openQuestPageControlPanel = (flag) => {
    return (dispatch) => {
        const action = openQuestPageControlPanelAC(flag);
        dispatch(action);
    }
}

export const checkUserOrOwner = (id) => {
    return (dispatch, getState) => {
        id = Number(id);
        const myId = getState().auth.userId;
        const isAuth = getState().auth.isAuth;

        // открыть общую панель управления
        if(isAuth) {
            const action = openMainControlPanelAC(true);
            dispatch(action);
        }
        else {
          const action = openMainControlPanelAC(false);
          dispatch(action);
        }

        // открыть панель управления владельца страницы
        if (((id === myId) && isAuth) || (!id && isAuth)) {
            const action = openOwnerPageControlPanel(true);
            dispatch(action);
        }

        // закрыть панель управления владельца страницы
        if (!isAuth || (id && id !== myId)) {
            const action = openOwnerPageControlPanel(false);
            dispatch(action);
        }

        // открыть панель управления гостя страницы
        if(isAuth && (id && id !== myId)) {
            const action = openQuestPageControlPanel(true);
            dispatch(action);
        }

        // закрыть панель управления гостя страницы



        // // если id мой и авторизован или id нет в адресной строке и авторизовн

        //
        // // если не авторизован или в адресной строке есть id и id не мой

    }
}
