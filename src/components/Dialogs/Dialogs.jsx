import React, { useEffect } from "react";
import PropTypes from "prop-types";
import style from "./Dialogs.module.scss";
import DialogItem from "../DialogItem";

const Dialogs = (props) => {
  const {dialogs, getDialogs} = props;
  useEffect(() => {
    getDialogs();
  }, []);
  
  let dialogsData = dialogs.map((element, i) => ( <DialogItem key={element.id + " " + i}
                                                              userName={element.userName} 
                                                              userId={element.id}
                                                              hasNewMessages={element.hasNewMessages}
                                                              lastDialogActivityDate={element.lastDialogActivityDate}
                                                              lastUserActivityDate={element.lastUserActivityDate}
                                                              newMessagesCount={element.newMessagesCount}
                                                              photos={element.photos} />));

  return (
    <div className={style.dialogsContainer}>
      {dialogsData}
    </div>
  );
};

Dialogs.prototypes = {
  dialogs: PropTypes.array.isRequired,
  getDialogs: PropTypes.func.isRequired,
}

export default Dialogs;