import React from "react";
import PropTypes from "prop-types";
import style from "../Profile.module.scss";
import Status from "../Status";
import {Box, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
    },
    setEditModeButton: {
        margin: "10px 0",
        backgroundColor: "#edeef0",
        color: "black",
        fontWeight: "normal",
        '&:hover': {
            backgroundColor: "#dfe1e4",
        }
    },
    fullName: {
        marginBottom: 4,
    }
});

const ProfileDescriptionViewMode = (props) => {
    const {profile} = props;
    const classes = useStyles();
    return (<>
        <Box p={2} m={2} width={540} height={446} className={classes.root}>
            <Box mb={2}>
                <Typography className={classes.fullName} variant={"h5"} component={"p"}>{profile.fullName}</Typography>
                <Status/>
            </Box>
            <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</p>
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