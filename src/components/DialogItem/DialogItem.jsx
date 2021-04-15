import React from "react";
import style from "./DialogItem.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import DialogueInformation from "../DialogueInformation";

const DialogItem = (props) => {
  const {userId, userName, hasNewMessages, lastDialogActivityDate, lastUserActivityDate, newMessagesCount, photos} = props;

  let path = "/messages/" + userId;
  const deleteDialog = (dialogId) => {
    console.log("удалить диалог ", dialogId);
  }
  return (
    <div className={style.dialogItemContainer}>
      <NavLink to={path} className={style.dialogLink}>
        <img className={style.userImg} src={photos.small} />
        <p>{userName}</p>
        <div className={style.containerInfo}>
          <DialogueInformation header={'Новых сообщений'}
                               info={hasNewMessages} />
          <DialogueInformation header={'Последнее сообщение'}
                               info={lastDialogActivityDate} />
          <DialogueInformation header={'Был онлайн'}
                               info={lastUserActivityDate} />
        </div>
      </NavLink>
    </div>
  );
};

DialogItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DialogItem;
