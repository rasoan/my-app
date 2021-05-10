export const getMessagesSelector = (state) => {
    return state.messagesPage.messages;
}

export const getTotalCountSelector = (state) => {
    return state.messagesPage.totalCount;
}

export const getErrorSelector = (state) => {
    return state.messagesPage.error;
}