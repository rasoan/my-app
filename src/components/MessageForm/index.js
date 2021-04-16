import React, {useEffect, useState} from "react";
import {getMessages, sendMessage} from "../../redux/messages-reducer";
import { connect } from "react-redux";
import MessageForm from "./MessageForm";

const MessageFormContainer = (props) => {
  const {userId, sendMessage} = props;

  const handleSendMessage = (data) => {
    console.log(data.message);
    console.log(userId);
    sendMessage(Number(userId), data.message);
  }
  // useEffect(() => {
  //   debugger
  //   console.log("перерисовался")
  // },[])
  return (<MessageForm handleSendMessage={handleSendMessage} />)
}

let mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messages.items,
        totalCount: state.dialogsPage.messages.totalCount,
    }
  )
  
  export default connect(mapStateToProps, {getMessages, sendMessage})(MessageFormContainer);