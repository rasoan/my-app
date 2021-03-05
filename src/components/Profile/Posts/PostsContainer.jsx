import React from "react";
import Posts from "./Posts";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer.js';
import StoreContext from "../../../StoreContext";
import store from "../../../redux/redux-store";

const PostsContainer = (props) => {
  return (
      <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState();

            let onPostChange = (newPostElement) => {
              let action = updateNewPostTextActionCreator(newPostElement.current.value);
              store.dispatch(action);
            }
            
            let addPost = () => {
              let text = state.profilePage.newPostText;
              let action = addPostActionCreator(text);
              store.dispatch(action);
            }
         
            return <Posts onPostChange={onPostChange}
                          addPost={addPost} 
                          newPostText={state.profilePage.newPostText}
                          posts={state.profilePage.posts} />
          }
        }
      </StoreContext.Consumer>);
};


export default PostsContainer;
