import {messagesAPI} from "../../api/api";
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';

let initialState = {
  messages: [],
  totalCount: null,
  error: null,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
              ...state,
              // messages: [...state.messages, {id: 6, message: action.newMessage}],
              // newMessageBody: "",
             };
    case GET_MESSAGES:
      return {
              ...state,
              messages: action.messages.items,
              totalCount: action.messages.totalCount,
             }
    default:
      return state;
  }
}

const sendMessageAC = (newMessage) => ({type: SEND_MESSAGE, newMessage,});
const getMessagesAC = (messages) => ({type: GET_MESSAGES, messages,});

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

export default messagesReducer;