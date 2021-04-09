import React, {useState} from "react";
import ProfileDescription from "./ProfileDescription";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profile-reducer";
import {compose} from "redux";

const ProfileDescriptionContainer = ({profile}) => {
  const [editMode, setEditMode] = useState(false)
  const toggleSetEditMode = () => {
    let mode = editMode ? false: true;
    setEditMode(mode)
  }
  

  return (<ProfileDescription profile={profile}
                              toggleSetEditMode={toggleSetEditMode}
                              editMode={editMode} />);
};

let mapStateToProps = (state) => (
  {
    profile: state.profilePage.profile,
  }
)

export default compose(
                       connect(mapStateToProps,{getProfile}),
                      )(ProfileDescriptionContainer);