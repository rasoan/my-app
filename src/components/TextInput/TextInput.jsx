import React from "react";
import style from "./TextInput.module.scss";

const TextInput = (props) => {
  return <textarea ref={props.newPostElement} className={style.TextInput}></textarea>
};


export default TextInput;
