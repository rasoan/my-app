import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let onNewMessageChange = (newMessageElement) => {
            let body = newMessageElement.current.value;
            let action = updateNewMessageBodyCreator(body);
            store.dispatch(action);
          }
        
          let onSendMessageClick = () => {
            let body = state.dialogsPage.newMessageBody;
            let action = sendMessageCreator(body);
            store.dispatch(action);
          }
          return <Dialogs state={state.dialogsPage}
                   onNewMessageChange={onNewMessageChange} 
                   onSendMessageClick={onSendMessageClick} />
          }
      }
    </StoreContext.Consumer>);
};

export default DialogsContainer;