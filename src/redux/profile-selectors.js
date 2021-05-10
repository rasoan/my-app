export const getPostsSelector = (state) => {
    return state.profilePage.posts;
}

export const getProfileSelector = (state) => {
    return state.profilePage.profile;
}

export  const  getIsFetchingSelector = (state) => {
    return state.profilePage.isFetching;
}

export const getDefaultStatusText = (state) => {
    return state.profilePage.defaultStatusText;
}

export const getStatusText = (state) => {
    return state.profilePage.statusText;
}