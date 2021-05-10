export const getInitializeTheApplicationSelector = (state) => {
    return state.app.initializeTheApplication;
}

export const getContolPanelsSelector = (state) => {
    return state.app.controlPanels;
}

export const getRefreshRequestsSelector = (state) => {
    return state.app.refreshRequests;
}

export const getNavigationPanelVisibilitySelector = (state) => {
    return state.app.navigationPanelVisibility;
}