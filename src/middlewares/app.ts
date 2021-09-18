import {
    initializeTheApplicationAC,
    openMainControlPanelAC,
    toggleNavigationPanelAC,
    openOwnerPageControlPanelAC,
    openQuestPageControlPanelAC,
    refreshRequestsAC,
} from '../redux/actions/creators/app-creator';

export const initializeTheApplication = () => {
    return (dispatch: any) => {
        const action = initializeTheApplicationAC();
        dispatch(action);
    }
}

export const refreshRequests = () => {
    return (dispatch: any) => {
        const action = refreshRequestsAC();
        dispatch(action);
    }
}

export const toggleNavigationPanel = () => {
    return (dispatch: any) => {
        const action = toggleNavigationPanelAC();
        dispatch(action);
    }
}

export const openMainControlPanel = (dispatch: any, flag: boolean) => {
        const action = openMainControlPanelAC(flag);
        dispatch(action);
}

export const openOwnerPageControlPanel = (dispatch: any, flag: boolean) => {
        const action = openOwnerPageControlPanelAC(flag);
        dispatch(action);
}

export const openQuestPageControlPanel = (dispatch: any, flag: boolean) => {
        const action = openQuestPageControlPanelAC(flag);
        dispatch(action);
}

export const checkOwnerOrQuest = (userId: number) => {
    return (dispatch: any, getState: any) => {
        const isAuth = getState().auth.isAuth;
        const myId = getState().auth.myId;
        if (!isAuth) { // не авторизован, закрыть все панели управления
            openOwnerPageControlPanel(dispatch, false);
            openQuestPageControlPanel(dispatch, false);
            return;
        }
        if ((userId === myId) || !userId) { // открыть панель управления владельца и закрыть гостя
            openOwnerPageControlPanel(dispatch, true);
            openQuestPageControlPanel(dispatch, false);

        }
        if (userId && userId !== myId) { // открыть панель управления гостя и закрыть владельца
            openOwnerPageControlPanel(dispatch, false);
            openQuestPageControlPanel(dispatch, true);
        }
    }
}






