import {messagesAPI} from "../../api/api";
import {SEND_MESSAGE,
GET_MESSAGES} from '../actions/types/action-types';

import {sendMessageAC,
    getMessagesAC} from '../actions/creators/messages-creator';

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


export default messagesReducer;