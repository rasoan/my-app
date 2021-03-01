import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => { 
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo />
      <Posts posts={props.posts}
             addPost={props.addPost}
             newPostText={props.newPostText}
             onPostChange={props.onPostChange} />
    </div>
  );
};


Profile.propTypes = {
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  countLikes: PropTypes.string,
};
export default Profile;
