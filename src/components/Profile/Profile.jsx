import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
             
const Profile = (props) => {
  
  if (!props.profile) return (<></>);
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo profile={props.profile} />
      <PostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
