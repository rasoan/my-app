import React from "react";
import style from "./ProfileDescription.module.scss";
import ProfileDataForm from "./ProfileDataForm"

const ProfileDescription = ({profile, toggleSetEditMode, editMode, saveProfile}) => {
  const onSubmit = async (formData) => {
    await saveProfile(formData);
    toggleSetEditMode();
  } 
  return (<div>
            {editMode ? <ProfileDataForm onSubmit={onSubmit}
                                         profile={profile}
                                         initialValues={profile} 
                                         toggleSetEditMode={toggleSetEditMode} />: 
                        <ProfileData profile={profile}
                                     toggleSetEditMode={toggleSetEditMode} />}
          </div>);
};

const ProfileData = ({profile, toggleSetEditMode}) => {
  return (<div className={style.ProfileInfoContainer}>
            <button onClick={toggleSetEditMode}>Редактировать</button>
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
              <p><b>Contacts:</b> <ul>{Object.keys(profile.contacts).map(key => {
                return <li key={key}>
                          <Contact  contactTitle={key} contactValue={profile.contacts[key]} />
                       </li>
              })}</ul></p>
            </div>
          </div>);
}



const Contact = ({contactTitle, contactValue}) => {
  return (<div>
           <p><b>{contactTitle}:</b> {contactValue}</p>
         </div>);
}

export default ProfileDescription;