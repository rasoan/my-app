import React from "react";
import style from "./ProfileDescription.module.scss";


const ProfileDescription = (props) => {
  return (
    <div className={style.ProfileInfoContainer}>
      <h1>{props.profile.fullName}</h1>
    </div>
  );
};

export default ProfileDescription;