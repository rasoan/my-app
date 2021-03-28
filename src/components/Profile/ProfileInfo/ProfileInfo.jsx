import React from "react";
import style from "./ProfileInfo.module.scss";
import StatusContainer from "../../Status/StatusContainer";


const ProfileInfo = (props) => {
  return (
    <div className={style.ProfileInfoContainer}>
      <h1>{props.profile.fullName}</h1>
      <img className={style.image} src={props.profile.photos.large} />
      <StatusContainer placeholder={"Привет мир"} />
    </div>
  );
};

export default ProfileInfo;
