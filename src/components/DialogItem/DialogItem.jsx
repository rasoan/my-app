import React from "react";
import style from "./DialogItem.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import DialogueInformation from "../DialogueInformation";
import DEFAULT_PHOTO from "../../images/avatar.png"

const DialogItem = (props) => {
    const {
        userId,
        userName,
        hasNewMessages,
        lastDialogActivityDate,
        lastUserActivityDate,
        newMessagesCount,
        photos
    } = props
    let path = "/messages/" + userId;

    return (
        <div className={style.dialogItemContainer}>
            <NavLink to={path} className={style.dialogLink}>
                <img className={style.userImg}
                     src={photos.small || DEFAULT_PHOTO}
                     alt="user"/>
                <p>{userName}</p>
                <div className={style.containerInfo}>
                    <DialogueInformation header={'Новых сообщений'}
                                         info={newMessagesCount}/>
                    <DialogueInformation header={'Есть новые сообщения'}
                                         info={hasNewMessages}/>
                    <DialogueInformation header={'Последнее сообщение'}
                                         info={lastDialogActivityDate}/>
                    <DialogueInformation header={'Был онлайн'}
                                         info={lastUserActivityDate}/>
                </div>
            </NavLink>
        </div>
    );
};

DialogItem.propTypes = {
    userId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    hasNewMessages: PropTypes.bool.isRequired,
    lastDialogActivityDate: PropTypes.string.isRequired,
    lastUserActivityDate: PropTypes.string.isRequired,
    newMessagesCount: PropTypes.number.isRequired,
    photos: PropTypes.object.isRequired,
};

export default DialogItem;