import React from "react";
import style from "./Dialogs.module.scss";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
let newMessageElement = React.createRef();

const Dialogs = (props) => {
  let dialogsData= props.dialogsData;
  
  dialogsData = dialogsData.map((element) => (
    <DialogItem name={element.name} id={element.id} />
  ));

  let messagesData= props.messages; 
  messagesData = messagesData.map((element) => (
    <Message message={element.message} />
  ));
  
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsData}</div>
      <div className={style.messages}>
        <div>{messagesData}</div>
        <div>
          <div className="textarea">
            <textarea value={props.newMessageBody}
                         onChange={() => props.onNewMessageChange(newMessageElement.current.value)} 
                         placeholder='Enter you message'
                         ref={newMessageElement}>
            </textarea>
          </div>
          <div><button onClick={() => props.onSendMessageClick(props.newMessageBody)}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;