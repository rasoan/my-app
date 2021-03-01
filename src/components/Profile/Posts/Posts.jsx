import React from "react";
import style from "./Posts.module.scss";
import Post from "./Post/Post";
import TextInput from "../../TextInput/TextInput";
import ButtonAddPost from "../../ButtonAddPost/ButtonAddPost";
import PropTypes from "prop-types";


let newPostElement = React.createRef();

const Posts = (props) => {  
  return (
    <div>
      <h3>My posts</h3>
      {props.posts.map( post => <Post content={post.content} imgSrc={post.imgSrc} countLikes={post.countLikes} /> )}
      <TextInput dispatch={props.dispatch}
                 newPostElement={newPostElement}
                 newPostText={props.newPostText} />
      <ButtonAddPost addPost={ props.addPost }/>
    </div>
  );
};


Posts.propTypes = {
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  countLikes: PropTypes.string,
};
export default Posts;
