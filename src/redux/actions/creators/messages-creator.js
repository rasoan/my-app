import {GET_MESSAGES, SEND_MESSAGE} from "../types/action-types";

export const sendMessageAC = (newMessage) => ({type: SEND_MESSAGE, newMessage,});
export const getMessagesAC = (messages) => ({type: GET_MESSAGES, messages,});