import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

                 
const Profile = (props) => {
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
};


export default Profile;
