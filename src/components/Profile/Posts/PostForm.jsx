import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const {addPost} = props;

  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(addPost)}>
      <div>
        <textarea placeholder="Введите ваше пост"
                  {...register("post")} />
      </div>
      <button>Отправить сообщение</button>
    </form>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func,
}

export default PostForm;