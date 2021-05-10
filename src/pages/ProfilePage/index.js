import ProfilePage from "./ProfilePage";
import {checkUserOrOwner} from "../../redux/reducers/app-reducer";
import {getProfile, getStatus} from "../../redux/reducers/profile-reducer";
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