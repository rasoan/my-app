import Dialogs from "./Dialogs";
import {onSendMessageClick, getDialogs} from "../../middlewares/dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
          dialogsData: state.dialogsPage.dialogsData,
          messages: state.dialogsPage.messages,
          isAuth: state.auth.isAuth,
          dialogs: state.dialogsPage.dialogs,
       isFetching: state.dialogsPage.isFetching,
         }
}

const actionCreators = {
  onSendMessageClick,
  getDialogs
};

export default compose(
                       withAuthRedirect,
                       connect(mapStateToProps, actionCreators)
                      )(Dialogs);