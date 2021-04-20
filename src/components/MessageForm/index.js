import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {getMessages, sendMessage} from "../../redux/messages-reducer";
import { connect } from "react-redux";
import MessageForm from "./MessageForm";

const MessageFormContainer = (props) => {
  const {userId, sendMessage} = props;

  const handleSendMessage = (data) => {
    sendMessage(userId, data.message);
  }

  return (<MessageForm handleSendMessage={handleSendMessage} />)
}

MessageFormContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages.items,
  totalCount: state.dialogsPage.messages.totalCount,
})

const actionCreators = {
  getMessages,
  sendMessage,
}

export default connect(mapStateToProps, actionCreators)(MessageFormContainer);