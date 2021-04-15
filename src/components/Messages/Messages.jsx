import React from "react";
import style from "./Messages.module.scss";
import PropTypes from "prop-types";

const Messages = (props) => {
  const {messages, totalCount} = props;
  const messagesElement = messages.map(message => <span>{message}</span>);
  
  return (<div>
            {messagesElement}
            <span>Всего сообщений: </span><b>{totalCount}</b>
          </div>);
};

// Messages.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Messages;
