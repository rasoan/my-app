import React from "react";
import Messages from "../../components/Messages";
import MessageForm from "../../components/MessageForm";

const MessagesPage = (props) => {
  const {match} = props;
  
  return (<div>
             <Messages userId={match.params.userId} />
             <MessageForm userId={match.params.userId} />
           </div>)
}

export default MessagesPage;