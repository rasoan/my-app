import React from "react";
import style from "./TextInput.module.scss";



const TextInput = (props) => {

  let onPostChange = () => {
    props.updateNewPostText(props.newPostElement.current.value);
  }
  
  return <textarea onChange={onPostChange} value={props.newPostText} ref={props.newPostElement} className={style.TextInput}></textarea>
};


export default TextInput;
