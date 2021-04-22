import React from "react";
import PropTypes from "prop-types";
import Messages from "../../components/Messages";
import MessageForm from "../../components/MessageForm";

const MessagesPage = (props) => {
  const {match} = props;
  
  return (<div>
             <Messages userId={match.params.userId} />
             <MessageForm userId={match.params.userId} />
           </div>)
}

MessagesPage.propTypes = {
  match: PropTypes.object,
}

export default MessagesPage;