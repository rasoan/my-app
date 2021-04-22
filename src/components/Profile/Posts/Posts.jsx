import React from "react";
import PropTypes from "prop-types";

import Post from "./Post/Post";
import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const {addPost} = props;

  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(addPost)}>
      <div>
        <textarea placeholder="Введите ваше пост"
                  {...register("post")} />
      </div>
      <button>Отправить сообщение</button>
    </form>
  );
};

const Posts = (props) => {
  let {posts} = props;

  posts =  posts.map((post, i) => <Post key={post.content + i}
                                   content={post.content} 
                                   imgSrc={post.imgSrc} 
                                   countLikes={post.countLikes} />);
  
  let addPost = (postData) => {
    props.addPost(postData.post);
  }
  return (
    <div>
      <h3>My posts</h3>
      {posts}
      <PostForm addPost={addPost} />
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func,
}

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;