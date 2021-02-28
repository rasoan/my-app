import React from "react";
import style from "./TextInput.module.scss";
import {updateNewPostTextActionCreator} from '../../redux/profile-reducer.js';

const TextInput = (props) => {

  let onPostChange = () => {
    props.dispatch(updateNewPostTextActionCreator(props.newPostElement.current.value));
  }
  return <textarea onChange={onPostChange}
                   value={props.newPostText}
                   ref={props.newPostElement}
                   className={style.TextInput}>
         </textarea>
};
export default TextInput;