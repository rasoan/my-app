import React from "react";
import Posts from "./Posts";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer.js';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
          newPostText: state.profilePage.newPostText,
          posts: state.profilePage.posts,
         }
}

let mapDispatchToProps = (dispatch) => {
  return {
          onPostChange: (newPostElement) => {
                          let body = newPostElement.current.value;
                          let action = updateNewPostTextActionCreator(body);
                          dispatch(action);
                        },
          addPost: (newPostText) => {
            
                     let action = addPostActionCreator(newPostText);
                     dispatch(action);
                   },
          }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
