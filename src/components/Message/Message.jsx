import React from "react";
import style from "./Message.module.scss";
import PropTypes from "prop-types";

const Message = (props) => {
  return (
    <div className={style.MessageContainer}>
      {props.message}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
