import React from "react";
import style from "./Dialogs.module.scss";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {TextareaDefault} from "../common/FormsControls/FormControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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

const MessageFormRedux = reduxForm({form: 'message'},)(MessageForm);



const Dialogs = (props) => {
  let dialogsData= props.dialogsData;
  
  dialogsData = dialogsData.map((element) => (
    <DialogItem name={element.name} id={element.id} />
  ));

  let messagesData= props.messages; 
  messagesData = messagesData.map((element) => (
    <Message message={element.message} />
  ));

  let sendMessage = (formData) => {
    props.onSendMessageClick(formData.message);
  }
  
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsData}</div>
      <div className={style.messages}>
        <div>{messagesData}</div>
        <div>
          <MessageFormRedux onSubmit={sendMessage} />
        </div>
      </div>
    </div>
  );
};





export default Dialogs;