import React, {useState} from "react";
import {connect} from "react-redux";
import {saveProfile} from "../../../redux/profile-reducer";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionViewMode from "./ProfileDescriptionViewMode";

const ProfileDescriptionContainer = (props) => {
  const {profile, saveProfile, controlPanels} = props;

  const [editMode, setEditMode] = useState(false)
  const toggleSetEditMode = () => {
    let mode = editMode ? false: true;
    setEditMode(mode);
  }
  
  const onSubmit = async (formData) => {
    await saveProfile(formData);
    toggleSetEditMode();
  }

  return (
  <div>
    {editMode ? <ProfileDescriptionEditMode handleProfile={onSubmit}
                                            profile={profile}
                                            initialValues={profile} 
                                            toggleSetEditMode={toggleSetEditMode} />: 
                <ProfileDescriptionViewMode profile={profile}
                                            toggleSetEditMode={toggleSetEditMode}
                                            controlPanels={controlPanels} />}
  </div>
);}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    controlPanels: state.app.controlPanels,
});

const actionCreators = {saveProfile};

export default connect(mapStateToProps, actionCreators)(ProfileDescriptionContainer);