import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onNewMessageChange = (newMessageElement) => {
    let body = newMessageElement.current.value;
    let action = updateNewMessageBodyCreator(body);
    props.store.dispatch(action);
  }

  let onSendMessageClick = () => {
    let body = state.dialogsPage.newMessageBody;
    let action = sendMessageCreator(body);
    props.store.dispatch(action);
  }

  return (<Dialogs state={state.dialogsPage}
                   onNewMessageChange={onNewMessageChange} 
                   onSendMessageClick={onSendMessageClick} />);
};

export default DialogsContainer;