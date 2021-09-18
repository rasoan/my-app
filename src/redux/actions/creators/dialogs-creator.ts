import {
    GET_DIALOGS,
    GET_MESSAGES,
    SEND_MESSAGE,
    START_COMMUNICATION,
    START_FETCHING,
    STOP_FETCHING
} from "../types/action-types";

export type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessage: any
}
export const sendMessageAC = (newMessage: string): SendMessageACType => ({type: SEND_MESSAGE, newMessage,});

export type StartCommunicationACType = {
    type: typeof START_COMMUNICATION
    interlocutor: any
}
export const startCommunicationAC = (interlocutor: any): StartCommunicationACType => ({type: START_COMMUNICATION, interlocutor,})

export type GetDialogsACType = {
    type: typeof GET_DIALOGS
    dialogs: any
}
export const getDialogsAC = (dialogs: any): GetDialogsACType => ({type: GET_DIALOGS, dialogs,})

export type GetMessagesACType = {
    type: typeof GET_MESSAGES
    messages: any
}
export const getMessagesAC = (messages: any): GetMessagesACType => ({type: GET_MESSAGES, messages})

export type StartFetchingACType = {
    type: typeof START_FETCHING
}
export const startFetchingAC = (): StartFetchingACType => ({ type: START_FETCHING })

export type StopFetchingACType = {
    type: typeof STOP_FETCHING
}
export const stopFetchingAC = (): StopFetchingACType => ({ type: STOP_FETCHING })

