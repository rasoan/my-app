import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {getDialogs, onSendMessageClick} from "../../redux/reducers/dialogs-reducer";

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

export default connect(mapStateToProps, actionCreators)(DialogsPage);