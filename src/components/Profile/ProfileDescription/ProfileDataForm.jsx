import React from "react";
import style from "./ProfileDescription.module.scss";
import {ContactForm} from "./Contact";
import { Field, reduxForm } from "redux-form";
import {InputDefault, TextareaDefault, InputCheckbox} from "../../common/FormsControls/FormControls";

const ProfileDataForm = ({handleSubmit, profile}) => {
  return (<form onSubmit={handleSubmit} className={style.ProfileInfoContainer}>
            <button>Сохранить</button>    
            <div>
              <p><b>Fullname</b>
              <Field name={"fullName"}
                     component={InputDefault}
                     validate={[]} /></p>
              
            </div>
            <div>
              <p><b>Looking for a job</b></p>
              <Field name={"lookingForAJob"}
                     id={"lookingForAJob"}
                     component={InputCheckbox} />
            </div>
            <div>
              <p><b>Looking for a job Description</b></p>
                 <Field name={"lookingForAJobDescription"}
                        component={TextareaDefault}
                        validate={[]} />
            
            </div>
            <div>
              <p><b>About me:</b></p>
                 <Field name={"aboutMe"}
                        component={TextareaDefault}
                        validate={[]} />
            </div>
            <div>
              <p><b>Contacts:</b> <ul>{Object.keys(profile.contacts).map(key => {
                return <li key={key}>
                          <ContactForm  contactTitle={key} contactValue={profile.contacts[key]} />
                       </li>
              })}</ul></p>
            </div>
          </form>);
}

const ProfileDataFormRedux = reduxForm({form: 'aboutMe'},)(ProfileDataForm);

export default ProfileDataFormRedux;