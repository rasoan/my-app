import React from "react";
import Posts from "./Posts";
import {onPostChange, addPost} from '../../../redux/profile-reducer.js';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
          newPostText: state.profilePage.newPostText,
          posts: state.profilePage.posts,
         }
}

const PostsContainer = connect(mapStateToProps, {onPostChange, addPost})(Posts);
export default PostsContainer;
