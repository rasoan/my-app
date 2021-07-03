import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import { Link } from '@material-ui/core';
import UploaderPhoto from "../../UploaderPhoto";
import Dialog from "../../Dialog/Dialog";



const ProfilePicture = (props) => {
  const {photos, updateProfilePicture} = props;
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const toggleDialog = (flag) => {
      setIsOpenDialog(flag);
  }

  return (
    <div>
      <div className={style.profilePictureContainer}
          onClick={() => toggleDialog(true)}
      >
      <img className={style.image}
           src={photos?.large}
           alt={"user"}/>
      <Link
          component="button"
          variant="body2"
          className={style.uploadFileButton}
      >
        Загрузить фотографию
      </Link>
      </div>
        <Dialog isOpenDialog={isOpenDialog}
                toggleDialog={setIsOpenDialog}
                html={<UploaderPhoto updatePhotoFunction={updateProfilePicture} />}
                />
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