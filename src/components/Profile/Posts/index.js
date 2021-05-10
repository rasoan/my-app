import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import {addPost} from '../../../redux/reducers/profile-reducer.js';
import {connect} from "react-redux";
import PostForm from "./PostForm";

const PostsContainer = (props) => {
  let {posts, addPost} = props;

  posts =  posts.map((post, i) => <Post key={post.content + i}
                                        content={post.content} 
                                        imgSrc={post.imgSrc} 
                                        countLikes={post.countLikes} />);
  
  addPost = (postData) => {
    props.addPost(postData.post);
  }
  return (
    <div>
      <h3>My posts</h3>
      {posts}
      <PostForm addPost={addPost} />
    </div>
);}

PostsContainer.propTypes = {
  posts: PropTypes.array,
  addPost: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
          posts: state.profilePage.posts,
         }
}

const actionCreators = {addPost};

export default connect(mapStateToProps, actionCreators)(PostsContainer);