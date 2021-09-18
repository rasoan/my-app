import {GET_MESSAGES, SEND_MESSAGE} from "../types/action-types";

export type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessage: any
}
export const sendMessageAC = (newMessage: any): SendMessageACType => ({type: SEND_MESSAGE, newMessage,});

export type GetMessagesACType = {
    type: typeof GET_MESSAGES
    messages: any
}
export const getMessagesAC = (messages: any): GetMessagesACType => ({type: GET_MESSAGES, messages,});