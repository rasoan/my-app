import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {getMessages} from "../../redux/messages-reducer";
import { connect } from "react-redux";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  const {userId, messages, totalCount, getMessages} = props;
  useEffect(() => {
    getMessages(userId);
  },[userId, getMessages]);
  
  return (<Messages messages={messages}
                    totalCount={totalCount} />)
}

MessagesContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  getMessages: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  messages: state.messagesPage.messages,
  totalCount: state.messagesPage.totalCount,
});

const actionCreators = {getMessages,};
  
export default connect(mapStateToProps, actionCreators)(MessagesContainer);