import ProfilePage from "./ProfilePage";
import {getProfile, getStatus} from "../../middlewares/profile";
import {connect} from "react-redux";
import {checkOwnerOrQuest} from "../../middlewares/app";

const mapStateToProps = (state) => ({
    myId: state.auth.userId,
    isFetching: state.profilePage.isFetching,
});

const actionCreators = {
    getProfile,
    getStatus,
    checkOwnerOrQuest
}
export default connect(mapStateToProps, actionCreators)(ProfilePage);