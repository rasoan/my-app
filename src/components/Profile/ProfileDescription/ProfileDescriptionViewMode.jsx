import React from "react";
import PropTypes from "prop-types";
import style from "./ProfileDescription.module.scss";

const ProfileDescriptionViewMode = ({profile, toggleSetEditMode, controlPanels}) => {
    return (<div className={style.ProfileInfoContainer}>
              {controlPanels && <button onClick={toggleSetEditMode}>Редактировать</button>}
              <div>
                <p><b>Fullname:</b> {profile.fullName}</p>
                <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes": "No"}</p>
              </div>
              {profile.lookingForAJob && 
              <div>
                <p>{profile.lookingForAJobDescription}</p>
              </div>}
              <div>
                <p><b>About me:</b> {profile.aboutMe}</p>
              </div>
              <div>
                <b>Contacts:</b> <ul>{profile?.contacts && Object.keys(profile.contacts).map((key, i) => {
                  return <li key={i + key}>
                            <b>{key}:</b> {profile.contacts[key]}
                         </li>
                })}</ul>
              </div>
            </div>
);}

export default ProfileDescriptionViewMode;