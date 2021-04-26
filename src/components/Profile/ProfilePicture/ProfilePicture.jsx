import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";

const ProfilePicture = (props) => {
  const {photos, onSubmit, fileInputRef, controlPanels} = props;

  return (
    <div className={style.profilePictureContainer}>
      <img className={style.image}
           src={photos?.large}
           alt={"user"}/>
      {controlPanels && <form onSubmit={onSubmit} className={style.profilePictureUpload}>
         <div className={style.profilePictureUploadBlock}>
          <input type="file" ref={fileInputRef} />
          <button type="submit">Загрузить файл</button>
        </div>
      </form>}    
    </div>
  );
};

ProfilePicture.propTypes = {
  photos: PropTypes.object,
  onSubmit: PropTypes.func,
  fileInputRef: PropTypes.object,
  controlPanels: PropTypes.bool,
}

export default ProfilePicture;