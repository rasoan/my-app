import React, {useState} from "react";
import style from "./ProfilePicture.module.scss";

const ProfilePicture = ({photos, onSubmit, fileInputRef, lookingAtMyProfile}) => {

  return (
    <div className={style.profilePictureContainer}>
      <img className={style.image} src={photos.large} />
      {lookingAtMyProfile && <form onSubmit={onSubmit} className={style.profilePictureUpload}>
         <div className={style.profilePictureUploadBlock}>
          <input type="file" ref={fileInputRef} />
          <button type="submit">Загрузить файл</button>
        </div>
      </form>}    
    </div>
  );
};

export default ProfilePicture;