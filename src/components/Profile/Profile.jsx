import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreloaderServerUpload from '../Preloader/PreloaderServerUpload';
             
const Profile = ({profile, isFetching}) => {
  if (isFetching) return (<PreloaderServerUpload/>);
  if (!profile) return <></> 
  return (
    <div className={style.ProfileContainer}>
      <ProfileInfo profile={profile} />
      <PostsContainer profile={profile} />
    </div>
  );
};

export default Profile;
