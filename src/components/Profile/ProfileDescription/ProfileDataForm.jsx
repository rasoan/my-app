import React from "react";
import style from "./ProfileDescription.module.scss";
import Contact from "./Contact";
import { Field, reduxForm } from "redux-form";
import {InputDefault, TextareaDefault} from "../../common/FormsControls/FormControls";

const ProfileDataForm = ({handleSubmit, profile}) => {
  return (<form onSubmit={handleSubmit} className={style.ProfileInfoContainer}>
            <button>Сохранить</button>    
            <div>
              <p><b>Fullname</b>
              <Field placeholder={profile.fullName}
                     name={"name"}
                     component={InputDefault}
                     validate={[]} /></p>
              
            </div>
            <div>
              <p><b>Looking for a job</b></p>
              <Field name={"lookingForAJob"}
                     component={InputDefault}
                     validate={[]}
                     type={{type: "checkbox"}} />
            </div>
            <div>
              <p><b>Looking for a job Description</b></p>
                 <Field plaaceholder={profile.lookingForAJobDescription}
                        name={"lookingForAJobDescription"}
                        component={TextareaDefault}
                        validate={[]} />
            
            </div>
            <div>
              <p><b>About me:</b></p>
                 <Field plaaceholder={profile.aboutMe}
                        name={"aboutMe"}
                        component={TextareaDefault}
                        validate={[]} />
            </div>
          </form>);
}

const ProfileDataFormRedux = reduxForm({form: 'aboutMe'},)(ProfileDataForm);

export default ProfileDataFormRedux;

/*
            <div>
              <p><b>Contacts:</b> <ul>{Object.keys(profile.contacts).map(key => {
                return <li key={key}>
                          <Contact  contactTitle={key} contactValue={profile.contacts[key]} />
                       </li>
              })}</ul></p>
            </div>
*/