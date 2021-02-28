const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [{
      id: "1",
      message: "Hello my friend"
  }],
  dialogsData: [{
          id: "1",
          name: "Miha"
      },
      {
          id: "2",
          name: "Kostya"
      },
      {
          id: "3",
          name: "Vika"
      },
      {
          id: "4",
          name: "Tola"
      },
      {
          id: "5",
          name: "Mola"
      },
      {
          id: "6",
          name: "Natasha"
      },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
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