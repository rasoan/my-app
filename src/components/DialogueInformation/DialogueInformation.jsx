import React from "react";
import PropTypes from "prop-types";
import style from "./DialogueInformation.module.scss";

const DialogueInformation = (props) => {
  const {header, info} = props;

  return (<div className={style.container}>
            <span className={style.header}>{header}&nbsp;</span>
            <span className={style.information}>{info || 0}</span>
          </div>)
}

DialogueInformation.prototypes = {
  header: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}

export default DialogueInformation;