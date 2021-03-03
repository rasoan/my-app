import React from "react";
import Posts from "./Posts";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer.js';

const PostsContainer = (props) => {
  let state = props.store.getState();

  
  let onPostChange = (newPostElement) => {
    let action = updateNewPostTextActionCreator(newPostElement.current.value);
    props.store.dispatch(action);
  }

  let addPost = () => {
    let text = state.profilePage.newPostText;
    let action = addPostActionCreator(text);
    props.store.dispatch(action);
  }
  
  return (<Posts onPostChange={onPostChange}
                 addPost={addPost} 
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>);
};


export default PostsContainer;
