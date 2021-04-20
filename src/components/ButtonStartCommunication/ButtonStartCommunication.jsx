import React from "react";
import PropTypes from "prop-types";

const ButtonStartCommunication = (props) => {
  const {startCommunication, userId} = props;

  return (<button onClick={() => startCommunication(userId)}>
            Начать диалог
          </button>);
};

ButtonStartCommunication.propTypes = {
  startCommunication: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ButtonStartCommunication;