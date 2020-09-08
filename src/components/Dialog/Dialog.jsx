import React from "react";
import style from "./Dialog.module.scss";
import Message from "../Message";

import DialogItem from "../DialogItem";

const Dialog = () => {
  const dialogsData = [
    {id: '1', name: 'Miha'},
    {id: '2', name: 'Kostya'},
    {id: '3', name: 'Vika'},
    {id: '4', name: 'Tola'},
    {id: '5', name: 'Mola'},
    {id: '6', name: 'Natasha'},
  ]

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Miha" id="1" />
        <DialogItem name="Kolya" id="2" />
        <DialogItem name="Vica" id="3" />
        <DialogItem name="Tolya" id="4" />
      </div>
      <div className={style.messages}>
        {dialogsData.map( element => <Message name={element.name} id={element.id}/>)}
      </div>
    </div>
  );
};

export default Dialog;
