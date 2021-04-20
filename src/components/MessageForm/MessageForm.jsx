import PropTypes from "prop-types";
import React from "react";
import style from "./MessageForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const MessageForm = (props) => {
  const {handleSendMessage} = props;
  const validationSchema = Yup.object().shape({
    message: Yup.string()
                .required('Нельзя отправить пустое сообщение!')
                .max(100, 'Максимум 100 символов'),
  });

  const { register, formState, handleSubmit } = useForm({
      mode: 'onBlur',
      resolver: yupResolver(validationSchema)
  });

  const {errors, touchedFields} = formState;


    return (
        <form onSubmit={handleSubmit(handleSendMessage)}>
          <div>
            <textarea className={errors.message && style.inCorrect ||touchedFields.login && style.correct }
                      {...register("message")} />
                      {errors.message && <p>{errors.message.message}</p>}
          </div>
          <button>Отправить сообщение</button>
        </form>
      );
}

MessageForm.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
}

export default MessageForm;