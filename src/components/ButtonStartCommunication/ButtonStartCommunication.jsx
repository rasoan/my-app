import React from "react";
import style from "./ButtonStartCommunication.module.scss";
//import PropTypes from "prop-types";

const ButtonStartCommunication = ({startCommunication, userId}) => {

  return (<div>
           <button onClick={() => startCommunication(userId)}>Начать диалог</button>
         </div>);
};

// buttonFollowUnfollow.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default ButtonStartCommunication;
