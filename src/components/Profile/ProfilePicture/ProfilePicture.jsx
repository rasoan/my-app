import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import { Link } from '@material-ui/core';
import UploaderPhoto from "../../UploaderPhoto";
import Dialog from "../../Dialog/Dialog";

const ProfilePicture = (props) => {
  const {photos, updateProfilePicture, ownerPageControlPanel} = props;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [messageSubmitPhotoResult, setMessageSubmitPhotoResult] = useState(null);
  const toggleDialog = (flag) => {
      setIsOpenDialog(flag);
  }

  const onClickUpdatePhoto = async (photo) => {
      const result = await updateProfilePicture(photo);
      if (result) {
          setIsOpenDialog(false);
          setMessageSubmitPhotoResult(null);
      }
      else {
          console.log("error")
          setMessageSubmitPhotoResult("Возникла ошибка и фотография не обновлена.")
      }
  }

  return (
    <div>
      <div className={`${style.profilePictureContainer} ${ownerPageControlPanel && style.profilePictureContainerHoverEffect}`}
          onClick={ownerPageControlPanel ? () => toggleDialog(true): null}
      >
      <img className={style.image}
           src={photos?.large}
           alt={"user"}/>
          {ownerPageControlPanel && <Link
          component="button"
          variant="body2"
          className={style.uploadFileButton}
      >
        Загрузить фотографию
      </Link>}
      </div>
        <Dialog isOpenDialog={isOpenDialog}
                toggleDialog={setIsOpenDialog}
                dialogTittle={"Загрузка новой фотографии"}
                dialogContent={<UploaderPhoto updatePhotoFunction={onClickUpdatePhoto}
                                              messageSubmitPhotoResult={messageSubmitPhotoResult} />}
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