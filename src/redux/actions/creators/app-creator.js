import {
    INITIALIZE_THE_APPLICATION,
    REFRESH_REQUEST,
    OPEN_MAIN_CONTROL_PANEL,
    OPEN_OWNER_PAGE_CONTROL_PANEL,
    OPEN_QUEST_PAGE_CONTROL_PANEL, TOGGLE_NAVIGATION_PANEL
} from "../types/action-types";

export const initializeTheApplicationAC = () => ({type: INITIALIZE_THE_APPLICATION});
export const refreshRequestsAC = () => ({type: REFRESH_REQUEST});
export const toggleNavigationPanelAC = () => ({type: TOGGLE_NAVIGATION_PANEL});
export const openMainControlPanelAC = (flag) => ({type: OPEN_MAIN_CONTROL_PANEL, flag});
export const openOwnerPageControlPanelAC = (flag) => ({type: OPEN_OWNER_PAGE_CONTROL_PANEL, flag});
export const openQuestPageControlPanelAC = (flag) => ({type: OPEN_QUEST_PAGE_CONTROL_PANEL, flag});
