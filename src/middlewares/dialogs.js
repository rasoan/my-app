import {dialogsAPI} from "../api/api";
import {sendMessageCreatorAC,
    startCommunicationAC,
    getDialogsAC,
    getMessagesAC,
    startFetchingAC,
    stopFetchingAC} from '../redux/actions/creators/dialogs-creator';

export const onSendMessageClick = (newMessageBody) => {
      return (dispatch) => {
               let action = sendMessageCreatorAC(newMessageBody);
               dispatch(action);
             }
}

export const startCommunication = (userId) => {
  return async (dispatch) => {
           let response = await dialogsAPI.startCommunication(userId);
           let action = startCommunicationAC(response);
           dispatch(action);
         }
}

export const getDialogs = () => {
  return async (dispatch) => {
      let action = startFetchingAC();
      dispatch(action);
           const response = await dialogsAPI.getAllDialogs();
           action = getDialogsAC(response.data);
           dispatch(action);
      action = stopFetchingAC();
      dispatch(action);
  }
}

export const getMessages = (userId, currentPage = 1, pagesSize = 10) => {
  return async (dispatch) => {
    const response = await dialogsAPI.getMessages(userId, currentPage, pagesSize);
    const action = getMessagesAC(response.data);
    dispatch(action);
  }
}