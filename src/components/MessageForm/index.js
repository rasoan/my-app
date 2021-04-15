import React, {useEffect, useState} from "react";
import {getMessages} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import MessageForm from "./MessageForm";

const MessageFormContainer = (props) => {
  const {userId} = props;

  const sendMessage = (data) => {
    console.log(data);
    console.log(userId);
  }
  
  return (<MessageForm handleSendMessage={sendMessage} />)
}

let mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messages.items,
        totalCount: state.dialogsPage.messages.totalCount,
    }
  )
  
  export default connect(mapStateToProps, {getMessages})(MessageFormContainer);