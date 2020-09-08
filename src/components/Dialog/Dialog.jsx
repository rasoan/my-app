import React from "react";
import style from "./Dialog.module.scss";
import Message from "../Message";

import DialogItem from "../DialogItem";

const Dialog = () => {
  const dialogsData = [
    { id: "1", name: "Miha" },
    { id: "2", name: "Kostya" },
    { id: "3", name: "Vika" },
    { id: "4", name: "Tola" },
    { id: "5", name: "Mola" },
    { id: "6", name: "Natasha" },
  ];

  const messagesData = [
    { id: "1", message: "Hello my friend" },
    { id: "2", message: "By my friend" },
    { id: "3", message: "Hello world" },
    { id: "4", message: "Good bye" },
    { id: "5", message: "ou sheet!" },
  ];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsData.map((element) => (
          <DialogItem name={element.name} id={element.id} />
        ))}
      </div>
      <div className={style.messages}>
        {messagesData.map((element) => (
          <Message message={element.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialog;
