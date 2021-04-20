import React from "react";
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

//const PostFormRedux = reduxForm({form: 'profile'},)(PostForm);

const Posts = (props) => {
  let posts = props
             .posts
             .map(post => <Post content={post.content} 
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


// Posts.propTypes = {
//   content: PropTypes.string,
//   imgSrc: PropTypes.string,
//   countLikes: PropTypes.string,
// };
export default Posts;