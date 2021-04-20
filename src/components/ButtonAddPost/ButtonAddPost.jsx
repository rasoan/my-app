import React from "react";
import PropTypes from "prop-types";
import style from "./ButtonAddPost.module.scss";

const ButtonAddPost = (props) => {
  const {addPost} = props;
  return (<button onClick={addPost} className={style.ButtonAddPost}>
            Добавить пост
          </button>);
};

ButtonAddPost.prototypes = {addPost: PropTypes.func.isRequired,}

export default ButtonAddPost;