import React, { useEffect } from "react";
import style from "./Dialogs.module.scss";
import DialogItem from "../DialogItem";


const Dialogs = ({dialogs, getDialogs}) => { 
  useEffect(() => {
    getDialogs();
  }, []);
  
  let dialogsData = dialogs.map((element) => ( <DialogItem userName={element.userName} 
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

export default Dialogs;