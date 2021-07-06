import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {follow, unfollow} from "../../middlewares/users"
import {startCommunication} from "../../middlewares/dialogs";
import {withRouter} from "react-router";
import {compose} from "redux";
import {getProfileSelector} from "../../selectors/profile-selectors";
import {
    getContolPanelsSelector,
    getOwnerPageControlPanelSelector,
    getQuestPageControlPanelSelector
} from "../../selectors/app-selectors";
import {getIsAuthSelector} from "../../selectors/auth-selectors";
import {saveProfile} from "../../middlewares/profile";

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    questPageControlPanel: getQuestPageControlPanelSelector(state),
    isAuth: getIsAuthSelector(state),
    ownerPageControlPanel: getOwnerPageControlPanelSelector(state),
});

const actionCreators = {
    follow,
    unfollow,
    startCommunication,
    saveProfile,
}

export default compose(
    connect(mapStateToProps, actionCreators),
    withRouter
)(Profile);