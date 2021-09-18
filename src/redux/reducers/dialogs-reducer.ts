import {
    SEND_MESSAGE,
    START_COMMUNICATION,
    GET_DIALOGS,
    GET_MESSAGES,
    START_FETCHING,
    STOP_FETCHING
} from '../actions/types/action-types';
import {messageType} from "../../types/types";

let initialState = {
    messages: [] as Array<messageType>,
    dialogsData: [],
    dialogs: [],
    interlocutors: [] as Array<any>,
    isFetching: false,
    newMessageBody: ""
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}],
                newMessageBody: "",
            };
        case START_COMMUNICATION:
            return {
                ...state,
                interlocutors: [...state.interlocutors, action.interlocutor],
            }
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs,
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default dialogsReducer;