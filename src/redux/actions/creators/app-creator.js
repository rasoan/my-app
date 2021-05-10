import {
    CLOSE_CONTROL_PANEL,
    INITIALIZE_THE_APPLICATION,
    OPEN_CONTROL_PANEL,
    REFRESH_REQUEST, TOGGLE_NAV
} from "../types/action-types";

export let initializeTheApplicationAC = (initializeTheApplication) => {
    return {
        type: INITIALIZE_THE_APPLICATION,
        initializeTheApplication,
    }
}

export const openControlPanelAC = () => ({type: OPEN_CONTROL_PANEL});
export const closeControlPanelAC = () => ({type: CLOSE_CONTROL_PANEL});
export const refreshRequestsAC = () => ({type: REFRESH_REQUEST});
export const toggleNavAC = () => ({type: TOGGLE_NAV});