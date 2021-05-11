import {dialogsAPI} from "../../api/api";
import {DEFAULT_AVATAR_SRC} from "../../constants/Users";
import {SEND_MESSAGE,
START_COMMUNICATION,
GET_DIALOGS,
GET_MESSAGES,
START_FETCHING,
STOP_FETCHING} from '../actions/types/action-types';
import {sendMessageCreatorAC,
    startCommunicationAC,
    getDialogsAC,
    getMessagesAC,
    startFetchingAC,
    stopFetchingAC} from '../actions/creators/dialogs-creator';

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