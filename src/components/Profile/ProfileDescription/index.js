import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {saveProfile} from "../../../redux/profile-reducer";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionViewMode from "./ProfileDescriptionViewMode";

const ProfileDescriptionContainer = (props) => {
  const {profile, saveProfile, controlPanels} = props;

  const [editMode, setEditMode] = useState(false);
  
  const onSubmit = async (formData) => {
    await saveProfile(formData);
    setEditMode(false);
  }

  return (
  <>
    {editMode ? <ProfileDescriptionEditMode handleProfile={onSubmit}
                                            profile={profile}
                                            initialValues={profile} />: 
                <ProfileDescriptionViewMode profile={profile}
                                            setEditMode={setEditMode}
                                            controlPanels={controlPanels} />}
  </>
);}

ProfileDescriptionContainer.propTypes = {
  profile: PropTypes.object,
  saveProfile: PropTypes.func,
  controlPanels: PropTypes.bool,
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    controlPanels: state.app.controlPanels,
});

const actionCreators = {saveProfile};

export default connect(mapStateToProps, actionCreators)(ProfileDescriptionContainer);