import React from "react";
import PropTypes from "prop-types";
import ProfilePicture from "./ProfilePicture";
import {connect} from "react-redux";
import {updateProfilePicture} from "../../../middlewares/profile";
import {getOwnerPageControlPanelSelector} from "../../../selectors/app-selectors";

const fileInputRef = React.createRef();

const ProfilePictureContainer = (props) => {
    const {photos, updateProfilePicture, fileInputRef, ownerPageControlPanel} = props;

    const onSubmit = (event) => {
        event.preventDefault();
        updateProfilePicture(fileInputRef.current);
    }

    return <ProfilePicture photos={photos}
                           onSubmit={onSubmit}
                           fileInputRef={fileInputRef}
                           ownerPageControlPanel={ownerPageControlPanel}/>;
};

ProfilePictureContainer.propTypes = {
    photos: PropTypes.object,
    updateProfilePicture: PropTypes.func,
    fileInputRef: PropTypes.object,
    ownerPageControlPanel: PropTypes.bool,
}

let mapStateToProps = (state) => (
    {
        photos: state.profilePage.profile.photos,
        isFetching: state.profilePage.isFetching,
        fileInputRef: fileInputRef,
        ownerPageControlPanel: getOwnerPageControlPanelSelector(state),
    }
)

const actionCreators = {updateProfilePicture};

export default connect(mapStateToProps, actionCreators)(ProfilePictureContainer);