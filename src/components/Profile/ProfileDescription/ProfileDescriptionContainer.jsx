import React, {useState} from "react";
import ProfileDescription from "./ProfileDescription";
import {connect} from "react-redux";
import {saveProfile} from "../../../redux/profile-reducer";

const ProfileDescriptionContainer = (props) => {
  const {profile, saveProfile, controlPanels} = props;

  const [editMode, setEditMode] = useState(false)
  const toggleSetEditMode = () => {
    let mode = editMode ? false: true;
    setEditMode(mode);
  }
  
  return (<ProfileDescription profile={profile}
                              toggleSetEditMode={toggleSetEditMode}
                              editMode={editMode}
                              saveProfile={saveProfile}
                              controlPanels={controlPanels} />);
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    controlPanels: state.app.controlPanels,
});

const actionCreators = {saveProfile};

export default connect(mapStateToProps, actionCreators)(ProfileDescriptionContainer);