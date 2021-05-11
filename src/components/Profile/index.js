import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {follow, unfollow} from "../../middlewares/users"
import {startCommunication} from "../../middlewares/dialogs";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getProfileSelector} from "../../selectors/profile-selectors";
import {getContolPanelsSelector} from "../../selectors/app-selectors";
import {getIsAuthSelector} from "../../selectors/auth-selectors";

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    controlPanels: getContolPanelsSelector(state),
    isAuth: getIsAuthSelector(state),
});

const actionCreators = {
    follow,
    unfollow,
    startCommunication,
}

export default compose(
    connect(mapStateToProps, actionCreators),
    withRouter
)(Profile);