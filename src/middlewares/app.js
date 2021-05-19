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

export const toggleNavigationPanel = () => {
    return (dispatch) => {
        const action = toggleNavigationPanelAC();
        dispatch(action);
    }
}

export const openMainControlPanel = (dispatch, flag) => {
        const action = openMainControlPanelAC(flag);
        dispatch(action);
}

export const openOwnerPageControlPanel = (dispatch, flag) => {
        const action = openOwnerPageControlPanelAC(flag);
        dispatch(action);
}

export const openQuestPageControlPanel = (dispatch, flag) => {
        const action = openQuestPageControlPanelAC(flag);
        dispatch(action);
}

export const checkOwnerOrQuest = (userId) => {
    return (dispatch, getState) => {
        const isAuth = getState().auth.isAuth;
        const myId = getState().auth.myId;

        // открыть панель управления владельца страницы
        if (((userId === myId) && isAuth) || (!userId && isAuth)) {
            openOwnerPageControlPanel(dispatch, true);
        }

        // закрыть панель управления владельца страницы
        if (!isAuth || (userId && userId !== myId)) {
            openOwnerPageControlPanel(dispatch, false);
        }

        // открыть панель управления гостя страницы
        if (isAuth && (userId && userId !== myId)) {
            openQuestPageControlPanel(dispatch, true);
        }

        // закрыть панель управления гостя страницы
        if (!isAuth || (userId === myId)) {
            openQuestPageControlPanel(dispatch, false);
        }
    }
}
