import React from "react";
import style from "./DialogueInformation.module.scss";

const DialogueInformation = ({header, info}) => {

    return (<div className={style.container}>
             <span className={style.header}>{header} </span> <span className={style.information}>{info || 0}</span>
           </div>)
}

export default DialogueInformation;