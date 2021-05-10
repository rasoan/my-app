import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {follow, unfollow} from "../../redux/users-reducer"
import {startCommunication} from "../../redux/dialogs-reducer"
import {withRouter} from "react-router";
import {compose} from "redux";
import {getProfileSelector} from "../../redux/profile-selectors";
import {getContolPanelsSelector} from "../../redux/app-selectors";
import {getIsAuthSelector} from "../../redux/auth-selectors";

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