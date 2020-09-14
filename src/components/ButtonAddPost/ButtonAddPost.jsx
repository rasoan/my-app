import React from "react";
import style from "./ButtonAddPost.module.scss";

const ButtonAddPost = (props) => {
  return <button onClick={ props.addPost } className={style.ButtonAddPost}>Добавить пост</button>
};


export default ButtonAddPost;
