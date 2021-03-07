import React from "react";
import TextInput from "../../TextInput/TextInput";
import ButtonAddPost from "../../ButtonAddPost/ButtonAddPost";
import Post from "./Post/Post";
//import PropTypes from "prop-types";

const Posts = (props) => {

  let posts = props
             .posts
             .map(post => <Post content={post.content} 
                                 imgSrc={post.imgSrc} 
                                 countLikes={post.countLikes} />);
  return (
    <div>
      <h3>My posts</h3>
      {posts}
      <TextInput newPostText={props.newPostText} 
                 onPostChange={props.onPostChange} />
      <ButtonAddPost addPost={() => props.addPost(props.newPostText)} />
    </div>
  );
};


// Posts.propTypes = {
//   content: PropTypes.string,
//   imgSrc: PropTypes.string,
//   countLikes: PropTypes.string,
// };
export default Posts;
