import React from "react";
import Dialogs from "./Dialogs";
import {onNewMessageChange, onSendMessageClick} from "../../redux/dialogs-reducer.js";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
          dialogsData: state.dialogsPage.dialogsData,
          messages: state.dialogsPage.messages,
          newMessageBody: state.dialogsPage.newMessageBody,
          isAuth: state.auth.isAuth,
         }
}
export default compose(
                       withAuthRedirect,
                       connect(mapStateToProps, {onNewMessageChange, onSendMessageClick})
                      )(Dialogs);