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
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
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

export let sendMessageCreatorAC = (newMessage) => 
      ({type: SEND_MESSAGE, newMessage,});

export const onSendMessageClick = (newMessageBody) => {
      return (dispatch) => {
               let action = sendMessageCreatorAC(newMessageBody);
               dispatch(action);
             }
}