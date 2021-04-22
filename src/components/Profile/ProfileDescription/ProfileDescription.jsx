import React from "react";
import PropTypes from "prop-types";
import style from "./ProfileDescription.module.scss";
import ProfileDataForm from "./ProfileDataForm";

const ProfileDescription = (props) => {
  const {profile, toggleSetEditMode, editMode, saveProfile, controlPanels} = props;

  const onSubmit = async (formData) => {
    await saveProfile(formData);
    toggleSetEditMode();
  }
   
  return (<div>
            {editMode ? <ProfileDataForm handleProfile={onSubmit}
                                         profile={profile}
                                         initialValues={profile} 
                                         toggleSetEditMode={toggleSetEditMode} />: 
                        <ProfileData profile={profile}
                                     toggleSetEditMode={toggleSetEditMode}
                                     controlPanels={controlPanels} />}
          </div>);
};

const ProfileData = ({profile, toggleSetEditMode, controlPanels}) => {
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
                          <Contact  contactTitle={key} contactValue={profile.contacts[key]} />
                       </li>
              })}</ul>
            </div>
          </div>);
}

const Contact = ({contactTitle, contactValue}) => {
  return (<div>
           <p><b>{contactTitle}:</b> {contactValue}</p>
         </div>);
}

ProfileDescription.propTypes = {
  profile: PropTypes.object,
  toggleSetEditMode: PropTypes.func,
  editMode: PropTypes.bool,
  saveProfile: PropTypes.func,
  controlPanels: PropTypes.bool,
}

export default ProfileDescription;