import {dialogsAPI} from "../api/api";
import {DEFAULT_AVATAR_SRC} from "../constants/Users";
const SEND_MESSAGE = 'SEND-MESSAGE';
const START_COMMUNICATION = 'START_COMMUNICATION';
const GET_DIALOGS = 'GET_ALL_DIALOGS';
const GET_MESSAGES = 'GET_MESSAGES';
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = 'STOP_FETCHING';

let initialState = {
  messages: [],
  dialogsData: [],
  dialogs: [],
  interlocutors: [],
    isFetching: false,
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
              dialogs: [
                        ...action.dialogs.map( dialogData => {
                                                              if (!dialogData.photos.small) dialogData.photos.small = DEFAULT_AVATAR_SRC;
                                                              if (!dialogData.photos.large) dialogData.photos.large = DEFAULT_AVATAR_SRC;
                                                              return dialogData;   
                                                             }),
                       ],
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

const sendMessageCreatorAC = (newMessage) => ({type: SEND_MESSAGE, newMessage,});
const startCommunicationAC = (interlocutor) => ({type: START_COMMUNICATION, interlocutor,});
const getDialogsAC = (dialogs) => ({type: GET_DIALOGS, dialogs,});
const getMessagesAC = (messages) => ({type: GET_MESSAGES, messages,});
const startFetchingAC = () => ({ type: START_FETCHING });
const stopFetchingAC = () => ({ type: STOP_FETCHING });



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