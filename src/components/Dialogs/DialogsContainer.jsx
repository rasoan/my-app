import React from "react";
import Dialogs from "./Dialogs";
import {onNewMessageChange, onSendMessageClick} from "../../redux/dialogs-reducer.js";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
          dialogsData: state.dialogsPage.dialogsData,
          messages: state.dialogsPage.messages,
          newMessageBody: state.dialogsPage.newMessageBody,
         }
}

const DialogsContainer = connect(mapStateToProps, {onNewMessageChange, onSendMessageClick})(Dialogs);
export default DialogsContainer;