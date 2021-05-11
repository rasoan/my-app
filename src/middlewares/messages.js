import {messagesAPI} from "../api/api";
import {SEND_MESSAGE,
GET_MESSAGES} from '../redux/actions/types/action-types';

import {sendMessageAC,
    getMessagesAC} from '../redux/actions/creators/messages-creator';


export const sendMessage = (userId, message) => {
      return async (dispatch) => {
        
               let response = await messagesAPI.sendMessage(userId, message);
               
               let action = sendMessageAC(response);
               dispatch(action);
             }
}

export const getMessages = (userId, currentPage = 1, pagesSize = 10) => {
  return async (dispatch) => {
    const response = await messagesAPI.getMessages(userId, currentPage, pagesSize);
    const action = getMessagesAC(response.data);
    dispatch(action);
  }
}