import ProfilePage from "./ProfilePage";
import {checkUserOrOwner} from "../../redux/app-reducer";
import {getProfile, getStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    myId: state.auth.userId,
    refreshRequests: state.app.refreshRequests,
    isFetching: state.profilePage.isFetching,
});

const actionCreators = {
    getProfile,
    getStatus,
    checkUserOrOwner,
}
export default connect(mapStateToProps, actionCreators)(ProfilePage);