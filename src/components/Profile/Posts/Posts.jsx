import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {TextareaDefault} from "../../common/FormsControls/FormControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Введите ваше пост"}
               name={"post"}
               component={TextareaDefault} 
               validate={[required, maxLength10]} />
      </div>
      <button>Отправить сообщение</button>
    </form>
  );
};

const PostFormRedux = reduxForm({form: 'profile'},)(PostForm);

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
      <PostFormRedux onSubmit={addPost} />
    </div>
  );
};


// Posts.propTypes = {
//   content: PropTypes.string,
//   imgSrc: PropTypes.string,
//   countLikes: PropTypes.string,
// };
export default Posts;
