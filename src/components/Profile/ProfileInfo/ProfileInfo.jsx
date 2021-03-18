import React from "react";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {

  return (
    <div className={style.ProfileInfoContainer}>
      <h1>{props.profile.fullName}</h1>
      <img
          className={style.image}
          src={props.profile.photos.large}
        ></img>
    </div>
  );
};

export default ProfileInfo;