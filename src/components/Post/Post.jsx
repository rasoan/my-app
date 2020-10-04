import React from "react";
import style from "./Post.module.scss";
import PropTypes from "prop-types";



const Post = (props) => {
  return (
    <div className={style.PostContainer}>
      <div className={style.PostContentImg}>
        <img
          className={style.image}
          width="50"
          height="50"
          src={props.imgSrc}
        ></img>
        <p>{props.content}</p>
      </div>
      <p className={style.PostCountLikes}>{props.countLikes}</p>
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  countLikes: PropTypes.string.isRequired,
};

export default Post;
