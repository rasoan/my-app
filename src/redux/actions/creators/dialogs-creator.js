import {
    GET_DIALOGS,
    GET_MESSAGES,
    SEND_MESSAGE,
    START_COMMUNICATION,
    START_FETCHING,
    STOP_FETCHING
} from "../types/action-types";

export const sendMessageAC = (newMessage) => ({type: SEND_MESSAGE, newMessage,});
export const startCommunicationAC = (interlocutor) => ({type: START_COMMUNICATION, interlocutor,});
export const getDialogsAC = (dialogs) => ({type: GET_DIALOGS, dialogs,});
export const getMessagesAC = (messages) => ({type: GET_MESSAGES, messages,});
export const startFetchingAC = () => ({ type: START_FETCHING });
export const stopFetchingAC = () => ({ type: STOP_FETCHING });