import {
    INITIALIZE_THE_APPLICATION,
    REFRESH_REQUEST,
    TOGGLE_NAVIGATION_PANEL,
    OPEN_MAIN_CONTROL_PANEL,
    OPEN_OWNER_PAGE_CONTROL_PANEL,
    OPEN_QUEST_PAGE_CONTROL_PANEL
} from '../actions/types/action-types';

let initialState = {
    initializeTheApplication: false,
    refreshRequests: false,
    navigationPanel: false,
    mainControlPanel: false,
    questPageControlPanel: false,
    ownerPageControlPanel: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_THE_APPLICATION:
            return {
                ...state,
                initializeTheApplication: true,
            }
        case REFRESH_REQUEST:
            return {
                ...state,
                refreshRequests: !(state.refreshRequests),
            }
        case TOGGLE_NAVIGATION_PANEL:
            return {
                ...state,
                navigationPanel: !(state.navigationPanel),
            }
        case OPEN_MAIN_CONTROL_PANEL:
            return {
                ...state,
                mainControlPanel: action.flag,
            }
        case OPEN_QUEST_PAGE_CONTROL_PANEL:
            return {
                ...state,
                questPageControlPanel: action.flag,
            }
        case OPEN_OWNER_PAGE_CONTROL_PANEL:
            return {
                ...state,
                ownerPageControlPanel: action.flag,
            }
        default:
            return state;
    }
}
export default appReducer;