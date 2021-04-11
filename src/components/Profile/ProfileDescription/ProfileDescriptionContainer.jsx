import React, {useState} from "react";
import ProfileDescription from "./ProfileDescription";
import {connect} from "react-redux";
import {getProfile, saveProfile} from "../../../redux/profile-reducer";
import {compose} from "redux";

const ProfileDescriptionContainer = ({profile, saveProfile, controlPanels}) => {
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

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    controlPanels: state.app.controlPanels,
  }
)

export default compose(
                       connect(mapStateToProps,{saveProfile}),
                      )(ProfileDescriptionContainer);