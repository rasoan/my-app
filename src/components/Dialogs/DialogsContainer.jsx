import React from "react";
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
  return (<Dialogs dialogsPage={props.dialogsPage}
                   dispatch={props.dispatch} />);
};

export default DialogsContainer;