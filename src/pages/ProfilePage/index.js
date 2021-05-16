import ProfilePage from "./ProfilePage";
import {getProfile, getStatus} from "../../middlewares/profile";
import {connect} from "react-redux";
import {checkUserOrOwner} from "../../middlewares/app";

const mapStateToProps = (state) => ({
    myId: state.auth.userId,
    isFetching: state.profilePage.isFetching,
});

const actionCreators = {
    getProfile,
    getStatus,
    checkUserOrOwner
}
export default connect(mapStateToProps, actionCreators)(ProfilePage);