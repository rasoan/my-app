import React from "react";
import style from "./ProfilePicture.module.scss";
import {InputFile} from "../../../components/common/FormsControls/FormControls";
import styleForm from "../../common/FormsControls/FormControls.module.scss";
import { Field, reduxForm } from "redux-form";

const FileUploadForm = ({handleSubmit, error}) => {


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"Выберите фотографию"}
               name={"profilePicture"}
               component={InputFile}
               type="file" />
      </div>
      <button>Сохранить фотографию профиля</button>
      {error && <div className={styleForm.inCorrectSubmitDataHint}>
        <p>Выберите файл</p>
      </div>}
    </form>
  );
};

const AuthorizationFormRedux = reduxForm({form: 'profilePicture'},)(FileUploadForm);

const ProfilePicture = ({photos}) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={style.ProfileInfoContainer}>
      <img className={style.image} src={photos.large} />
      <AuthorizationFormRedux onSubmit={onSubmit} />
    </div>
  );
};

export default ProfilePicture;

