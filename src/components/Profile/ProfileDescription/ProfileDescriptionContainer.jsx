import React, {useState} from "react";
import ProfileDescription from "./ProfileDescription";
import {connect} from "react-redux";
import {getProfile, saveProfile} from "../../../redux/profile-reducer";
import {compose} from "redux";

const ProfileDescriptionContainer = ({profile, saveProfile, lookingAtMyProfile}) => {
  const [editMode, setEditMode] = useState(false)
  const toggleSetEditMode = () => {
    let mode = editMode ? false: true;
    setEditMode(mode);
  }
  

  return (<ProfileDescription profile={profile}
                              toggleSetEditMode={toggleSetEditMode}
                              editMode={editMode}
                              saveProfile={saveProfile}
                              lookingAtMyProfile={lookingAtMyProfile} />);
};

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
    lookingAtMyProfile: state.profilePage.lookingAtMyProfile,
  }
)

export default compose(
                       connect(mapStateToProps,{saveProfile}),
                      )(ProfileDescriptionContainer);