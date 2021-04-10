import React from "react";
import style from "./ProfileDescription.module.scss";
import { Field, reduxForm } from "redux-form";
import {InputDefault} from "../../common/FormsControls/FormControls";

export const Contact = ({contactTitle, contactValue}) => {
  return (<div>
           <p><b>{contactTitle}:</b> {contactValue}</p>
         </div>);
}

export const ContactForm = ({contactTitle, contactValue}) => {
  return (<div>
           <p><b>{contactTitle}:</b> {contactValue}</p>
           <Field name={"contacts." + contactTitle}
                  component={InputDefault} />
         </div>);
}
