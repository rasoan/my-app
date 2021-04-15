import React, { useEffect } from "react";
import style from "./MessageForm.module.scss";
import {Field, reduxForm} from "redux-form";
import {TextareaDefault} from "../common/FormsControls/FormControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";
const maxLength10 = maxLengthCreator(10);

const MessageForm = ({handleSubmit}) => {

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field placeholder={"Введите ваше сообщение"} 
                 name={"message"}
                 component={TextareaDefault}
                 validate={[required, maxLength10]} />
        </div>
        <button>Отправить сообщение</button>
      </form>
    );
  };

export default reduxForm({form: 'message'},)(MessageForm);