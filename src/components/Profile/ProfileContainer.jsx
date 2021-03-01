import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profile-reducer.js';

const ProfileContainer = (props) => {
  let onPostChange = (newPostElement) => {
    let action = updateNewPostTextActionCreator(newPostElement.current.value);
    props.dispatch(action);
  }
    
  let addPost = () => {
    let text = props.profilePage.newPostText;
    let action = addPostActionCreator(text);
    props.dispatch(action);
  }
  
  return (<Profile onPostChange={onPostChange}
                   addPost={addPost}
                   posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText} />);
};


ProfileContainer.propTypes = {
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  countLikes: PropTypes.string,
};
export default ProfileContainer;
