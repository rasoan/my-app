import React, {useState} from "react";
import style from "../Profile.module.scss";
import {Link} from '@material-ui/core';
import UploaderPhoto from "../../UploaderPhoto";
import Dialog from "../../Dialog/Dialog";
import {photosType} from "../../../types/types";

type PropsType = {
    photos: photosType
    updateProfilePicture: (photo: File) => Promise<boolean>
    ownerPageControlPanel: boolean
}

const ProfilePicture: React.FC<PropsType> = ({
                                                 photos,
                                                 updateProfilePicture,
                                                 ownerPageControlPanel
                                             }) => {
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>();
    const [messageSubmitPhotoResult, setMessageSubmitPhotoResult] = useState<string | null>();
    const toggleDialog = (flag: boolean) => {
        setIsOpenDialog(flag);
    }

    const onClickUpdatePhoto = async (photo: File) => {
        const result = await updateProfilePicture(photo);

        if (result) {
            setIsOpenDialog(false);
            setMessageSubmitPhotoResult(null);
        } else {
            console.log("error");
            setMessageSubmitPhotoResult("Возникла ошибка и фотография не обновлена.");
        }
    }

    return (<>
        <div
            className={`${style.profilePictureContainer} ${ownerPageControlPanel && style.profilePictureContainerHoverEffect}`}
            onClick={ownerPageControlPanel ? () => toggleDialog(true) : () => {
            }}
        >
            <img className={style.image}
                 width="300"
                 height="300"
                 src={photos?.large || require("../../../images/avatar.png")}
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
                toggleDialog={toggleDialog}
                dialogTittle={"Загрузка новой фотографии"}
                dialogContent={<UploaderPhoto updatePhotoFunction={onClickUpdatePhoto}
                                              messageSubmitPhotoResult={messageSubmitPhotoResult} />}
        />
    </>);
};

export default ProfilePicture;