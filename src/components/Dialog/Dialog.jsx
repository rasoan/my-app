import React from "react";
import style from "./Dialog.module.scss";
import Message from "../Message";

import DialogItem from "../DialogItem";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";

let newMessageElement = React.createRef();

const Dialog = (props) => {
  let messagesData= props.state.dialogsPage.messages; 
  let dialogsData= props.state.dialogsPage.dialogsData;
  let newMessageBody = props.state.dialogsPage.newMessageBody; 


  dialogsData = dialogsData.map((element) => (
    <DialogItem name={element.name} id={element.id} />
  ));
  messagesData = messagesData.map((element) => (
    <Message message={element.message} />
  ));
  
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator(newMessageElement.current.value));
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  }
  
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsData}</div>
      <div className={style.messages}>
        <div>{messagesData}</div>
        <div>
          <div><textarea value={newMessageBody}
                         onChange={ onNewMessageChange } 
                         placeholder='Enter you message'
                         ref={newMessageElement}></textarea></div>
          <div><button onClick={ onSendMessageClick }>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
