import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users;
});
export const getPagesSize = (state) => {
  return state.usersPage.pagesSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPagestate = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}

export const getIsFetchingFollowOrUnfollowIdList = (state) => {
  return state.usersPage.isFetchingFollowOrUnfollowIdList;
}

export const getIsAuth = (state) => {
  return state.auth.isAuth;
}

export const getDefaultAvatarSrc = (state) => {
  return state.usersPage.defaultAvatarSrc;
}