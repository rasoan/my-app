import React from "react";
import style from "./Profile.module.scss";
import PropTypes from "prop-types";
import ProfileDescription from "./ProfileDescription";
import Status from "./Status";
import ProfilePicture from "./ProfilePicture";
import Posts from "./Posts";
import ButtonFollowUnfollow from "../ButtonFollowUnfollow";
import ButtonStartCommunication from "../ButtonStartCommunication";
      
const Profile = (props) => {
  const {profile, follow, unfollow,
         startCommunication, questPageControlPanel, isAuth} = props;

  if (!profile) return <></>;
  
  return (
    <div className={style.ProfileContainer}>
      <div className={style.pictureAndDescriptionContainer}>
        <ProfilePicture />
        <ProfileDescription />
      </div>
      <Status /> 
      {questPageControlPanel && <ButtonFollowUnfollow follow={follow}
                                                         unfollow={unfollow}
                                                         friend={""}
                                                         userId={profile.userId} />}
      {questPageControlPanel && <ButtonStartCommunication startCommunication={startCommunication}
                                                             userId={profile.userId} />}
      <Posts profile={profile} />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  startCommunication: PropTypes.func.isRequired,
  controlPanels: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

export default Profile;