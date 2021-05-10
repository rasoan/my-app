export const getMessagesSelector = (state) => {
  return state.dialogsPage.messages;
}

export const getDialogsDataSelector = (state) => {
  return state.dialogsPage.dialogsData;
}

export const getDialogsSelector = (state) => {
  return state.dialogsPage.dialogs;
}

export const getInerlocutorsSelector = (state) => {
  return state.dialogsPage.interlocutors;
}

export const getIsFetchingSelector = (state) => {
  return state.dialogsPage.isFetching;
}