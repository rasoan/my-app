import React from "react";
import PropTypes from "prop-types";
import style from "./TextInput.module.scss";
let newPostElement = React.createRef();

const TextInput = (props) => {
  const {onPostChange, newPostText} = props;

  return <textarea onChange={() => onPostChange(newPostElement.current.value)}
                   value={newPostText}
                   ref={newPostElement}
                   className={style.TextInput}>
         </textarea>
};

TextInput.propTypes = {
  onPostChange: PropTypes.func,
  newPostText: PropTypes.string,
}

export default TextInput;