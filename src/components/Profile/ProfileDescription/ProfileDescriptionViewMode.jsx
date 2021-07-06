import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import Status from "../Status";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        height: 'min-content',
    },
    setEditModeButton: {
        margin: "10px 0",
        backgroundColor: "#edeef0",
        color: "black",
        fontWeight: "normal",
        '&:hover': {
            backgroundColor: "#dfe1e4",
        }
    }
});

const ProfileDescriptionViewMode = (props) => {
    const {profile} = props;
    const classes = useStyles();
    return (<>
            <Box p={2} m={2} className={classes.root}>
            <div>
                <p><strong>{profile.fullName}</strong></p>
                <Status/>
                <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</p>
            </div>
            {profile.lookingForAJob &&
            <div>
                <p>{profile.lookingForAJobDescription}</p>
            </div>}
            <div>
                <p><b>About me:</b> {profile.aboutMe}</p>
            </div>
            <div>
                <b>Contacts:</b>
                <ul>{profile?.contacts && Object.keys(profile.contacts).map((key, i) => {
                    return <li key={i + key}>
                        <b>{key}:</b> {profile.contacts[key]}
                    </li>
                })}</ul>
            </div>
        </Box>
    </>);
}

ProfileDescriptionViewMode.propTypes = {
    profile: PropTypes.object,
    toggleSetEditMode: PropTypes.func,
    ownerPageControlPanel: PropTypes.bool,
}

export default ProfileDescriptionViewMode;