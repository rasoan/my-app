import React, {useEffect, useState} from "react";
import {getMessages} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  const {userId, messages, totalCount, getMessages} = props;

  useEffect(() => {
    console.log("Получить сообщения с ", userId);
    getMessages(userId)
  },[]);
  
  return (<Messages messages={messages}
                    totalCount={totalCount} />)
}

let mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messages.items,
        totalCount: state.dialogsPage.messages.totalCount,
    }
  )
  
  export default connect(mapStateToProps, {getMessages})(MessagesContainer);