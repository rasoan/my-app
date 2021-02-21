const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      break;
    case SEND_MESSAGE:
      let body = action.newMessage;
      state.messages.push({
        id: 6,
        message: body
      });
      state.newMessageBody = '';
      break;
    default:
  }
  return state;
}

export default dialogsReducer;

export let sendMessageCreator = (newMessage) => 
    ({type: SEND_MESSAGE, newMessage,});
export let updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body,});