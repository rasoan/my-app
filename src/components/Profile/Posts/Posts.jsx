import React from "react";
import Post from "./Post/Post";
import TextInput from "../../TextInput/TextInput";
import ButtonAddPost from "../../ButtonAddPost/ButtonAddPost";
import PropTypes from "prop-types";

const Posts = (props) => {  
  return (
    <div>
      <h3>My posts</h3>
      {props.posts.map( post => <Post content={post.content} imgSrc={post.imgSrc} countLikes={post.countLikes} /> )}
      <TextInput dispatch={props.dispatch}
                 newPostText={props.newPostText} 
                 onPostChange={props.onPostChange} />
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
