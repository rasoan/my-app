import React from "react";
import style from "./ProfileDescription.module.scss";



const Contact = ({contactTitle, contactValue}) => {
  return (<div>
           <p><b>{contactTitle}:</b> {contactValue}</p>
         </div>);
}

export default Contact;