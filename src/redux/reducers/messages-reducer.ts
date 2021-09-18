import {SEND_MESSAGE,
GET_MESSAGES} from '../actions/types/action-types';

const initialState = {
  messages: [],
  totalCount: 0,
  error: false
}

export type initialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
              ...state,
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

export default messagesReducer