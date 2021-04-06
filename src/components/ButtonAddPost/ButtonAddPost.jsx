import React from "react";
import style from "./ButtonAddPost.module.scss";

const ButtonAddPost = ({addPost}) => {
  return <button onClick={addPost} className={style.ButtonAddPost}>Добавить пост</button>
};

export default ButtonAddPost;
