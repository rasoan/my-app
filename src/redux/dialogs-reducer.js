const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
             {
              id: "1",
              message: "Hello my friend"
             },
  ],
  dialogsData: [
                {
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
      return { 
              ...state,
              newMessageBody: action.body,
             };
    case SEND_MESSAGE:
      return {
              ...state,
              messages: [...state.messages, {id: 6, message: action.newMessage}],
              newMessageBody: "",
             };
    default:
      return state;
  }
}

export default dialogsReducer;

export let sendMessageCreator = (newMessage) => 
    ({type: SEND_MESSAGE, newMessage,});
export let updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body,});


export const onSendMessageClick = (newMessageBody) => {
      return (dispatch) => {
              let action = sendMessageCreator(newMessageBody);
              dispatch(action);
             }
}

export const onNewMessageChange = (newMessageElement) => {
  return (dispatch) => {
           let action = updateNewMessageBodyCreator(newMessageElement);
           dispatch(action);
         }
}