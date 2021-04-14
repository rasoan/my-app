import {dialogsAPI} from "../api/api";
const SEND_MESSAGE = 'SEND-MESSAGE';
const START_COMMUNICATION = 'START_COMMUNICATION';
const GET_DIALOGS = 'GET_ALL_DIALOGS';

let initialState = {
  messages: [],
  dialogsData: [],
  dialogs: [],
  interlocutors: [],
};

const dialogsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
}

export default dialogsReducer;

const sendMessageCreatorAC = (newMessage) => ({type: SEND_MESSAGE, newMessage,});
const startCommunicationAC = (interlocutor) => ({type: START_COMMUNICATION, interlocutor,});
const getDialogsAC = (dialogs) => ({type: GET_DIALOGS, dialogs,});


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
           const response = await dialogsAPI.getAllDialogs();
           let action = getDialogsAC(response.data);
           dispatch(action);
  }
}