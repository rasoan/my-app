import React, {useState} from "react";
import PropTypes from "prop-types";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionViewMode from "./ProfileDescriptionViewMode";
const ProfileDescriptionContainer = (props) => {
    const {profile, ownerPageControlPanel, editMode, setEditMode, onSubmitProfileInfo} = props;

    return (
        <>

            {editMode ? <ProfileDescriptionEditMode onSubmitProfileInfo={onSubmitProfileInfo}
                                                    setEditMode={setEditMode}
                                                    profile={profile}
                                                    initialValues={profile} />:
                <ProfileDescriptionViewMode profile={profile}
                                            setEditMode={setEditMode}
                                            ownerPageControlPanel={ownerPageControlPanel} />}
        </>
    );}

ProfileDescriptionContainer.propTypes = {
    profile: PropTypes.object,
    saveProfile: PropTypes.func,
    controlPanels: PropTypes.bool,
}

export default ProfileDescriptionContainer;