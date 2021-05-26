import {getOwnerPageControlPanelSelector} from "../../../selectors/app-selectors";
import {saveProfile} from "../../../middlewares/profile";
import {connect} from "react-redux";
import ProfileDescriptionContainer from "./ProfileDescription";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    ownerPageControlPanel: getOwnerPageControlPanelSelector(state),
});

const actionCreators = {saveProfile};

export default connect(mapStateToProps, actionCreators)(ProfileDescriptionContainer);