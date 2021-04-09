import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import PreloaderServerUpload from '../Preloader/PreloaderServerUpload';
import ProfileDescriptionContainer from "./ProfileDescription/ProfileDescriptionContainer";
import StatusContainer from "../Status/StatusContainer";
import ProfilePictureContainer from "./ProfilePicture/ProfilePictureContainer";
import PostsContainer from "./Posts/PostsContainer";
      
const Profile = ({profile, isFetching}) => {
  if (isFetching) return (<PreloaderServerUpload/>);
  if (!profile) return <></> 
  return (
    <div className={style.ProfileContainer}>
      <div className={style.pictureAndDescriptionContainer}>
        <ProfilePictureContainer />
        <ProfileDescriptionContainer />
      </div>
      <StatusContainer /> 
      <PostsContainer profile={profile} />
    </div>
  );
};

export default Profile;
