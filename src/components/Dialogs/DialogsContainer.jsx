import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
          dialogsData: state.dialogsPage.dialogsData,
          messages: state.dialogsPage.messages,
          newMessageBody: state.dialogsPage.newMessageBody,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
           onNewMessageChange: (newMessageElement) => {
                                 let body = newMessageElement.current.value;
                                 let action = updateNewMessageBodyCreator(body);
                                 dispatch(action);
                               },
           onSendMessageClick: (newMessageBody) => {
                                 let action = sendMessageCreator(newMessageBody);
                                 dispatch(action);
                               },
         }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;