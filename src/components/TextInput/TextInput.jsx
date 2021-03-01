import React from "react";
import style from "./TextInput.module.scss";
let newPostElement = React.createRef();

const TextInput = (props) => {
  return <textarea onChange={() => props.onPostChange(newPostElement)}
                   value={props.newPostText}
                   ref={newPostElement}
                   className={style.TextInput}>
         </textarea>
};
export default TextInput;