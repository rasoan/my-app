import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import { useForm } from "react-hook-form";

const ProfileDataForm = (props) => {
  const {handleProfile, profile} = props;

  const { register, handleSubmit } = useForm({
    defaultValues: {...profile},
  });

  return (<form onSubmit={handleSubmit(handleProfile)} className={style.ProfileInfoContainer}>
            <button>Сохранить</button>
            <div>
              <b>Fullname</b>
              <input type="text" {...register("fullName")} />
            </div>
            <div>
              <p><b>Looking for a job</b></p>
              <input type="checkbox" {...register("lookingForAJob")} />
            </div>
            <div>
              <p><b>Looking for a job Description</b></p>
              <textarea {...register("lookingForAJobDescription")} />
            </div>
            <div>
              <p><b>About me:</b></p>
              <textarea {...register("aboutMe")} />
            </div>
            <div>
              <div><b>Contacts:</b> <ul>{Object.keys(profile.contacts).map(key => {
                return <li key={key}>
                          <p><b>{key}</b></p>
                          <input {...register(`contacts.${key}`, {pattern: new RegExp("[http]")})} />
                       </li>
              })}</ul></div>
            </div>
          </form>);
}

ProfileDataForm.propTypes = {
  handleProfile: PropTypes.func,
  profile: PropTypes.object,
}

export default ProfileDataForm;