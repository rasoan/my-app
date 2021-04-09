import React from "react";
import ProfilePicture from "./ProfilePicture";
import {connect} from "react-redux";
import {compose} from "redux";
import {updateProfilePicture} from "../../../redux/profile-reducer";
const fileInputRef = React.createRef();

const ProfilePictureContainer = ({photos, updateProfilePicture, fileInputRef, lookingAtMyProfile}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    updateProfilePicture(fileInputRef.current);
  }
  
  return <ProfilePicture photos={photos} 
                         onSubmit={onSubmit}
                         fileInputRef={fileInputRef}
                         lookingAtMyProfile={lookingAtMyProfile} />;
};



let mapStateToProps = (state) => (
    {
      photos: state.profilePage.profile.photos,
      isFetching: state.profilePage.isFetching,
      fileInputRef: fileInputRef,
      lookingAtMyProfile: state.profilePage.lookingAtMyProfile,
    }
  )
  
  export default compose(
                         connect(mapStateToProps,{updateProfilePicture}),
                        )(ProfilePictureContainer);