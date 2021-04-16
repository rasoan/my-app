import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import PreloaderServerUpload from '../Preloader/PreloaderServerUpload';
import ProfileDescriptionContainer from "./ProfileDescription/ProfileDescriptionContainer";
import StatusContainer from "../Status/StatusContainer";
import ProfilePictureContainer from "./ProfilePicture/ProfilePictureContainer";
import PostsContainer from "./Posts/PostsContainer";
import ButtonFollowUnfollow from "../ButtonFollowUnfollow";
import ButtonStartCommunication from "../ButtonStartCommunication";
      
const Profile = ({profile, isFetching, follow, unfollow, startCommunication, controlPanels, isAuth}) => {
  if (isFetching) return (<PreloaderServerUpload/>);
  if (!profile) return <></> 
  
  return (
    <div className={style.ProfileContainer}>
      <div className={style.pictureAndDescriptionContainer}>
        <ProfilePictureContainer />
        <ProfileDescriptionContainer />
      </div>
      <StatusContainer /> 
      {!controlPanels && isAuth && <ButtonFollowUnfollow follow={follow}
                                                         unfollow={unfollow}
                                                         friend={undefined}
                                                         userId={profile.userId} />}
      {!controlPanels && isAuth && <ButtonStartCommunication startCommunication={startCommunication}
                                                             userId={profile.userId} />}
      <PostsContainer profile={profile} />
    </div>
  );
};

export default Profile;