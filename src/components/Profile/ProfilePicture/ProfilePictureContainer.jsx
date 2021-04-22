import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "./ProfilePicture";
import {connect} from "react-redux";
import {compose} from "redux";
import {updateProfilePicture} from "../../../redux/profile-reducer";
const fileInputRef = React.createRef();

const ProfilePictureContainer = (props) => {
  const {photos, updateProfilePicture, fileInputRef, controlPanels} = props;

  const onSubmit = (event) => {
    event.preventDefault();
    updateProfilePicture(fileInputRef.current);
  }
  
  return <ProfilePicture photos={photos} 
                         onSubmit={onSubmit}
                         fileInputRef={fileInputRef}
                         controlPanels={controlPanels} />;
};

ProfilePictureContainer.propTypes = {
  photos: PropTypes.object,
  updateProfilePicture: PropTypes.func,
  fileInputRef: PropTypes.object,
  controlPanels: PropTypes.bool,
}

let mapStateToProps = (state) => (
    {
      photos: state.profilePage.profile.photos,
      isFetching: state.profilePage.isFetching,
      fileInputRef: fileInputRef,
      controlPanels: state.app.controlPanels,
    }
  )

const actionCreators = {updateProfilePicture};
  
  export default connect(mapStateToProps,actionCreators)(ProfilePictureContainer);