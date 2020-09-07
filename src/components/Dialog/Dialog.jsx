import React from "react";
import style from "./Dialog.module.scss";
import Message from "../Message";

import DialogItem from "../DialogItem";

const Dialog = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Miha" id="1" />
        <DialogItem name="Kolya" id="2" />
        <DialogItem name="Vica" id="3" />
        <DialogItem name="Tolya" id="4" />
      </div>
      <div className={style.messages}>
        <Message message="Hello world" />
        <Message message="By world" />
        <Message message="Lol" />
      </div>
    </div>
  );
};

export default Dialog;
