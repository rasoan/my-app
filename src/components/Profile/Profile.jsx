import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostActionCreator} from '../../redux/profile-reducer.js';


const Profile = (props) => {
    
  let addPost = () => {
    let text = props.profilePage.newPostText;
    let action = addPostActionCreator(text);
    props.dispatch(action);
  }
  
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo />
      <Posts posts={props.profilePage.posts}
             addPost={addPost}
             dispatch={props.dispatch}
             newPostText={props.profilePage.newPostText}/>
    </div>
  );
};


Profile.propTypes = {
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  countLikes: PropTypes.string,
};
export default Profile;
