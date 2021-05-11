import ProfilePage from "./ProfilePage";
import {checkUserOrOwner} from "../../middlewares/app";
import {getProfile, getStatus} from "../../middlewares/profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    myId: state.auth.userId,
    isFetching: state.profilePage.isFetching,
});

const actionCreators = {
    getProfile,
    getStatus,
    checkUserOrOwner,
}
export default connect(mapStateToProps, actionCreators)(ProfilePage);