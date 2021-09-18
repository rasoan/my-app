import {
    INITIALIZE_THE_APPLICATION,
    REFRESH_REQUEST,
    OPEN_MAIN_CONTROL_PANEL,
    OPEN_OWNER_PAGE_CONTROL_PANEL,
    OPEN_QUEST_PAGE_CONTROL_PANEL, TOGGLE_NAVIGATION_PANEL
} from "../types/action-types";

export type initializeTheApplicationType = { type: typeof INITIALIZE_THE_APPLICATION }
export const initializeTheApplicationAC = (): initializeTheApplicationType => ({type: INITIALIZE_THE_APPLICATION});

export type refreshRequestsType = { type: typeof REFRESH_REQUEST }
export const refreshRequestsAC = (): refreshRequestsType => ({type: REFRESH_REQUEST})

export type toggleNavigationPanelType = {type: typeof TOGGLE_NAVIGATION_PANEL}
export const toggleNavigationPanelAC = (): toggleNavigationPanelType => ({type: TOGGLE_NAVIGATION_PANEL})

export type openMainControlPanelType = {type: typeof OPEN_MAIN_CONTROL_PANEL, flag: boolean}
export const openMainControlPanelAC = (flag: boolean): openMainControlPanelType => ({type: OPEN_MAIN_CONTROL_PANEL, flag})

export type openOwnerPageControlPanelType = {type: typeof OPEN_OWNER_PAGE_CONTROL_PANEL, flag: boolean}
export const openOwnerPageControlPanelAC = (flag: boolean): openOwnerPageControlPanelType => ({type: OPEN_OWNER_PAGE_CONTROL_PANEL, flag})

export type openQuestPageControlPanelType = {type: typeof OPEN_QUEST_PAGE_CONTROL_PANEL, flag: boolean}
export const openQuestPageControlPanelAC = (flag: boolean): openQuestPageControlPanelType => ({type: OPEN_QUEST_PAGE_CONTROL_PANEL, flag})

