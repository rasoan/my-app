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

const appReducer = (state = initialState, action) => {
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

export default appReducer;