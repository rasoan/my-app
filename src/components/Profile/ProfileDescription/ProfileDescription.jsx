import React, {useState} from "react";
import PropTypes from "prop-types";
import ProfileDescriptionEditMode from "./ProfileDescriptionEditMode";
import ProfileDescriptionViewMode from "./ProfileDescriptionViewMode";

const ProfileDescriptionContainer = (props) => {
    const {profile, saveProfile, ownerPageControlPanel} = props;

    const [editMode, setEditMode] = useState(false);

    const onSubmit = async (formData) => {
        await saveProfile(formData);
        setEditMode(false)
    }

    return (
        <>
            {editMode ? <ProfileDescriptionEditMode handleProfile={onSubmit}
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