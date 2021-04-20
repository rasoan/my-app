import React from "react";
import PropTypes from "prop-types";

const Messages = (props) => {
  const {messages, totalCount} = props;
  const messagesElement = messages.map(message => <span>{message}</span>);
  
  return (<div>
            {messagesElement}
            <span>Всего сообщений: </span><b>{totalCount}</b>
          </div>);
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
}

export default Messages;
