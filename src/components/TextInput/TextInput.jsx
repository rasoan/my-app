import React from "react";
import style from "./TextInput.module.scss";
let newPostElement = React.createRef();

const TextInput = ({onPostChange, newPostText}) => {

  return <textarea onChange={() => onPostChange(newPostElement.current.value)}
                   value={newPostText}
                   ref={newPostElement}
                   className={style.TextInput}>
         </textarea>
};
export default TextInput;