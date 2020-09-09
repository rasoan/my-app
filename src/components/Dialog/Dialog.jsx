import React from "react";
import style from "./Dialog.module.scss";
import Message from "../Message";

import DialogItem from "../DialogItem";

const Dialog = (props) => {
  const dialogsData = props.dialogsData.map((element) => (
    <DialogItem name={element.name} id={element.id} />
  ));

  const messagesData = props.messagesData.map((element) => (
    <Message message={element.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsData}</div>
      <div className={style.messages}>{messagesData}</div>
    </div>
  );
};

export default Dialog;
