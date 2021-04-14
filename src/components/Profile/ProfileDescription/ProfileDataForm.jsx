import React from "react";
import style from "./ProfileDescription.module.scss";
import { useForm } from "react-hook-form";

export const ProfileDataForm = ({handleProfile, profile}) => {
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
              <p><b>Contacts:</b> <ul>{Object.keys(profile.contacts).map(key => {
                return <li key={key}>
                          <p><b>{key}</b></p>
                          <input {...register(`contacts.${key}`, {pattern: new RegExp("[http]")})} />
                       </li>
              })}</ul></p>
            </div>
          </form>);
}